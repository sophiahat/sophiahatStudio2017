var asideImage = document.getElementById('aside-image');
var imageArray = ['images/SophiaHatControlRoom1.jpg', 'images/SophiaHatControlRoom2a.jpg', 'images/SophiaHatGuitarAndAmp_a.jpg','images/SophiaHatIsoBooth1.jpg', 'images/SophiaHatTracking1_1.jpg', 'images/SophiaHatTracking1Doorway_a.jpg', 'images/SophiaHatTracking2_2Doorway_a.jpg', 'images/SophiaHatTracking2Doorway_a.jpg']
var arrayIndex = 0;

//shuffle array
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	//while there remain elements to shuffle...
	while (currentIndex !== 0) {
		
		//Pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		//swap it with current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function changeImage() {
	asideImage.setAttribute('src', imageArray[arrayIndex]);
	arrayIndex++;
	if(arrayIndex >= imageArray.length) {
		arrayIndex = 0;
	}
}
imageArray = shuffle(imageArray);
setInterval(changeImage, 5000);