$(window).load(function(){

    $(".handlebarsIcon").attr("src", "skills/handlebars.png");
    $(".htmlIcon").attr("src", "skills/html.png");
    $(".expressIcon").attr("src", "skills/expressjs.png");
    $(".expressIcon").attr("title", "Express.js");

    $("#firebaseIcon").attr("src", "skills/firebase.jpg");
    $("#jqueryIcon").attr("src", "skills/jquery.jpg");
    $(".mysqlIcon").attr("src", "skills/mysql.png");
    $(".nodeIcon").attr("src", "skills/nodejs.jpg");
    $(".sequelizeIcon").attr("src", "skills/sequelize.png");
    
    $("a").attr("target", "_blank");

  });
  // TYPE DISPLAY
  // credit: https://codepen.io/ConnorGaunt/pen/OReXZB
  function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis.css({
      position: "relative",
      display: "inline-block"
    });
    thhis.prepend(
      '<div class="cursor" style="right: initial; left:0;"></div>'
    );
    thhis = thhis.find(".text-js");
    var text = thhis
      .text()
      .trim()
      .split("");
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function () {
      thhis.css("opacity", 1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for (var i = 0; i < amntOfChars; i++) {
        (function (i, char) {
          setTimeout(function () {
            newString += char;
            thhis.text(newString);
          }, i * typingSpeed);
        })(i + 1, text[i]);
      }
    }, 1500);
  }

  $(document).ready(function () {
    $(".fa-node-js").attr("title", "Node.js")

    // Now to start autoTyping just call the autoType function with the class of outer div
    // The second paramter is the speed between each letter is typed.
    autoType(".type-js", 200);

  });
