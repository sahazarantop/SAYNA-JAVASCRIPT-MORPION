// select element HTML
let gridItemParent = document.getElementById('gridParent')
let gridItem = gridItemParent.children

let userChoice = document.getElementById('userChoice')
let choixX = document.getElementById('choixX')
let choixO = document.getElementById('choixO')

let pion , pionAdverse ;

let resultatJeu = document.getElementById('resultatJeu')
let h1ResultatJeu = resultatJeu.querySelector('h1')

let myScore =document.getElementById('myScore')
let cpuScore = document.getElementById('cpuScore')


let endGame = document.getElementById('endGame')

// score initiale
let myScoreInitial = 0
let cpuScoreInitial = 0

// transforme gridItem en un tableau
let gridCase = Array.from(gridItem)


// tableau vide pour stocke les position selectionner
let tableauX = []
let tableauO = []


// tableau de combinaisons possibles pour gagner
let resultatPossible = [
        [1,2,3],
        [4,5,6],
        [7,8,9],

        [1,4,7],
        [2,5,8],
        [3,6,9],

        [1,5,9],
        [3,5,7]
]


// fonction gerant le choix du pion de l'utilisateur
function userChoiceX() {
        userChoice.style.display ='none'
        pion = 'X'
        pionAdverse = 'O'
}
function userChoiceO() {
        userChoice.style.display ='none'
        pion = 'O'
        pionAdverse = 'X'
}


// fonction deterninant qui a gagne
function youWin() {
        for (let i = 0; i < resultatPossible.length; i++) {
                if (tableauX.includes(resultatPossible[i][0]) && tableauX.includes(resultatPossible[i][1]) && tableauX.includes(resultatPossible[i][2])) {

                        h1ResultatJeu.textContent = 'you win'
                        resultatJeu.style.display = 'flex'
                        myScoreInitial = myScoreInitial + 1

                        break
                }
        }
}

function youLose() {
        for (let i = 0; i < resultatPossible.length; i++) {
                if (tableauO.includes(resultatPossible[i][0]) && tableauO.includes(resultatPossible[i][1]) && tableauO.includes(resultatPossible[i][2])) {

                        h1ResultatJeu.textContent = 'you lose'
                        resultatJeu.style.display = 'flex'
                        cpuScoreInitial = cpuScoreInitial + 1

                        break
                }
        }
}


// choix de l'emplacement du pion de l'ordi 
function choixOrdi() {
        for (let i = 0; i < 9; i++) {
                if (gridCase[i].textContent === '') {
                        gridCase[i].textContent = pionAdverse
                        tableauO.push(i+1)
                        break
                }
        }
}


// appel des fonctions qui afffiche X ou O
function affiche0() {
        if (gridCase[0].textContent === '') {
                gridCase[0].textContent = pion
                tableauX.push
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche1() {
        if (gridCase[1].textContent === '') {
                gridCase[1].textContent = pion
                tableauX.push(2)
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche2() {
        if (gridCase[2].textContent === '') {
                gridCase[2].textContent = pion
                tableauX.push(3)
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche3() {
        if (gridCase[3].textContent === '') {
                gridCase[3].textContent = pion
                tableauX.push(4)
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche4() {
        if (gridCase[4].textContent === '') {
                gridCase[4].textContent = pion
                tableauX.push(5)
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche5() {
        if (gridCase[5].textContent === '') {
                gridCase[5].textContent = pion
                tableauX.push(6)
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche6() {
        if (gridCase[6].textContent === '') {
                gridCase[6].textContent = pion
                tableauX.push(7)
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche7() {
        if (gridCase[7].textContent === '') {
                gridCase[7].textContent = pion
                tableauX.push(8)
                youWin()

                choixOrdi()
                youLose()
        }
}

function affiche8() {
        if (gridCase[8].textContent === '') {
                gridCase[8].textContent = pion
                tableauX.push(9)
                youWin()

                choixOrdi()
                youLose()
        }
}

// fonction pour rejouer
function rejouer() {
        tableauX = []
        tableauO = []

        resultatJeu.style.display = 'none'
        cpuScore.textContent = cpuScoreInitial
        myScore.textContent = myScoreInitial

        for (let i = 0; i < gridCase.length; i++) {
                gridCase[i].textContent = ''
        }
}

// appel des evenements qui fait choisi le pion a l'utilisateur
choixX.addEventListener('click', userChoiceX)
choixO.addEventListener('click', userChoiceO)

// appel des evenements qui affiche 'X' ou 'O' a moment du click
gridCase[0].addEventListener('click' , affiche0)
gridCase[1].addEventListener('click' , affiche1)
gridCase[2].addEventListener('click' , affiche2)
gridCase[3].addEventListener('click' , affiche3)
gridCase[4].addEventListener('click' , affiche4)
gridCase[5].addEventListener('click' , affiche5)
gridCase[6].addEventListener('click' , affiche6)
gridCase[7].addEventListener('click' , affiche7)
gridCase[8].addEventListener('click' , affiche8)

endGame.addEventListener('click', rejouer)
