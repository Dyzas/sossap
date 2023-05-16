document.addEventListener("DOMContentLoaded", function() {
  // Obtenez la modal 1
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  // Lorsque l'utilisateur clique sur le bouton, ouvrez la modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Lorsque l'utilisateur clique sur <span> (x), fermez la modal
  span.onclick = function() {
    modal.style.display = "none";
  }
})
