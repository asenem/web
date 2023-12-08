document.addEventListener("DOMContentLoaded", function () {
    changeBackground();
    showRandomImages();
  });
  
  function changeBackground() {
    var colors = ['#00b5cc', '#013243', '#19b5fe', '#2c3e50', '#2574a9', '#24252a', '#2c32c9', '#47beff', '#b0dfe5'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  function showRandomImages() {
    var imageContainer = document.getElementById('imageContainer');
    var images = ['skeletonnnn.jpg', 'skeletonnn.jpg', 'skeletonn', 'skeleton.jpg'];
  
    for (var i = 0; i < 3; i++) {
      var randomImage = images[Math.floor(Math.random() * images.length)];
      var imgElement = document.createElement('img');
      imgElement.src = randomImage;
      imageContainer.appendChild(imgElement);
    }
  }
  
  function toggleImages() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.classList.toggle('show');
  }