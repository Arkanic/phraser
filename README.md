# phraser
Tool for bip39 seeds - create checksum word, generate seed phrases offline, and get word indexes

Try it out - [https://arkanic.github.io/phraser](https://arkanic.github.io/phraser)

### USE AT YOUR OWN RISK!!!
It isn't my fault if your seeds get leaked! this tool provides no extra security for said seeds, and is only meant for test usage!

Similarly, using a seed phrase you chose yourself (i.e. one that follows some sort of mathematical or readable pattern (like ability, ability, ability....)) is a security risk that defeats the purpose of the seed phrase!

Furthermore, this is a browser-based application and is therefore vulnerable to snooping from extensions, seeds remaining in the browsers cache, etc. If anyone wants some degree of security please create an issue so that I know that this is a tool worth spending time on (at the moment it is a complete hack)

## Usage
BIP39 seed phrases contain 12 words from a list of 2048 words. The last word also acts as a checksum. This tool generates the seed with the correct checksum at the end when given 12 words from the list. The resulting seed can then be used as a wallet phrase.

### Example:
The seed 
`abandon ability able about above absent absorb abstract absurd abuse access accident`
(the first 12 words in a row) results in the seed
`abandon ability able about above absent absorb abstract absurd abuse access ability`
Notice how they are exactly the same except the last word has been modified so that it produces a correct checksum.

The code itself is just a html/js mess, and therefore can be run by downloading the code and opening index.html in your browser, running the server.js node file, or simply just visiting the online version (link above)

## Author
[Arkanic](https://github.com/Arkanic)