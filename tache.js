// 1. Je récupère toutes les boîtes qui ont l'étiquette "choix"
let toutesLesCartes = document.querySelectorAll(".choix");

// 2. Je crée ma liste vide qui va stocker les choix
let mesChoix = [];

// 3. Pour CHAQUE carte, je lui dis : quand on te clique, fais ça...
toutesLesCartes.forEach(carte => {
  carte.addEventListener("click", () => }
    
    // a) Tu deviens bleue / tu redeviens grise
    carte.classList.toggle("selectionne");
    
    // b) Je récupère ton texte (ex: "Informatique")
    let nom = carte.textContent;

    // c) Si tu es bleue, je t'ajoute à ma liste. Si tu redeviens grise, je t'enlève.
    if (mesChoix.includes(nom)) {
      mesChoix = mesChoix.filter(c => c !== nom); // retire
    } else {
      mesChoix.push(nom); // ajoute
    }

    // d) J'affiche la liste en bas dans le <p>
    document.querySelector("p").textContent = "Tes choix : " + mesChoix.join(", ");
  });
});