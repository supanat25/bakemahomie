
  // เปิด modal และแสดงรูปภาพ
  function openFullscreen(src) {
    const modal = document.getElementById("fullscreenModal");
    const modalImage = document.getElementById("fullscreenImage");
    modal.style.display = "flex";
    modalImage.src = src;
  }

  // ปิด modal เมื่อคลิกนอกภาพ
  function closeFullscreen() {
    const modal = document.getElementById("fullscreenModal");
    modal.style.display = "none";
  }
