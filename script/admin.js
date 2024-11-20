export function handleFormSubmit(event) {
     console.log("dfsdfdsfdsfdsfsdfsdfdsfdsf");
     event.preventDefault(); // ป้องกันการรีเฟรชหน้า
     //  const bakeryName = document.getElementById("bakeryName").value;
     //  const bakeryType = document.getElementById("bakeryType").value;
     //  const imageFile = document.getElementById("imageFile").files[0];
}

document.addEventListener("DOMContentLoaded", () => {
     // ฟังก์ชันโหลดข้อมูลและแสดงในตาราง
     const loadTableData = async () => {
          try {
               const response = await fetch(
                    "http://localhost:3000/get_image_data/bakery"
               );
               const data = await response.json();

               // อ้างอิงตารางในหน้า admin
               const tableBody = document.querySelector("#admin-content tbody");
               tableBody.innerHTML = ""; // ล้างข้อมูลเก่าออกก่อน

               data.forEach((item) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                    <th scope="row">${item.id_bakery}</th>
                    <td>${item.name}</td>
                    <td>${item.type_name}</td>
                    <td>
                        <button class="btn btn-primary btn-view" data-img="${item.img_path}">ดูรูป</button>
                        <button class="btn btn-danger btn-delete" data-id="${item.id_bakery}">ลบ</button>
                    </td>
                `;
                    tableBody.appendChild(row);
               });

               // เพิ่ม EventListener ให้ปุ่ม "ดูรูป"
               document.querySelectorAll(".btn-view").forEach((button) => {
                    button.addEventListener("click", (event) => {
                         const imgPath = event.target.getAttribute("data-img");
                         alert(`แสดงรูปภาพ: ${imgPath}`); // คุณสามารถปรับเป็นการแสดงรูปจริงใน modal ได้
                    });
               });

               // เพิ่ม EventListener ให้ปุ่ม "ลบ"
               document.querySelectorAll(".btn-delete").forEach((button) => {
                    button.addEventListener("click", (event) => {
                         const bakeryId = event.target.getAttribute("data-id");
                         deleteBakery(bakeryId); // เรียกฟังก์ชันลบข้อมูล
                    });
               });
          } catch (error) {
               console.error("Error loading table data:", error);
          }
     };

     // ฟังก์ชันลบข้อมูล
     const deleteBakery = async (id) => {
          try {
               const response = await fetch(
                    `http://localhost:3000/delete_bakery/${id}`,
                    {
                         method: "DELETE",
                    }
               );
               if (response.ok) {
                    alert("ลบข้อมูลสำเร็จ");
                    loadTableData(); // โหลดข้อมูลใหม่
               } else {
                    alert("ลบข้อมูลไม่สำเร็จ");
               }
          } catch (error) {
               console.error("Error deleting bakery:", error);
          }
     };

     // เรียกใช้ฟังก์ชันโหลดข้อมูลเมื่อหน้าเว็บโหลด
     loadTableData();
});

document.getElementById("upload-form").addEventListener("submit", async (e) => {
     e.preventDefault();
 
     const name = document.getElementById("name").value;
     const typeId = document.getElementById("type").value;
     const ingredient = document.getElementById("ingredient").value;
     const imageFile = document.getElementById("image").files[0];
 
     if (!imageFile) {
         alert("กรุณาเลือกไฟล์รูปภาพ");
         return;
     }
 
     const formData = new FormData();
     formData.append("name", name);
     formData.append("typeId", typeId);
     formData.append("ingredient", ingredient);
     formData.append("image", imageFile);
 
     try {
         const response = await fetch("http://localhost:3000/upload/bakery", {
             method: "POST",
             body: formData,
         });
 
         console.log("Fetch response received"); // ตรวจสอบว่าคำขอสำเร็จหรือไม่
 
         // อ่าน `body` ของคำตอบเพียงครั้งเดียว
         const responseData = await response.json();
         
         if (response.ok) {
             alert("อัปโหลดสำเร็จ");
             location.reload(); // รีโหลดหน้า
         } else {
             console.error("Error response:", responseData);
             alert(`เกิดข้อผิดพลาดในการอัปโหลด: ${responseData.error || "Unknown Error"}`);
         }
     } catch (error) {
         console.error("Error in submit function:", error);
     }
 });
 
