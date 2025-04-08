function openModal(location) {
    const mapFrame = document.getElementById('mapFrame');
    const locationQuery = encodeURIComponent(location);
    mapFrame.src = `https://www.google.com/maps?q=${locationQuery}&output=embed`;
    document.getElementById('locationModal').classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('locationModal').classList.add('hidden');
  }

  window.onclick = function (event) {
    const modal = document.getElementById('locationModal');
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  };