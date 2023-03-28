
// Event listener dos cliques nos butões
for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
})}

// Event listener do pressionamento das teclas
document.addEventListener("keydown", function(event) { 
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Função que aplica o respectivo som
function makeSound(key) {
    switch(key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
    }
}

// Função para fazer uma animação de pressionamento no botão
function buttonAnimation(currentKey) {  //currentKey -> w,a,s,d,j,k,l
    
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // Adicionando timeout ao botão para voltar à aparência normal
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}