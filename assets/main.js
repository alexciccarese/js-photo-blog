const polaroidEl = document.querySelector('.polaroid')

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(pictures => {

  const cardContent = pictures
  console.log(cardContent);
  

  //prendiamo tutti gli elementi dell'oggetto
  cardContent.forEach(pictures => {
    console.log(pictures);

    // aggiungiamo la nostra card con markup
    const markup = 
    `
        <div class="col col-md-6 col-lg-4 polaroid">
          <div class="card col p-3 rounded-0">
            <div class="photo">
              <img style="width: 15%;" class="position-absolute top-5 start-50 translate-middle"
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/red-circle-round-3d-button-1.png" alt="">
              <img src='${pictures.url}'
                class="img-fluid mb-3" alt="">
            </div>
            <p class="date m-0">${pictures.date}</p>
            <h4 class="title">${pictures.title}</h4>
          </div>
        </div>
          `

         polaroidEl.insertAdjacentHTML('beforeend', markup)
          
  });
})
.catch(error => console.error("Error:", error))
