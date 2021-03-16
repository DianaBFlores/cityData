
    async function cityLongAndLat(){
        let cityName = document.getElementById("search").value; //allows the cityName to equal the value in the search bar
        let response = await fetch("https://geocode.xyz/" + cityName + "?json=1"); 
        let data = await response.json(); 
    
        let longitude = data.longt; //fetching specifically the longitude
        let latitude = data.latt; //fetching specifically the latitude
        
        console.log(longitude +"," + latitude); //printing the long. and lat. in the console
      
    }