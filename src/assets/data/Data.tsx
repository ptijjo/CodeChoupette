
interface produits {
    id: number;
    nom: string;
    imageUrl: string;
    description: string;
}

interface Avis {
    id: number;
    nom: string;
    imageUrl: string[];
    avis: string;
}

export const products: produits[] = [
    {
        id: 1,
        nom: "",
        imageUrl: "src/assets/picture/produits/IMG-20240108-WA0001.jpg",
        description: ""
    },
    {
        id: 2,
        nom: "",
        imageUrl: "src/assets/picture/produits/IMG-20240108-WA0002.jpg",
        description: ""
    },
    {
        id: 3,
        nom: "",
        imageUrl: "src/assets/picture/produits/IMG-20240108-WA0003.jpg",
        description: ""
    },
    {
        id: 4,
        nom: "",
        imageUrl: "src/assets/picture/produits/IMG-20240108-WA0004.jpg",
        description: ""
    },
    {
        id: 5,
        nom: "",
        imageUrl: "src/assets/picture/produits/IMG-20240108-WA0005.jpg",
        description: ""
    },
    {
        id: 6,
        nom: "",
        imageUrl: "src/assets/picture/produits/IMG-20240108-WA0006.jpg",
        description: ""
    },

];

export const avis: Avis[] = [
    {
        id: 1,
        nom: "",
        imageUrl: ["../picture/resulats/IMG-20240108-WA0010.jpg"],
        avis: ""
    },
    {
        id: 2,
        nom: "",
        imageUrl: ["../picture/resulats/IMG-20240108-WA0010.jpg"],
        avis: ""
    },
    {
        id: 3,
        nom: "",
        imageUrl: ["../picture/resulats/IMG-20240108-WA0010.jpg"],
        avis: ""
    },
    {
        id: 4,
        nom: "",
        imageUrl: ["../picture/resulats/IMG-20240108-WA0010.jpg"],
        avis: ""
    },
    {
        id: 5,
        nom: "",
        imageUrl: ["../picture/resulats/IMG-20240108-WA0010.jpg"],
        avis: ""
    },
]