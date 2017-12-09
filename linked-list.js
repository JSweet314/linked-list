var enterButton = document.querySelector('.enter-button');
var websiteName = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var bookmarksSection = document.querySelector('#bookmarks');

function buildCard(){
  var websiteName = document.querySelector('#website-title');
  var websiteURL = document.querySelector('#website-url');
  var card = document.createElement('div');
  var cardTitle = document.createElement('h2');
  var titleText = document.createTextNode(websiteName.value);
  var cardLink = document.createElement('a');
  var linkText = document.createTextNode(websiteURL.value);
  var cardButtons = document.createElement('div');
  var buttonRead = document.createElement('button');
  var readButtonText = document.createTextNode('Read');
  var buttonDelete = document.createElement('button');
  var deleteButtonText = document.createTextNode('Delete');

  card.appendChild(cardTitle);
  card.appendChild(cardLink);
  cardButtons.appendChild(buttonRead);
  cardButtons.appendChild(buttonDelete);
  card.appendChild(cardButtons);

  bookmarksSection.appendChild(card);
}
