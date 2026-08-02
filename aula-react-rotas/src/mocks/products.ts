export interface Product {
    id: number
    name: string
    image: string
    price: number
}

export const products: Product[] = [
 {
   id: 1,
   name: "Camiseta Dev em Dobro",
   image: "/images/camiseta-1.png",
   price: 89,
 },
 {
   id: 2,
   name: "Camiseta Dev em Dobro - Costas",
   image: "/images/camiseta-1-costas.png",
   price: 89,
 },
 {
   id: 3,
   name: "Camiseta Dev em Dobro",
   image: "/images/camiseta-2.png",
   price: 89,
 },
 {
   id: 4,
   name: "Camiseta Dev em Dobro",
   image: "/images/camiseta-2-costas.png",
   price: 89,
 },
]