function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("top-nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
          }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");

    // document.querySelector(".title-container").style.display = "none";

    // document.querySelector("button ").style.display = "none";

    let title = document.getElementById("tcon");
    if (title.style.display === "none") {
      title.style.display = "flex";
    } else {
      title.style.display = "none";
    }

    let sign = document.getElementById("sign-querry");
    if (sign.style.display === "none") {
      sign.style.display = "block";
    } else {
      sign.style.display = "none";
    }

  });
}

navSlide();
