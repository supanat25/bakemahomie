const cakeImages = [
    { path: "img/1.jpg", name: "Chocolate Cake" },
    { path: "img/2.jpg", name: "Vanilla Cake" },
    { path: "img/3.jpg", name: "Strawberry Cake" }
  ];
  
  const breadImages = [
    { path: "img/conflask.jpg", name: "Whole Wheat Bread" },
    { path: "img/tardGreen.jpg", name: "Tard Green Tea" },
    { path: "img/nama.jpg", name: "Nama" }
  ];
  
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
  
    imagesToDisplay.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.path;
      imgElement.classList.add("img-fluid");
  
      // สร้าง div สำหรับรูปภาพและชื่อ
      const masonryItem = document.createElement("div");
      masonryItem.classList.add("masonry-item");
  
      // เพิ่มรูปภาพใน div
      masonryItem.appendChild(imgElement);
  
      // สร้างชื่อใต้รูปและเพิ่มใน div
      const caption = document.createElement("div");
      caption.classList.add("text-center", "mt-2"); // ปรับให้ชื่ออยู่ตรงกลาง
      caption.textContent = image.name;
  
      masonryItem.appendChild(caption);
      galleryContainer.appendChild(masonryItem);
    });
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    displayGallery('all');
  });
  