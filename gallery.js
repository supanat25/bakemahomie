const cakeImages = [
     { path: "img/cake/brownieChoc.jpg", name: "เค้กช็อกโกแลต" },
     { path: "img/cake/cakeChoc.jpg", name: "เค้กวานิลลา" },
     { path: "img/cake/cakeChoc2.jpg", name: "เค้กสตรอว์เบอร์รี" },
     { path: "img/cake/lemonCake.jpg", name: "เค้กช็อกโกแลต" },
     { path: "img/cake/redvel.jpg", name: "เค้กวานิลลา" },
     { path: "img/cake/redvel2.jpg", name: "เค้กสตรอว์เบอร์รี" },
];

const cheeseImages = [
     { path: "img/cheese/choc.jpg", name: "ขนมปังฝรั่งเศส" },
     { path: "img/cheese/blue.jpg", name: "ขนมปังโฮลวีต" },
     { path: "img/cheese/cheese.jpg", name: "ขนมปังเนย" },
     { path: "img/cheese/lemon.jpg", name: "ขนมปังฝรั่งเศส" },
     { path: "img/cheese/orange.jpg", name: "ขนมปังโฮลวีต" },
     { path: "img/cheese/straw.jpg", name: "ขนมปังเนย" }
];


const dry = [
  { path: "img/4.jpg", name: "ขนมปังฝรั่งเศส" },
  { path: "img/5.jpg", name: "ขนมปังโฮลวีต" },
  { path: "img/6.jpg", name: "ขนมปังเนย" },
];

const allImages = [...cakeImages, ...cheeseImages, ...dry];

function displayGallery(category) {
     const galleryContainer = document.querySelector(".masonry-grid");
     galleryContainer.innerHTML = "";

     let imagesToDisplay = [];

     if (category === "all") {
          imagesToDisplay = allImages;
     } else if (category === "cake") {
          imagesToDisplay = cakeImages;
     } else if (category === "cheeseCake") {
          imagesToDisplay = cheeseImages;
     }

     imagesToDisplay.forEach((image) => {
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
          masonryItem.classList.add("masonry-item");
          masonryItem.appendChild(imgElement);
          masonryItem.appendChild(nameElement);

          galleryContainer.appendChild(masonryItem);
     });
}

// เรียกใช้งาน displayGallery('all') เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
     displayGallery("all");
});
