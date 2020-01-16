
function getDogPictures(query, displayCallback) {
  fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
 .then(response => response.json())
 .then(responseJson => {
   console.log(responseJson)
   return responseJson
 }) 
 .then(responseJson => displayCallback(responseJson))
 .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
 return `
 <div>
   <br/>
   <img src="${responseJson}" class="results-img">
 </div>
 ` ;
}

function displaySearchData(data) {
 const results = data.message.map((item, index) => displayResults(item));
 $('.js-results').html(results);
 
 $('.results').removeClass('hidden');
}


function checkInput() {
 $('.js-form-search').submit(event => {
   event.preventDefault();
   const queryTarget = $(event.currentTarget).find('.js-input');
   const query = queryTarget.val();
    queryTarget.val("3")
   getDogPictures(query, displaySearchData);
 });
}


$(function() {
 console.log('App loaded! Waiting for submit!');
 checkInput();
}); 

