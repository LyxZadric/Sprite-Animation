

$(document).keydown(function(e){
  if(e.keyCode == 38){ //UP : SAUT
    $(".char-svg").addClass("jump");
    $(".char-svg.jump").css("animation", "jump 1s steps(4)");
    $(".char-svg.jump").css("height", "82px");
  }
  else if(e.keyCode == 40){ //DOWN : ACCROUPIS
          $(".char-svg").addClass("crouch");
          $(".char-svg.crouch").css("animation", "crouch 1.6s steps(1)");
  }
  else if(e.keyCode == 37){ //LEFT
      $(body).addClass("crouch");
      $(".char-svg.crouch").css("animation", "crouch 1.6s steps(1)");
      e.keyCode = "";
  }
  else if(e.keyCode == 39){ //RIGHT : MARCHE
      $(".char-svg").addClass("walk");
      $(".char-svg.crouch").css("animation", "walk 1s steps(6) infinite");
  }
});
