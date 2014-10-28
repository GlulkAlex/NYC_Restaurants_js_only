'use strict';

//* Global scope -- not good
var arrayOf_NY_Restaurants = [],//* apparently - functions goes first ?
		xhrResponseText = '';//* xhr must be in browser cache

//var textAreaText = function showResponceText(serverResponceText) {};

// function loadFromFile(someUrl, callBackFunction, returnedParameter) {
// function loadFromFile(someUrl, returnedParameter) {	
function loadFromFile(someUrl) {	
	var request = new XMLHttpRequest();//,
			//responseText = '';
	
	//* Using: Closure an Function factory (for 'url')
	/*
	var name = "Mozilla"; // name is a local variable created by init
	function displayName() { // displayName() is the inner function, a closure
			alert (name); // displayName() uses variable declared in the parent function    
	}
	displayName();
	*/

	// this.responseTextArray = [];//* this == window
	// console.log('this.responseTextArray: ' + typeof(this.responseTextArray));
	
	request.open('GET', someUrl, true);
	//*request.onreadystatechange = callBackFunction; 
	//* somehow equivalent to '.onload' event
	//* may use anonymous function
	// request.onload = function() {
	//* 'callBackFunction' on '.onload' event 
	request.onload = requestOnload; //* add () or not ?
	//* using outer (for self) scope
	function requestOnload(returnedParameter) {
		if (request.status >= 200 && request.status < 400){
			// var responseTextArray = [];
			
			//* Success!
			console.info('XMLHttpRequest Success!');
			
			//resp = request.responseText;
			//* debugger;//* not responding
			//console.dir(request.responseText);//* to many strings/data
			console.log('request.responseText: ' + typeof(request.responseText));
			console.log('request.responseText.length: ' + request.responseText.length);
			
			// returnedParameter = request.responseText.slice(0, 100);
			// responseTextArray = returnedParameter.split("\n");
			// console.dir(responseTextArray);
			
			/*
			responseTextArray = request.responseText.split("\n");
			console.dir(responseTextArray);*/
			
			/*
			'this' may be replaced by 'return {object};' 
			*/
			// this.responseTextArray = request.responseText.split("\n");
			
			//console.log('returnedParameter.length: ' + returnedParameter.length);
			// arrayOf_NY_Restaurants = request.responseText.split("\n");
			// console.dir(arrayOf_NY_Restaurants);
			
			//responseText = request.responseText;
			// return {responseText: request.responseText}; //* return to what scope/where ?
			//* request.responseText: string //* .toString();
			// showResponceText(request.responseText.slice(0, 255));
			//showResponceText([request.responseText.slice(0, 255).split("\n")[1]]);
			//* need to change 'csv' first
			// showResponceText(request.responseText.slice(0, 255).split("\n")[1]);//* fast
			// showResponceText(request.responseText.split("\n")[23111]);//* fast
			showResponceText(request.responseText);//* return value outside, from event
			if (xhrResponseText === '') {
				xhrResponseText = request.responseText;
			} else {
				
			}
			/*
			Numeric Sort
				The sort() method 
				cannot be used on 
				a number array, 
				because 
				it sorts alphabetically 
				(25 is bigger than 100).
				You can fix this by 
				providing a function that 
				returns -1, 0, or 1:(less, equal, greater)
			*/
			// var points = [40, 100, 1, 5, 25, 10].sort(function(a, b){return a-b});
			
			// var fruits = ["Banana", "Orange", "Apple", "Mango"];
			// var a = fruits.indexOf("Apple");
			/*
			Syntax
				array.indexOf(item,start)
			The 'indexOf()' method 
			searches the array for 
			the specified item, 
			and returns its position.

			The search will start at the specified position, 
			or at the beginning 
			if no start position is specified, 
			and end the search at the end of the array.

			Returns -1 if the item is not found.

			If the item is present more than once, 
			the 'indexOf' method returns 
			the position of the first occurence.

			Note: 
			The first item has position 0, the second item has position 1, and so on.

			Tip: 
			If you want to search from end to start, use the lastIndexOf() method
			*/

		} else {
			// We reached our target server, but it returned an error
			console.warn('We reached our target server, but it returned an error' + 
				request.status);
			return {requestStatus: request.status};	
		}
	};

	request.onerror = function() {
		// There was a connection error of some sort
		console.warn('There was a connection error of some sort');
	};

	request.send();
	
	//return console.log('responseText: ' + responseText);//* before 'request.onload' event
	//return responseText;
}

function assignValue(source, target) {
	if (source) {
		console.log('assignValue has source');
		target = source;
	}
}

document.addEventListener(
	'DOMContentLoaded', 
	function(){
		var listOf_NY_Restaurants,// = '',
				// arrayOf_NY_Restaurants = [],
				start = 0,
				end = 500;
		
		console.log('DOMContentLoaded');
		//* asinc so no assigment use callBack
		// listOf_NY_Restaurants = 
		// assignValue(loadFromFile('NY_Restaurants.csv'),listOf_NY_Restaurants);//* .toString();
		// loadFromFile('NY_Restaurants.csv',assignValue(this,listOf_NY_Restaurants));
		// loadFromFile('NY_Restaurants.csv', listOf_NY_Restaurants);
		// arrayOf_NY_Restaurants = loadFromFile('NY_Restaurants.csv').responseTextArray;
		// listOf_NY_Restaurants = new loadFromFile('NY_Restaurants.csv');
		loadFromFile('NY_Restaurants.csv');
		
		//* ASCII Character	Description	URL-encoding
		//* LF							line feed		%0A
		//* Char	Number	Description
		//* LF		10			line feed
		
		//* .charCodeAt() method returns 
		//* the unicode of the character at a specified index in a string:
		//console.log('listOf_NY_Restaurants ' + typeof(listOf_NY_Restaurants));
		/*
		if (listOf_NY_Restaurants.length){//* cannot read property of undefined
			console.log('listOf_NY_Restaurants.length: ' + listOf_NY_Restaurants.length);
		}
		else {
			console.dir(listOf_NY_Restaurants);
		}*/
		// console.log(listOf_NY_Restaurants.slice(start, end));
		// arrayOf_NY_Restaurants = listOf_NY_Restaurants.slice(start, end).split("\n");
		/*
		if (arrayOf_NY_Restaurants.length) {
			console.log('arrayOf_NY_Restaurants.length: ' + arrayOf_NY_Restaurants.length);
			console.log(arrayOf_NY_Restaurants[0]);
		}
		else {
			console.log('arrayOf_NY_Restaurants ' + typeof(arrayOf_NY_Restaurants));
		}*/

	}
);

function showResponceText(serverResponceText) {
	var someNY_Restaurants = '';
	
	if (arrayOf_NY_Restaurants.length > 0) {
	} else {
		arrayOf_NY_Restaurants = serverResponceText.split("\n");//* global (.window or .document)
	}
	/*
	var x = document.getElementById("main");
	var y = x.getElementsByTagName("p");
	newSpanTag.innerHTML = '';
	document.createElement("TEXTAREA");
	*/
	for (var i = 1 ; i < 5 * 2 ; i++){
		someNY_Restaurants = someNY_Restaurants + arrayOf_NY_Restaurants[i] + '\n';
	}
	//* return collection, so use array index
	document.getElementsByTagName("textarea")[0].innerHTML = someNY_Restaurants;
}

function goSearch() {
	var searchInput = document.getElementById("goSearchInput").value.trim(),//'';
			searchPosInArray = -1,//* not found
			//* be ware of escaping and special/reserved characters in RE 
			//* string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
			//* pattern_for_RE = new RegExp("(.*(" + searchInput + ")?.*)","gim"),//* /(.*searchInput?.*)/;
			//* pattern_for_RE = new RegExp(".*" + searchInput + "?.*","gim"),//* /(.*searchInput?.*)/;
			//*pattern_for_RE = new RegExp(".*" + searchInput + "?.*","i"),//* /(.*searchInput?.*)/;
			pattern_for_RE, //*= new RegExp("(.*(" + searchInput + "?).*)*","im"),//* /(.*searchInput?.*)/;
			searchExecArray = [];
				
	if (searchInput !== '') {//* not empty string
		//* compare for strict match with element content  
		//* searchPosInArray = arrayOf_NY_Restaurants.indexOf(searchInput, 1);
		if (searchPosInArray !== -1 ){
			document
				.getElementsByTagName("textarea")[0]
					.innerHTML = arrayOf_NY_Restaurants[searchPosInArray];
		}
		
		if (xhrResponseText !== '') {//* not empty string
			//* /^.*chin?.*$/igm
			//* /(^(.*ital.*)$)/igm //* found exact number of matches/size of array, but 
			//* return array of matched elements equal to the first match
			//* use instead
			//* textForSearch.match(/(^(.*ital.*)$)/igm )
			pattern_for_RE = new RegExp("(^(.*" + searchInput + ".*)$)","igm");
			console.info("xhrResponseText - not empty");
			//*searchExecArray = pattern_for_RE.exec(xhrResponseText);
			/*
			searchExecArray = pattern_for_RE
				.exec(
					document
						.getElementsByTagName("textarea")[0]
							.innerHTML
				);*/
				
			/*
			searchExecArray = document
				.getElementsByTagName("textarea")[0]
					.innerHTML
						.match(pattern_for_RE);	*/
			searchExecArray = xhrResponseText
				.match(pattern_for_RE);				
			
			if (searchExecArray){//* not null
				console.dir(searchExecArray);
				document
					.getElementsByTagName("textarea")[0]
						.innerHTML = searchExecArray.slice(0, 9).join("\n");
						//* where '9' number of - first/top elements of/in search match
						//* for example equal to 'textarea' vertical size in strings
			} else {
				console.log("pattern_for_RE is:" + pattern_for_RE);
				console.dir(searchExecArray);
			}
		} else {
			console.warn("xhrResponseText - is empty !");
		}
	}
};


function xhrGet(reqUri, callback) {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", reqUri, true);
	xhr.onload = callback;

	xhr.send();
}

// Perform an XMLHttpRequest to grab the
// JSON file at url 'map'.
/*
xhrGet(
	map, 
	function (data) {
		// Once the XMLHttpRequest loads, call the
		// parseMapJSON method.
		gMap.parseMapJSON(data.responseText);
	}
);*/
				
/** Using RE 
*
*/
//* Escaping user input to 
//* be treated as 
//* a literal string 
//* within a regular expression 
//* can be accomplished by 
//* simple replacement:

function escapeRegExp(string){
  return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
}
/*
baseText = "some text first some text" + 
"\nsome text second1 some text" + 
"\nsome text third some text" + 
"\nsome text second2 some text"
"some text first some text
some text second1 some text
some text third some text
some text second2 some text"
//* The exec() method 
//* executes a search for 
//* a match in a specified string. 
//* Returns 
//* a result array, or null.
myArray = myRE.exec(baseText)
["some text second1 some text"] */
//* Using Parenthesized Substring Matches
//* myRE = /(.*sec?.*)/g  //* () - parentheses important ! for match remembering inside RE 
//* or
//* myRE = /(.*sec?.*)/gm 
//* The 'm' flag is 
//* used to specify that 
//* a multiline input string should be 
//* treated as 
//* multiple lines. 
//* If the 'm' flag is used, 
//* '^' and '$' match 
//* at the start or end of any line 
//* within the input string 
//* instead of 
//* the start or end of the entire string.
//* or
//* myRE = /(.*sec?.*)/
//* /.*sec?.*/g
/*
myArray = myRE.exec(baseText)
["some text second1 some text"]
myArray = baseText.split(myRE)
[
"some text first some text
", "
some text third some text
", 
""
]
//* use instead
textForSearch.match(/(^(.*ital.*)$)/igm )
[
	"2,restaurant #2,"NY, 45 street, 273",Italian,2", 
	"5,restaurant #5,"NY, 50 street, 91",Italian,2", 
	"8,restaurant #8,"NY, 152 street, 222",Italian,4", 
	"9,restaurant #9,"NY, 120 street, 570",Italian,4"
]
*/


