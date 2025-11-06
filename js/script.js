    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const header = document.getElementById("header");
    const hero = document.getElementById("hero");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      header.classList.toggle("active");
      hero.classList.toggle("active");
    });