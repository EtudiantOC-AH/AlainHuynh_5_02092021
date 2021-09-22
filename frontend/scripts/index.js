// call API récupération des données
fetch('http://localhost:3000/api/teddies/')
  .then((response) => response.json())
  .catch((error) => {
    let messageError = document.querySelector(".cards");
    messageError.innerHTML =
      "Une erreur est survenue...";
    messageError.style.textAlign = "center";
    messageError.style.fontSize = "3em";
    messageError.style.marginTop = "15rem";
  })


