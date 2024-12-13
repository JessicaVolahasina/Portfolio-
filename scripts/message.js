
  // Sélectionner le formulaire
  const contactForm = document.getElementById('contactForm');

  // Ajouter un gestionnaire d'événement pour la soumission
  contactForm.addEventListener('submit', function (event) {

    // Récupérer les valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Créer le résumé à afficher
    const summary = `
      Merci ${name} !
      Votre email : ${email}
      Votre message : ${message}
    `;

    // Afficher une alerte avec le résumé
    alert(summary);

    // Réinitialiser le formulaire après l'envoi (facultatif)
    contactForm.reset();
  });

