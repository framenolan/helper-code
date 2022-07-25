let bottomOfRange = 0
let topOfRange = 1

function randomInt (bottomOfRange, topOfRange){
    let varRand = Math.floor(Math.random() * topOfRange)
    
    if (varRand < bottomOfRange) {
        
    }
    
    console.log(varRand)
    return varRand
}

randomInt(5,10);