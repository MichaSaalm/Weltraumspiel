window.onload = function() {
    let name = prompt("Please enter your name: ");
    
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class GameNode extends TreeNode {
    constructor(key, result, choices) {
        super(key); 
        this.result = result;
        this.choices = choices;
    }
   
  
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

class GameTree extends BinaryTree {
    constructor() {
        super();
        this.currentNode = null;
    }

    addPlaceholderValues() {
        gameTree.insert(32, name + ", You wake up in a spaceship. There are two buttons in front of you: a red one and a blue one.", "Which one do you press?");
        
        // Red button path
        gameTree.insert(16, "You pressed the red button. The spaceship starts to shake violently.", "Do you try to stabilize it or brace for impact?");
        gameTree.insert(8, "You tried to stabilize the spaceship. It's a success! You're now floating in space.", "Do you explore the spaceship or try to land on a nearby planet?");
        gameTree.insert(4, "You decided to explore the spaceship. You find an alien device.", "Do you activate the device or leave it alone?");
        gameTree.insert(2, "You activated the alien device. A hologram appears with a message.", "Do you decode the message or turn off the device?");
        gameTree.insert(1, "You decoded the message from the hologram. It contains coordinates to a hidden treasure.", "Do you follow the coordinates or ignore them?");
        gameTree.insert(3, "You turned off the device. A hidden door suddenly opens, revealing a secret room.", "Do you enter the secret room or leave it alone?");
        gameTree.insert(5, "You left the device alone. Suddenly, you hear strange noises from outside the spaceship.", "Do you investigate the noises or lock all entrances?");
        gameTree.insert(7, "You investigated the noises outside. You find a group of friendly aliens.", "Do you communicate with them or observe quietly?");
        gameTree.insert(6, "You locked all entrances. The noises stop, and you feel safe for now.", "Do you continue exploring the spaceship or rest?");
        
        gameTree.insert(12, "You decided to land on a nearby planet. It's lush and teeming with life.", "Do you explore the jungle or set up a base camp?");
        gameTree.insert(10, "You explored the jungle. You encounter an alien creature.", "Do you approach the creature or observe from a distance?");
        gameTree.insert(9, "You approached the alien creature. It's friendly and offers you a gift.", "Do you accept the gift or politely decline?");
        gameTree.insert(11, "You observed the creature from a distance. It seems to be guarding something.", "Do you investigate what it's guarding or leave it alone?");
        gameTree.insert(14, "You set up a base camp. It's peaceful, but you feel like you're being watched.", "Do you search the area for potential threats or stay at the camp and set up defenses?");
        gameTree.insert(13, "You searched the area for potential threats. You find tracks leading away from your camp.", "Do you follow the tracks or fortify your camp?");
        gameTree.insert(15, "You set up defenses at the camp. The night passes uneventfully.", "Do you explore further in the morning or stay at the camp?");
        
        gameTree.insert(24, "You braced for impact. The spaceship crashes on a deserted planet.", "Do you try to fix the spaceship or explore the planet?");
        gameTree.insert(20, "You tried to fix the spaceship. It starts working again, but you're low on fuel.", "Do you search for fuel on the planet or try to contact someone for help?");
        gameTree.insert(18, "You searched for fuel on the planet. You find an energy source, but it's guarded by alien sentries.", "Do you try to negotiate with the sentries or sneak past them?");
        gameTree.insert(17, "You tried to negotiate with the sentries. They agree to help you in exchange for a favor.", "Do you agree to their terms or refuse?");
        gameTree.insert(19, "You tried to sneak past the sentries. You succeed but at a cost.", "Do you continue searching for fuel or return to your spaceship?");
        gameTree.insert(22, "You tried to contact someone for help. A friendly voice responds, offering assistance.", "Do you accept the help or be wary and decline?");
        gameTree.insert(21, "You accepted the help. A rescue team arrives to assist you.", "Do you go with them or insist on staying to complete your mission?");
        gameTree.insert(23, "You declined the help. The voice warns you of impending danger.", "Do you take the warning seriously or dismiss it?");
        
        gameTree.insert(28, "You decided to explore the planet. You discover ancient ruins.", "Do you investigate the ruins or keep exploring?");
        gameTree.insert(26, "You investigated the ruins. You find an artifact with mysterious symbols.", "Do you take the artifact or leave it?");
        gameTree.insert(25, "You took the artifact. It glows brightly and hums with energy.", "Do you study it further or secure it in your spaceship?");
        gameTree.insert(27, "You left the artifact. Suddenly, the ground trembles and a hidden passage opens.", "Do you enter the passage or stay outside?");
        gameTree.insert(30, "You kept exploring the planet. You discover a hidden cave with glowing crystals.", "Do you enter the cave or stay outside and study the crystals?");
        gameTree.insert(29, "You entered the cave with the glowing crystals. They emit a strange, mesmerizing light.", "Do you collect some crystals or leave them untouched?");
        gameTree.insert(31, "You stayed outside and studied the crystals. They seem to be a power source.", "Do you take a sample or leave them alone?");
        gameTree.insert(48, "You pressed the blue button. A soothing melody starts to play.", "Do you try to find the source of the music or just enjoy it?");
        gameTree.insert(40, "You tried to find the source of the music. You find a hidden compartment with a map.", "Do you follow the map or ignore it?");
        gameTree.insert(56, "You just enjoyed the music. Suddenly, you see a spaceship approaching.", "Do you try to communicate with it or hide?");
        gameTree.insert(36, "You followed the map. It leads you to a secret chamber with advanced technology.", "Do you take the technology or leave it?");
        gameTree.insert(44, "You ignored the map. Suddenly, the ship's alarms go off.", "Do you investigate the alarms or prepare to evacuate?");
        gameTree.insert(42, "You tried to communicate with the approaching spaceship. They respond and offer help.", "Do you trust them and dock with their ship or stay cautious and keep your distance?");
        gameTree.insert(52, "You decided to hide. The approaching spaceship scans the area and leaves.", "Do you continue to hide or come out and explore?");
        gameTree.insert(34, "You take the technology. It enhances your spaceship's capabilities.", "Do you explore further with your enhanced ship or return to your mission?");
        gameTree.insert(38, "You leave the technology. Suddenly, you hear footsteps behind you.", "Do you turn around to confront or hide?");
        gameTree.insert(46, "You investigate the alarms. It was a false alarm, but you discover a stowaway.", "Do you confront the stowaway or let them be?");
        gameTree.insert(54, "You prepare to evacuate. As you prepare, you find an emergency escape pod.", "Do you use the escape pod or stay and investigate?");
        gameTree.insert(22, "You trust them and dock with their ship. They turn out to be friendly and offer resources.", "Do you accept the resources or politely decline?");
        gameTree.insert(26, "You stay cautious and keep your distance. The spaceship leaves a message behind.", "Do you read the message or ignore it?");
        gameTree.insert(45, "You continue to hide. You discover a secret hatch beneath you.", "Do you open the hatch or leave it closed?");
        gameTree.insert(51, "You come out and explore. The spaceship has left some supplies.", "Do you take the supplies or leave them?");
        gameTree.insert(32, "You explore further with your enhanced ship. You discover an uncharted planet.", "Do you land on the planet or continue exploring space?");
        gameTree.insert(35, "You return to your mission. You find a distress signal.", "Do you respond to the signal or ignore it?");
        gameTree.insert(39, "You turn around to confront. It's a friendly alien offering help.", "Do you accept their help or decline?");
        gameTree.insert(43, "You decide to hide. The footsteps pass by and you are safe.", "Do you continue exploring or return to the spaceship?");
        gameTree.insert(49, "You confront the stowaway. They turn out to be a spy.", "Do you capture the spy or try to communicate with them?");
        gameTree.insert(53, "You let the stowaway be. They turn out to be a helpful ally.", "Do you team up with them or continue alone?");
        gameTree.insert(20, "You accept the resources. They enhance your mission capabilities.", "Do you continue your mission with renewed vigor or change your course based on the new resources?");
        gameTree.insert(24, "You politely decline the resources. The friendly aliens respect your decision and offer guidance.", "Do you accept their guidance or continue on your own path?");
        gameTree.insert(28, "You read the message left by the spaceship. It contains coordinates to a safe haven.", "Do you follow the coordinates or stay where you are?");
        gameTree.insert(30, "You ignore the message. You continue exploring and find a derelict space station.", "Do you investigate the station or continue your journey?");
        gameTree.insert(50, "You open the secret hatch. It leads to an underground base.", "Do you explore the base or close the hatch?");
        gameTree.insert(48, "You leave the hatch closed. Suddenly, you hear a voice calling for help.", "Do you investigate the voice or stay hidden?");
        gameTree.insert(47, "You take the supplies left by the spaceship. They help you survive.", "Do you stay in your current location or move to a safer place?");
        gameTree.insert(55, "You leave the supplies. They are taken by another traveler.", "Do you follow the traveler or let them be?");
    }        
    
    
    insertNode(node, newNode) {
        if (newNode.value < node.value) { // changed newNode.key to newNode.value
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    insert(key, result, choices) {
        const newNode = new GameNode(key, result, choices);

        if (!this.root) {
            this.root = newNode;
            this.currentNode = this.root;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(`Key: ${node.value}, Message: ${node.message}`);
            this.inOrder(node.right);
        }
    }

    move(direction) {
        if(!this.currentNode)   {
            return "Game Over!";
        }
        switch (direction) {
            case 'leftChoices':
                return  this.currentNode.left.choices;
            case 'rightChoices':
                return  this.currentNode.right.choices;
            case 'backChoices':
                return  this.currentNode.parent.choices;
        }

        switch (direction) {
            case 'leftEvent':
            if (this.currentNode.left) {
                this.currentNode = this.currentNode.left;
            }
            break;
            case 'rightEvent':
            if (this.currentNode.right) {
                this.currentNode = this.currentNode.right;
            }
            break;
            case 'backEvent':
            if (this.currentNode.parent) {
                this.currentNode = this.currentNode.parent;
            }
            break;
        }
        
        if (this.currentNode.value === 0) {
            let inputArea = document.getElementById('inputArea');
            if(inputArea && inputArea.value !== "") {
                name = inputArea.value;
                return "Hello " + name + "! " + this.currentNode.result ;
            }
        }
        if (!this.currentNode.left && !this.currentNode.right) {
            return "Game Over";
        }
      
        return this.currentNode.result;
    }
}


const gameTree = new GameTree();
gameTree.addPlaceholderValues();

function setupEventListeners() {
    const goLeft = document.getElementById('goLeft');
    const goRight = document.getElementById('goRight');
    const goBack = document.getElementById('goBack');
    console.log(goLeft);
    console.log("script running");

    const eventArea = document.getElementById('eventArea');
    const inputArea = document.getElementById('inputArea');
    const outputArea = document.getElementById('outputArea');
    const submitButton = document.getElementById('submitButton'); 
    
    
    goLeft.addEventListener('click', function() {
        console.log("left");
        eventArea.innerHTML = gameTree.move('leftChoices');
        outputArea.innerHTML = gameTree.move('leftEvent');
    });

    goRight.addEventListener('click', function() {
        console.log("right");
        eventArea.innerHTML = gameTree.move('rightChoices');
        outputArea.innerHTML = gameTree.move('rightEvent');
    });

    goBack.addEventListener('click', function() {
        console.log("back");
        eventArea.innerHTML = gameTree.move('backChoices');
        outputArea.innerHTML = gameTree.move('backEvent');
    });


    submitButton.addEventListener('click', function() {
       
            let inputValue = inputArea.value;
            inputArea.value = "";
            console.log(inputValue);
            console.log("loaded");
            console.log("clicked");          
         
            });
    
    eventArea.innerHTML = gameTree.move();

}

// Call the function to setup the event listeners
setupEventListeners();
gameTree.inOrder(gameTree.root);
};