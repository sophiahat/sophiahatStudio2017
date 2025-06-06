myApp.controller('ReviewController', ['$scope', function($scope) {
//    update google analytics
    console.log('review controller');
    window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        var url = window.location.href;
      gtag('config', 'G-PPSLQ4H1YW');
      gtag('event', 'page_view', {
            page_title : 'Reviews',
            page_location : url
      });
//    //    Initialize Masonry
//    const $grid = $('.grid').masonry({
//        itemSelector: '.grid-item',
//        percentPosition: true,
//        columnWidth: 200
//    });
////    layout masonry after each image loads
//    $grid.imagesLoaded().progress(function() {
//        $grid.masonry();
//    });

}]);//    controller

