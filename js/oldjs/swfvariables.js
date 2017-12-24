// JAVASCRIPT VARS
			// cache buster
			var cacheBuster = "?t=" + Date.parse(new Date());		
			
			// stage dimensions
			var stageW = 560//"100%"; // minimum is 450
			var stageH = 300;//"100%"; // minimum is 260
			
			
			// ATTRIBUTES
		    var attributes = {};
		    attributes.id = 'FlashComponent';
		    attributes.name = attributes.id;
		    
			// PARAMS
			var params = {};
			params.bgcolor = "#333333";
			params.allowfullscreen = "true";
			params.allowScriptAccess = "always";			
			params.wmode = "transparent";
			

		    /* FLASH VARS */
			var flashvars = {};
			
			/// if commented / delete these lines, the component will take the stage dimensions defined 
			/// above in "JAVASCRIPT SECTIONS" section or those defined in the settings xml			
			flashvars.componentWidth = stageW;
			flashvars.componentHeight = stageH;							
			
			/// path to the content folder(where the xml files, images or video are nested)
			/// if you want to use absolute paths(like "http://domain.com/images/....") then leave it empty("")
			flashvars.pathToFiles = "mp3gallery/";
			flashvars.xmlPath = "xml/settings.xml";
			flashvars.contentPath = "xml/mp3gallery.xml";
						
			/** EMBED THE SWF**/
			swfobject.embedSWF("preview.swf"+cacheBuster, attributes.id, stageW, stageH, "9.0.124", "js/expressInstall.swf", flashvars, params);
			if(swfmacmousewheel) swfmacmousewheel.registerObject(attributes.id);