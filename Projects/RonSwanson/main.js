var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

/**
 * XHR
 */
var xhr_button = document.querySelector("#xhr");
xhr_button.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if(XHR.readyState === 4 && XHR.status === 200) {
            var response = XHR.responseText;
            var data = JSON.parse(response);
            updateQuote(data);
        }
    }

    XHR.open("GET",url);
    XHR.send();
});

/**
 * FETCH
 */
var fetch_btn = document.querySelector("#fetch");
fetch_btn.addEventListener("click", function() {
  fetch(url)
    .then(function(request) {
      if(!request.ok) {
        throw Error(request.status);
      }
      return request;
    })
    .then(function(request) {
      return request.json();}
    )
    .then(updateQuote)
    .catch(function(error) {
      console.log(error);
    })
});


/**
 * JQUERY
 */
$("#jquery").click(function() {
  $.getJSON({
    url
  }).done(function(data) {
    updateQuote(data);
  });
});

/**
 * AXIOS
 */
var axios_btn = document.querySelector("#axios");
axios_btn.addEventListener("click", function() {
  axios.get(url)
  .then(function(res) {
    updateQuote(res.data);
  })
  .catch(function(e) {
    console.log(e);
  });
});

/**
 * GENERIC FUNCTIONS
 */
function updateQuote(jsonData) {
  var quote = document.querySelector("#quote");
  quote.textContent = jsonData;
}