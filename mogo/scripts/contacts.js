const modal = document.getElementById("contactsModal");
const showBtn = document.getElementById("showContactsModalBtn");
const closeBtn = document.getElementById("closeContactsModalBtn");

// Переменная для карты Leaflet
let map;

export function initContactsModal() {
  showBtn.addEventListener("click", openModal);

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      closeModal();
    }
  });
}

function openModal() {
  modal.style.display = "flex";
  initMap();
}

function closeModal() {
  modal.style.display = "none";
}

function initMap() {
  const location = [12.019187, 93.008757];

  if (!map) {
    map = L.map('map').setView(location, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(location).addTo(map)
      .bindPopup('Наш офис')
      .openPopup();
  }
}
