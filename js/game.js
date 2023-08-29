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


}