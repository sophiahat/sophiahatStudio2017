myApp.controller('ClientController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject) {
    var clientsRef = firebase.database().ref('/clients');
    var clientsInfo = $firebaseArray(clientsRef);
    $scope.clients = clientsInfo;
}]);