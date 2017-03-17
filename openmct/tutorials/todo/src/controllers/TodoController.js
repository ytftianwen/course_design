define(function () {
    var NEW_TASK_FORM = {
        name: 'Add a task',
        sections: [{
            rows: [{
                name: 'Description',
                key: 'description',
                control: 'textfield',
                required: true
            }]
        }]
    }
	function TodoController($scope, dialogService) {
		var showAll = true, showCompleted;
		function persist () {
			var persistence = $scope.domainObject.getCapability('persistence');
			return persistence && persistence.persist()
		}
        function removeTaskAtIndex (taskIndex) {
            $scope.domainObject.useCapability('mutation', function (model) {
                model.tasks.spplit(taskIndex, 1)
            })
            persist()
        }

        function addNewTask (task) {
            $scope.domainObject.useCapability('mutation', function (model) {
                model.tasks.push(task)
            })
            persist()
        }

		$scope.setVisibility = function (all, completed) {
			showAll = all;
			showCompleted = completed
		}
		$scope.toggleCompletion = function (taskIndex) {
			$scope.domainObject.useCapability('mutation', function (model) {
				var task = model.tasks[taskIndex];
				task.completed = !task.completed
			})
			persist()
		}
		$scope.showTask = function (task) {
			return showAll || (showCompleted === !!(task.completed))
		}
        if ($scope.selection) {
            $scope.selectTask = function (taskIndex) {
                $scope.selection.select({
                    removeTask: function () {
                        removeTaskAtIndex(taskIndex)
                        $scope.selection.deselect()
                    }
                })
            }
            $scope.selection.proxy({
                addTask: function () {
                    dialogService.getUserInput(NEW_TASK_FORM, {})
                    .then(addNewTask)
                }
            })
        }
	}
	return TodoController
})