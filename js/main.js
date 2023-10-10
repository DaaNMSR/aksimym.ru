document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.container').classList.toggle('open');
    document.querySelector('.container-bottom').classList.toggle('open');
})

let modal = document.getElementById("myModal");
let btn = document.getElementById("categories-button");
let openBtn = document.getElementsByClassName("modal_btn")[0];
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

openBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}