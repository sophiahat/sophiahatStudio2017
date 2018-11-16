myApp.controller('ContactController', ['$scope', function($scope) {
    $scope.message = 'Contact Controller';
    //    update google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'UA-20609405-1', {
            'page_title' : 'Contact',
            'page_location' : url,
            'page_path' : '/#/contact'
      });
}]);//Controller