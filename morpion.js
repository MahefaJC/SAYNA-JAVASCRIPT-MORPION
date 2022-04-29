// Informations utiles
const statut = document.querySelector("h2")
let jeuActif = true
let gamerActif = "X"
let etatJeu = ["", "", "", "", "", "", "", "", ""]

const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    
]

// Messages
const gagne = () =>'Le joueur ${gamerActif} a gagné'
const egalite = () => "Egalité"
const tourJoueur = () => "C'est au tour du joueur $
{gamerActif}"

statut.innerHTML = tourJoueur()

document.querySelectorAll(".case").forEach(cell => cell.
    addEventListener("click", gestionClicCase))
document.quertySelector("#restart").addEventListener
("click", restart)

function gestionClicCase(){
    //récuperation de l'index de la case cliquée
    const indexCase = parseInt(this.dataset.index)
    
    if(etatJeu[indexCase] !== "" || !gameActif){
        return
    }

    etatJeu[indexCase] = gamerActif
    this.innerHTML = gamerActif
}

