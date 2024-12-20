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
          window.location.href = " admin.html"; // ลิงก์ไปยังหน้าที่ต้องการ
     } else {
          alert("Incorrect Password. Access Denied.");
     }
}

function toggleButtons() {
     const buttons = document.getElementById("extra-buttons");
     const toggleButton = document.getElementById("toggle-button");
     if (buttons.style.display === "none") {
          buttons.style.display = "block"; // แสดงปุ่ม
          toggleButton.textContent = "<<<"; // เปลี่ยนข้อความของปุ่ม
     } else {
          buttons.style.display = "none"; // ซ่อนปุ่ม
          toggleButton.textContent = ">>>"; // เปลี่ยนข้อความของปุ่ม
     }
}

function displayGallery(category) {
     console.log("แสดงหมวดหมู่:", category);
}


