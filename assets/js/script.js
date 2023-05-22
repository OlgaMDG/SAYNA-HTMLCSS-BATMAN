document.getElementById('confirmer').addEventListener('click', function() {
    // Vérification des champs
    var frequency = document.getElementById('frequency').value;
    var checkboxes = document.querySelectorAll('.theme-button:checked');
    var checkbox = document.getElementById('checkbox').checked;
    
    if (frequency && checkboxes.length > 0 && checkbox) {
      // Affichage de la boîte de dialogue
      alert("L'opération a été effectuée avec succès !");
    } else {
      // Affichage d'un message d'erreur
      alert("Veuillez remplir tous les champs et accepter les termes et conditions.");
    }
  });
 
  
  
  
  
  
  
  