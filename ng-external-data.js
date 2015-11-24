function TimetableCtrl($scope, $http) {
  $http.get('ng-external-model.json')
    .success(function(data) { $scope.sessions = data.sessions; })
    .error(function(data) { console.log('error') });
}

function BasketCtrl($scope) {
  $scope.description = 'Single ticket';
}
