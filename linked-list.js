var enterButton = document.querySelector('.enter-button');
var websiteName = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var bookmarksSection = document.querySelector('#bookmarks');

function buildCard(){
  // var websiteName = document.querySelector('#website-title');
  // var websiteURL = document.querySelector('#website-url');
  var card = document.createElement('div');
  card.classList.add('website-card');

  var cardTitle = document.createElement('h2');
  cardTitle.innerText = websiteName.value;

  var lineBreak = document.createElement('hr');

  var cardLink = document.createElement('a');
  cardLink.innerText = websiteURL.value;

  var cardButtons = document.createElement('div');

  var buttonRead = document.createElement('button');
  buttonRead.innerText = 'Read';

  var buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';

  cardButtons.appendChild(buttonRead);
  cardButtons.appendChild(buttonDelete);

  card.appendChild(cardTitle);
  card.appendChild(lineBreak);
  card.appendChild(cardLink);
  card.appendChild(lineBreak);
  card.appendChild(cardButtons);

  bookmarksSection.appendChild(card);
}

enterButton.addEventListener('click', function(){
  event.preventDefault();
  buildCard();
  websiteURL.value = '';
  websiteName.value = '';
  websiteName.focus();
});
