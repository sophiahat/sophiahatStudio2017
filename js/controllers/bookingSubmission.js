myApp.controller('BookingSubmissionController', ['$scope', '$routeParams', function($scope, $routeParams) {
    console.log($routeParams);
//    update google analytics 
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'G-PPSLQ4H1YW');
      gtag('event', 'page_view', {
            page_title : 'BookingSubmission',
            page_location : url
      });
    
    var routeParameters = $routeParams;
    console.log(routeParameters);
    
    window.addEventListener("load", (event) => {
        console.log($routeParams);
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const entries = urlParams.entries();
        for(let entry of entries) {
            console.log(`${entry[0]}:${entry[1]}`);
        }
    });
    
}]);//Controller