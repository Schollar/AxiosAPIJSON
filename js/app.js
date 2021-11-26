function cat_success(response) {
    console.log(response);
    var cat_image = document.createElement('img');
    cat_image.src = response.data.url;
    cat_container.appendChild(cat_image);

    cat_container.removeChild(loading_message);
}

function cat_failure(error) {
    var error_message = document.createElement('h1');
    error_message.innerText = "Sorry there has been an error!"
    cat_container.appendChild(error_message);
}

function get_cat() {
    loading_message.innerText = "Loading Cat....";
    cat_container.appendChild(loading_message);
    axios.request({
        url: 'https://thatcopy.pw/catapi/rest/'
    }).then(cat_success).catch(cat_failure)
}




var loading_message = document.createElement('h1');
var cat_button = document.getElementById('get_cat');
cat_button.addEventListener('click', get_cat);

var cat_container = document.getElementById('cat_container');