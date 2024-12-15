import {
     allImages,
     cakeImages,
     cheeseImages,
     tardImages,
     dry,
     pondImages,
     fetchImageData,
} from "./imageData.js";

// เลือกปุ่มทั้งหมดใน .btn-group
const categoryButtons = document.querySelectorAll(".btn-group .btn");
const typeButtons = document.querySelectorAll(".btn-type .btn");

let selectedCategory
let selectedType = null; 


export function displayGallery(category, type) {
    const galleryContainer = document.getElementById("gallery-container");
    console.log("................")
    console.log("category = "  + category)
    console.log("selectedCategory = "  + selectedCategory)
    console.log("type = " +  type)
    console.log("selectedType = "  + selectedType)

    if (category !== null) {
        selectedCategory = category;
    } else {
        category = selectedCategory; // ใช้ค่าที่เลือกไว้ก่อนหน้า
    }

    if (type !== null) {
        // Toggle behavior for sub-type buttons
        if (selectedType === type) {
            selectedType = null;
            type = null // Deselect if clicked again
        } else {
            selectedType = type;
        }
    } else {
        type = selectedType; // ใช้ค่าที่เลือกไว้ก่อนหน้า
    }



     // ลบคลาส active จากปุ่มทั้งหมด
     categoryButtons.forEach((button) => button.classList.remove("active"));
     typeButtons.forEach((button) => button.classList.remove("active"));


     // เพิ่มคลาส active ให้กับปุ่มที่ถูกคลิก
    const activeCategoryButton = document.querySelector(
        `.btn-group .btn[onclick="displayGallery('${selectedCategory}')"]`
    );

    const activeTypeButton = document.querySelector(
        `.btn-type .btn[data-type="${selectedType}"]`
    );
    console.log("Selected Type:", selectedType);
    console.log("Active Type Button:", activeTypeButton);


    if (activeCategoryButton) activeCategoryButton.classList.add("active");
    if (activeTypeButton) {
        if (selectedType) {
            activeTypeButton.classList.add("active");
        } else {
            activeTypeButton.classList.remove("active");
        }
    }
    

    //  const galleryContainer = document.querySelector(".masonry-grid");
     galleryContainer.innerHTML = "";

    let imagesToDisplay = [];

    if (category === "all")imagesToDisplay = allImages;
    else if (category === "cake") imagesToDisplay = cakeImages;
    else if (category === "cheeseCake") imagesToDisplay = cheeseImages;
    else if (category === "pond") imagesToDisplay = pondImages;
    else if (category === "dry") imagesToDisplay = dry;
    else if (category === "tard") imagesToDisplay = tardImages;

    if (type) {
        imagesToDisplay = imagesToDisplay.filter(image => image.name_ingredient === selectedType);
        console.log("sdfdfdfdfdf");
    }

    if (imagesToDisplay.length === 0) {
        const noImageMessage = document.createElement("p");
        noImageMessage.textContent = "ยังไม่มีเมนูประเภทนี้ค่า :)";

        noImageMessage.style.textAlign = "center";
        noImageMessage.style.width  = "100%";


        galleryContainer.appendChild(noImageMessage);
    }


      imagesToDisplay.forEach((image, index) => {
          const imgElement = document.createElement("img");
          imgElement.src = image.img_path;
          imgElement.classList.add("img-fluid");


      
          // แสดงชื่อรูปภาพ
          const nameElement = document.createElement("div");
          nameElement.classList.add("image-name");
          nameElement.textContent = image.name;
      
          // เมื่อคลิกที่รูปภาพ ให้แสดงหรือซ่อนชื่อภาพพร้อมกับเอฟเฟกต์
          imgElement.addEventListener("click", () => {
              nameElement.classList.toggle("show");
              imgElement.classList.toggle("blur");  
          });
      
          // สร้างปุ่มสำหรับแต่ละรูปภาพและเพิ่มฟังก์ชัน openFullscreen เมื่อคลิก
          const buttonElement = document.createElement("button");
          buttonElement.classList.add("image-button");
          
          // สร้าง imgElement สำหรับไอคอนและเพิ่มลงใน buttonElement
          const iconElement = document.createElement("img");
          iconElement.src = "https://img.icons8.com/fluency-systems-filled/48/zoom-region-mode.png";
          iconElement.alt = "Fullscreen Icon";
          iconElement.style.width = "20px"; // ปรับขนาดไอคอนตามต้องการ
          iconElement.style.height = "20px";
          
          buttonElement.appendChild(iconElement); // เพิ่มไอคอนลงในปุ่ม
      
          buttonElement.onclick = function() {
              openFullscreen(image.img_path);
          };
      
          const masonryItem = document.createElement("div");
          masonryItem.classList.add("masonry-item", "fade-in");
          masonryItem.appendChild(buttonElement); // เพิ่มปุ่มใน masonryItem
          masonryItem.appendChild(imgElement); // เพิ่มรูปใน masonryItem
          masonryItem.appendChild(nameElement); // เพิ่มชื่อใน masonryItem
          galleryContainer.appendChild(masonryItem);
      
          setTimeout(() => {
              masonryItem.classList.add("show");
          }, index * 100); // delay ทีละรูปเพื่อความนุ่มนวล
      });
      
}

document.addEventListener("DOMContentLoaded", async () => {
    await fetchImageData(); 
    displayGallery("all"); 
});
