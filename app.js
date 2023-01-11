$(() => {
  $(document).ready(function () {
    $("html, body").scrollTop(0);
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 500) {
      $up.addClass("show-btn");
    } else {
      $up.removeClass("show-btn");
    }
  });

  ///////////////////////////////////////////////////////////////////////////
  //Hamburger menu
  ///////////////////////////////////////////////////////////////////////////
  //declaring variables for mobile view hamburger
  const $menuButton = $(".hamburger");
  const $mobileMenu = $(".mobile-nav");
  const $mobileLink = $(".mobile-link");

  const $up = $(".up");
  //click function to add css class is active which ass the menu slide in
  $menuButton.on("click", () => {
    $menuButton.toggleClass("is-active");
    $mobileMenu.toggleClass("is-active");
    $mobileLink.toggleClass("is-active");
  });
  //click function to put away mobile menu on the click of a link
  $mobileLink.on("click", () => {
    $menuButton.toggleClass("is-active");
    $mobileMenu.toggleClass("is-active");
    $mobileLink.toggleClass("is-active");
  });
});
