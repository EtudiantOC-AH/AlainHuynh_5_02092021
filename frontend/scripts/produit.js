let params = new URL(document, location).searchParams;
let id = params.get("id");

fetch('http://localhost:3000/api/teddies/${id}')
  .then((response) => response.json())
  .then(teddy => {
    console.log(teddy);
    let teddyHTML = ""
    teddy.forEach(teddy => {
      teddyHTML += `
      <div class="card">
        <img class="img" src="${teddy.imageUrl}" />
        <h3 class="name">${teddy.name}</h3>
        <p class="description">${teddy.description}</p>
        <p class="colors">${teddy.colors}</p>
        <p class="price">${teddy.price / 100}€</p>
        <a href="panier.html?id=${teddy.id}"> Ajouter au panier </a>
      </div>
  `
    })
    document.getElementById('product').innerHTML = teddyHTML
  })
  .catch((error) => {
    let messageError = document.querySelector(".cards");
    messageError.innerHTML = "Une erreur est survenue...";
    messageError.style.textAlign = "center";
    messageError.style.fontSize = "3em";
    messageError.style.paddingTop = "15rem";
    messageError.style.paddingBottom = "15rem";
  })



