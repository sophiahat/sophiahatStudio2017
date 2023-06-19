myApp.controller('ClientController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject) {
    
//    update google analytics- Marked for Deletion - redundant
//      window.dataLayer = window.dataLayer || [];
//      function gtag(){dataLayer.push(arguments);}
//      gtag('js', new Date());
//        var url = window.location.href;
//      gtag('config', 'G-PPSLQ4H1YW', {
//            'page_title' : 'Clients',
//            'page_location' : url,
//            'page_path' : '/#!/clients'
//      });
    var clientsRef = firebase.database().ref('/clients');
    var clientsInfo = $firebaseArray(clientsRef);
    $scope.clients = clientsInfo;
}]);