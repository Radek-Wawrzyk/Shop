function navigation() {
  const icon = document.querySelector(".navigation-icon"),
        navigation = document.querySelector(".navigation-menu"),
        exitButton = document.querySelector(".navigation-panel .fa-times");

  icon.addEventListener("click", function() {
    this.classList.toggle("open");
    navigation.classList.toggle("open");
  });

  document.addEventListener("scroll", function() {
    document.querySelector(".navigation").classList.add("active");
  })

} navigation();
