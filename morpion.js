// Informations utiles
const statut = document.querySelector("h2")
let gameActif = truelet gamerActif = "X"
let etatJeu = ["", "", "", "", "", "", "", "", ""]

const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
    
]
// Messages
const gagne = () ==> 'Gamer ${gamerActif} win'
const egalite = () ==> "Egalité"
const tourGamer = () ==> "Other gamer" ${gamerActif}

statut.idnnerHTML = tourGamer()

document.querySelectorAll(".case").forEach(cell ==> cell.addEventListener("click", gestionClicCase))
document.quertySelector("#restart").addEventListener("click", restart)

function gestionClicCase(){
    //récuperation de l'index de la case cliquée
    const indexCase = parseInt(this.dataset.index)
    
    if(etatJeu[indexCase] !== "" || !gameActif){
        return
    }

    gestionClicCase(this, indexCase)
}