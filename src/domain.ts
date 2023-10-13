export const toggleOverlay = () => {
    const toggler = document.querySelector(".toggler");
    const overlay = document.getElementById("overlay");

    if (toggler instanceof HTMLInputElement && overlay) {
      toggler.addEventListener("change", () => {
        overlay.style.visibility = toggler.checked ? "visible" : "hidden";
      });
    } else {
      console.error("Toggler or overlay element not found.");
    }
  };