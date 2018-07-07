$("body").removeClass('nojs').addClass('fade-in').css('opacity', 1)

// Trigger the animation on burger icon when clicked
$('.mobile-menu--trigger').click(function () {
  $(this).toggleClass('active');
});

// Init mmenu mobile navigation
$("#mobile-nav").mmenu({
  "extensions": [
    "border-full",
    "effect-listitems-slide",
    null,
  ],
  "offCanvas": {
    "zposition": "front",
  },
  "classNames": {
    "inset": "get-involved",
  },
  "navbar": {
    "title": "NBA Stats",
  },
  "navbars": [
    {
      "position": "top",
      "content": [
        "prev",
        "title",
      ],
    },
  ],
});

// Open/close the menu when clicking the mobile menu icon
let API       = $("#mobile-nav").data("mmenu");
let trigger   = $(".mobile-menu--trigger")

trigger.click(function () {
API.open();
API.close();
});

API.bind( "open:finish", function() {
setTimeout(function() {
  trigger.addClass( "active" );
}, 0);
});

API.bind( "close:finish", function() {
setTimeout(function() {
  trigger.removeClass( "active" );
}, 0);
});
