import Game from "./game.js";



// html elements
let game_container=document.querySelector('#game_container .row')

let navItem=document.querySelectorAll('.nav-item') 
export let detaileSection=document.querySelector('#detailes')
export let gameSection=document.querySelector('#game')



// variables
let game= new Game('mmorpg');


// functions

async function displayData(obj){
  console.log('hi')
  let box=''
let x= await obj.getData()
console.log(x)
for(let i=0;i<x.length;i++){
 
if  (await isImageAvailable(x[i].thumbnail)){

  let words=x[i].short_description.trim().split(' ')
  let short_description=words.slice(0,10).join(' ')

  // console.log(isImageAvailable(x[i].thumbnail))
  box+=`      
  <div id="${x[i].id}" class="col-md-3 equal-height-row ">
  <div   class="d-flex flex-column rounded-3 card">
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
let arr=[...game_container.querySelectorAll('.col-md-3')]

obj.displayDetailes(arr)
}


async function isImageAvailable(url){
  return new Promise(function(resolve){
      let img=new Image()
      img.src=url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
  })

}


 export function getDetailes(x){
 

    let box='';
    box=` <div class="container">
    <div class="detailes-nav d-flex justify-content-between my-2">
      <h1 class="text-white">Details Game</h1>
      <button class="btn-close btn-close-white" id="btnClose"></button>

    </div>
    <div class="row">
      <div class="col-md-4">
        <img class="img-fluid" src="${x.thumbnail}" alt="not found">
      </div>
      <div class="col-md-8 text-white">
<h2>
  Title: ${x.title}</h2>
<h5 >Category: <span class="px-1 rounded-2 text-dark bg-info">${x.genre}</span> </h5>
<h5 >Platform: <span class="px-1 rounded-2 text-dark bg-info">${x.platform}</span> </h5>
<h5 >Status: <span class="px-1 rounded-2 text-dark bg-info">Live</span> </h5>


        <p class="my-2">${x.short_description}</p>
      <a href="${x.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
      
      </div>
    </div>
  </div>`;

  detaileSection.innerHTML=box
  let btnClose=document.querySelector('#btnClose')

  btnClose.addEventListener('click',function(){
   
   detaileSection.classList.replace('d-flex','d-none')
           
 
   gameSection.classList.replace('d-none','d-block')
  
  }) 
   
  
}



// events

document.addEventListener('DOMContentLoaded', async function(){
  $('.loading').css('display','flex')
  
  // let x= await game.getData()
  // console.log(x)
await displayData(game)
$('.loading').css('display','none')
$(this.body).css('overflow-y','auto')
})

for (let i=0;i<navItem.length;i++){

  navItem[i].addEventListener('click', async function(e){
 $('.nav-link').removeClass('active')
    e.target.classList.add('active')
   let y= e.target.innerHTML.trim()
   console.log(e.target.innerHTML.trim()) 
   let newGame=new Game(`${y}`)
   $('.loading').css('display','flex')
await displayData(newGame)
$('.loading').css('display','none')
$(this.body).css('overflow-y','auto')
  })
}



