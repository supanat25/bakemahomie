const cakeImages = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
const breadImages = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
const allImages = [...cakeImages, ...breadImages];

function displayGallery(category) {
     const galleryContainer = document.querySelector(".masonry-grid");
     galleryContainer.innerHTML = "";

     let imagesToDisplay = [];

     if (category === "all") {
          imagesToDisplay = allImages;
     } else if (category === "cake") {
          imagesToDisplay = cakeImages;
     } else if (category === "bread") {
          imagesToDisplay = breadImages;
     }

     imagesToDisplay.forEach((imagePath) => {
          const imgElement = document.createElement("img");
          imgElement.src = imagePath;
          imgElement.classList.add("img-fluid");

          const masonryItem = document.createElement("div");
          masonryItem.classList.add("masonry-item");
          masonryItem.appendChild(imgElement);

          galleryContainer.appendChild(masonryItem);
     });
}

// เรียกใช้งาน displayGallery('all') เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
     displayGallery("all");
});
