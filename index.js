/*
function handleClick() {
    alert("I got clicked");
}
*/

/*constructor function for audio looks like:
function Audio(source) {
    this.source = source;
    this.play = function () {
        //play audio
    }
}
*/

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelectorAll("button")[0].style.color = "white";
            setTimeout(function () {
                document.querySelectorAll("button")[0].style.color = "red";
            }, 100);
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelectorAll("button")[1].style.color = "white";
            setTimeout(function () {
                document.querySelectorAll("button")[1].style.color = "red";
            }, 100);
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            document.querySelectorAll("button")[2].style.color = "white";
            setTimeout(function () {
                document.querySelectorAll("button")[2].style.color = "red";
            }, 100);
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            document.querySelectorAll("button")[3].style.color = "white";
            setTimeout(function () {
                document.querySelectorAll("button")[3].style.color = "red";
            }, 100);
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelectorAll("button")[4].style.color = "white";
            setTimeout(function () {
                document.querySelectorAll("button")[4].style.color = "red";
            }, 100);
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelectorAll("button")[5].style.color = "white";
            setTimeout(function () {
                document.querySelectorAll("button")[5].style.color = "red";
            }, 100);
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelectorAll("button")[6].style.color = "white";
            setTimeout(function () {
                document.querySelectorAll("button")[6].style.color = "red";
            }, 100);
            break;
        default: console.log(this.innerHTML);
}
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}



let buttonElements = document.querySelectorAll("button");
for (var i=0; i<buttonElements.length; i++) {
    buttonElements[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})



/*
let buttonElements = document.querySelectorAll("button");
for (var i=0; i<buttonElements.length; i++) {
    buttonElements[i].addEventListener("click", function() {
        switch (this.innerHTML) {
            case "w":
                this.style.color = "white";
                break;
            case "a":
                this.style.color = "red";

                break;
            case "s":
                this.style.color = "blue";

                break;
            default: console.log(this.innerHTML);
        }

    })
}
*/
//or
/*
let buttonElements = document.querySelectorAll("button");
for (var i=0; i<buttonElements.length; i++) {
    buttonElements[i].addEventListener("click", function() {
        if (this.innerHTML === "w") {
            this.style.color = "red";
        } else if (this.innerHTML === "a") {
            this.style.color = "blue";
        } else if (this.innerHTML === "s") {
            this.style.color = "green";
        } else {
            this.style.color = "yellow";
        }
    })
}

*/
