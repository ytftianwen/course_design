/*****************************************************************************
 * Open MCT Web, Copyright (c) 2014-2015, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT Web is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT Web includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define(
    [
        "d3"
    ],
    function (d3) {
        var PADDING = 1;

        /**
         * Controller that renders a horizontal time scale spanning the current bounds defined in the time conductor.
         * Used by the mct-conductor-axis directive
         * @constructor
         */
        function ConductorAxisController(openmct, formatService, conductorViewService, scope, element) {
            // Dependencies
            this.formatService = formatService;
            this.conductor = openmct.conductor;
            this.conductorViewService = conductorViewService;

            this.scope = scope;
            this.initialized = false;

            this.bounds = this.conductor.bounds();
            this.timeSystem = this.conductor.timeSystem();

            //Bind all class functions to 'this'
            Object.keys(ConductorAxisController.prototype).filter(function (key) {
                return typeof ConductorAxisController.prototype[key] === 'function';
            }).forEach(function (key) {
                this[key] = ConductorAxisController.prototype[key].bind(this);
            }.bind(this));

            this.initialize(element);
        }

        /**
         * @private
         */
        ConductorAxisController.prototype.destroy = function () {
            this.conductor.off('timeSystem', this.changeTimeSystem);
            this.conductor.off('bounds', this.changeBounds);
            this.conductorViewService.off("zoom", this.onZoom);
            this.conductorViewService.off("zoom-stop", this.onZoomStop);
        };

        /**
         * @private
         */
        ConductorAxisController.prototype.initialize = function (element) {
            this.target = element[0].firstChild;
            var height = this.target.offsetHeight;
            var vis = d3.select(this.target)
                .append("svg:svg")
                .attr("width", "100%")
                .attr("height", height);

            this.xAxis = d3.axisTop();

            // draw x axis with labels and move to the bottom of the chart area
            this.axisElement = vis.append("g")
                .attr("transform", "translate(0," + (height - PADDING) + ")");

            if (this.timeSystem !== undefined) {
                this.changeTimeSystem(this.timeSystem);
                this.setScale();
            }

            //Respond to changes in conductor
            this.conductor.on("timeSystem", this.changeTimeSystem);
            this.conductor.on("bounds", this.changeBounds);

            this.scope.$on("$destroy", this.destroy);

            this.conductorViewService.on("zoom", this.onZoom);
            this.conductorViewService.on("zoom-stop", this.onZoomStop);
        };

        /**
         * @private
         */
        ConductorAxisController.prototype.changeBounds = function (bounds) {
            this.bounds = bounds;
            if (!this.zooming) {
                this.setScale();
            }
        };

        /**
         * Set the scale of the axis, based on current conductor bounds.
         */
        ConductorAxisController.prototype.setScale = function () {
            var width = this.target.offsetWidth;
            var timeSystem = this.conductor.timeSystem();
            var bounds = this.bounds;

            if (timeSystem.isUTCBased()) {
                this.xScale = this.xScale || d3.scaleUtc();
                this.xScale.domain([new Date(bounds.start), new Date(bounds.end)]);
            } else {
                this.xScale = this.xScale || d3.scaleLinear();
                this.xScale.domain([bounds.start, bounds.end]);
            }

            this.xAxis.scale(this.xScale);

            this.xScale.range([PADDING, width - PADDING * 2]);
            this.axisElement.call(this.xAxis);

            this.msPerPixel = (bounds.end - bounds.start) / width;
        };

        /**
         * When the time system changes, update the scale and formatter used for showing times.
         * @param timeSystem
         */
        ConductorAxisController.prototype.changeTimeSystem = function (timeSystem) {
            this.timeSystem = timeSystem;

            var key = timeSystem.formats()[0];
            if (key !== undefined) {
                var format = this.formatService.getFormat(key);
                var bounds = this.conductor.bounds();

                //The D3 scale used depends on the type of time system as d3
                // supports UTC out of the box.
                if (timeSystem.isUTCBased()) {
                    this.xScale = d3.scaleUtc();
                } else {
                    this.xScale = d3.scaleLinear();
                }

                this.xAxis.scale(this.xScale);

                //Define a custom format function
                this.xAxis.tickFormat(function (tickValue) {
                    // Normalize date representations to numbers
                    if (tickValue instanceof Date) {
                        tickValue = tickValue.getTime();
                    }
                    return format.format(tickValue, {
                        min: bounds.start,
                        max: bounds.end
                    });
                });
                this.axisElement.call(this.xAxis);
            }
        };

        /**
         * The user has stopped panning the time conductor scale element.
         * @event panStop
         */
        /**
         * Called on release of mouse button after dragging the scale left or right.
         * @fires platform.features.conductor.ConductorAxisController~panStop
         */
        ConductorAxisController.prototype.panStop = function () {
            //resync view bounds with time conductor bounds
            this.conductorViewService.emit("pan-stop");
            this.conductor.bounds(this.bounds);
        };

        /**
         * Rescales the axis when the user zooms. Although zoom ultimately results in a bounds change once the user
         * releases the zoom slider, dragging the slider will not immediately change the conductor bounds. It will
         * however immediately update the scale and the bounds displayed in the UI.
         * @private
         * @param {ZoomLevel}
         */
        ConductorAxisController.prototype.onZoom = function (zoom) {
            this.zooming = true;

            this.bounds = zoom.bounds;
            this.setScale();
        };

        /**
         * @private
         */
        ConductorAxisController.prototype.onZoomStop = function (zoom) {
            this.zooming = false;
        };

        /**
         * @event platform.features.conductor.ConductorAxisController~pan
         * Fired when the time conductor is panned
         */
        /**
         * Initiate panning via a click + drag gesture on the time conductor
         * scale. Panning triggers a "pan" event
         * @param {number} delta the offset from the original click event
         * @see TimeConductorViewService#
         * @fires platform.features.conductor.ConductorAxisController~pan
         */
        ConductorAxisController.prototype.pan = function (delta) {
            if (!this.conductor.follow()) {
                var deltaInMs = delta[0] * this.msPerPixel;
                var bounds = this.conductor.bounds();
                var start = Math.floor((bounds.start - deltaInMs) / 1000) * 1000;
                var end = Math.floor((bounds.end - deltaInMs) / 1000) * 1000;
                this.bounds = {
                    start: start,
                    end: end
                };
                this.setScale();
                this.conductorViewService.emit("pan", this.bounds);
            }
        };

        /**
         * Invoked on element resize. Will rebuild the scale based on the new dimensions of the element.
         */
        ConductorAxisController.prototype.resize = function () {
            this.setScale();
        };

        return ConductorAxisController;
    }
);
