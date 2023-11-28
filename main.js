let inputValue = document.getElementById("search");
const searchBtn = document.querySelector("#searchBtn");
var url = 'https://www.google.com/search?q=';


inputValue.addEventListener("keypress", function(event) {
    if (event.key==="Enter") {
        url = "https://www.google.com/search?q=" + inputValue.value;
        window.open(url, '_self');
    }
})

// searchBtn.addEventListener("click",()=>{
//     if(inputValue.value===""){
//         console.log("nothing to search")
//     }else{
//     url = "https://www.google.com/search?q="+inputValue.value;
//     window.open(url,'_self');}
// });



const addButton = document.getElementById('addButton');
const infoPopup = document.getElementById('infoPopup');
const addInfoButton = document.getElementById('addInfoButton');
const infoContainer = document.getElementById('infoContainer');


addButton.addEventListener('click', () => {
    infoPopup.style.display = 'block';
});

addInfoButton.addEventListener('click', () => {
    const imageInput = document.getElementById('imageInput');
    const urlInput = document.getElementById('urlInput');

    const imageUrl = URL.createObjectURL(imageInput.files[0]);
    const url = urlInput.value;

    if (imageUrl && url) {
        createInfoBox(imageUrl, url);
        infoPopup.style.display = 'none';
        imageInput.value = '';
        urlInput.value = '';
    } else {
        alert('Please provide both image and URL.');
    }
});

function createInfoBox(imageUrl, url) {
    const infoBox = document.createElement('div');
    infoBox.classList.add('infoBox');
    infoBox.innerHTML = `<img src="${imageUrl}" alt="Image"><p>${url}</p>`;
    infoBox.addEventListener('click', () => {
        window.open(url, '_blank');
    });
    infoContainer.appendChild(infoBox)
}