
fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then(teddies => {
    console.log(teddies);
    let teddiesHTML = ""
    teddies.forEach(teddy => {
      teddiesHTML += `
      <div class="card">
        <img class="img" src="${teddy.imageUrl}" />
        <h3 class="name">${teddy.name}</h3>
        <p class="price">${teddy.price / 100}€</p>
        <a href="produit.html?id=${teddy._id}"> Voir le produit </a>
      </div>
    `
    })
    document.getElementById('productList').innerHTML = teddiesHTML
  })
  .catch((error) => {
    let messageError = document.querySelector(".cards");
    messageError.innerHTML = "Une erreur est survenue...";
    messageError.style.textAlign = "center";
    messageError.style.fontSize = "3em";
    messageError.style.display = "flex";
    messageError.style.justifyContent = "center";
    messageError.style.paddingBottom = '15rem';
    messageError.style.paddingTop = '10rem';
  })

