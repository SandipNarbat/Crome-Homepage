let inputValue = document.getElementById("search");
const searchBtn = document.querySelector("#searchBtn");
var url = 'https://www.google.com/search?q=';


inputValue.addEventListener("keypress", function(event) {
    if (event.key==="Enter") {
        url = "https://www.google.com/search?q=" + inputValue.value;
        window.open(url, '_self');
    }
})