//universal variables
let dogBreeds = []; //dogObject will contain an object of all the dog names
const dogBreedUl = document.querySelector('#dog-breeds')

document.addEventListener('DOMContentLoaded', () => {

console.log('%c HI', 'color: firebrick')



//function that adds breed element to the DOM
const addDogBreed = (breed) => {
  let dogBreedLi = document.createElement('li');

  dogBreedLi.textContent = breed

  dogBreedUl.appendChild(dogBreedLi)

  //add event listener
  dogBreedLi.addEventListener('click', () => {
    dogBreedLi.style.color = 'blue'
  })
}

//function that updates the dog breeds shown
function updateBreedList (dogBreeds) {
  //clear the ul
  let child = dogBreedUl.lastElementChild;
  while (child) {
    dogBreedUl.removeChild(child)
    child = dogBreedUl.lastElementChild
  }
  //add in the new lists for each breed invoking your addDogBreed function
  dogBreeds.forEach((breed) => addDogBreed(breed))
}

  //function to fetch (GET)
  function getImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then((resp) => resp.json())
      .then((data) => data.message.forEach((image) => addImage(image)))
  }
function addImage(imgUrl) {
  const dogImgContainer = document.querySelector('#dog-image-container');
  let newImg = document.createElement('img');

  newImg.src = imgUrl;
  dogImgContainer.appendChild(newImg);
}

//function to fetch all breeds (GET)
function getAllBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then((resp) => resp.json())
  .then((data) => {
    dogBreeds = Object.keys(data.message);

    updateBreedList(dogBreeds);
    dropDownEventListener();
  })
}

//dropdown function
function dropDownEventListener() {
  const dropDown = document.querySelector('#breed-dropdown')
  const dropDownValue = dropDown.value
  dropDown.addEventListener('change', (e) => {
    updateBreedList(dogBreeds.filter((dog) => dog[0] === dropDownValue))
  })
}

//insert functions that will load things
  getImages()
  getAllBreeds()
})
