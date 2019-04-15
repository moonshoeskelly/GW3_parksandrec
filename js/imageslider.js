var images = [ "images/slide1.jpg",
"images/slide2.jpg",
"images/slide3.jpg",
"images/slide4.jpg",
];

var img = document.getElementById("slider-img");
img.setAttribute("src", images[0])

var total = images.length;
var imagecounter = 0;

function slider () {
  if (imagecounter <= total) {
    imagecounter++;
  }

  if (imagecounter == total) {
    imagecounter = 0;
  }

document.getElementById("slider-img");
img.setAttribute("src", images[imagecounter]);
}

// Change the time each image is displayed in milliseconds
setInterval(slider, 5000);
