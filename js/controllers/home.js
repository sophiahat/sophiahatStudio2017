myApp.controller('HomeController', ['$scope', function($scope) {
//    update google analytics
    console.log('home controller');
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'G-PPSLQ4H1YW');
      gtag('event', 'page_view', {
            page_title : 'Home',
            page_location : url
      });

}]);//Controller