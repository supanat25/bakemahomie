import {
     allImages,
     cakeImages,
     cheeseImages,
     tardImages,
     dry,
     pondImages
} from "./imageData.js";

// เลือกปุ่มทั้งหมดใน .btn-group
const buttons = document.querySelectorAll(".btn-group button");

// เพิ่มฟังก์ชัน displayGallery
export function displayGallery(category) {
     // ลบคลาส active จากปุ่มทั้งหมด
     buttons.forEach((button) => button.classList.remove("active"));

     // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
     const activeButton = document.querySelector(
          `.btn-group button[onclick="displayGallery('${category}')"]`
     );
     if (activeButton) activeButton.classList.add("active");

     const galleryContainer = document.querySelector(".masonry-grid");
     galleryContainer.innerHTML = "";

     let imagesToDisplay = [];

     if (category === "all") {
          imagesToDisplay = allImages;
     } else if (category === "cake") {
          imagesToDisplay = cakeImages;
     } else if (category === "cheeseCake") {
          imagesToDisplay = cheeseImages;
     } else if (category === "pond") {
          imagesToDisplay = pondImages;
     } else if (category === "dry") {
          imagesToDisplay = dry;
     } else if (category === "tard") {
          imagesToDisplay = tardImages;
     }

     // imagesToDisplay.forEach((image, index) => {

     //      const imgElement = document.createElement("img");
     //      imgElement.src = image.path;
     //      imgElement.classList.add("img-fluid");

     //      // สร้าง nameElement สำหรับแสดงชื่อรูปภาพ
     //      const nameElement = document.createElement("div");
     //      nameElement.classList.add("image-name");
     //      nameElement.textContent = image.name;

     //      // เมื่อคลิกที่รูปภาพ ให้แสดงหรือซ่อนชื่อภาพพร้อมกับเอฟเฟกต์
     //      imgElement.addEventListener("click", () => {
     //           nameElement.classList.toggle("show");
     //      });

     //      const masonryItem = document.createElement("div");
     //      masonryItem.classList.add("masonry-item", "fade-in");
          
     //      masonryItem.appendChild(imgElement);
     //      masonryItem.appendChild(nameElement);
     //      galleryContainer.appendChild(masonryItem);

     //      setTimeout(() => {
     //           masonryItem.classList.add("show");
     //      }, index * 100); // delay ทีละรูปเพื่อความนุ่มนวล
     // });


      imagesToDisplay.forEach((image, index) => {
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
      
          // สร้างปุ่มสำหรับแต่ละรูปภาพและเพิ่มฟังก์ชัน openFullscreen เมื่อคลิก
          const buttonElement = document.createElement("button");
          buttonElement.classList.add("image-button");
          
          // สร้าง imgElement สำหรับไอคอนและเพิ่มลงใน buttonElement
          const iconElement = document.createElement("img");
          iconElement.src = "https://img.icons8.com/fluency-systems-filled/48/zoom-region-mode.png";
          iconElement.alt = "Fullscreen Icon";
          iconElement.style.width = "15px"; // ปรับขนาดไอคอนตามต้องการ
          iconElement.style.height = "15px";
          
          buttonElement.appendChild(iconElement); // เพิ่มไอคอนลงในปุ่ม
      
          buttonElement.onclick = function() {
              openFullscreen(image.path);
          };
      
          const masonryItem = document.createElement("div");
          masonryItem.classList.add("masonry-item", "fade-in");
          masonryItem.appendChild(buttonElement); // เพิ่มปุ่มเข้าใน masonryItem
          masonryItem.appendChild(imgElement);
          masonryItem.appendChild(nameElement);
          galleryContainer.appendChild(masonryItem);
      
          setTimeout(() => {
              masonryItem.classList.add("show");
          }, index * 100); // delay ทีละรูปเพื่อความนุ่มนวล
      });
      
}

// เรียกใช้งาน displayGallery('all') เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
     displayGallery("all");
});
