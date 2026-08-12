import {createSlice} from '@reduxjs/toolkit';
import {type Size} from './cartSlice';

export interface StorageItem{
    id:number,
    name:string,
    description:string,
    color:string,
    mainImage:string,
    otherImages:string[],
    availableSizes:Size[],
    quantity:number,
    price:number,
    totalSales:number,
    launchDate:string,
}
const initialState:StorageItem[]=[
    {
        id: 1,
        name: "Merino Ribbed Turtleneck",
        description: "Crafted from ultra-soft Merino wool, this ribbed turtleneck offers exceptional warmth and a sophisticated silhouette. Perfect for layering during colder months with its breathable yet insulating properties.",
        availableSizes: [
            { size: 'S', quantity: 5 },
            { size: 'M', quantity: 12 },
            { size: 'L', quantity: 8 },
        ],
        color:"Ivory",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 245,
        totalSales:300,
        launchDate:new Date(2025,11,31).toISOString(),
    },
    {
        id: 2,
        name: "Cashmere Crewneck",
        description: "Our signature crewneck sweater, meticulously knitted from 100% pure cashmere. A timeless wardrobe staple that provides unparalleled comfort, a buttery-soft handfeel, and understated elegance.",
        availableSizes:[
            { size: 'M', quantity: 12 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 3 }
        ],
        color:"Onyx",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 320,
        totalSales:49,
        launchDate:new Date(2023,8,11).toISOString()    ,
    },
    {
        id: 3,
        name: "Oversized Alpaca Cardigan",
        description: "A relaxed, oversized fit cardigan made from a premium alpaca blend. Features a chunky knit texture that provides ultimate coziness and a modern, draped look ideal for lounging or traveling.",
        availableSizes:[
            { size: 'S', quantity: 5 },
            { size: 'M', quantity: 2 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 3 }
        ],
        color:"Ash",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 410,
        totalSales:99,
        launchDate:new Date(2021,5,13).toISOString()    ,
    },
    {
        id: 4,
        name: "Textured Knit Polo",
        description: "A modern take on the classic polo. Knitted with a subtle textured pattern and finished with tonal buttons, this piece blends casual ease with refined tailoring for a sharp, everyday look.",
        availableSizes:[
            { size: 'S', quantity: 5 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 3 }
        ],
        color:"Charcoal",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 195,
        totalSales:0,
        launchDate:new Date(2020,0,1).toISOString() ,
    },
    {
        id: 5,
        name: "Structured Mock Neck",
        description: "Constructed with a dense, structured knit that holds its shape beautifully over time. The elevated mock neck design adds a contemporary edge to a highly versatile, neutral-toned piece.",
        availableSizes:[
            { size: 'S', quantity: 5 },
            { size: 'M', quantity: 12 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 3 }
        ],
        color:"Taupe",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 210,
        totalSales:6,
        launchDate:new Date(2025,8,28).toISOString()    ,
    },
    {
        id: 6,
        name: "Heavyweight Cotton Tee",
        description: "The perfect luxury tee. Cut from a dense, high-quality heavyweight cotton that drapes perfectly, resists shrinking, and withstands the test of time. An essential foundation for any outfit.",
        availableSizes:[
            { size: 'S', quantity: 5 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 3 }
        ],
        color:"Noir",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 95,
        totalSales:111,
        launchDate:new Date(2026,4,4).toISOString() ,
    },
    {
        id: 7,
        name: "Fine Gauge V-Neck",
        description: "A lightweight, breathable V-neck sweater crafted from superfine wool.",
        color: "Sand",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'S', quantity: 5 },
        ],
        quantity: 45,
        price: 180,
        totalSales: 112,
        launchDate: "2026-03-15T00:00:00Z"
    },
    {
        id: 8,
        name: "Brushed Wool Zip-Up",
        description: "An ultra-soft brushed wool jacket with a silver-tone two-way zipper.",
        color: "Navy",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'M', quantity: 12 },
            { size: 'XL', quantity: 3 }
        ],
        quantity: 20,
        price: 275,
        totalSales: 89,
        launchDate: "2025-11-10T00:00:00Z"
    },
    {
        id: 9,
        name: "Chunky Cable Knit",
        description: "Heavyweight traditional cable knit sweater for maximum warmth.",
        color: "Cream",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'S', quantity: 1 },
            { size: 'M', quantity: 1 },
            { size: 'L', quantity: 1 },
            { size: 'XL', quantity: 1 }
        ],
        quantity: 15,
        price: 350,
        totalSales: 210,
        launchDate: "2025-10-01T00:00:00Z"
    },
    {
        id: 10,
        name: "Silk Blend Short Sleeve",
        description: "Relaxed fit short-sleeve button down made from a fluid silk-cotton blend.",
        color: "Olive",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes:[
            { size: 'S', quantity: 5 },
            { size: 'M', quantity: 12 },
        ],
        quantity: 60,
        price: 160,
        totalSales: 45,
        launchDate: "2026-04-20T00:00:00Z"
    },
    {
        id: 11,
        name: "French Terry Sweatshirt",
        description: "Elevated everyday crewneck in densely knitted loopback French terry.",
        color: "Heather Grey",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 3 }
        ],
        quantity: 120,
        price: 145,
        totalSales: 430,
        launchDate: "2025-08-15T00:00:00Z"
    },
    {
        id: 12,
        name: "Linen Button-Down",
        description: "Garment-dyed pure linen shirt with a soft, lived-in feel.",
        color: "White",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'S', quantity: 5 },
            { size: 'XL', quantity: 3 }
        ],
        quantity: 85,
        price: 120,
        totalSales: 315,
        launchDate: "2026-02-10T00:00:00Z"
    },
    {
        id: 13,
        name: "Waffle Knit Henley",
        description: "Textured mid-weight henley with a three-button placket.",
        color: "Slate",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes:[

        ],
        quantity: 90,
        price: 135,
        totalSales: 150,
        launchDate: "2025-09-22T00:00:00Z"
    },
    {
        id: 14,
        name: "Pima Cotton Long Sleeve",
        description: "The ultimate layering piece constructed from smooth, durable Pima cotton.",
        color: "Midnight",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'S', quantity: 5 },
            { size: 'M', quantity: 12 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 3 }
        ],
        quantity: 200,
        price: 110,
        totalSales: 620,
        launchDate: "2025-07-05T00:00:00Z"
    },
    {
        id: 15,
        name: "Mohair Blend Cardigan",
        description: "A fuzzy, textured V-neck cardigan featuring horn buttons.",
        color: "Rust",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'S', quantity: 5 },
            { size: 'M', quantity: 12 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 33 }
        ],
        quantity: 12,
        price: 390,
        totalSales: 54,
        launchDate: "2025-12-01T00:00:00Z"
    },
    {
        id: 16,
        name: "Mercerized Cotton T-Shirt",
        description: "A refined t-shirt with a subtle sheen, perfect for wearing under a blazer.",
        color: "Sage",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        availableSizes: [
            { size: 'S', quantity: 5 },
            { size: 'M', quantity: 12 },
            { size: 'L', quantity: 8 },
            { size: 'XL', quantity: 103 }
        ],
        quantity: 150,
        price: 85,
        totalSales: 890,
        launchDate: "2025-05-18T00:00:00Z"
    }
]

export const storageSlice=createSlice({
    name:"storage",
    initialState,
    reducers:{

    }
})

export default storageSlice.reducer;
