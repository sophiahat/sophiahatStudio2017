myApp.controller('ProjectUploadController', ['$scope', function($scope) {
    console.log('Project Upload form Page');
   $scope.devMode = false;
    //    update google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'G-PPSLQ4H1YW');
      gtag('event', 'page_view', {
            page_title : 'Project Upload Form',
            page_location : url
      });
    
    
}]);