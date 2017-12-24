// declare globals to hold all the links and all the panel elements
var tabLinks;
var tabPanels;

window.onload = function () 
{
	// set initial panel state
	//listen for clicks on tabs
	
	//when the page loads, grab the <li> elements
	  tabLinks = document.getElementById("tabs").getElementsByTagName("li");

	
	// get all the sections with "panels" div
	  tabPanels = document.getElementById("panels").getElementsByClassName("tab-section");
	
	//activate the _first_ one
	displayPanel(tabLinks[0]);
	
	//attach event listener to links using onclick and onfocus, fire the display Panel function, return false to disable the link
	for (var i = 0; i < tabLinks.length; i++)
	{
			tabLinks[i].onclick = function()
			{
				displayPanel(this);
				return false;
			}
			tabLinks[i].onfocus = function()
			{
				displayPanel(this);
				return false;
			}
	}
	
}

function displayPanel(tabToActivate)
{
	//respond to tab clicks
	//change panel display and active tabs
	
	
	// go through all the <li> elements
	for (var i = 0; i < tabLinks.length; i++)
	{
		if (tabLinks[i] == tabToActivate)
		{
			//change its class to active
			tabLinks[i].classList.add("active");
			tabPanels[i].style.display = "block";
		}else
		{
			//remove the active class link
			tabLinks[i].classList.remove("active");
			tabPanels[i].style.display = "none";
			
			// hide the panel
			
		}
	}
}