import { gameSection,detaileSection,getDetailes } from "./index.js";
import Detailes from "./detailes.js";

export default class Game{

    constructor(category){
this.category=category
    }
   
    
    async getData(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '767815e2bfmshaaba58b6c920d34p13a167jsn1411999e2aa6',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,options)
        const result = await response.json();
       return result
    }

displayDetailes(arr){
    
    for(let i=0;i<arr.length;i++){
        arr[i].addEventListener('click',async function(){
            let detailes=new Detailes(this.id)
            $('.loading').css('display','flex')
           let resultDetailes= await detailes.gameDetailes()
           $('.loading').css('display','none')
           $(this.body).css('overflow-y','auto')
           getDetailes(resultDetailes)
          
            console.log(this.id)
            gameSection.classList.replace('d-block','d-none')
          

            detaileSection.classList.replace('d-none','d-flex')
           
        })
        
    }
    

}

}