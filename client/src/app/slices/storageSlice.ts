import {createSlice} from '@reduxjs/toolkit';
import {type Size} from './cartSlice';

const standardSizes: Size[] = [
    { size: 'S', quantity: 5 },
    { size: 'M', quantity: 12 },
    { size: 'L', quantity: 8 },
    { size: 'XL', quantity: 3 }
];
export interface StorageItem{
    id:number,
    name:string,
    description:string,
    color:string,
    mainImage:string,
    otherImages:string[],
    availableSizes:Size[],
    quantity:number,
    price:number
}
function deepCopy(){
    return standardSizes.map(el=>({...el}));
}
const initialState:StorageItem[]=[
    {
        id: 1,
        name: "Merino Ribbed Turtleneck",
        description: "Crafted from ultra-soft Merino wool, this ribbed turtleneck offers exceptional warmth and a sophisticated silhouette. Perfect for layering during colder months with its breathable yet insulating properties.",
        availableSizes: deepCopy(),
        color:"Ivory",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 245
    },
    {
        id: 2,
        name: "Cashmere Crewneck",
        description: "Our signature crewneck sweater, meticulously knitted from 100% pure cashmere. A timeless wardrobe staple that provides unparalleled comfort, a buttery-soft handfeel, and understated elegance.",
        availableSizes:deepCopy(),
        color:"Onyx",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 320
    },
    {
        id: 3,
        name: "Oversized Alpaca Cardigan",
        description: "A relaxed, oversized fit cardigan made from a premium alpaca blend. Features a chunky knit texture that provides ultimate coziness and a modern, draped look ideal for lounging or traveling.",
        availableSizes:deepCopy(),
        color:"Ash",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 410
    },
    {
        id: 4,
        name: "Textured Knit Polo",
        description: "A modern take on the classic polo. Knitted with a subtle textured pattern and finished with tonal buttons, this piece blends casual ease with refined tailoring for a sharp, everyday look.",
        availableSizes:deepCopy(),
        color:"Charcoal",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 195
    },
    {
        id: 5,
        name: "Structured Mock Neck",
        description: "Constructed with a dense, structured knit that holds its shape beautifully over time. The elevated mock neck design adds a contemporary edge to a highly versatile, neutral-toned piece.",
        availableSizes:deepCopy(),
        color:"Taupe",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 210
    },
    {
        id: 6,
        name: "Heavyweight Cotton Tee",
        description: "The perfect luxury tee. Cut from a dense, high-quality heavyweight cotton that drapes perfectly, resists shrinking, and withstands the test of time. An essential foundation for any outfit.",
        availableSizes:deepCopy(),
        color:"Noir",
        mainImage: "/images/product images/productImages/mainProductImage.jpg",
        otherImages: [
            "/images/product images/productImages/productImage1.jpg",
            "/images/product images/productImages/productImage2.jpg",
            "/images/product images/productImages/productImage3.jpg",
            "/images/product images/productImages/productImage4.jpg",
        ],
        quantity: 1,
        price: 95
    }
]

export const storageSlice=createSlice({
    name:"storage",
    initialState,
    reducers:{

    }
})

export default storageSlice.reducer;
