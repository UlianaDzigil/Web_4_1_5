document.getElementById("palette").style.display = "block";
let chosen_color = "#009688";
document.querySelector('jsuites-color').addEventListener('onchange', function(a,b,c) {
    chosen_color = this.value;
});

function changeTdColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    document.getElementById("task1").style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function clickChangeColor() {
    document.getElementById("task1").style.backgroundColor = chosen_color;

}

function changeTrColor() {
    let current_color = document.getElementById("task1").style.backgroundColor;
    document.getElementById("diagonal1").style.backgroundColor = current_color;
    document.getElementById("diagonal2").style.backgroundColor = current_color;
    document.getElementById("diagonal3").style.backgroundColor = current_color;
    document.getElementById("diagonal4").style.backgroundColor = current_color;
    document.getElementById("diagonal5").style.backgroundColor = current_color;
    document.getElementById("diagonal6").style.backgroundColor = current_color;
}
