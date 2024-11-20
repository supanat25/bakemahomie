
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


//   document.querySelectorAll(".btn-view").forEach((button) => {
//     button.addEventListener("click", (event) => {
//         const imgPath = event.target.getAttribute("data-img");
//         openFullscreen(imgPath); // เรียกฟังก์ชัน openFullscreen จาก fullscreen.js
//     });
// });
