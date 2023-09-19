document.addEventListener('DOMContentLoaded', () => {
//universal
const imgCont = document.querySelector('#dog-image-container');
const ul = document.querySelector('#dog-breeds');
const dropdown = document.querySelector('#breed-dropdown')
let breedArray = [];

//function to add images to dog image container
function appendImages(imageUrl) {
  const newImg = document.createElement('img')
  newImg.src = imageUrl

  imgCont.append(newImg)
}

//load 4 images
const loadImages = () => {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then((data) => data.message.forEach((imageUrl) => appendImages(imageUrl)))
  .catch(error => alert(error))
}

//function to add event listener to list
function liEventListener(li) {
  li.addEventListener('click', () => {
    li.style.color = 'blue';
  })
}
//function to append all dog breeds as list
function appendDogBreeds(breed) {
  const li = document.createElement('li')
  li.textContent = breed

  liEventListener(li);

  ul.append(li)
}

//load all dog breeds
const loadDogBreeds = () => {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then((dogBreedObj) => { //you want to grab the .message and just the keys
    breedArray = Object.keys(dogBreedObj.message)
    breedArray.forEach((breed) => appendDogBreeds(breed))
  })
  .catch(error => alert(error))
}

//function to add event listener to dropdown
function dropdownEventListener() {
  dropdown.addEventListener('change', () => {
    console.log('changed')
  })
}
dropdownEventListener()








//Call functions
loadImages();
loadDogBreeds();
})
