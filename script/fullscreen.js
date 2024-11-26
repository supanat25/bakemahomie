
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

  function checkPassword() {
    const password = prompt("Enter the password to access this page:");
    const correctPassword = "1012";
  
    if (password === correctPassword) {
      alert("Access Granted");
      window.location.href = " admin.html"; // ลิงก์ไปยังหน้าที่ต้องการ
    } else {
      alert("Incorrect Password. Access Denied.");
    }
  }
  

//   document.querySelectorAll(".btn-view").forEach((button) => {
//     button.addEventListener("click", (event) => {
//         const imgPath = event.target.getAttribute("data-img");
//         openFullscreen(imgPath); // เรียกฟังก์ชัน openFullscreen จาก fullscreen.js
//     });
// });
