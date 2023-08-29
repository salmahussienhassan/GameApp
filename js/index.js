
import Game from "./game.js";

  // html elements
let game_container=document.querySelector('#game_container .row')
console.log(game_container)

let navItem=document.querySelectorAll('.nav-item') 
let detaileSection=document.querySelector('#detailes')
let gameSection=document.querySelector('#game')


// variables
let game= new Game('mmorpg');
let newGame
let box=''
let cardCols
let colsArr
// developer
// : 
// "Blizzard Entertainment"
// freetogame_profile_url
// : 
// "https://www.freetogame.com/overwatch-2"
// game_url
// : 
// "https://www.freetogame.com/open/overwatch-2"
// genre
// : 
// "Shooter"
// id
// : 
// 540
// platform
// : 
// "PC (Windows)"
// publisher
// : 
// "Activision Blizzard"
// release_date
// : 
// "2022-10-04"
// short_description
// : 
// "A hero-focused first-person team shooter from Blizzard Entertainment."
// thumbnail
// : 
// "https://www.freetogame.com/g/540/thumbnail.jpg"
// title
// : 
// "Overwatch 2"

// functions
async function displayData(obj){

let x= await obj.getData()
// console.log(x)
for(let i=0;i<x.length;i++){

if  (await isImageAvailable(x[i].thumbnail)){

    let words=x[i].short_description.trim().split(' ')
    let short_description=words.slice(0,10).join(' ')

    // console.log(isImageAvailable(x[i].thumbnail))
    box+=`      
    <div class="col-md-3 equal-height-row ">
    <div  id="card" class="d-flex flex-column rounded-3 ">
      <div  class="card-body flex-grow-1 p-3">
        <img class="img-fluid rounded-3" src="${x[i].thumbnail}" alt="game image">
    
        <div class="head text-white d-flex justify-content-between align-items-center my-3">
          <h5>${x[i].title}</h5>
          <button class="py-1 px-2 border-0 rounded-3 ">Free</button>
        </div>
        <p class="text-center p-0 fw-bold">${short_description} </p>
    
    
    
      </div>
      <footer class="d-flex justify-content-between text-white w-100 px-3 py-2 ">
        <span>${x[i].genre}</span>
        <span>${x[i].platform}</span>
        </footer>
    </div>
            
          
          </div>
         
    `
}
else{
   console.log('error')
   
}


   
}

game_container.innerHTML=box;
cardCols=game_container.querySelectorAll('.col-md-3')
colsArr=[...cardCols]
// console.log(cardCols)
// console.log(colsArr)
}






async function isImageAvailable(url){
    return new Promise(function(resolve){
        let img=new Image()
        img.src=url;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
    })

}


// events

document.addEventListener('DOMContentLoaded', async function(){
    
    // let x= await game.getData()
    // console.log(x)
  await displayData(game)

})

for (let i=0;i<navItem.length;i++){

    navItem[i].addEventListener('click',async function(e){
   $('.nav-link').removeClass('active')
      e.target.classList.add('active')
     let y= e.target.innerHTML.trim()
     console.log(e.target.innerHTML.trim()) 
     newGame=new Game(`${y}`)
  await displayData(newGame)
   
    })
}


// for(let i=0;i<colsArr.length;i++){
//     cardCols[i].addEventListener('click',function(){
//         console.log('hi')
//         gameSection.classList.replace('d-flex','d-none')
//         detaileSection.classList.replace('d-none','d-flex')
//     })
// }

  
