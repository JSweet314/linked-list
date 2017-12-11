var enterButton = document.querySelector('.enter-button');
var websiteName = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var bookmarksSection = document.querySelector('#bookmarks');
var cardDeleteButton = document.querySelector('card-delete-button');

function buildCard(){
  var card = document.createElement('div');
  card.classList.add('website-card');

  var cardTitle = document.createElement('h2');
  cardTitle.innerText = websiteName.value;

  var cardLink = document.createElement('a');
  cardLink.innerText = websiteURL.value;

  var buttonRead = document.createElement('button');
  buttonRead.innerText = 'Read';
  buttonRead.classList.add('button-read');

  var buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';
  buttonDelete.classList.add('button-delete');
  buttonDelete.addEventListener('click', removeCard);

  card.appendChild(cardTitle);
  card.appendChild(document.createElement('hr'));
  card.appendChild(cardLink);
  card.appendChild(document.createElement('hr'));
  card.appendChild(buttonRead);
  card.appendChild(buttonDelete);

  bookmarksSection.appendChild(card);

}

function removeCard(){
  this.parentNode.parentNode.removeChild(this.parentNode);
  console.log(this.parentNode.parentNode);
}


enterButton.addEventListener('click', function(event){
  event.preventDefault();
  buildCard();
  websiteURL.value = '';
  websiteName.value = '';
  websiteName.focus();
});
