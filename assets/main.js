const polaroidEl = document.querySelector('.polaroid')

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {

  const cardContent = data
  console.log(cardContent);
  
})
.catch(error => console.error("Error:", error))
