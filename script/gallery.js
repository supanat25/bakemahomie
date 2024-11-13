


// const cakeImages = [
//      { path: "img/cake/brownieChoc.jpg", name: "เค้กช็อกโกแลต" },
//      { path: "img/cake/cakeChoc.jpg", name: "เค้กวานิลลา" },
//      { path: "img/cake/cakeChoc2.jpg", name: "เค้กสตรอว์เบอร์รี" },
//      { path: "img/cake/lemonCake.jpg", name: "เค้กช็อกโกแลต" },
//      { path: "img/cake/redvel.jpg", name: "เค้กวานิลลา" },
//      { path: "img/cake/redvel2.jpg", name: "เค้กสตรอว์เบอร์รี" },
//      { path: "img/cake/banana.jpg", name: "เค้กสตรอว์เบอร์รี" },
//      { path: "img/cake/banof.jpg", name: "เค้กช็อกโกแลต" },
//      { path: "img/cake/lemonCake2.jpg", name: "เค้กวานิลลา" },
//      { path: "img/cake/redvel3.jpg", name: "เค้กสตรอว์เบอร์รี" },
//      { path: "img/cake/orangeCake.jpg", name: "เค้กสตรอว์เบอร์รี" },
//  ];
 
// const cheeseImages = [
//      { path: "img/cheese/choc.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/cheese/blue.jpg", name: "ขนมปังโฮลวีต" },
//      { path: "img/cheese/cheese.jpg", name: "ขนมปังเนย" },
//      { path: "img/cheese/lemon.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/cheese/orange.jpg", name: "ขนมปังโฮลวีต" },
//      { path: "img/cheese/straw.jpg", name: "ขนมปังเนย" },
//      { path: "img/cheese/cheeseBlue.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/cheese/lemon2.jpg", name: "ขนมปังโฮลวีต" },
//      { path: "img/cheese/cheeseBlue2.jpg", name: "ขนมปังเนย" }
//  ];
// const tardImages = [
//      { path: "img/tard/lemonTard.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/tard/tardGreen.jpg", name: "ขนมปังโฮลวีต" },
//      { path: "img/tard/tardGreen2.jpg", name: "ขนมปังเนย" },
 
//  ];
 
// const pondImages = [
//      { path: "img/pond/p1.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/pond/p2.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/pond/p3.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/pond/p4.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/pond/p5.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/pond/p6.jpg", name: "ขนมปังฝรั่งเศส" },
//      { path: "img/pond/p7.jpg", name: "ขนมปังฝรั่งเศส" },
//  ];
 
 
 
//  const dry = [
//   { path: "img/dry/conflask.jpg", name: "ขนมปังฝรั่งเศส" },
//   { path: "img/dry/softCook.jpg", name: "ขนมปังโฮลวีต" },
//   { path: "img/dry/brownie.jpg", name: "ขนมปังเนย" },
//   { path: "img/dry/softCook2.jpg", name: "ขนมปังเนย" },
//  ];
 
// const allImages = [...cakeImages];
 
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

// เรียกใช้งาน displayGallery('all') เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
     displayGallery("all");
});
