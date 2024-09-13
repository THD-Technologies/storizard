import { Kanit } from "next/font/google";

export const kanit = Kanit({
    weight: "400", // Added weight property
    subsets: ['latin'], // Changed from 'static' to 'latin'
    display: "swap",
})