// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=>{
    Object.keys(response.data.articles).forEach(subject => {
        response.data.articles[subject].forEach(attribute => {
            document.querySelector('.cards-container').append(cardMaker(attribute));
        console.log(attribute);
        })
    });
})

.catch(error => {
    console.log(error);
});

function cardMaker(data) {
    const divCard = document.createElement('div');
    const divHeadline = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImage = document.createElement('div');
    const imageMaker = document.createElement('img');
    const spanMaker = document.createElement('span');

    divCard.append(divHeadline);
    divCard.append(divAuthor);
    divAuthor.append(divImage);
    divAuthor.append(spanMaker);
    divImage.append(imageMaker)
    divCard.classList.add('card');
    divHeadline.classList.add('headline')
    divAuthor.classList.add('author');
    divImage.classList.add('img-container');
    divHeadline.textContent = data.headline;
    imageMaker.src = data.authorPhoto;
    spanMaker.textContent = data.authorName;

    console.log (data);
    return divCard;
};