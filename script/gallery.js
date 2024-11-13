
 
import { cakeImages, cheeseImages, dry, allImages, pondImages, tardImages } from './imageData.js';

export function displayGallery(category) {
     const galleryContainer = document.querySelector(".masonry-grid");
     galleryContainer.innerHTML = "";

     let imagesToDisplay = [];

     if (category === "all") {
          imagesToDisplay = allImages;
     } else if (category === "cake") {
          imagesToDisplay = cakeImages;
     } else if (category === "cheeseCake") {
          imagesToDisplay = cheeseImages;
     }else if (category === "pond") {
          imagesToDisplay = pondImages;
     }else if (category === "dry") {
          imagesToDisplay = dry;
     }else if (category === "tard") {
          imagesToDisplay = tardImages;
     }

     imagesToDisplay.forEach((image,index) => {
          const imgElement = document.createElement("img");
          imgElement.src = image.path;
          imgElement.classList.add("img-fluid");

          // สร้าง nameElement สำหรับแสดงชื่อรูปภาพ
          const nameElement = document.createElement("div");
          nameElement.classList.add("image-name");
          nameElement.textContent = image.name;

          // เมื่อคลิกที่รูปภาพ ให้แสดงหรือซ่อนชื่อภาพพร้อมกับเอฟเฟกต์
          imgElement.addEventListener("click", () => {
               nameElement.classList.toggle("show");
          });

          const masonryItem = document.createElement("div");
          masonryItem.classList.add("masonry-item","fade-in");
          masonryItem.appendChild(imgElement);
          masonryItem.appendChild(nameElement);

          galleryContainer.appendChild(masonryItem);

          setTimeout(() => {
               masonryItem.classList.add("show");
             }, index * 100); // delay ทีละรูปเพื่อความนุ่มนวล
     });
}

// เลือกปุ่มทั้งหมดใน .btn-group
const buttons = document.querySelectorAll('.btn-group button');

// เพิ่ม event listener สำหรับการคลิกที่ปุ่มแต่ละปุ่ม
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // ลบคลาส active จากปุ่มทั้งหมด
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
        button.classList.add('active');
    });
});


// เรียกใช้งาน displayGallery('all') เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
     displayGallery("all");
});
