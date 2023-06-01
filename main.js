function addIten() {
  const text = document.getElementById('input').value;
  if (text) {
    const pElement = document.createElement('p');

    pElement.setAttribute('id', 'element');
    pElement.setAttribute('onclick', `listHighlight('${text}')`);

    const elementText = document.createTextNode(text);
    pElement.appendChild(elementText);

    const htmlInsertion = document.getElementById('body');
    htmlInsertion.appendChild(pElement);
  }
  else
  {
    alert('Empty text pompt.');
  }
  document.getElementById('input').innerHTML = '';
}

function listHighlight(text) {
  document.querySelector('.highlight').style.display = "unset";
  document.querySelector('.popup').style.display = "flex";
  document.getElementById('textHighlight').innerHTML = text;
}

function removeDiv() {
  document.getElementById('highlight').style.display = "none";
  document.querySelector('.popup').style.display = "none";
}
