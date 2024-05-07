let pChoice = document.querySelector(".playerChoice h2");
let CChoice = document.querySelector(".computerChoice h2");
let result = document.querySelector(".result h2");

//add array for CPU
let icons = ["Bulbasaur 🌿", "Charmander 🔥", "Squirtle 💧"]

function playFire() {
    CChoice.textContent = " "
    result.textContent = " "
    pChoice.style.color = "hsl(354, 62%, 35%)";
    pChoice.textContent = "Charmander 🔥"
    //random selction for computer using array
    CPUchoice = icons[Math.floor(Math.random() * icons.length)];
    setTimeout(function() {
      CChoice.textContent = CPUchoice
    },500)
          if (CPUchoice == "Bulbasaur 🌿") {
             setTimeout(function() {
               CChoice.style.color = "hsl(112, 61%, 35%)";
             },500)
             setTimeout(function() {
               result.textContent = "🏆 YOU WIN! 🏆"
             },1500)            
          }
          else if (CPUchoice == "Charmander 🔥") {
             setTimeout(function() {
               CChoice.style.color = "hsl(354, 62%, 35%)";
             },500)
             setTimeout(function() {
               result.textContent = "🤝 IT'S A DRAW! 🤝"
             },1500)
          } 
          else {
             setTimeout(function() {
               CChoice.style.color = "hsl(215, 61%, 34%)";
             },500)
             setTimeout(function() {
               result.textContent = "😭 YOU LOSE! 😭"
             },1500)
          }
}

function playWater() {
    CChoice.textContent = " "
    result.textContent = " "
    pChoice.style.color = "hsl(215, 61%, 34%)";
    pChoice.textContent = "Squirtle 💧"
    CPUchoice = icons[Math.floor(Math.random() * icons.length)];
    setTimeout(function() {
      CChoice.textContent = CPUchoice
    },500)
      
    if (CPUchoice == "Bulbasaur 🌿") {
       setTimeout(function() {
         CChoice.style.color = "hsl(112, 61%, 35%)";
       },500)
       setTimeout(function() {
         result.textContent = "😭 YOU LOSE! 😭"
       },1500)
    }
    else if (CPUchoice == "Charmander 🔥") {
       setTimeout(function() {
         CChoice.style.color = "hsl(354, 62%, 35%)";
       },500)
       setTimeout(function() {
         result.textContent = "🏆 YOU WIN! 🏆"
       },1500)
    } 
    else {
       setTimeout(function() {
        CChoice.style.color = "hsl(215, 61%, 34%)";
       },500)
       setTimeout(function() {
        result.textContent = "🤝 IT'S A DRAW! 🤝"
       },1500)
    }
}

function playGrass() {
    CChoice.textContent = " "
    result.textContent = " "
    pChoice.style.color = "hsl(112, 61%, 35%)";
    pChoice.textContent = "Bulbasaur 🌿"
    CPUchoice = icons[Math.floor(Math.random() * icons.length)];
    setTimeout(function() {
      CChoice.textContent = CPUchoice
    },500)

    if (CPUchoice == "Bulbasaur 🌿") {
       setTimeout(function() {
         CChoice.style.color = "hsl(112, 61%, 35%)";
       },500)
       setTimeout(function() {
         result.textContent = "🤝 IT'S A DRAW! 🤝"
       },1500)
    }
    else if (CPUchoice == "Charmander 🔥") {
       setTimeout(function() {
         CChoice.style.color = "hsl(354, 62%, 35%)";
       },500) 
       setTimeout(function() {
         result.textContent = "😭 YOU LOSE! 😭"
       },1500)
    } 
    else {
       setTimeout(function() {
         CChoice.style.color = "hsl(215, 61%, 34%)";
       },500)
       setTimeout(function() {
         result.textContent = "🏆 YOU WIN! 🏆"
       },1500)
    }
}



//clear/reset function to replay