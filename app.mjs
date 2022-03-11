import { data } from './modules/data.mjs';
import { selector } from './modules/utilities.mjs';


// Randomly select 1 rock song, 1 metal song, and 1 quote

const rock_song = selector(data.rock_songs);
const metal_song = selector(data.metal_songs);
const quote = selector(data.quotes);


// Output the results

console.log(`
    If you you are craving some rock music, here are some suggestions for you!
     * '${rock_song}'
     * '${metal_song}'
    Also, here is a quote to inspire you: 
     * '${quote}'
`)