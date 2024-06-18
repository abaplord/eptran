collumns = document.getElementsByClassName("collumn")
function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

imgs = ["crosswalk.png", "crosswalk.png",
        "traffic-lights.png", "traffic-lights.png",
        "traffic-cone.png", "traffic-cone.png",
        "stop-sign.png", "stop-sign.png",
        "hatchback.png", "hatchback.png",
        "car.png", "car.png",
        "slippery-sign.png", "slippery-sign.png",
        "traffic-sign.png", "traffic-sign.png",
        "no-u-turn.png", "no-u-turn.png",
        "speed-limit.png", "speed-limit.png"
        ]

queue = [0, 1, 
         2, 3,
         4, 5,
         6, 7,
         8, 9,
         10, 11,
         12, 13,
         14, 15,
         16, 17,
         18, 19
        ]




shuffle(queue);
// for (i = 0; i < 12; i++){
//     collumns[queue[0]].innerHTML = 
//     collumns[queue[1]].innerHTML = `<img class="cards" src="../style/img/${imgs[1]}">`
//     collumns[queue[2]].innerHTML = `<img class="cards" src="../style/img/${imgs[2]}">`
//     collumns[queue[3]].innerHTML = `<img class="cards" src="../style/img/${imgs[3]}">`
//     collumns[queue[4]].innerHTML = `<img class="cards" src="../style/img/${imgs[4]}">`
//     collumns[queue[5]].innerHTML = `<img class="cards" src="../style/img/${imgs[5]}">`
//     collumns[queue[6]].innerHTML = `<img class="cards" src="../style/img/${imgs[6]}">`
//     collumns[queue[7]].innerHTML = `<img class="cards" src="../style/img/${imgs[7]}">`
//     collumns[queue[8]].innerHTML = `<img class="cards" src="../style/img/${imgs[8]}">`
//     collumns[queue[9]].innerHTML = `<img class="cards" src="../style/img/${imgs[9]}">`
//     collumns[queue[10]].innerHTML = `<img class="cards" src="../style/img/${imgs[10]}">`
//     collumns[queue[11]].innerHTML = `<img class="cards" src="../style/img/${imgs[11]}">`
//     collumns[queue[12]].innerHTML = `<img class="cards" src="../style/img/${imgs[12]}">`
//     collumns[queue[13]].innerHTML = `<img class="cards" src="../style/img/${imgs[13]}">`
//     collumns[queue[14]].innerHTML = `<img class="cards" src="../style/img/${imgs[14]}">`
//     collumns[queue[15]].innerHTML = `<img class="cards" src="../style/img/${imgs[15]}">`
//     collumns[queue[16]].innerHTML = `<img class="cards" src="../style/img/${imgs[16]}">`
//     collumns[queue[17]].innerHTML = `<img class="cards" src="../style/img/${imgs[17]}">`
//     collumns[queue[18]].innerHTML = `<img class="cards" src="../style/img/${imgs[18]}">`
//     collumns[queue[19]].innerHTML = `<img class="cards" src="../style/img/${imgs[19]}">`
// }
// for (var i = 0;i<19;i++){
//     collumns[i].addEventListener("click", function (e) {
//         this.innerHTML = `<img class="cards" src="../style/img/${imgs[queue[i]]}">`
//     })
// }

var last = "null"

console.log(queue)

function clicked(elm){
    var element = elm.attributes[0].value
    var last_two = element.slice(-2)

    img = imgs[queue[parseInt(last_two)]]

    elm.innerHTML = `<img class="cards" src="../style/img/${img}">`
    if (last === "null"){
        last = img
    }else{
        if(last == img){
            imgs[queue[parseInt(last_two)]] = ""
        }
    }
}

