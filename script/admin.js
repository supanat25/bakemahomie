// ดักจับการ Submit Form
document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า

    const bakeryName = document.getElementById("bakeryName").value;
    const bakeryType = document.getElementById("bakeryType").value;
    const imageFile = document.getElementById("imageFile").files[0];

    if (bakeryName && bakeryType && imageFile) {
        // แสดงข้อมูลใน Console (ชั่วคราว)
        console.log("ชื่อขนม:", bakeryName);
        console.log("ประเภท:", bakeryType);
        console.log("ไฟล์:", imageFile.name);

        // ตัวอย่างการอัพโหลดข้อมูลไปยัง Server
        // (คุณต้องเชื่อมต่อกับ API หรือ Backend)
        // const formData = new FormData();
        // formData.append("name", bakeryName);
        // formData.append("type", bakeryType);
        // formData.append("image", imageFile);
        // fetch("your-upload-endpoint", { method: "POST", body: formData });

        // ปิด Modal หลังการ Submit
        const uploadModal = new bootstrap.Modal(document.getElementById("uploadModal"));
        uploadModal.hide();
    } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
});
