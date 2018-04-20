myApp.controller('PortfolioController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject', '$sce', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject, $sce) {
    
    //update google analytics
    var url = window.location.href;
//    gtag('config', 'UA-20609405-2', {
//        'page_path' : '/#/portfolio',
//        'page_location' : url,
//        'page_title' : 'Portfolio'
//    
//    });
    
    // tab management
    $scope.tab = 2;
    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum) {
//        console.log("Tab is" +tabNum);
        return $scope.tab === tabNum;
    };
    $scope.subTab = 3;
    $scope.setSubTab = function(newSubTab) {
        $scope.subTab = newSubTab;  
    };
    $scope.subIsSet = function(subTabNum) {
        return $scope.subTab === subTabNum;
    };
    
    var videosRef = firebase.database().ref('/video');
    var videosInfo = $firebaseArray(videosRef);
    $scope.videos = videosInfo;
    
    var audioRef = firebase.database().ref('/audio');
    var audioInfo = $firebaseArray(audioRef);
    $scope.audio = audioInfo;
    var audioplayer = $('#audio-player');
    
    var albumsRef = firebase.database().ref('/albums');
    var albumsInfo = $firebaseArray(albumsRef);
    albumsInfo.$loaded().then(function(albumsInfo) {
        $scope.albums = albumsInfo;
        console.log(albumsInfo.length + " is the number of albums");
        var randomAlbum = Math.floor(Math.random() * albumsInfo.length);
        console.log('random album choice is: ' + randomAlbum);
        $scope.albumFocus = albumsInfo[0];    
    });
        
    
    function setAutoplayAudio() {
        audioplayer.attr('autoplay', 'autoplay');
    }
    function changeDisplayAudio(audio) {
        setDisplayAudio(audio);
        setAutoplayAudio();
    }
    
    function setDisplayAudio(audio) {
        $scope.displayAudio = audio;
        console.log('In audio stuff');
        
        var link = "https://storage.googleapis.com/chrisspencercreative/audio/" + audio.src;
        
        audioplayer.attr('src', link);  
    }
    $scope.getAlbumInfo = function(album) {
        console.log('get album info engaged');
        console.log(album.title);
        $scope.albumFocus = album;
    }

    
    $scope.filterTracksbyAlbum = function() {
        console.log('filter tracks by album');
        $scope.audioSearchKeyword = $scope.albumFocus.title;
    }
    
    audioInfo.$loaded().then(function(audioInfo) {
        console.log('load complete');
        console.log("length of audio array: " + audioInfo.length);
        var audioArrayLength = audioInfo.length;
        var trackNumber = Math.floor(Math.random() * (audioArrayLength));
        console.log("Random choice is: " + trackNumber);
        
        var rec = audioInfo.$getRecord('audio1');
        console.log('record 1 is:');
        console.log(rec);
        rec = audioInfo[trackNumber];
        console.log('random pick is:');
        console.log(rec);
        
        //$scope.displayAudioSrc = srcLink;
        $scope.displayAudio = $scope.audio[trackNumber];
        console.log("Current Audio is: " + $scope.displayAudio.title);
        setDisplayAudio(rec);
    });
    
    
    
    $scope.getAudioSource = changeDisplayAudio;
                    
    
    $scope.getIframeSource = function(video) {
        var link = 'https://www.youtube.com/embed/' + video.videoId + '?autoplay=1&amp;showinfo=0&amp;rel=0';
        var videoplayer = $('#portfolio-video-player');
        videoplayer.attr('src', link); 
        
        return;
    };
}]);//Controller