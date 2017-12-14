var enterButton = document.querySelector('.enter-button');
var websiteName = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');
var bookmarksSection = document.querySelector('#bookmarks');
var readCounterScreen = document.querySelector('.read-counter-screen');
var readCardCounter = 0;
var cardCounter = 0;
var displayCount = document.querySelector('.display-count');
var clearAllReadBtn = document.querySelector('.clear-all-read');
var displayReadLinks = document.querySelector('.read');
var readCounterScreen = document.querySelector('.read-counter-screen');
var urlValidationPrompt = document.querySelector('.url-validation');

websiteName.addEventListener('input', ensureUserInput);

websiteURL.addEventListener('input', ensureUserInput);
websiteURL.addEventListener('input', validateURL);

websiteURL.addEventListener('focus', function(){
  if (websiteURL.value === '') {
    websiteURL.value = 'https://';
  }
});

enterButton.addEventListener('click', function() {
  event.preventDefault();
  buildCard();
  websiteURL.value = '';
  websiteName.value = '';
  websiteName.focus();
  enterButton.disabled = true;
  displayCount.innerText = 'Cards: ' + cardCounter;
});

bookmarksSection.addEventListener('click', function(event){
  if (event.target.classList.contains('button-delete')){
    removeCard(event);
  }

  if (event.target.classList.contains('button-read')){
    toggleRead(event);
  }
});

clearAllReadBtn.addEventListener('click', clearAllReadCards);

function buildCard() {

  var card = createCard()

  var cardTitle = createCardTitle();

  var cardLink = createCardLink();

  var buttonDelete = createDeleteButton();

  var buttonRead = createReadButton();

  card.appendChild(cardTitle);
  card.appendChild(document.createElement('hr'));
  card.appendChild(cardLink);
  card.appendChild(document.createElement('hr'));
  card.appendChild(buttonRead);
  card.appendChild(buttonDelete);

  bookmarksSection.appendChild(card);

  cardCounter++;
}

function removeCard(event) {

  bookmarksSection.removeChild(event.target.parentNode);
  cardCounter--;
  if (cardCounter == 0){
    clearAllReadBtn.disabled = true;
    clearAllReadBtn.classList.remove('active-clear-all');
  }
  displayCount.innerText = 'Cards: ' + cardCounter;

}

function toggleRead(event) {

  if (event.target.parentNode.classList.contains('read')){
    event.target.parentNode.classList.remove('read');
    readCardCounter--;
    readCounterScreen.innerText = 'Links Read: ' + readCardCounter;
  } else {
    event.target.parentNode.classList.add('read');
    readCardCounter++;
    clearAllReadBtn.disabled = false;
    clearAllReadBtn.classList.add('active-clear-all')
    readCounterScreen.innerText = 'Links Read: ' + readCardCounter;
  }
}

function createCard() {
  var card = document.createElement('div');
  card.classList.add('website-card');
  return card;
}

function createCardTitle() {
  var cardTitle = document.createElement('h2');
  cardTitle.innerText = websiteName.value;
  return cardTitle;
}

function createCardLink() {
  var cardLink = document.createElement('a');
  cardLink.innerText = websiteURL.value;
  cardLink.href = websiteURL.value;
  cardLink.target = '_blank';
  return cardLink;
}

function createDeleteButton() {
  var buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Delete';
  buttonDelete.classList.add('button-delete');
  return buttonDelete;
}

function createReadButton() {
  var buttonRead = document.createElement('button');
  buttonRead.innerText = 'Read';
  buttonRead.classList.add('button-read');
  return buttonRead;
}

function ensureUserInput(){
  while((websiteName.value !== '') && (websiteURL.value !== '')) {
    enterButton.disabled = false;
    break;
  }
  while((websiteName.value === '') || (websiteURL.value === '')) {
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
    cardCounter--;
  }
  clearAllReadBtn.classList.remove('active-clear-all');
  clearAllReadBtn.disabled = true;
  displayCount.innerText = 'Links: ' + cardCounter;
}

function validateURL() {
  if (!(websiteURL.validity.valid)) {
    console.log('invalid URL');
    websiteURL.style.backgroundColor = '#F05B28';
    websiteURL.style.color = '#ffffff';
    if (websiteName.value != ''){
      enterButton.disabled = true;
    }
  } else {
    event.preventDefault();
    websiteURL.focus()
    websiteURL.style.backgroundColor = '#ffffff';
    websiteURL.style.color = '#000000'
    enterButton.disabled = false;
  }
  if (websiteURL.value == '') {
    websiteURL.value = 'https://';
    websiteURL.userSelect = 'none';
  }
}