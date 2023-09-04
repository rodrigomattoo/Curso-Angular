interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year:number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Es Sheeran",
        year: 2015
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration, details } = audioPlayer;
const { author } = details;

// console.log(anotherSong);
// console.log(songDuration);

const [ , , trunks = 'Not founds'] : string [] = ['Goku', 'Vegeta'];

console.log('Personaje 3: ' + trunks || 'No hay personaje.');


export{};