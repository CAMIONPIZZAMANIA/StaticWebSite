// Get the modal
var modal = document.getElementById("pizzaModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("pizzaOfTheMonth");
var modalImg = document.getElementById("pizzaBig");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

modal.onclick = function() {
    modal.style.display = "none";
}