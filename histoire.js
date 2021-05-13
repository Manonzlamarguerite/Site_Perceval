

function nouvelOnglet() {
  var li = this.parentNode;
  var div = this.parentNode.parentNode.parentNode;
  var id = this.getAttribute('href');

  if (li.classList.contains('active')){
    return false;
  }

  //On supprime la class active de l'onglet actif
  div.querySelector('.contenue .active').classList.remove('active');

  //On ajoute la class active à notre onglet
  li.classList.add('active');

  div.querySelector('.contenueonglets ').classList.remove('active');

  div.querySelector(id).classList.add('active');
}
