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
     Images.innerHTML = '<img src="img/gold sniper.jpg" alt="gold sniper">' + 
     '<img src="img/gold bolt stats.jpg" alt="gold bolt stats">' + 
     '<img src="img/purple bolt.jpg" alt="purple bolt">' + 
     '<img src="img/purple bolt stats.jpg" alt="purple bolt stats">' +
     '<img src="img/blue bolt.jpg" alt="blue bolt">' + 
     '<img src="img/blue bolt stats.jpg" alt="blue bolt stats">' + 
     '<img src="img/gold semi auto.jpg" alt="gold semi auto ">' +
     '<img src="img/gold semi auto stats.jpg" alt="gold semi auto stats">'+
     '<img src="img/purple semi auto sniper.jpg" alt="purple semi auto sniper">' +
     '<img src="img/purple semi auto sniper stats.jpg" alt="purple semi auto sniper stats">'; 
    
    
    
     }
     
     // Shows you different types of assult rifles  
     if(Firearms === "Assult Rifles"){
        Images.innerHTML = '<img src="img/common assult rifle.jpg" alt="commun assult rifle">'+
        '<img src="img/common assult rifle stats.jpg" alt="common assult rifle stats">'+
        '<img src="img/green assault rifle.jpg" alt="green assault rifle">' +
        '<img src="img/green assault rifle stats.jpg" alt="green assault rifle stats">' +
        '<img src="img/blue assault rifle.jpg" alt=" blue assaut rifle">' +
        '<img src="img/blue assault rifle stats.jpg" alt="blue assault rifle stats">' +
        '<img src="img/common burst.jpg" alt="common burst">' +
        '<img src="img/common burst stats.jpg" alt="common burst stats">' +
        '<img src="img/green burst.jpg" alt="green burst">' +
        '<img src="img/green burst stats.jpg" alt="green burst stats">' +
        '<img src="img/blue burst.jpg" alt="blue burst">' +
        '<img src="img/blue burst stats.jpg" alt="blue burst stats">' +
        '<img src="img/blue scope.jpg" alt="blue scope">'+
        '<img src="img/blue scope stats.jpg" alt="blue scope stats">' +
        '<img src="img/purple scope.jpg" alt="purple scope">' +
        '<img src="img/purple scope stats.jpg" alt="purple scope stats">' +
        '<img src="img/purple scar.jpg" alt="purple scar">' +
        '<img src="img/purple scar stats.jpg" alt="purple scar stats">' +
        '<img src="img/gold scar.jpg" alt="gold scar">' +
        '<img src="img/gold scar stats.jpg" alt="gold scar stats">'
     }
    
      // Shows you different types of shotguns  
     if(Firearms === "Shotguns"){
        Images.innerHTML = '<img src="img/common pump.jpg" alt="common pump">' +
        '<img src="img/common pump stats.jpg" alt="common pump stats">' +
        '<img src="img/green pump.jpg" alt="green pump">' +
        '<img src="img/green pump stats.jpg" alt="green pump stats">' +
        '<img src="img/green tac.jpg" alt="green tac">' +
        '<img src="img/green tac stats.jpg" alt="green tac stats">' +
        '<img src="img/blue tac.jpg" alt="blue tac">' + 
        '<img src="img/blue tac stats.jpg" alt="blue tac stats">' +
        '<img src="img/purple tac.jpg" alt="purple tac">' + 
        '<img src="img/purple tac stats.jpg" alt="purple tac stats">'
     }
     
       // Shows you different types of pisrols  
     if(Firearms === "Pistols"){
        Images.innerHTML = '<img src="img/common pistol.jpg" alt="common pistol">' +
        '<img src="img/common pistol stats.jpg" alt="common pistol stats">' + 
         '<img src="img/green pistol.jpg" alt="green pistol">' +
          '<img src="img/green pistol stats.jpg" alt="green pistol stats">' +
           '<img src="img/blue pistol.jpg" alt="blue pistol">' +
            '<img src="img/blue pistol stats.jpg" alt="blue pistol stats">' +
             '<img src="img/common revolver.jpg" alt="common revolver">' +
              '<img src="img/common revolver stats.jpg" alt="common revolver stats">' +
               '<img src="img/green revolver.jpg" alt="green revolver">' +
                '<img src="img/green revolver stats.jpg" alt="green revolver stats">' +
                 '<img src="img/blue revolver.jpg" alt="blue revolver">' +
                  '<img src="img/blue revolver stats.jpg" alt="blue revolver stats">' +
                   '<img src="img/purple pistol.jpg" alt="purple pistol">' +
                    '<img src="img/purple pistol stats.jpg" alt="purple pistol stats">' +
                     '<img src="img/gold pistol.jpg" alt="gold pistol">' +
                      '<img src="img/gold pistol stats.jpg" alt="gold pistol stats">' +
                       '<img src="img/purple hand cannon.jpg" alt="purple hand cannon">' +
                         '<img src="img/purple hand cannon stats.jpg" alt="purple hand cannon stats">' +
                          '<img src="img/gold hand cannon.jpg" alt="gold hand cannon">' +
                           '<img src="img/gold hand cannon stats.jpg" alt="gold hand cannon stats">'
         
        
     }
     
       // Shows you different types of grenades  
     if(Firearms === "Grenades"){
        Images.innerHTML =  '<img src="img/grenade.jpg" alt="grenade stats">' +
         '<img src="img/grenade stats.jpg" alt="grenade stats">' +
          '<img src="img/smoke grenade.jpg" alt="smoke grenade">' +
           '<img src="img/smoke grenade stats.jpg" alt="smoke grenade stats">' +
            '<img src="img/boogie bomb.jpg" alt="boogie bomb">' +
             '<img src="img/boogie bomb stats.jpg" alt="boogie bomb stats">' +
              '<img src="img/impulse grenade.jpg" alt="impulse grenade">' +
               '<img src="img/impulse grenade stats.jpg" alt="impulse grenade stats">'
     }
     
   
       // Shows you different types of special weapons  
     if(Firearms === "Special Weapons"){
        Images.innerHTML =  '<img src="img/blue rpg.jpg" alt="blue rpg">' +
         '<img src="img/blue rpg stats.jpg" alt="blue rpg stats">' +
          '<img src="img/purple rpg.jpg" alt="purple rpg">' +
           '<img src="img/purple rpg stats.jpg" alt="purple rpg stats">' +
            '<img src="img/gold rpg.jpg" alt="gold rpg">' +
             '<img src="img/gold rpg stats.jpg" alt="gold rpg stats">' +
              '<img src="img/blue grenade launcher.jpg" alt="blue grenade launcher">' +
                '<img src="img/blue grenade launcher stats.jpg" alt="blue grenade launcher stats">' +
                '<img src="img/purple grenade launcher.jpg" alt="purple grenade launcher">' +
                 '<img src="img/purple grenade launcher stats.jpg" alt="purple grenade launcher stats">' +
                  '<img src="img/gold grenade launcher.jpg" alt="gold grenade launcher">' +
                   '<img src="img/gold grenade launcher stats.jpg" alt="gold grenade launcher stats">' +
                    '<img src="img/purple minigun.jpg" alt="purple minigun">' +
                     '<img src="img/purple minigun stats.jpg" alt="purple minigun stats">' +
                      '<img src="img/gold minigun.jpg" alt="gold mini">' +
                       '<img src="img/gold minigun stats.jpg" alt="gold minigun stats">' +
                        '<img src="img/blue crossbow.jpg" alt="blue crossbow">' +
                         '<img src="img/blue crossbow stats.jpg" alt="blue crossbow stats">' +
                          '<img src="img/purple crossbow.jpg" alt="purple crossbow">' +
                           '<img src="img/purple crossbow stats.jpg" alt="purple crossbow stats">' 
     }

           // Shows you different types of sub machineguns  
     if(Firearms === "Sub Machineguns"){
        Images.innerHTML = "";
     }

     
});
    