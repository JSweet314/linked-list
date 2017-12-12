var enterButton = document.querySelector('.enter-button');
var websiteName = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var bookmarksSection = document.querySelector('#bookmarks');
var cardDeleteButton = document.querySelector('card-delete-button');

websiteName.addEventListener('input', ensureUserInput);
websiteURL.addEventListener('input', ensureUserInput);
enterButton.addEventListener('click', function() {
  event.preventDefault();
  buildCard();
  // websiteURL.value = '';
  // websiteName.value = '';
  websiteName.focus();
  // enterButton.disabled = true;
});

bookmarksSection.addEventListener('click', function(event){
  //attaching event listener to parent element, delegating to target
  if (event.target.classList.contains('button-delete')){
    //remove card
    removeCard(event);
  } 

  if (event.target.classList.contains('button-read')){
    toggleRead(event);
  }
});

function buildCard() {

  var card = document.createElement('div');
  card.classList.add('website-card');

  var cardTitle = document.createElement('h2');
  cardTitle.innerText = websiteName.value;

  var cardLink = document.createElement('a');
  cardLink.innerText = websiteURL.value;
  cardLink.href = 'https://' + websiteURL.value;
  cardLink.target = '_blank';

  createDeleteButton();

  createReadButton();

  card.appendChild(cardTitle);
  card.appendChild(document.createElement('hr'));
  card.appendChild(cardLink);
  card.appendChild(document.createElement('hr'));
  card.appendChild(buttonRead);
  card.appendChild(buttonDelete);

  bookmarksSection.appendChild(card);
}

function removeCard(event) {
  bookmarksSection.removeChild(event.target.parentNode);
  console.log(event);
}

function toggleRead(event) {//after adding or removing the read class in either case, the code below traverses the DOM and changes some css styling. The lastChild with respect to the card object (parent of the read button) is the delete button. Another way to accomplish the code below is with straight CSS - see comment in styles.css.
  if (event.target.parentNode.classList.contains('read')){
    event.target.parentNode.classList.remove('read');
  } else {
    event.target.parentNode.classList.add('read');
  }
}


function createDeleteButton() {
  buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';
  // buttonDelete.addEventListener('click', removeCard);
  buttonDelete.classList.add('button-delete');
  return buttonDelete;
}

function createReadButton() {
  buttonRead = document.createElement('button');
  buttonRead.innerText = 'Read';
  // buttonRead.addEventListener('click', toggleRead);
  buttonRead.classList.add('button-read');
  return buttonRead;
}

function ensureUserInput(){
  while((websiteName.value !== '') && (websiteURL.value !== '')) {
    enterButton.disabled = false;
    break;
  }
  while((websiteName.value ==='') || (websiteURL.value ==='')) {
    enterButton.disabled = true;
    break;
  }
}
