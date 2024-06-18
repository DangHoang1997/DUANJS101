document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeButton = document.querySelector(".toggle-theme");
    const body = document.querySelector("body");
  
    toggleThemeButton.addEventListener("click", function () {
      body.classList.toggle("dark-theme");
      const icon = toggleThemeButton.querySelector("i");
  
      if (body.classList.contains("dark-theme")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    });
  });