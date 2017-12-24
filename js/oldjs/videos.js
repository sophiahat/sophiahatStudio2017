// declare VARIABLES
var productionPanels = [];
var panelIDs = [];
var titles = [];
var images = [];
var srcMp4 = [];
var srcWebm = [];
var srcOgv =[];
var videos = [];
var videosDiv = document.getElementById('videos');
var videoimages;
var player = document.getElementById('video-player');
var titleFocus = document.getElementById('title');
var imageFocus = player.getAttribute('poster');
var mp4Src = document.getElementById("mp4-source");
var webmSrc = document.getElementById("webm-source");
var oggSrc = document.getElementById("ogg-source");

// set up the videos array
// id, title, poster image, mp4, webm, ogg
videos = [
	['SD0', 'Sound Design Demo 0', 'video/epsilon3soundtrack2.jpg', 'video/epsilon3soundtrack2.m4v', 'video/epsilon3soundtrack2.webm', 'video/epsilon3soundtrack2.ogv'],
	['SD1', 'Sound Design Demo 1', 'video/Stevinson_CLS.jpg', 'video/Stevinson_CLS.m4v', 'video/Stevinson_CLS.webm', 'video/Stevinson_CLS.ogv'],
	['SD2', 'Sound Design Demo 2', 'video/efile_cls_mix1.jpg', 'video/efile_cls_mix1.m4v', 'video/efile_cls_mix1.webm', 'video/efile_cls_mix1.ogv'],
	['SD3','Sound Design Demo 3', 'video/Aflac_CLS1.jpg', 'video/Aflac_CLS1.m4v', 'video/Aflac_CLS1.webm', 'video/Aflac_CLS1.ogv'],
	['SD4', 'Sound Design Demo 4', 'video/PaintingDay_1_3.jpg', 'video/PaintingDay_1.m4v', 'video/PaintingDay_1_3.webm', 'video/PaintingDay_1_3.ogv'],
	['SD5', 'Sound Design Demo 5', 'video/Sam_1_3.jpg', 'video/Sam_1_3.m4v', 'video/Sam_1_3.webm', 'video/Sam_1_3.ogv'],
	['SD6', 'Sound Design Demo 6', 'video/DeadSpace1.jpg', 'video/DeadSpace1.m4v', 'video/DeadSpace1.webm', 'video/DeadSpace1.ogv'],
	['SD7', 'Sound Design Demo 7', 'video/WinterFight.jpg', 'video/WinterFight.mp4', 'video/WinterFight.webm', 'video/WinterFight.ogv'],
	['SD8', 'Sound Design Demo 8', 'video/FacingWorldswalkthru.jpg', 'video/FacingWorldswalkthru.m4v', 'video/FacingWorldswalkthru.webm', 'video/FacingWorldswalkthru.ogv'],
	['SD9', 'Sound Design Demo 9', 'video/BreachandClear_CLS2.jpg', 'video/BreachandClear_CLS2.m4v', 'video/BreachandClear_CLS2.webm', 'video/BreachandClear_CLS2.ogv'],
	['SD10', 'Sound Design Demo 10', 'video/Century21_homeinvasion_cls-1.jpg', 'video/Century21_homeinvasion_cls.m4v', 'video/Century21_homeinvasion_cls-1.webm', 'video/Century21_homeinvasion_cls-1.ogv'],
	['SD11', 'Sound Design Demo 11', 'video/FancyNancy_BonjourButterfly1.jpg', 'video/FancyNancy_BonjourButterfly1.m4v', 'video/FancyNancy_BonjourButterfly1.webm', 'video/FancyNancy_BonjourButterfly1.ogv']	
];

shuffle(videos);
createComponentArrays();
createVideoImages();

//console.log(images, srcMp4);

window.onload = function() {
	// set initial panel state
	productionPanels = 
		document.getElementById("containers").getElementsByTagName("div");
	console.log(srcMp4[0]);
	mp4Src.setAttribute("src", srcMp4[0]);
	webmSrc.setAttribute("src", srcWebm[0]);
	oggSrc.setAttribute("src", srcOgv[0]);
	player.load();
	player.setAttribute("poster", images[0]);
	titleFocus.innerHTML = titles[0];
	displayProjectPanel(panelIDs[0]);
	
	// listen for clicks on image
	var pageVideoImages = [];
	pageVideoImages = document.getElementById('videos').getElementsByTagName('img');
	for (i=0; i < pageVideoImages.length; i++) {
		pageVideoImages[i].onclick = function(){
			var id = this.getAttribute("id");
			var panID = panelIDs[id];
			console.log(id, panID);
			player.setAttribute("poster", images[id]);
			document.getElementById("mp4-source").setAttribute("src", srcMp4[id]);
			document.getElementById("webm-source").setAttribute("src", srcWebm[id]);
			document.getElementById("ogg-source").setAttribute("src", srcOgv[id]);
			player.load();
			player.play();
//			player.setAttribute("autoplay", "autoplay");
			titleFocus.innerHTML = titles[id];
			displayProjectPanel(panID);
		}
	}
}

function displayProjectPanel(panelToShow) {
	// change panel display
	for (var i = 0; i < panelIDs.length; i++){
		if (panelIDs[i] == panelToShow) {
			console.log(panelIDs[i], panelToShow);
			document.getElementById(panelIDs[i]).style.display = "block";
			
		} else{
			document.getElementById(panelIDs[i]).style.display = "none";
		}
	}
}

function createComponentArrays() {
	for(i=0; i < videos.length; i++){
		panelIDs.push(videos[i][0]);
		titles.push(videos[i][1]);
		images.push(videos[i][2]);
		srcMp4.push(videos[i][3]);
		srcWebm.push(videos[i][4]);
		srcOgv.push(videos[i][5]);
	}
}
function createVideoImages() {
	var output = "";
	for (i=0; i < videos.length; i++){
		output = output.concat('<img id="' + [i] + '"  class="img img-responsive img-thumbnail" src="' + images[i] + '">');
		//
	}
	videosDiv.innerHTML = output;
}

