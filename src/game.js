window.onload = function() {
    let name = prompt("What is your name?");


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class GameNode extends TreeNode {
    constructor(key, message) {
        super(key); 
        this.message = message;
    }
   
  
    addPlaceholderValues() {
        this.insert(1, "You wake up in a spaceship. There are two buttons in front of you: a red one and a blue one. Which one do you press?");
        this.insert(2, "You pressed the red button. The spaceship starts to shake violently. Do you try to stabilize it or brace for impact?");
        this.insert(3, "You pressed the blue button. A soothing melody starts to play. Do you try to find the source of the music or just enjoy it?");
        this.insert(4, "You tried to stabilize the spaceship. It's a success! You're now floating in space. Do you explore the spaceship or try to land on a nearby planet?");
        this.insert(5, "You braced for impact. The spaceship crashes on a deserted planet. Do you try to fix the spaceship or explore the planet?");
        this.insert(6, "You tried to find the source of the music. You find a hidden compartment with a map. Do you follow the map or ignore it?");
        this.insert(7, "You just enjoyed the music. Suddenly, you see a spaceship approaching. Do you try to communicate with it or hide?");
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
        this.currentNode = this.root;
    }

    addPlaceholderValues() {
        gameTree.insert(5, name +", you wake up in a spaceship. There are two buttons in front of you: a red one and a blue one. Which one do you press?");
        gameTree.insert(3, "You pressed the red button. The spaceship starts to shake violently. Do you try to stabilize it or brace for impact?");
        gameTree.insert(7, "You pressed the blue button. A soothing melody starts to play. Do you try to find the source of the music or just enjoy it?");
        gameTree.insert(2, "You tried to stabilize the spaceship. It's a success! You're now floating in space. Do you explore the spaceship or try to land on a nearby planet?");
        gameTree.insert(4, "You braced for impact. The spaceship crashes on a deserted planet. Do you try to fix the spaceship or explore the planet?");
        gameTree.insert(6, "You tried to find the source of the music. You find a hidden compartment with a map. Do you follow the map or ignore it?");
        gameTree.insert(8, "You just enjoyed the music. Suddenly, you see a spaceship approaching. Do you try to communicate with it or hide?")
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
    insert(key, message) {
        const newNode = new GameNode(key, message);

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
        if (direction === 'left' && this.currentNode.left) {
            this.currentNode = this.currentNode.left;
        } else if (direction === 'right' && this.currentNode.right) {
            this.currentNode = this.currentNode.right;
        } else if (direction === 'back' && this.currentNode.parent) {
            this.currentNode = this.currentNode.parent;
        }
        if(this.currentNode.value === 0 && inputArea.value !== "") {
            name = inputArea.value;
            return "Hello " + name + "! " + this.currentNode.message;
        }
            
        

        return this.currentNode.message;
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

    goLeft.addEventListener('click', function() {
        console.log("left");
        eventArea.innerHTML = gameTree.move('left');
    });

    goRight.addEventListener('click', function() {
        console.log("right");
        eventArea.innerHTML = gameTree.move('right');
    });

    goBack.addEventListener('click', function() {
        console.log("back");
        eventArea.innerHTML = gameTree.move('back');
    });
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
    eventArea.innerHTML = gameTree.move();

}

// Call the function to setup the event listeners
setupEventListeners();
gameTree.inOrder(gameTree.root);



};