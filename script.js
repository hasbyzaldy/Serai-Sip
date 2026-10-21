const WHATSAPP_NUMBER = "628236101881";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-flavor]").forEach((button) => {
  button.addEventListener("click", () => {
    const flavor = button.dataset.flavor;
    openWhatsApp(`Halo Serai Sip! Saya tertarik memesan varian ${flavor}. Boleh info harga dan ketersediaannya?`);
  });
});

document.getElementById("main-order").addEventListener("click", () => {
  openWhatsApp("Halo Serai Sip! Saya ingin bertanya tentang produk dan cara pemesanannya.");
});

document.getElementById("floating-order").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Halo Serai Sip! Saya ingin bertanya tentang produk dan cara pemesanannya.");
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
