// declare VARIABLES
var titles = [];
var artists = [];
var	tracks = [];
var images = [];
var websites = [];
var albums = [];
var audioFilesMp3 = [];
var audioFilesOgg =[];
var imageDiv = document.getElementById("cd_images");
var albumCovers = imageDiv.getElementsByTagName('a');
var mp3Source = document.getElementById('mp3-source');
var oggSource = document.getElementById('ogg-source');
var player = document.getElementById('audio-player');
var trackFocus = document.getElementById('track');
var albumFocus = document.getElementById('album');
var artistFocus = document.getElementById('artist');
var imageFocus = document.getElementById('image');
var websiteFocus = document.getElementById('website');
var focusID;

// data to parse
 var albums = [
	 ['images/cd_images/DougMillerCDcover.jpg', 'Regeneration', 'Doug Miller', ['Lighten Up', 'Avenue C', 'Invitation', 'Bye Bye Blackbird'], 'http://originarts.com/recordings/recording.php?TitleID=82505"',['audio/LightenUp_DougMiller.mp3', 'audio/AvenueC_excerpt_DougMiller.mp3', 'audio/Invitation_DougMiller.mp3', 'audio/ByeByeBlackbird_DougMiller.mp3'], ['audio/LightenUp_DougMiller.oga', 'audio/AvenueC_excerpt_DougMiller.oga', 'audio/Invitation_DougMiller.oga', 'audio/ByeByeBlackbird_DougMiller.oga']],
 		['images/cd_images/BigNeighborhoodCDcover.jpg', '11:11', 'Big Neighborhood', ['Anthem for Jolyon Wagg'], 'http://originarts.com/recordings/recording.php?TitleID=82467', ['audio/AnthemForJolyonWagg.mp3'], ['audio/AnthemForJolyonWagg.oga']],
	 ['images/cd_images/ThorntonCreekCover.jpg', 'Different Door', 'Thornton Creek', ['Can\'t Leave Blues', 'Something Without Nothing', 'Emi', 'Docia', 'Chocolate'], 'http://www.thorntoncreek.com/',['audio/cantleaveblues.mp3', 'audio/SomethingWithoutNothing.mp3', 'audio/Emi.mp3', 'audio/Docia.mp3', 'audio/chocolate.mp3'], ['audio/cantleaveblues.oga', 'audio/SomethingWithoutNothing.oga', 'audio/Emi.oga', 'audio/Docia.oga', 'audio/chocolate.oga']],
	 ['images/cd_images/KathyMooreCDcover.jpg', 'Walk on Water', 'The Katherine Moore Situation', ['The Girl Replies', 'The Thrill'], 'https://www.facebook.com/kathy.moore.5872682?fref=browse_search', ['audio/TheGirlReplies.mp3', 'audio/TheThrill_KathyMoore.mp3'], ['audio/TheGirlReplies.oga', 'audio/TheThrill_KathyMoore.oga']],
	 ['images/cd_images/Motel5CDcover.jpg', 'As For You', 'Motel 5', ['Walking on Clouds'], 'https://myspace.com/motel5/music/songs', ['audio/WalkingOnClouds.mp3'], ['audio/WalkingOnClouds.oga']],
	 ['images/cd_images/CDcover_Sophiahat.jpg', 'SophiaHat Presents', 'SophiaHat Studios', ['Caravan', 'Weaver of Dreams', 'Is You Is', 'Cherokee', 'All Blues'], 'http://www.sophiahatstudio.com', ['audio/Caravan.mp3', 'audio/WeaverOfDreams.mp3', 'audio/IsYouIs.mp3', 'audio/Cherokee.mp3', 'audio/BabyGetLost.mp3', 'audio/AllBlues.mp3'], ['audio/Caravan.oga', 'audio/WeaverOfDreams.oga', 'audio/IsYouIs.oga', 'audio/Cherokee.oga', 'audio/BabyGetLost.oga', 'audio/AllBlues.oga']],
	 ['images/cd_images/SteveTreselerCDcover.jpg', 'Resonance', 'Steve Treseler', ['Vina\'s Lullaby', 'Two Not One', 'The Gathering', 'Redemption', 'Palindrome For Roo', 'Naked As We Came'], 'http://stevetres.com/', ['audio/VinasLullaby.mp3', 'audio/TwoNotOne_SteveTreseler.mp3', 'audio/TheGathering_SteveTreseler.mp3', 'audio/Redemption_SteveTreseler.mp3', 'audio/PalindromeForRoo_SteveTreseler.mp3', 'audio/NakedAsWeCame_SteveTreseler.mp3'], ['audio/VinasLullaby.oga', 'audio/TwoNotOne_SteveTreseler.oga', 'audio/TheGathering_SteveTreseler.oga', 'audio/Redemption_SteveTreseler.oga', 'audio/PalindromeForRoo_SteveTreseler.oga', 'audio/NakedAsWeCame_SteveTreseler.oga']],
 ['images/cd_images/captive.jpg', 'Captive', 'Ryan Graves', ['Venom', 'Phoenix', 'Lush', 'Bound'], 'http://www.cdbaby.com/Artist/RyanGraves1', ['audio/Venom.mp3', 'audio/Phoenix.mp3', 'audio/Lush.mp3', 'audio/Bound.mp3'], ['audio/Venom.oga', 'audio/Phoenix.oga', 'audio/Lush.oga', 'audio/Bound.oga']],
	 ['images/cd_images/MayPalmer_MoMay.jpg', 'Mo May', 'May Palmer', ['Stand By Me'], 'http://www.maypalmer.com', ['audio/StandByMe_MayPalmer.mp3'], ['audio/StandByMe_MayPalmer.oga']],
 ['images/cd_images/AnaVelinova.jpg', 'December Wishing', 'Ana Velinova', ['I\'ve Got My Love','Snowfall'], 'http://anavelinova.com', ['audio/AnaVelinovaIveGotMyLove.mp3', 'audio/AnaVelinovaSnowfall.mp3'],['audio/AnaVelinovaIveGotMyLove.mp3', 'audio/AnaVelinovaSnowfall.mp3']],
 ['images/cd_images/HalGalper.jpg', 'Airegin Revisited', 'Hal Galper', ['Embraceable You','Conception'], 'http://www.halgalper.com/', ['audio/HalGalperEmbraceableYou.mp3', 'audio/HalGalperConception.mp3'], ['audio/HalGalperEmbraceableYou.oga', 'audio/HalGalperConception.oga']],
['images/cd_images/JonathanRooke.jpg', 'Incredible Edibles', 'Flip and Fly', ['Sweet Sue','Daphne'], 'http://flipandfly.net', ['audio/FlipAndFlySweetSue.mp3', 'audio/FlipAndFlyDaphne.mp3'], ['audio/FlipAndFlySweetSue.oga', 'audio/FlipAndFlyDaphne.oga']],
['images/cd_images/LanceBuller.jpg', 'New and Improved', 'The Roadstars', ['Lester Leaps In','Joe Avery Blues'], 'http://www.theroadstars.com/', ['audio/RoadstarsLesterLeapsIn.mp3', 'audio/RoadstarsJoeAverysBlues.mp3'], ['audio/RoadstarsLesterLeapsIn.oga', 'audio/RoadstarsJoeAverysBlues.oga']],
['images/cd_images/RayVegaChapterTwo.jpg', 'Chapter Two', 'Ray Vega', ['I Fall In Love Too Easily','Freedom'], 'http://truthrevolutionrecords.com/albums/rayvega-chapterii', ['audio/RayVegaFallInLoveTooEasily.mp3', 'audio/RayVegaFreedom.mp3'], ['audio/RayVegaFallInLoveTooEasily.oga', 'audio/RayVegaFreedom.oga']],
['images/cd_images/RickMandyke.jpg', 'Turns', 'Rick Mandyck Trio', ['PTO','Cousin It'], 'http://originarts.com/artists/artist.php?Artist_ID=65', ['audio/RickMandyckPTO.mp3', 'audio/RickMandyckCousinIt.mp3'], ['audio/RickMandyckPTO.oga', 'audio/RickMandyckCousinIt.oga']],
['images/cd_images/ThorntonCreek.jpg', 'Fancypants', 'Thornton Creek', ['Way Out West','Wishing Well'], 'http://www.thorntoncreek.com/', ['audio/ThorntonCreekWayOutWest.mp3', 'audio/ThorntonCreekWishingWell.mp3'], ['audio/ThorntonCreekWayOutWest.oga', 'audio/ThorntonCreekWishingWell.oga']],
['images/cd_images/victorJanusz.jpg', 'Living In a Blue State', 'Victor Janusz', ['Living In a Blue State','Should I Ever Love Again'], 'https://www.facebook.com/victor.janusz', ['audio/VictorJanuszLivingInaBlueState.mp3', 'audio/VictorJanuszShouldIEverLoveAgain.mp3'], ['audio/VictorJanuszLivingInaBlueState.oga', 'audio/VictorJanuszShouldIEverLoveAgain.oga']],
 ];
 albums = shuffle(albums);
//FUNCTIONS



function createImages() {
	//when page loads grab the components
	for (i = 0; i < albums.length; i++) {
		images.push(albums[i][0]);
		titles.push(albums[i][1]);
		artists.push(albums[i][2]);
		if (Array.isArray(albums[i][3])) {
			var artistTracks = [];
			var artistMp3s = [];
			var artistOggs = [];
			for (k=0; k < albums[i][3].length; k++) {
				artistTracks.push(albums[i][3][k]);
				artistMp3s.push(albums[i][5][k]);
				artistOggs.push(albums[i][6][k]);
			}
			tracks.push(artistTracks);
			audioFilesMp3.push(artistMp3s);
			audioFilesOgg.push(artistOggs);
		}else{
			tracks.push(albums[i][3]);
			audioFilesMp3.push(albums[i][5]);
			audioFilesOgg.push(albums[i][6]);
		}
		
				
		websites.push(albums[i][4]);
		
	} 
}
function loadImages(imageHolder) {
	//focus image
	focusID = 0;
	imageFocus.setAttribute('src', images[focusID]);
	artistFocus.innerHTML = artists[focusID];
	createTrackArray();
	albumFocus.innerHTML = titles[focusID]; 
	websiteFocus.setAttribute("href", websites[0]);
	player.load();
	
	//all images
	var output = "";
	for (i = 0; i < imageHolder.length; i++) {
		output = output.concat('<a id="' + [i] + '"   class="audio-samples img-thumbnail" title="  Artist: ' + artists[i]+'| Track: ' + tracks[i] +'| Album: ' + titles[i]  + '"  ><img src="' + images[i] + '" alt="Image -   Artist: ' + artists[i]+'| Track: ' + tracks[i] +'| Album: ' + titles[i]  + '"></a>');
	}
	// place images in the html
	document.getElementById('cd_images').innerHTML = output;
};

function clickTrackTitle() {
	var multTrackFocus = document.getElementById('track').getElementsByTagName('a');
	var count = multTrackFocus.length;
	if (count > 1) {
		document.getElementById('trackTitle').innerHTML = "Tracks: ";
	} else {
		document.getElementById('trackTitle').innerHTML = "Track: ";
	}
	console.log(multTrackFocus, count, multTrackFocus[0]);
	for (i=0; i < count; i++) {
		multTrackFocus[i].onclick = function(){
			var trackId = this.getAttribute('id');
			var trackTitle = this.innerHTML;
			document.getElementById('audio-message').innerHTML = "<i>Now playing: " + trackTitle + "</i>";
			mp3Source.setAttribute("src", audioFilesMp3[focusID][trackId]);
			oggSource.setAttribute("src", audioFilesOgg[focusID][trackId]);
			player.load();
			player.play();
		}
	}
	
}
function createTrackArray(){
	var multTracks = "";
	for (i=0; i < tracks[focusID].length; i++) {
		multTracks = multTracks.concat('<a id="' + i + '"> ' + tracks[focusID][i] +  ' </a>');
	}
	trackFocus.innerHTML = multTracks;
	mp3Source.setAttribute("src", audioFilesMp3[focusID][0]);
	oggSource.setAttribute("src", audioFilesOgg[focusID][0]);
}

// create image output
createImages();
loadImages(images);
console.log(mp3Source);


// Once page is loaded attach listeners
window.onload = function(){
	// attach listeners for track title clicks
	clickTrackTitle();
	
	// create listeners for image clicks
	imageFocus.onclick = function(){
		player.play();
	}
	for(i = 0; i < images.length; i++) {
		albumCovers[i].onclick = function(){
		var id = this.getAttribute("id");
		var image = images[id];
		var track = tracks[id];
		var title = titles[id];
		var artist = artists[id];
		var website = websites[id];
		var trackTitle = tracks[id][0];
		var audioFileMp3 = audioFilesMp3[id][0];
		var audioFileOgg = audioFilesOgg[id][0];
		focusID = id;
		mp3Source.setAttribute("src", audioFileMp3);
		oggSource.setAttribute("src", audioFileOgg);
		player.load();
		player.play();
		document.getElementById('audio-message').innerHTML = "<i>Now playing: " + trackTitle + "</i>";
		console.log(player.currentSrc);
		imageFocus.setAttribute("src", image); 
		artistFocus.innerHTML = artist;
		albumFocus.innerHTML = title;
		trackFocus.innerHTML = track;
		websiteFocus.setAttribute('href', website);
		createTrackArray();
		clickTrackTitle();
		};
	}
	

} 

