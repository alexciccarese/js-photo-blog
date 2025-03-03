const polaroidEl = document.querySelector('.polaroid')
const overlayEl = document.querySelector('.overlay')
const overlayContentEl = document.querySelector('.overlay .container')
const btnEl = document.querySelector('.btn')

fetch('https://lanciweb.github.io/demo/api/pictures/')
  .then(response => response.json())
  .then(pictures => {

    const cardContent = pictures
    console.log(cardContent);


    //prendiamo tutti gli elementi dell'oggetto
    cardContent.forEach(pictures => {
      const image = pictures.url
      console.log(pictures);

      // aggiungiamo la nostra card con markup
      const markup =
        `
        <div class="col-12 col-md-6 col-lg-4 polaroid">
          <div class="card col p-3 rounded-0">
            <div class="photo">
              <img style="width: 10%;" class="position-absolute top-0 start-50 translate-middle"
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/red-circle-round-3d-button-1.png" alt="">
              <img src='${image}'
                class="img-fluid mb-3" alt="">
            </div>
            <p class="date m-0">${pictures.date}</p>
            <h4 class="title">${pictures.title}</h4>
          </div>
        </div>
          `
      polaroidEl.insertAdjacentHTML('beforeend', markup)

      const markup_overlay =
      `
      <img class="mt-4 mb-4 col-12 col-lg-9" src="${image}" alt="">
      `
      overlayContentEl.insertAdjacentHTML('beforeend', markup_overlay)

    });


    // quando clicchiamo la card si apre l'overlay dell'IMG
    polaroidEl.addEventListener('click', function () {
      overlayEl.classList.remove('d-none')
    })

    // al click del bottone si chiude l'overlay
    btnEl.addEventListener('click', function () {
      overlayEl.classList.add('d-none')
    })

    


  })
  .catch(error => console.error("Error:", error))
