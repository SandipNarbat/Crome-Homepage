let inputValue = document.getElementById("search");
const searchBtn = document.querySelector("#searchBtn");
var url = 'https://www.google.com/search?q=';

searchBtn.addEventListener("click",()=>{
    if(inputValue.value===""){
        console.log("nothing to search")
    }else{
    url = "https://www.google.com/search?q="+inputValue.value;
    window.open(url,'_self');}
});
