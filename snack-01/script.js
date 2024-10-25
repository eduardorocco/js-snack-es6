// Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bikesArray = [
    {

        name: 'Giulietta',

        weight: 20

    },
    {

        name: 'Light',

        weight: 15

    },
    {

        name: 'Bortolotti',

        weight: 10

    },
    {

        name: 'Fenix',

        weight: 11

    }
]

// console.log(bikesArray[1].peso)

//RIFERIMENTO, CICLO, IF

let weightestBike = bikesArray[0]


for (let i = 0; i < bikesArray.length; i++) {


    let currentElement = bikesArray[i]
    

    if (currentElement.weight < weightestBike.weight) {

        weightestBike = currentElement

    }
    
 }


 console.log(weightestBike)