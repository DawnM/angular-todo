angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/todo-table.html'
  };
});

angular.module('TodoNav',[]).directive('todoNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/todo-nav.html'
  };
});