console.log("Hellow World");

// document.getElementById("hideButton").onclick = hideButton;
$("#hideButton").click(hideButton);
// document.getElementById("showButton").onclick = showBut    ton;
$("#showButton").click(showButton);

function hideButton() {
  // document.getElementById("hateFood").style.display = "none";
    // $("#hateFood").hide();
    // $("#hateFood").show();
    $("#hateFood").show();
    $("#hateFood").css("imgs", randomPug());
}

function showButton() {
  // document.getElementById("hateFood").style.display = "block";
  // $("#hateFood").show();
  $("#hateFood").slideDown();
  $("#hateFood").css("color", randomColor());
}

function randomColor() {
  var colors = ["red", "blue", "green", "yellow", "black", "purple"];
var randomIndex = Math.floor(Math.random() * colors.length);
return colors [randomIndex];
}

function randomPug() {
  var imgs = ["https://s-media-cache-ak0.pinimg.com/736x/60/d2/4f/60d24f3635c7b387f6c3df513b66581e.jpg",
   "https://s-media-cache-ak0.pinimg.com/736x/44/62/b1/4462b171361ebeddb6d1ae75921d1e9e--beautiful-cupcakes-eating-watermelon.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/38/0c/7e/380c7e364c223b12b41c0c0699c691f3--pug-puppies-pugs.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/60/d2/4f/60d24f3635c7b387f6c3df513b66581e.jpg",
     "https://s-media-cache-ak0.pinimg.com/736x/44/62/b1/4462b171361ebeddb6d1ae75921d1e9e--beautiful-cupcakes-eating-watermelon.jpg",
      "https://s-media-cache-ak0.pinimg.com/736x/38/0c/7e/380c7e364c223b12b41c0c0699c691f3--pug-puppies-pugs.jpg"];
var randomIndex = Math.floor(Math.random() * imgs.length);
return imgs [randomIndex];
}
