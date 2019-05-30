// Object literal enhancement                                                                                                                                                                         
const band = 'Metallica';
const genre = 'Heavy Metal';
const songs = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman'];

//Old
const metallica = {
  band: band,
  genre: genre,
  songs: songs
}

//New
const metallica = { band, genre, songs };

console.log(metallica)