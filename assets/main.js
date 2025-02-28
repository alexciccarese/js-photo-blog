const polaroidEl = document.querySelector('.polaroid')

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(pictures => {

  const cardContent = pictures
  console.log(cardContent);
  

  //prendiamo tutti gli elementi dell'oggetto
  cardContent.forEach(pictures => {
    console.log(pictures);

    
  });
})
.catch(error => console.error("Error:", error))
