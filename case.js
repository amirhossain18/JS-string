const lyrics = 'tumi bondhu kala pakhi ami jeno ki , bonsonto kale tomay bolte pari ni '

const searchString='Pakhi';
// const doesExist= lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist= lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);