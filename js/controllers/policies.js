myApp.controller('PoliciesController', ['$scope', function($scope) {
//    update google analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'G-PPSLQ4H1YW', {
            page_title : 'Policies',
            page_location : url,
            page_path : '/#!/studio-policy'
      });
}]);//Controller