var enterButton = document.querySelector('.enter-button');
var websiteName = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var bookmarksSection = document.querySelector('#bookmarks');
var cardCounter = 0;
var readCardCounter = 0;
var displayCount = document.querySelector('.display-count');
var clearAllReadBtn = document.querySelector('.clear-all-read');
var displayReadLinks = document.querySelector('.read');
var readCounterScreen = document.querySelector('.read-counter-screen');

websiteName.addEventListener('input', ensureUserInput);
websiteURL.addEventListener('input', ensureUserInput);

enterButton.addEventListener('click', function() {
  event.preventDefault();
  buildCard();
  // websiteURL.value = '';
  // websiteName.value = '';
  websiteName.focus();
  // enterButton.disabled = true;
  cardCounter++;
  displayCount.innerText = 'Cards: ' + cardCounter;
});

bookmarksSection.addEventListener('click', function(event){
  if (event.target.classList.contains('button-delete')){
    removeCard(event);
  }

  if (event.target.classList.contains('button-read')){
    toggleRead(event);
    console.log(readLinkCount);
  }
});

clearAllReadBtn.addEventListener('click', clearAllReadCards);

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
  cardCounter--;
  displayCount.innerText = 'Cards: ' + cardCounter;

}

function toggleRead(event) {

  if (event.target.parentNode.classList.contains('read')){
    event.target.parentNode.classList.remove('read');
    readCardCounter--;
    readCounterScreen.innerText.innerText = 'Read Links: ' + readCardCounter;
  } else {
    event.target.parentNode.classList.add('read');
    readCardCounter++;
    clearAllReadBtn.disabled = false;
    clearAllReadBtn.classList.add('active-clear-all')
    readCounterScreen.innerText = 'Read Links: ' + readCardCounter;
  }
}

function createDeleteButton() {
  buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';
  buttonDelete.classList.add('button-delete');
  return buttonDelete;
}

function createReadButton() {
  buttonRead = document.createElement('button');
  buttonRead.innerText = 'Read';
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

function clearAllReadCards(){
  event.preventDefault();
  console.log(event);
  var readCards = document.querySelectorAll('.read');
  for (i = 0; i < readCards.length; i++){
    this.parentNode.removeChild(readCards[i]);
  }
  clearAllReadBtn.classList.remove('active-clear-all');
  clearAllReadBtn.disabled = true;
  
}