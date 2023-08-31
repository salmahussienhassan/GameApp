

export default class Detailes{
    constructor(id){
this.id=id
    }


    async gameDetailes(){

   
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '767815e2bfmshaaba58b6c920d34p13a167jsn1411999e2aa6',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);
            const result = await response.json();
            console.log(result);
            return result
        } 
        }
        






