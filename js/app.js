'use strict';

//* Global scope -- not good
var arrayOf_NY_Restaurants = [];

//function loadFromFile(someUrl, callBackFunction, returnedParameter) {
//function loadFromFile(someUrl, returnedParameter) {	
function loadFromFile(someUrl) {	
	var request = new XMLHttpRequest();

	//* this.responseTextArray = [];//* this == window
	//console.log('this.responseTextArray: ' + typeof(this.responseTextArray));
	
	request.open('GET', someUrl, true);
	//*request.onreadystatechange=callBackFunction;
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			//* var responseTextArray = [];
			
			// Success!
			console.info('XMLHttpRequest Success!');
			
			//*resp = request.responseText;
			//*debugger;//* not responding
			//console.dir(request.responseText);//* to many strings/data
			console.log('request.responseText: ' + typeof(request.responseText));
			console.log('request.responseText.length: ' + request.responseText.length);
			
			//* returnedParameter = request.responseText.slice(0, 100);
			//* responseTextArray = returnedParameter.split("\n");
			//* console.dir(responseTextArray);
			
			/*
			responseTextArray = request.responseText.split("\n");
			console.dir(responseTextArray);*/
			//* this.responseTextArray = request.responseText.split("\n");
			
			//* console.log('returnedParameter.length: ' + returnedParameter.length);
			arrayOf_NY_Restaurants = request.responseText.split("\n");
			console.dir(arrayOf_NY_Restaurants);
			
			return request.responseText; //* return to what scope/where ?
			//* request.responseText: string //* .toString();
		} 
		else {
			// We reached our target server, but it returned an error
			console.warn('We reached our target server, but it returned an error' + request.status);
		}
	};

	request.onerror = function() {
		// There was a connection error of some sort
		console.warn('There was a connection error of some sort');
	};

	request.send();
	
	return request;
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
		var listOf_NY_Restaurants = '',
				//* arrayOf_NY_Restaurants = [],
				start = 0,
				end = 500;
		
		console.log('DOMContentLoaded');
		//* asinc so no assigment use callBack
		//* listOf_NY_Restaurants = 
		//* assignValue(loadFromFile('NY_Restaurants.csv'),listOf_NY_Restaurants);//* .toString();
		//* loadFromFile('NY_Restaurants.csv',assignValue(this,listOf_NY_Restaurants));
		//* loadFromFile('NY_Restaurants.csv', listOf_NY_Restaurants);
		//* arrayOf_NY_Restaurants = loadFromFile('NY_Restaurants.csv').responseTextArray;
		loadFromFile('NY_Restaurants.csv');
		
		//* ASCII Character	Description	URL-encoding
		//* LF							line feed		%0A
		//* Char	Number	Description
		//* LF		10			line feed
		
		//* .charCodeAt() method returns 
		//* the unicode of the character at a specified index in a string:
		console.log('listOf_NY_Restaurants ' + typeof(listOf_NY_Restaurants));
		console.log('listOf_NY_Restaurants.length: ' + listOf_NY_Restaurants.length);
		//console.log(listOf_NY_Restaurants.slice(start, end));
		//arrayOf_NY_Restaurants = listOf_NY_Restaurants.slice(start, end).split("\n");
		if (arrayOf_NY_Restaurants.length) {
			console.log('arrayOf_NY_Restaurants.length: ' + arrayOf_NY_Restaurants.length);
			console.log(arrayOf_NY_Restaurants[0]);
		}
		else {
			console.log('arrayOf_NY_Restaurants ' + typeof(arrayOf_NY_Restaurants));
		}

	}
);