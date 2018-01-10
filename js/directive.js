angular.module('TodoDirective', []).directive('todoTable', function() {
  return {
    restrict: 'EA', // EA -> element or attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
});