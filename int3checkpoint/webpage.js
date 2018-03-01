// Select Different Type Of Guns
var Weapons = document.getElementById("Weapons");
var Display = document.getElementById("Display");
var Stats = document.getElementById("Stats");
var Images = document.getElementById("Images");



// Display brings up the weapons stats 
Display.addEventListener("click", function(){
    //Checks the Weapons tab
    var Firearms = Weapons.value;

    // Shows you different types of snipers  
     if(Firearms === "Snipers"){
     Images.innerHTML = '<img src="gold sniper.jpg" alt="gold sniper"> <img src="img/gold bolt stats.jpg" alt="gold bolt stats">';
    
    
    
     }
     
     // Shows you different types of assult rifles  
     if(Firearms === "Assult Rifles"){
        Images.innerHTML = "";
     }
    
      // Shows you different types of shotguns  
     if(Firearms === "Shotguns"){
        Images.innerHTML = "";
     }
     
       // Shows you different types of pisrols  
     if(Firearms === "Pistols"){
        Images.innerHTML = "";
     }
     
       // Shows you different types of grenades  
     if(Firearms === "Grenades"){
        Images.innerHTML = "";
     }
     
   
       // Shows you different types of special weapons  
     if(Firearms === "Special Weapond"){
        Images.innerHTML = "";
     }

           // Shows you different types of sub machineguns  
     if(Firearms === "Sub Machineguns"){
        Images.innerHTML = "";
     }

     
});
    