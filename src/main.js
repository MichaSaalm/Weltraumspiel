window.onload = function() {
    // textData
    const messages = [
    "Welcome to the Galactic Explorer! Your adventure begins now.",
    "You have entered a nebula. The colors around you are breathtaking.",
    "A strange alien ship has appeared. Do you fight or flee?",
    "You've discovered a new planet. Its surface is teeming with unknown life.",
    "Your fuel is running low. Find a planet with resources quickly!",
    "You've encountered a space anomaly. It's pulling your ship in!",
    "A meteor shower is approaching. Brace for impact!",
    "You've found an abandoned space station. Do you dare to explore it?",
    "Your ship is damaged! Find a place to land and repair.",
    "You've received a distress signal. Will you answer the call?",
    "You've discovered an ancient alien artifact. What secrets does it hold?",
    "You've landed on a planet with a hostile environment. Proceed with caution.",
    "You've made first contact with an alien species. They seem friendly... for now.",
    "You've found a rare resource. This will fetch a high price at the next spaceport.",
    "You've successfully navigated through an asteroid field. Well done, captain!",
    "You've reached the edge of the known universe. Do you dare to venture into the unknown?"
];
  



    //areas
    const eventArea = document.getElementById('eventArea');
    const inputArea = document.getElementById('inputArea');
    const outputArea = document.getElementById('outputArea');
    const submitButton = document.getElementById('submitButton');
    
    submitButton.addEventListener('click', function() {
        let inputValue = inputArea.value;
        inputArea.value = "";
        console.log(inputValue);
        console.log("loaded");
        console.log("clicked");          
            eventArea.innerHTML = inputValue;
    });



};

