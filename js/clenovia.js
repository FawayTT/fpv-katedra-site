function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    loadPerson(this);
    $('.waiting').hide();
    VANTA.NET({
      el: '.bg-net',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.5,
      scaleMobile: 2.1,
      color: 0x1a3941,
      backgroundColor: 0x0,
      maxDistance: 25.0,
      spacing: 12.0,
      points: 16.0,
    });
    showClenovia();
  };
  xhttp.open('GET', 'clenovia.xml');
  xhttp.send();
}
function loadPerson(xml) {
  const xmlDoc = xml.responseXML;
  const person = xmlDoc.getElementsByTagName('person');
  for (let i = 0; i < person.length; i++) {
    const block = document.createElement('div');
    block.classList.add('card', 'flex-md-row', 'flex-column', 'w-75', 'w-md-100', 'mx-auto', 'mb-4', 'bg-lightdark');
    const innerBlock = document.createElement('div');
    innerBlock.classList.add('card-block', 'p-4', 'w-md-100', 'bg-teal');
    const innerBlockRow = document.createElement('div');
    innerBlockRow.classList.add('row');
    const col1 = document.createElement('div');
    col1.classList.add('col-md-5');
    const col2 = document.createElement('div');
    col2.classList.add('col-md-7', 'mt-3', 'mt-md-0');
    const cardText = [];
    for (let i = 0; i < person.length - 2; i++) {
      cardText[i] = document.createElement('p');
      cardText[i].classList.add('card-text');
    }

    cardText[0].innerHTML = 'Telefón: ' + person[i].getElementsByTagName('telephone')[0].childNodes[0].nodeValue;
    cardText[1].innerHTML = 'E-mail: ' + person[i].getElementsByTagName('email')[0].childNodes[0].nodeValue;
    cardText[2].innerHTML = 'Zaradenie: ' + person[i].getElementsByTagName('position')[0].childNodes[0].nodeValue;
    cardText[3].innerHTML = 'Miestnosť: ' + person[i].getElementsByTagName('room')[0].childNodes[0].nodeValue;

    col1.innerHTML = cardText[0].outerHTML + cardText[1].outerHTML;
    col2.innerHTML = cardText[2].outerHTML + cardText[3].outerHTML;
    innerBlockRow.innerHTML = col1.outerHTML + col2.outerHTML;
    innerBlock.innerHTML = '<h4 class="card-title">' + person[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + '</h4>' + '<h6 class="card-title">' + person[i].getElementsByTagName('job')[0].childNodes[0].nodeValue + '</h6>' + '<hr />' + innerBlockRow.outerHTML;
    block.innerHTML = '<img src="' + person[i].getElementsByTagName('photo')[0].childNodes[0].nodeValue + '" alt="" width="202" />' + innerBlock.outerHTML;
    document.getElementById('clenovia').appendChild(block);
  }
}
$(loadDoc());
$(navbarAnimate());
$(animationExecute($('#footerLink'), footerAnimation));
