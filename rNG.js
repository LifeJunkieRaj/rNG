

function mrPodcastRNG (nameList) {
    
    let ranName = [];
    let winChikDin = Math.floor(Math.random() * nameList.length);
    
    for (let i = 0; i < nameList.length; i++) {
        if (i === winChikDin) {

            ranName.push(nameList[i])
    
        }
    
    }

return ranName.join()

}

let names = ["Manciety", "Poptosis"]
// let names = ["Culture Crumbs", "Manciety"]
console.log(mrPodcastRNG(names));



     // }
        // if ((ranName > 14 && ranName < 21) && (i !== ranName)) {
        //     ranName.push(nameListi[i - 7])
        //     console.log(nameList[i-7])
        // } else if ((ranName >= 21 && ranName < 31) && (i !== ranName)) {
        //     ranName.push(nameList[i - 17])
        // } else if ((ranName >= 31 && ranName < 41) && (i !== ranName)) {
        //     ranName.push(nameList[i - 27])
        // } else if ((ranName >= 41 && ranName < 51) && (i !== ranName))  {
        //     ranName.push(nameList[i - 37])
        // } else if ((ranName >= ranName && i < 61) && (i !== ranName)) {
        //     ranName.push(nameList[i - 47])
        // } else if ((ranName >= 61 && ranName < 71) && (i !== ranName)) {
        //     ranName.push(nameList[i - 57])
        // } else if ((ranName >= 71 && ranName < 81) && (i !== ranName)) {
        //     ranName.push(nameList[i - 67])
        // } else if ((ranName >= 81 && ranName < 91) && (i !== ranName)) {
        //     ranName.push(nameList[i - 77])
        // } else if ((ranName >= 91 && ranName < 101) && (i !== ranName))  {
        //     ranName.push(nameList[i - 87])
        // }