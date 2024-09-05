import { renderRawResponse, renderJsonResponse, renderResponse } from './public/helperFunctions.js';
// information to reach API
const apiKey = '22661be31f0d483a9babb9f448d328bd';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(
      url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json',
          'apikey': apiKey
        }
      });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
//https://share.icloud.com/photos/00cNZ6GuJr9BiqwsKe-a4lFNA

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
