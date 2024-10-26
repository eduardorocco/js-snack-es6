//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e
//falli subiti e stampiamo tutto in console.

const serieA = [
    {

        name: 'Napoli',

        points: 0,

        fouls: 0

    },
    {

        name: 'Inter',

        points: 0,

        fouls: 0
    },
    {

        name: 'Juventus',

        points: 0,

        fouls: 0

    },
    {

        name: 'Milan',

        points: 0,

        fouls: 0

    },
    {

        name: 'Genoa',

        points: 0,

        fouls: 0
    },
    {

        name: 'Cagliari',

        points: 0,

        fouls: 0

    },
    {

        name: 'Bologna',

        points: 0,

        fouls: 0

    },
    {

        name: 'Firenze',

        points: 0,

        fouls: 0
    },
    {

        name: 'Como',

        points: 0,

        fouls: 0

    }
]

function randomNum50() {

    return Math.floor(Math.random() * 50) + 1
}

// console.log(serieA)

for (let i = 0; i < serieA.length; i++) {

    console.log(i)
}