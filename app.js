


(function () {
    const controls = document.querySelectorAll(".control");

    controls.forEach((button) => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    const themeBtn = document.querySelector(".theme-btn");
    const iconSun = '<i class="fas fa-sun" style="color: #ffd700;"></i>';
    const iconMoon = '<i class="fas fa-moon" style="color: #000;"></i>';

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const isLightMode = document.body.classList.contains("light-mode");
        themeBtn.innerHTML = isLightMode ? iconSun : iconMoon;
    }

    // Initial theme icon setup
    updateThemeIcon();
})();


