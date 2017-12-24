// global variables
var musicClientImages = [];
var corporateClientImages = [];
var clientImages = [];
var clientNames = [];
var musicId = 'music-clients';
var corporateId = 'corporate-clients';

//find overall lengths of client types
var musicClients = document.getElementById(musicId).getElementsByTagName('tr');

var corporateClients = document.getElementById(corporateId).getElementsByTagName('tr');

//get the table data and put in an array
musicClientImages = getClientImages(musicClients, musicId);
corporateClientImages = getClientImages(corporateClients, corporateId);

// reorder arrays
shuffle(musicClientImages);
shuffle(corporateClientImages);

// create new output
musicClientOutput = addClientImages(musicClientImages);
corporateClientOutput = addClientImages(corporateClientImages);

// output new data to appropriate divs
document.getElementById('music-clients').innerHTML = musicClientOutput;
document.getElementById('corporate-clients').innerHTML = corporateClientOutput;

function addClientImages(client_array){
	var output = "";
	for(i=0; i < client_array.length; i++){
		output = output.concat('<tr>' + client_array[i] + '</tr>');
	}
	return output;
}

function getClientImages(clients, id){
	var array = [];
	for(i=0; i < clients.length; i++) {
		var image = document.getElementById(id).getElementsByTagName('tr')[i].innerHTML;
		array.push(image);
	}
	return array;
}