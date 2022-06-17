(function () {
  checkScroll = () => {
    let range = window.scrollY;

    if (range > 800) {
      $("#up").css({ transform: "scale(1)" });
    } else {
      $("#up").css({ transform: "scale(0)" });
    }
  };

  $(document).scroll(debounce(checkScroll, 30));
})();
