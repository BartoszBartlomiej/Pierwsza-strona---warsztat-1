document.addEventListener("DOMContentLoaded", function () {


    var picture = document.querySelectorAll(".chair > img");


    var textToHide = document.querySelectorAll(".img__text");


    for (var i = 0; i < picture.length; i++) {
        picture[i].addEventListener("mouseover", function () {

            for (var i = 0; i < textToHide.length; i++) {
                console.log(this);
                this.style.display = "none";
                /*textToHide[0].style.display = "none";
                textToHide[1].style.display = "none";*/
            }
        });

        picture[i].addEventListener("mouseout", function () {

            for (var i = 0; i < textToHide.length; i++) {
                this.style.display = "block";
                /*textToHide[0].style.display = "block";
                textToHide[1].style.display = "block";*/
            }
        })
    }

});

