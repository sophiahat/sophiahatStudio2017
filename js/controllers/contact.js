myApp.controller('ContactController', ['$scope', function($scope) {
    $scope.message = 'Contact Controller';
    //    update google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'G-PPSLQ4H1YW');
      gtag('event', 'page_view', {
            page_title : 'Contact',
            page_location : url
      });
}]);//Controller