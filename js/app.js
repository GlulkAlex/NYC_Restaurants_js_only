'use strict';

//* Global scope -- not good
var arrayOf_NY_Restaurants = [];//* apparently - functions goes first 

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
	
	arrayOf_NY_Restaurants = serverResponceText.split("\n");//* global (.window or .document)
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
			searchPosInArray = -1;//* not found
	
	if (searchInput !== '') {//* not empty string
		//* compare for strict match with element content  
		searchPosInArray = arrayOf_NY_Restaurants.indexOf(searchInput, 1);
		if (searchPosInArray !== -1 ){
			document
				.getElementsByTagName("textarea")[0]
					.innerHTML = arrayOf_NY_Restaurants[searchPosInArray];
		}
	}
};


