export let allImages = [];
export let cakeImages = [];
export let cheeseImages = [];
export let tardImages = [];
export let dry = [];
export let pondImages = [];



export async function fetchImageData() {
    const spinner = document.getElementById("dots");
    const galleryContainer = document.getElementById("gallery-container");
    
    // แสดง spinner
    spinner.style.display = "block";
    spinner.style.margin = "50px auto";
    galleryContainer.innerHTML = ""; // ล้างแกลเลอรีก่อนโหลด

    try {
        const response = await fetch("https://back-bakemahomie.onrender.com/get_image_data/bakery");
        if (!response.ok) {
            throw new Error("Failed to fetch image data");
        }
        const images = await response.json();
        
        // แยกประเภทของรูปภาพ
        allImages = images;
        cakeImages = images.filter(image => image.type_name === "Cake");
        cheeseImages = images.filter(image => image.type_name === "Cheese Cake");
        tardImages = images.filter(image => image.type_name === "Tart");
        dry = images.filter(image => image.type_name === "Dry");
        pondImages = images.filter(image => image.type_name === "Pound cake");
    } catch (error) {
        console.error("Error fetching image data:", error);
        galleryContainer.innerHTML = `<p style="text-align: center;">เกิดข้อผิดพลาดในการโหลดข้อมูล :(</p>`;
    } finally {
        // ซ่อน spinner
        spinner.style.display = "none";
    }
}










