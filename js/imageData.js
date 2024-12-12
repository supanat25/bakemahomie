export let allImages = [];
export let cakeImages = [];
export let cheeseImages = [];
export let tardImages = [];
export let dry = [];
export let pondImages = [];



export async function fetchImageData() {
    try {
        const response = await fetch("https://back-bakemahomie.onrender.com/get_image_data/bakery");
        if (!response.ok) {
            throw new Error("Failed to fetch image data");
        }
        const images = await response.json();
        // if (!type) {
        //     // กรณีไม่มี type ให้กรองเฉพาะ category
        //     filteredImages = images.filter(image => image.type_name === category);
        // } else {
        //     // กรณีมี type ให้กรองทั้ง category และ type
        //     filteredImages = images.filter(image => image.type_name === category && image.sub_type === type);
        // }
        allImages = images;
        cakeImages = images.filter(image => image.type_name === "Cake");
        cheeseImages = images.filter(image => image.type_name === "Cheese Cake");
        tardImages = images.filter(image => image.type_name === "Tart");
        dry = images.filter(image => image.type_name === "Dry");
        pondImages = images.filter(image => image.type_name === "Pound cake");

    } catch (error) {
        console.error("Error fetching image data:", error);
    }
}







// export const cakeImages = [
     
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c1.jpg?updatedAt=1731573239253", name: "White n Chocolate cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c2.jpg?updatedAt=1731573243134", name: "Strawberry cream cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c3.jpg?updatedAt=1731573246152", name: "Banana caramel cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c4.jpg?updatedAt=1731573249655", name: "Banoffee" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c5.jpg?updatedAt=1731573253747", name: "Cocoa brownie" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c6.jpg?updatedAt=1731573256805", name: "Chocolate fudge cream cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c7.jpg?updatedAt=1731573257099", name: "Chocolate cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c8.jpg?updatedAt=1731573257029", name: "Coconut chiffon cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c9.jpg?updatedAt=1731573257244", name: "Strawberry cream cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c10.jpg?updatedAt=1731573240073", name: "Lemon glaze loaf" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c11.jpg?updatedAt=1731573239727", name: "Lemon white chocolate cream cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c12.jpg?updatedAt=1731573239962", name: "Lemon glaze mini cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c13.jpg?updatedAt=1731573239975", name: "Orange soft cake.." },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c14.jpg?updatedAt=1731573239761", name: "Mocca caramel macadamia cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c15.jpg?updatedAt=1731573239958", name: "Orange soft cake." },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c16.jpg?updatedAt=1731573239992", name: "Red velvet loaf" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c17.jpg?updatedAt=1731573239937", name: "Matcha Banoffee" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c18.jpg?updatedAt=1731573239964", name: "Chocolate cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c19.jpg?updatedAt=1731573242402", name: "Strawberry shortcake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c20.jpg?updatedAt=1731573243050", name: "Strawberry shortcake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c21.jpg?updatedAt=1731573243244", name: "Panna cotta" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c22.jpg?updatedAt=1731573243477", name: "Panna cotta" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c23.jpg?updatedAt=1731573243372", name: "Chocolate cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c24.jpg?updatedAt=1731573243334", name: "Lemon glaze mini cake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c25.jpg?updatedAt=1731573243693", name: "Strawberry shortcake" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c26.jpg?updatedAt=1731573244023", name: "...." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c27.jpg?updatedAt=1731573243564", name: "Blueberry cheese pie" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c28.jpg?updatedAt=1731573245507", name: "Chocolate mousse cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c29.jpg?updatedAt=1731573246063", name: "Donut cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c30.jpg?updatedAt=1731573246434", name: "Donut cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c31.jpg?updatedAt=1731573246961", name: "Toffee cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c32.jpg?updatedAt=1731573246478", name: "Orange cream cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c33.jpg?updatedAt=1731573246627", name: ". .." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c34.jpg?updatedAt=1731573246684", name: "Chocolate orange cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c35.jpg?updatedAt=1731573246778", name: "Strawberry cake , Blueberry cake , Orange" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c36.jpg?updatedAt=1731573247662", name: "Banoffee" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c37.jpg?updatedAt=1731573249222", name: "Cupcake ( Christmas version )" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c38.jpg?updatedAt=1731573249308", name: "Strawberry shortcake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c39.jpg?updatedAt=1731573249273", name: "Strawberry shortcake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c40.jpg?updatedAt=1731573249758", name: "Strawberry shortcake ( Valentines version)" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c41.jpg?updatedAt=1731573249632", name: "Strawberry shortcake ( Valentines version)" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c42.jpg?updatedAt=1731573249866", name: ". . ." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c43.jpg?updatedAt=1731573249966", name: "Orange soft cake..." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c44.jpg?updatedAt=1731573250104", name: ". .." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c45.jpg?updatedAt=1731573250810", name: "!!!!" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c46.jpg?updatedAt=1731573251252", name: "Thai tea bubble cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c47.jpg?updatedAt=1731573252740", name: "Banoffee" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c48.jpg?updatedAt=1731573252570", name: ". . ." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c49.jpg?updatedAt=1731573253135", name: ". . . ...." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c50.jpg?updatedAt=1731573253540", name: "Orange soft cake" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c51.jpg?updatedAt=1731573253863", name: "Orange soft cake...." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c52.jpg?updatedAt=1731573253992", name: "Red velvet" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c53.jpg?updatedAt=1731573254193", name: "Red velvet." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c54.jpg?updatedAt=1731573254387", name: "Red. velvet" },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c55.jpg?updatedAt=1731573254580", name: "Soft cake..." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c56.jpg?updatedAt=1731573254731", name: "Soft cake.." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c57.jpg?updatedAt=1731573255032", name: "Soft cake." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c58.jpg?updatedAt=1731573255154", name: ". . . ." },
// { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cake/c59.jpg?updatedAt=1731573255365", name: ". ." },




     
          
             
        
         
// ];

// export const cheeseImages = [
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch1.jpg?updatedAt=1731575058442", name: "ชีสเค้ก 1" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch2.jpg?updatedAt=1731575062291", name: "ชีสเค้ก 2" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch3.jpg?updatedAt=1731575065126", name: "ชีสเค้ก 3" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch4.jpg?updatedAt=1731575065305", name: "ชีสเค้ก 4" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch5.jpg?updatedAt=1731575066210", name: "ชีสเค้ก 5" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch6.jpg?updatedAt=1731575065425", name: "ชีสเค้ก 6" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch7.jpg?updatedAt=1731575065682", name: "ชีสเค้ก 7" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch8.jpg?updatedAt=1731575065706", name: "ชีสเค้ก 8" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch9.jpg?updatedAt=1731575066067", name: "ชีสเค้ก 9" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch10.jpg?updatedAt=1731575058997", name: "ชีสเค้ก 10" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch11.jpg?updatedAt=1731575059254", name: "ชีสเค้ก 11" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch12.jpg?updatedAt=1731575059162", name: "ชีสเค้ก 12" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch13.jpg?updatedAt=1731575059073", name: "ชีสเค้ก 13" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch14.jpg?updatedAt=1731575059117", name: "ชีสเค้ก 14" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch15.jpg?updatedAt=1731575059104", name: "ชีสเค้ก 15" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch16.jpg?updatedAt=1731575059273", name: "ชีสเค้ก 16" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch17.jpg?updatedAt=1731575059256", name: "ชีสเค้ก 17" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch18.jpg?updatedAt=1731575059208", name: "ชีสเค้ก 18" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch19.jpg?updatedAt=1731575061604", name: "ชีสเค้ก 19" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch20.jpg?updatedAt=1731575062719", name: "ชีสเค้ก 20" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch21.jpg?updatedAt=1731575062292", name: "ชีสเค้ก 21" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch22.jpg?updatedAt=1731575062264", name: "ชีสเค้ก 22" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch23.jpg?updatedAt=1731575062218", name: "ชีสเค้ก 23" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch24.jpg?updatedAt=1731575062856", name: "ชีสเค้ก 24" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch25.jpg?updatedAt=1731575063016", name: "ชีสเค้ก 25" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch26.jpg?updatedAt=1731575062599", name: "ชีสเค้ก 26" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch27.jpg?updatedAt=1731575063077", name: "ชีสเค้ก 27" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/cheese/ch28.jpg?updatedAt=1731575064736", name: "ชีสเค้ก 28" }
//    ]
//    ;

// export const tardImages = [
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t1.jpg?updatedAt=1731576311906", name: "ทาร์ต 1" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t2.jpg?updatedAt=1731576315109", name: "ทาร์ต 2" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t3.jpg?updatedAt=1731576315484", name: "ทาร์ต 3" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t4.jpg?updatedAt=1731576315675", name: "ทาร์ต 4" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t5.jpg?updatedAt=1731576315723", name: "ทาร์ต 5" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t6.jpg?updatedAt=1731576315775", name: "ทาร์ต 6" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t7.jpg?updatedAt=1731576315874", name: "ทาร์ต 7" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t8.jpg?updatedAt=1731576316017", name: "ทาร์ต 8" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t9.jpg?updatedAt=1731576316146", name: "ทาร์ต 9" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t10.jpg?updatedAt=1731576312927", name: "ทาร์ต 10" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t11.jpg?updatedAt=1731576312257", name: "ทาร์ต 11" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t12.jpg?updatedAt=1731576311943", name: "ทาร์ต 12" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t13.jpg?updatedAt=1731576312530", name: "ทาร์ต 13" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t14.jpg?updatedAt=1731576312555", name: "ทาร์ต 14" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t15.jpg?updatedAt=1731576312498", name: "ทาร์ต 15" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t16.jpg?updatedAt=1731576312827", name: "ทาร์ต 16" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t17.jpg?updatedAt=1731576312259", name: "ทาร์ต 17" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t18.jpg?updatedAt=1731576312795", name: "ทาร์ต 18" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/tard/t19.jpg?updatedAt=1731576315160", name: "ทาร์ต 19" }
//    ]
//    ;

// export const pondImages = [
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po1.jpg?updatedAt=1731576276518", name: "เค้กปอนด์ 1" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po2.jpg?updatedAt=1731576279404", name: "เค้กปอนด์ 2" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po3.jpg?updatedAt=1731576283762", name: "เค้กปอนด์ 3" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po4.jpg?updatedAt=1731576287158", name: "เค้กปอนด์ 4" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po5.jpg?updatedAt=1731576290416", name: "เค้กปอนด์ 5" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po6.jpg?updatedAt=1731576294602", name: "เค้กปอนด์ 6" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po7.jpg?updatedAt=1731576298467", name: "เค้กปอนด์ 7" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po8.jpg?updatedAt=1731576301286", name: "เค้กปอนด์ 8" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po9.jpg?updatedAt=1731576304784", name: "เค้กปอนด์ 9" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po10.jpg?updatedAt=1731576276754", name: "เค้กปอนด์ 10" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po11.jpg?updatedAt=1731576276069", name: "เค้กปอนด์ 11" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po12.jpg?updatedAt=1731576276015", name: "เค้กปอนด์ 12" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po13.jpg?updatedAt=1731576276723", name: "เค้กปอนด์ 13" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po14.jpg?updatedAt=1731576276847", name: "เค้กปอนด์ 14" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po15.jpg?updatedAt=1731576276877", name: "เค้กปอนด์ 15" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po16.jpg?updatedAt=1731576276830", name: "เค้กปอนด์ 16" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po17.jpg?updatedAt=1731576276868", name: "เค้กปอนด์ 17" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po18.jpg?updatedAt=1731576276609", name: "เค้กปอนด์ 18" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po19.jpg?updatedAt=1731576279357", name: "เค้กปอนด์ 19" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po20.jpg?updatedAt=1731576280238", name: "เค้กปอนด์ 20" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po21.jpg?updatedAt=1731576280465", name: "เค้กปอนด์ 21" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po22.jpg?updatedAt=1731576280677", name: "เค้กปอนด์ 22" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po23.jpg?updatedAt=1731576280159", name: "เค้กปอนด์ 23" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po24.jpg?updatedAt=1731576280501", name: "เค้กปอนด์ 24" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po25.jpg?updatedAt=1731576280503", name: "เค้กปอนด์ 25" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po26.jpg?updatedAt=1731576280484", name: "เค้กปอนด์ 26" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po27.jpg?updatedAt=1731576280870", name: "เค้กปอนด์ 27" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po28.jpg?updatedAt=1731576282648", name: "เค้กปอนด์ 28" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po29.jpg?updatedAt=1731576283147", name: "เค้กปอนด์ 29" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po30.jpg?updatedAt=1731576283754", name: "เค้กปอนด์ 30" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po31.jpg?updatedAt=1731576283870", name: "เค้กปอนด์ 31" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po32.jpg?updatedAt=1731576283909", name: "เค้กปอนด์ 32" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po33.jpg?updatedAt=1731576284035", name: "เค้กปอนด์ 33" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po34.jpg?updatedAt=1731576283977", name: "เค้กปอนด์ 34" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po35.jpg?updatedAt=1731576284507", name: "เค้กปอนด์ 35" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po36.jpg?updatedAt=1731576284161", name: "เค้กปอนด์ 36" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po37.jpg?updatedAt=1731576285937", name: "เค้กปอนด์ 37" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po38.jpg?updatedAt=1731576286261", name: "เค้กปอนด์ 38" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po39.jpg?updatedAt=1731576287552", name: "เค้กปอนด์ 39" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po40.jpg?updatedAt=1731576287675", name: "เค้กปอนด์ 40" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po41.jpg?updatedAt=1731576287622", name: "เค้กปอนด์ 41" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po42.jpg?updatedAt=1731576287632", name: "เค้กปอนด์ 42" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po43.jpg?updatedAt=1731576287150", name: "เค้กปอนด์ 43" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po44.jpg?updatedAt=1731576287523", name: "เค้กปอนด์ 44" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po45.jpg?updatedAt=1731576288275", name: "เค้กปอนด์ 45" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po46.jpg?updatedAt=1731576289308", name: "เค้กปอนด์ 46" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po47.jpg?updatedAt=1731576289485", name: "เค้กปอนด์ 47" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po48.jpg?updatedAt=1731576290323", name: "เค้กปอนด์ 48" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po49.jpg?updatedAt=1731576290455", name: "เค้กปอนด์ 49" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po50.jpg?updatedAt=1731576290612", name: "เค้กปอนด์ 50" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po51.jpg?updatedAt=1731576290799", name: "เค้กปอนด์ 51" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po52.jpg?updatedAt=1731576291044", name: "เค้กปอนด์ 52" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po53.jpg?updatedAt=1731576290733", name: "เค้กปอนด์ 53" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po54.jpg?updatedAt=1731576291598", name: "เค้กปอนด์ 54" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po55.jpg?updatedAt=1731576293242", name: "เค้กปอนด์ 55" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po56.jpg?updatedAt=1731576292910", name: "เค้กปอนด์ 56" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po57.jpg?updatedAt=1731576294111", name: "เค้กปอนด์ 57" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po58.jpg?updatedAt=1731576293825", name: "เค้กปอนด์ 58" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po59.jpg?updatedAt=1731576293990", name: "เค้กปอนด์ 59" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po60.jpg?updatedAt=1731576294619", name: "เค้กปอนด์ 60" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po61.jpg?updatedAt=1731576294694", name: "เค้กปอนด์ 61" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po62.jpg?updatedAt=1731576294383", name: "เค้กปอนด์ 62" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po63.jpg?updatedAt=1731576295014", name: "เค้กปอนด์ 63" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po64.jpg?updatedAt=1731576296152", name: "เค้กปอนด์ 64" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po65.jpg?updatedAt=1731576296456", name: "เค้กปอนด์ 65" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po66.jpg?updatedAt=1731576297084", name: "เค้กปอนด์ 66" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po67.jpg?updatedAt=1731576297261", name: "เค้กปอนด์ 67" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po68.jpg?updatedAt=1731576297373", name: "เค้กปอนด์ 68" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po69.jpg?updatedAt=1731576297693", name: "เค้กปอนด์ 69" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po70.jpg?updatedAt=1731576297962", name: "เค้กปอนด์ 70" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po71.jpg?updatedAt=1731576298081", name: "เค้กปอนด์ 71" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po72.jpg?updatedAt=1731576298210", name: "เค้กปอนด์ 72" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po73.jpg?updatedAt=1731576299413", name: "เค้กปอนด์ 73" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po74.jpg?updatedAt=1731576299662", name: "เค้กปอนด์ 74" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po75.jpg?updatedAt=1731576300314", name: "เค้กปอนด์ 75" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po76.jpg?updatedAt=1731576300608", name: "เค้กปอนด์ 76" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po77.jpg?updatedAt=1731576301042", name: "เค้กปอนด์ 77" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po78.jpg?updatedAt=1731576301051", name: "เค้กปอนด์ 78" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po79.jpg?updatedAt=1731576301380", name: "เค้กปอนด์ 79" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po80.jpg?updatedAt=1731576301520", name: "เค้กปอนด์ 80" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po81.jpg?updatedAt=1731576301636", name: "เค้กปอนด์ 81" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po82.jpg?updatedAt=1731576303151", name: "เค้กปอนด์ 82" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po83.jpg?updatedAt=1731576302739", name: "เค้กปอนด์ 83" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po84.jpg?updatedAt=1731576303434", name: "เค้กปอนด์ 84" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po85.jpg?updatedAt=1731576303418", name: "เค้กปอนด์ 85" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po86.jpg?updatedAt=1731576303771", name: "เค้กปอนด์ 86" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po87.jpg?updatedAt=1731576303835", name: "เค้กปอนด์ 87" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po88.jpg?updatedAt=1731576303913", name: "เค้กปอนด์ 88" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po89.jpg?updatedAt=1731576304234", name: "เค้กปอนด์ 89" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po90.jpg?updatedAt=1731576304640", name: "เค้กปอนด์ 90" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po91.jpg?updatedAt=1731576304649", name: "เค้กปอนด์ 91" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po92.jpg?updatedAt=1731576305269", name: "เค้กปอนด์ 92" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po93.jpg?updatedAt=1731576305459", name: "เค้กปอนด์ 93" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po94.jpg?updatedAt=1731576305523", name: "เค้กปอนด์ 94" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po95.jpg?updatedAt=1731576305993", name: "เค้กปอนด์ 95" },
//   { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/pond/po96.jpg?updatedAt=1731576306340", name: "เค้กปอนด์ 96" }

// ];

// export const dry = [
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr1.jpg?updatedAt=1731576258623", name: "ของแห้ง 1" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr2.jpg?updatedAt=1731576261962", name: "ของแห้ง 2" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr3.jpg?updatedAt=1731576265016", name: "ของแห้ง 3" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr4.jpg?updatedAt=1731576268252", name: "ของแห้ง 4" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr5.jpg?updatedAt=1731576268224", name: "ของแห้ง 5" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr6.jpg?updatedAt=1731576268316", name: "ของแห้ง 6" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr7.jpg?updatedAt=1731576269138", name: "ของแห้ง 7" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr8.jpg?updatedAt=1731576268790", name: "ของแห้ง 8" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr9.jpg?updatedAt=1731576269465", name: "ของแห้ง 9" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr10.jpg?updatedAt=1731576258415", name: "ของแห้ง 10" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr11.jpg?updatedAt=1731576258146", name: "ของแห้ง 11" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr12.jpg?updatedAt=1731576258007", name: "ของแห้ง 12" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr13.jpg?updatedAt=1731576258723", name: "ของแห้ง 13" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr14.jpg?updatedAt=1731576258493", name: "ของแห้ง 14" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr15.jpg?updatedAt=1731576258741", name: "ของแห้ง 15" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr16.jpg?updatedAt=1731576258877", name: "ของแห้ง 16" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr17.jpg?updatedAt=1731576258672", name: "ของแห้ง 17" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr18.jpg?updatedAt=1731576258678", name: "ของแห้ง 18" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr19.jpg?updatedAt=1731576261549", name: "ของแห้ง 19" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr20.jpg?updatedAt=1731576261555", name: "ของแห้ง 20" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr21.jpg?updatedAt=1731576261713", name: "ของแห้ง 21" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr22.jpg?updatedAt=1731576262719", name: "ของแห้ง 22" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr23.jpg?updatedAt=1731576262016", name: "ของแห้ง 23" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr24.jpg?updatedAt=1731576262573", name: "ของแห้ง 24" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr25.jpg?updatedAt=1731576262200", name: "ของแห้ง 25" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr26.jpg?updatedAt=1731576262134", name: "ของแห้ง 26" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr27.jpg?updatedAt=1731576262077", name: "ของแห้ง 27" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr28.jpg?updatedAt=1731576264825", name: "ของแห้ง 28" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr29.jpg?updatedAt=1731576264805", name: "ของแห้ง 29" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr30.jpg?updatedAt=1731576265295", name: "ของแห้ง 30" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr31.jpg?updatedAt=1731576265519", name: "ของแห้ง 31" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr32.jpg?updatedAt=1731576265916", name: "ของแห้ง 32" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr33.jpg?updatedAt=1731576265502", name: "ของแห้ง 33" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr34.jpg?updatedAt=1731576265679", name: "ของแห้ง 34" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr35.jpg?updatedAt=1731576265980", name: "ของแห้ง 35" },
//      { path: "https://ik.imagekit.io/4mmx1au8d/bakemahomie/dry/dr36.jpg?updatedAt=1731576265941", name: "ของแห้ง 36" }
     
// ];

// // ฟังก์ชันสุ่มเลือกจำนวน n รูปจาก array ที่กำหนด
// function getRandomImages(array, n) {
//      return array.sort(() => 0.5 - Math.random()).slice(0, n);
// }

// // ใช้ฟังก์ชัน getRandomImages เพื่อสุ่ม 20 รูปจากแต่ละประเภท
// export const randomCakeImages = getRandomImages(cakeImages, 20);
// export const randomCheeseImages = getRandomImages(cheeseImages, 15);
// export const randomDryImages = getRandomImages(dry, 15);
// export const randomTardImages = getRandomImages(tardImages, 15);
// export const randomPoundImages = getRandomImages(pondImages, 20);

// // ฟังก์ชันสำหรับสุ่มสลับตำแหน่งอาเรย์
// function shuffleArray(array) {
//      for (let i = array.length - 1; i > 0; i--) {
//          const j = Math.floor(Math.random() * (i + 1));
//          [array[i], array[j]] = [array[j], array[i]]; // สลับตำแหน่งสองตัว
//      }
//      return array;
//  }
 
//  // ตัวอย่างการใช้งานกับตัวแปร allImages
//  export const allImages = [
//      ...randomCakeImages,
//      ...randomCheeseImages,
//      ...randomDryImages,
//      ...randomTardImages,
//      ...randomPoundImages,
// ];
//  const shuffledAllImages = shuffleArray(allImages);
     
// //  console.log(shuffledAllImages);
 

// // รวมรูปทั้งหมดที่สุ่มได้จากแต่ละประเภทมาเก็บใน allImages



