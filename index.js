// For button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
    document.querySelectorAll("button")[i].addEventListener("click", function clicked() {

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
    
// keybord button press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case key = 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case key = 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case key = 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case key = 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case key = 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case key = 'k':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case key = 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;

    }
}
// we can add a class to a varibale in js by using " add("className") ".
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 150);
}
