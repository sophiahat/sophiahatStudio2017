myApp.controller('ServicesController', ['$scope', function($scope) {
//    update google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'UA-20609405-1', {
            'page_title' : 'Services',
            'page_location' : url,
            'page_path' : '/#!/services'
      });
}]);//Controller