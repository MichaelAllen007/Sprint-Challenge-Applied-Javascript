// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const titleh1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    headDiv.append(spanDate);
    headDiv.append(titleh1);
    headDiv.append(tempSpan);

    headDiv.classList.add('header');
    spanDate.classList.add('date');
    tempSpan.classList.add('temp');

    spanDate.textContent='SMarch 28, 2019';
    titleh1.textContent='Lambda Times';
    tempSpan.textContent='98°';

    return headDiv;
}
document.querySelector('.header-container').append(Header());