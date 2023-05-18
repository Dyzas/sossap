// Attend que le document HTML soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
  // Récupère la référence du bouton de la modal
  var modalBtn = document.getElementById('myBtn');
  
  // Récupère la référence du bouton de fermeture de la modal
  var closeBtn = document.querySelector('.modal .close');
  
  // Récupère la référence de la modal
  var modal = document.getElementById('myModal');
  
  // Ajoute un gestionnaire d'événement au clic sur le bouton
  modalBtn.addEventListener('click', function() {
    // Ajoute la classe "show" à la modal pour l'afficher
    modal.classList.add('show');
  });
  
  // Ajoute un gestionnaire d'événement au clic sur le bouton de fermeture
  closeBtn.addEventListener('click', function() {
    // Retire la classe "show" de la modal pour la masquer
    modal.classList.remove('show');
  });
});
