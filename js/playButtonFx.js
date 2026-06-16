    var audio = document.getElementById("waterDrop");

    var links = document.querySelectorAll("a");
    links.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
          audio.play();
          //at some point I want to add pitch shifting cuz it will get annoying
        });
    });