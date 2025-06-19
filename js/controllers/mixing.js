myApp.controller('MixingController', ['$scope', function($scope) {
    console.log('Online Mixing page');
    //    update google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'G-PPSLQ4H1YW');
      gtag('event', 'page_view', {
            page_title : 'Online Mixing/Mastering',
            page_location : url
      });
}]);