myApp.controller('ClientController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject) {
    
//    update google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'UA-20609405-1', {
            'page_title' : 'Clients',
            'page_location' : url,
            'page_path' : '/#/clients'
      });
    var clientsRef = firebase.database().ref('/clients');
    var clientsInfo = $firebaseArray(clientsRef);
    $scope.clients = clientsInfo;
}]);