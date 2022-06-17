(function () {
  const menu = $(".menu__list");
  const toggler = $(".menu__toggler");

  // function openMenu() {
  //     if (menu.style.maxHeight) {
  //         menu.style.height = '';
  //         menu.addEventListener('transitionend', displayNone);

  //     } else {
  //         menu.style.display = 'block';
  //         menu.style.height = menu.scrollHeight + 'px';
  //     }
  // }

  openMenu = () => {
    toggler.addClass("toggler__active");

    menu.css("opacity", "1");
    let height = menu.prop("scrollHeight") + "px";
    menu.css("height", height);
  };

  closeMenu = () => {
    menu.css("height", "");
    menu.css("opacity", "0");
    toggler.removeClass("toggler__active");
  };

  // displayNone = () => {
  //     menu.css('display', 'none');
  // }

  checkWindow = () => {
    if ($(window).width() < 870) {
      toggler.addClass("toggler__on");
      menu.addClass("menu__closed");
      closeMenu();
    } else {
      menu.removeClass("menu__closed");
      toggler.removeClass("toggler__on toggler__active");
      openMenu();
    }
  };

  handleMenu = () => {
    if ($(".menu__list").css("opacity") == 0) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  toggler.click(debounce(handleMenu, 100));

  $(document).ready(checkWindow);
  $(window).resize(checkWindow);
})();
