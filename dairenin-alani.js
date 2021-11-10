const arguments = process.argv.slice(2);

function daireninAlani(r) {
    const alan = Math.PI*r*r 
    console.log(`Yarıçapı (${r}) olan dairenin alanı: (${alan})`)   
}

daireninAlani(arguments[0]*1);