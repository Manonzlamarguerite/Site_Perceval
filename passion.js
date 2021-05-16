function ouvrir(partie){
  var i;
  //on rend tout invisible
  var elts = document.querySelectorAll('div.para');
  for(i=0;i<elts.length;i++){
    elts[i].style.display = 'none';
  }
  //on rend visible celui cliqué
  document.getElementById(partie).style.display = 'initial';
}
