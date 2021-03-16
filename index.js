
    async function cityLongAndLat(){
        let cityName = document.getElementById("search").value; 
        let response = await fetch("https://geocode.xyz/" + cityName + "?json=1"); 
        let data = await response.json(); 
    
        let longitude = data.longt; //gets longitude
        let latitude = data.latt; //get lattitude
        
        console.log(longitude +"," + latitude); //
      
    }
       cityLongAndLat();

       
  //   async function loadJson(url) { 
  //     let response = await fetch(url); 
    
  //     if (response.status == 200) {
  //       let json = await response.json(); 
  //       return responce.json;
  //     }
  //     else{
  //     throw new Error(response.status);
  //   }
  // }
  //   loadJson('http://httpstat.us/500');
       