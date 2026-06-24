import {createSlice,type PayloadAction} from '@reduxjs/toolkit';
import {type CartItem,type Size} from './cartSlice';

const standardSizes: Size[] = [
    { size: 'S', quantity: 5 },
    { size: 'M', quantity: 12 },
    { size: 'L', quantity: 8 },
    { size: 'XL', quantity: 3 }
];

const initialState:CartItem[]=[
    {
        id: 1,
        name: "Merino Ribbed Turtleneck Ivory",
        description: "Crafted from ultra-soft Merino wool, this ribbed turtleneck offers exceptional warmth and a sophisticated silhouette. Perfect for layering during colder months with its breathable yet insulating properties.",
        availableSizes: Object.assign({},standardSizes),
        mainImage: "/images/merino-turtleneck-ivory-main.jpg",
        otherImages: [
            "/images/merino-turtleneck-ivory-1.jpg",
            "/images/merino-turtleneck-ivory-2.jpg",
            "/images/merino-turtleneck-ivory-3.jpg"
        ],
        quantity: 1,
        price: 245
    },
    {
        id: 2,
        name: "Cashmere Crewneck Onyx",
        description: "Our signature crewneck sweater, meticulously knitted from 100% pure cashmere. A timeless wardrobe staple that provides unparalleled comfort, a buttery-soft handfeel, and understated elegance.",
        availableSizes: Object.assign({},standardSizes),
        mainImage: "/images/cashmere-crewneck-onyx-main.jpg",
        otherImages: [
            "/images/cashmere-crewneck-onyx-1.jpg",
            "/images/cashmere-crewneck-onyx-2.jpg"
        ],
        quantity: 1,
        price: 320
    },
    {
        id: 3,
        name: "Oversized Alpaca Cardigan Ash",
        description: "A relaxed, oversized fit cardigan made from a premium alpaca blend. Features a chunky knit texture that provides ultimate coziness and a modern, draped look ideal for lounging or traveling.",
        availableSizes: Object.assign({},standardSizes),
        mainImage: "/images/alpaca-cardigan-ash-main.jpg",
        otherImages: [
            "/images/alpaca-cardigan-ash-1.jpg",
            "/images/alpaca-cardigan-ash-2.jpg",
            "/images/alpaca-cardigan-ash-3.jpg"
        ],
        quantity: 1,
        price: 410
    },
    {
        id: 4,
        name: "Textured Knit Polo Charcoal",
        description: "A modern take on the classic polo. Knitted with a subtle textured pattern and finished with tonal buttons, this piece blends casual ease with refined tailoring for a sharp, everyday look.",
        availableSizes: Object.assign({},standardSizes),
        mainImage: "/images/knit-polo-charcoal-main.jpg",
        otherImages: [
            "/images/knit-polo-charcoal-1.jpg",
            "/images/knit-polo-charcoal-2.jpg"
        ],
        quantity: 1,
        price: 195
    },
    {
        id: 5,
        name: "Structured Mock Neck Taupe",
        description: "Constructed with a dense, structured knit that holds its shape beautifully over time. The elevated mock neck design adds a contemporary edge to a highly versatile, neutral-toned piece.",
        availableSizes: Object.assign({},standardSizes),
        mainImage: "/images/mock-neck-taupe-main.jpg",
        otherImages: [
            "/images/mock-neck-taupe-1.jpg",
            "/images/mock-neck-taupe-2.jpg"
        ],
        quantity: 1,
        price: 210
    },
    {
        id: 6,
        name: "Heavyweight Cotton Tee Noir",
        description: "The perfect luxury tee. Cut from a dense, high-quality heavyweight cotton that drapes perfectly, resists shrinking, and withstands the test of time. An essential foundation for any outfit.",
        availableSizes: Object.assign({},standardSizes),
        mainImage: "/images/cotton-tee-noir-main.jpg",
        otherImages: [
            "/images/cotton-tee-noir-1.jpg",
            "/images/cotton-tee-noir-2.jpg"
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
