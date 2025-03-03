const polaroidEl = document.querySelector('.polaroid')
const overlayEl = document.querySelector('.overlay')
const overlayContentEl = document.querySelector('.overlay .container')
const btnEl = document.querySelector('.btn')

fetch('https://lanciweb.github.io/demo/api/pictures/')
  .then(response => response.json())
  .then(pictures => {

    const cardContent = pictures
    console.log(cardContent);

    // prendiamo tutti gli elementi dell'oggetto
    cardContent.forEach((pictures, index) => {
      const image = pictures.url
      console.log(pictures, index);

      // aggiungiamo la nostra card con markup
      const markup =
        `
        <div class="col-12 col-md-6 col-lg-4 polaroid">
          <div class="card col p-3 rounded-0">
            <div class="photo">
              <img style="width: 10%;" class="position-absolute top-0 start-50 translate-middle"
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/red-circle-round-3d-button-1.png" alt="">
              <img src='${image}'
                class="polaroid-image img-fluid mb-3" alt="">
            </div>
            <p class="date m-0">${pictures.date}</p>
            <h4 class="title">${pictures.title}</h4>
          </div>
        </div>
        `;
      polaroidEl.insertAdjacentHTML('beforeend', markup)
    })

    // selezioniamo tutte le card create
    const imageEl = document.querySelectorAll('.polaroid-image')


    // aggiungiamo il listener per l'overlay
    imageEl.forEach((image, index) => {
      image.addEventListener('click', function () {
        const imgSelect = pictures[index].url

        //agggiungiamo l'immagine precisa dall'index
        imgSrc = `<img class="mt-4 mb-4 col-12 col-lg-9" src="${imgSelect}" alt="">`
        overlayContentEl.insertAdjacentHTML('beforeend', imgSrc)
        overlayEl.classList.remove('d-none')
      })
    })

    // al click del bottone si chiude l'overlay
    btnEl.addEventListener('click', function () {
      overlayEl.classList.add('d-none')
    })

  })
  .catch(error => console.error("Error:", error));
