// Information to reach API ----https://share.icloud.com/photos/0daxJ8fH1Xz9MB_EhtRFM1I0w
const apiKey = '22661be31f0d483a9babb9f448d328bd';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) { 
      return response.json()
    }
    throw new Error('Request failed!')
}, networkError => {
     console.log(networkError.message);
}).then(jsonResponse => renderResponse(jsonResponse))
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
