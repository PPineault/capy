/* --------------------
Les Boutons cacher la descriptions de chaque item 
du carrousel
bouton fr ligne: 10 à 57
bouton en ligne : 58 à 105


----------------
*/
//bouton zoo fr
function plusinfozoo() {
  var avant = document.getElementById("avantzoo"); //endroit où il faut indique début élément à cacher
  var moreText = document.getElementById("morezoo"); //id de l'affaire diplay none
  var btnText = document.getElementById("Btnzoo"); // id du bouton

  if (avant.style.display === "none") {
    avant.style.display = "inline";
    btnText.innerHTML = "Montrer les détails"; //texte du bouton par default
    moreText.style.display = "none";
  } else {
    avant.style.display = "none";
    btnText.innerHTML = "Cacher les détails"; //texte après
    moreText.style.display = "inline";
  }
}
//bouton aqua fr
function plusinfoaqua() {
  var avant = document.getElementById("avantaqua"); //endroit où il faut indique début élément à cacher
  var moreText = document.getElementById("moreaqua"); //id de l'affaire diplay none
  var btnText = document.getElementById("Btnaqua"); // id du bouton

  if (avant.style.display === "none") {
    avant.style.display = "inline";
    btnText.innerHTML = "Montrer les détails"; //texte du bouton par default
    moreText.style.display = "none";
  } else {
    avant.style.display = "none";
    btnText.innerHTML = "Cacher les détails"; //texte après
    moreText.style.display = "inline";
  }
}
//bouton art fr
function plusinfoart() {
  var avant = document.getElementById("avantart"); //endroit où il faut indique début élément à cacher
  var moreText = document.getElementById("moreart"); //id de l'affaire diplay none
  var btnText = document.getElementById("Btnart"); // id du bouton

  if (avant.style.display === "none") {
    avant.style.display = "inline";
    btnText.innerHTML = "Montrer les détails"; //texte du bouton par default
    moreText.style.display = "none";
  } else {
    avant.style.display = "none";
    btnText.innerHTML = "Cacher les détails"; //texte après
    moreText.style.display = "inline";
  }
}
//bouton zoo english
function plusinfozooen() {
  var avant = document.getElementById("avantzooen"); //endroit où il faut indique début élément à cacher
  var moreText = document.getElementById("morezooen"); //id de l'affaire diplay none
  var btnText = document.getElementById("Btnzooen"); // id du bouton

  if (avant.style.display === "none") {
    avant.style.display = "inline";
    btnText.innerHTML = "Show details "; //texte du bouton par default
    moreText.style.display = "none";
  } else {
    avant.style.display = "none";
    btnText.innerHTML = "Hide details "; //texte après
    moreText.style.display = "inline";
  }
}
//bouton aqua english
function plusinfoaquaen() {
  var avant = document.getElementById("avantaquaen"); //endroit où il faut indique début élément à cacher
  var moreText = document.getElementById("moreaquaen"); //id de l'affaire diplay none
  var btnText = document.getElementById("Btnaquaen"); // id du bouton

  if (avant.style.display === "none") {
    avant.style.display = "inline";
    btnText.innerHTML = "Show details "; //texte du bouton par default
    moreText.style.display = "none";
  } else {
    avant.style.display = "none";
    btnText.innerHTML = "Hide details "; //texte après
    moreText.style.display = "inline";
  }
}
//bouton art english
function plusinfoarten() {
  var avant = document.getElementById("avantarten"); //endroit où il faut indique début élément à cacher
  var moreText = document.getElementById("morearten"); //id de l'affaire diplay none
  var btnText = document.getElementById("Btnarten"); // id du bouton

  if (avant.style.display === "none") {
    avant.style.display = "inline";
    btnText.innerHTML = "Show details "; //texte du bouton par default
    moreText.style.display = "none";
  } else {
    avant.style.display = "none";
    btnText.innerHTML = "Hide details "; //texte après
    moreText.style.display = "inline";
  }
}
/*
script point intérêts:
111 à 134
*/

//aleatoire de benoit pour le carrousel node cour écran 65
function aleaEntreBornes(bMin, bMax) {
  // retourne un nombre  aléatoire entre bMin et bMax inclusivement
  return bMin + Math.floor((bMax - bMin + 1) * Math.random());
}
function putJCycleCarrousel() {
  var nItems = $(" #carrousel-interet > div.item").length;
  var starHere = aleaEntreBornes(0, nItems - 1);
  $("#carrousel-interet").cycle({
    startingSlide: starHere,
    slides: "> div.item",
    fx: "fade",
    speed: 500,
    timeout: 0,
    next: " .boutons",
    prev: "  .boutonp",
  });
}

function audio() {
  /*audio :tout les audio sont stretching'auto'pour le responsive 
  puis moi j'aime mieux le widht à 300 à la place de 400 */
  $("audio").mediaelementplayer({ stretching: "auto", defaultAudioWidth: 300 });
}
// formulaire
function decorateLabels() {
  var labels = document.getElementsByTagName("label");
  var i, controlEl, id, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    id = label.htmlFor;
    controlEl = document.getElementById(id);
    label.classList.add("required");
    if (controlEl.required === false) {
      label.classList.remove("required");
    }
  }
}
//langue 151 à 193
var pagesDictionary = {
  "suggerer-lieu": {
    fr: "../fr/suggerer-lieu.html",

    en: "../en/suggest-location.html",
  },

  "a-propos": {
    fr: "../fr/a-propos.html",

    en: "../en/about-us.html",
  },

  "page-principale": {
    fr: "../fr/index.html",

    en: "../en/index.html",
  },
  "page-principale2": {
    fr: "fr/index.html",
  },
};
var enDic = {
  "page-principale1": {
    en: "en/index.html",
  },
};

function setAltLanguageLink() {
  var altLangLien = document.getElementById("alt-linguistique");
  var idPage = altLangLien.dataset.locationId;
  var altLang = altLangLien.lang;
  var url = pagesDictionary[idPage][altLang];
  altLangLien.href = url;
}
function anglais() {
  var altLangLien = document.getElementById("English");
  var idPage = altLangLien.dataset.locationId;
  var altLang = altLangLien.lang;
  var url = enDic[idPage][altLang];
  altLangLien.href = url;
}

// Bouton remonter en haut
var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
