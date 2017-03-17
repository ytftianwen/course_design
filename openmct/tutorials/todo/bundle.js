define([
    'openmct',
    './src/controllers/TodoController'
], function (
    openmct,
    TodoController
) {
    openmct.legacyRegistry.register("tutorials/todo", {
        "name": "To-do Plugin",
        "description": "Allows creating and editing to-do lists.",
        "extensions":{
         "types": [
            {
              "key": "example.todo",
              "name": "To Do List",
              "cssClass": "icon-check",
              "description": "A list of things that need to be done.",
              "features": ["creation"],
              "model": {
                "tasks": [
                {"description": 'Add a type', "completed": true},
                {"description": 'Add a view'}
                ]
              }
            }
          ],
          'views': [
            {
              'key': 'example.todo',
              'type': 'example.todo',
              'cssClass': 'icon-check',
              'name': 'List',
              'templateUrl': 'templates/todo.html',
              'editabled': true,
              'toolbar': {
                'sections': [
                  {
                    'items': [
                      {
                        'text': 'Add Task',
                        'cssClass': 'icon-plus',
                        'method': 'addTask',
                        'control': 'button'
                      }
                    ]
                  }, {
                    'items': [
                      {
                        'cssClass': 'icon-trash',
                        'method': 'removeTask',
                        'control': 'button'
                      }
                    ]
                  }
                ]
              }
            }
          ],
          'controllers': [
            {
              'key': 'TodoController',
              'implementation': TodoController,
              'depends': ['$scope', 'dialogService']
            }
          ]
        }
    });
});