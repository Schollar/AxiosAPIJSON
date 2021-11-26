
// Function that creates the image based on the response data url sent back from the API
function cat_success(response) {
    console.log(response);
    var cat_image = document.createElement('img');
    cat_image.src = response.data.url;
    cat_container.appendChild(cat_image);
// Remove the Loading message
    cat_container.removeChild(loading_message);
}
// Error Message if API call fails
function cat_failure(error) {
    var error_message = document.createElement('h1');
    error_message.innerText = "Sorry there has been an error!"
    cat_container.appendChild(error_message);
}
// Function that attaches to our button to call the API and send the loading message
function get_cat() {
    loading_message.innerText = "Loading Cat....";
    cat_container.appendChild(loading_message);
    axios.request({
        url: 'https://thatcopy.pw/catapi/rest/'
    }).then(cat_success).catch(cat_failure)
}

// Setting up variables needed in our functions
var cat_container = document.getElementById('cat_container');
var loading_message = document.createElement('h1');
var cat_button = document.getElementById('get_cat');
cat_button.addEventListener('click', get_cat);
