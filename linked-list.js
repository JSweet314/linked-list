var enterButton = document.querySelector('.enter-button');
var websiteName = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var bookmarksSection = document.querySelector('#bookmarks');
var cardDeleteButton = document.querySelector('card-delete-button');

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

enterButton.addEventListener('click', function() {
  event.preventDefault();
  buildCard();
  websiteURL.value = '';
  websiteName.value = '';
  websiteName.focus();
});

function removeCard() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function toggleRead() {
  if (this.classList.contains('read')){
    this.classList.remove('read');
    this.parentNode.style.backgroundColor = '#ffffff';
  } else {
    this.classList.add('read');
    this.parentNode.style.backgroundColor = '#f2f4f4';
  }
}

function createDeleteButton() {
  buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';
  buttonDelete.addEventListener('click', removeCard);
  buttonDelete.classList.add('button-delete');
  return buttonDelete;
}

function createReadButton() {
  buttonRead = document.createElement('button');
  buttonRead.innerText = 'Read';
  buttonRead.addEventListener('click', toggleRead);
  buttonRead.classList.add('button-read');
  return buttonRead;
}