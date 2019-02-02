$(function () {
  var scrolloffset = 55; //variable for menu height

  // When Scrollspy Detects a change
  $(window).on('activate.bs.scrollspy', function () {
    var hash = $('.site-nav')
      .find('a.active')
      .attr('href');

    if (hash !== '#page-hero') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }

    // Animate Media Layout when it passes scroll
    $('#page-media .animated-group').css(
      'visibility: hidden;'
    );

    if (hash === '#page-media') {
      $('#page-media .animated-group').addClass(
        'animated fadeInRight'
      );
    }
  });

  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })

  // Modifies modal and injects high resolution image
  // $('#site-modal').on('show.bs.modal', function(event) {
  //   $(this)
  //     .find('.modal-content img')
  //     .attr('src', $(event.relatedTarget).data('highres'));
  // });

  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a:not(.dropdown-toggle)').click(
    function () {
      if (
        location.pathname.replace(/^\//, '') ===
        this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top - scrolloffset
            },
            500
          );
          return false;
        } //target.length
      } //click function
    }
  ); //smooth scrolling
}); // Make sure Document loaded

// Dat's Code --------------------------------------

// Top Nav 


// Side Nav hide/show
// function toggle_class(className) {
//   var elements = document.getElementsByClassName(className);

//   if (elements[0].style.display === 'block') {
//     for (var i = 0; i < elements.length; i++) {
//       elements[i].style.display = 'none';
//     }
//   } else {
//     for (var i = 0; i < elements.length; i++) {
//       elements[i].style.display = 'block';
//     }
//   }
// }


function toggle_id(idname) {
  var x = document.getElementById(idname);
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function Button_inner_text(idname) {
  x = document.getElementById(idname);
  if (x.innerHTML === "Open Bundle Cart") {
    x.innerHTML = "Close Bundle Cart";
  } else {
    x.innerHTML = "Open Bundle Cart";
  }
}



// function button_click() {
//   if ($(".fa-cube").hasClass(".active-teal")) {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
//   } else {
//     clicks -= 1;
//     document.getElementById("clicks").innerHTML = clicks;
//   }




var clicks = 0;


function addClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

function subClick() {
  clicks -= 1;
  document.getElementById("clicks").innerHTML = clicks;
}
/*

1. Check the page's address
  window.location.href.indexOf(value)
2. If the page's address matches one of the links

3. It should be highlighted
4. All others should not be highlighted

*/
// Tooltip Initiation BS4
// $(".fa-cube").one("click", addBundle);
/// 
//
$(function () {

  x = ["howitworks", "FAQ", "signup", "features", "Signup"];

  $.each(x, function (_index, value) {
    if (window.location.href.indexOf(value) > -1) {
      $("li." + value).addClass('active');
    }
  });

  x = ["home", "mycollection", "myucodes", "mymedia", "myprofile", "myaccount", "aboutus", "learn"];

  $.each(x, function (_index, value) {
    if (window.location.href.indexOf(value) > -1) {
      $("li." + value).removeClass('border-L-3');
      $("li." + value).addClass('border-active active-teal');
    }
  });

  $(".mycol-chevron-quick-view").click(function () {
    $("#quickview").toggle(100);
  });

  $(".mycol-chevron-pin-board ").click(function () {
    $("#pinboard").toggle(100);
  });

  $("#expandSidemenu").click(function () {
    $(".NavExpandtext").toggle(100);
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('.tooltipvideo').tooltip({ title: "Video", placement: "bottom" });
  $('.tooltipcollection').tooltip({ title: "Saved", placement: "bottom" });
  $('.tooltipinfo').tooltip({ title: "Info", placement: "bottom" });
  $('.tooltipbundle').tooltip({ title: "Bundle", placement: "bottom" });


  $(".btn-bundle").click(function () {
    $(".btn-bundle, .btn-bundle-body").toggleClass("expand-me");
  });

  $(".btn-bundle").click(function () {
    $(".btn-bundle-body").toggle();
  });

  $(".fa-cube").click(function () {
    $(this).toggleClass("active-teal");
  });

  $(".fa-thumbtack").click(function () {
    $(this).toggleClass("active-teal");
  });

  $(".checkbox").click(function () {
    $(this).toggleClass("fa-check-square fa-square");
  });

  $(".mycol-chevron-pin-board").click(function () {
    $(".mychevroncollapse-pin-board").toggleClass("fa-chevron-circle-down fa-chevron-circle-right");
  });

  $(".mycol-chevron-quick-view").click(function () {
    $(".mychevroncollapse-quick-view").toggleClass("fa-chevron-circle-down fa-chevron-circle-right");
  });


  $('li.quickviewclick').click(function () {
    $('li.quickviewclick').removeClass('bg-teal');
    $(this).addClass('bg-teal');
  });

});
