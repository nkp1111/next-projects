import prisma from "./prisma";

const data = [
  {
    "title": "Sleek Wireless Bluetooth Headphones",
    "description": "Immerse yourself in music with these high-quality wireless Bluetooth headphones. Enjoy the freedom of movement and exceptional sound quality.",
    "imageUrl": "https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    "price": 690
  },
  {
    "title": "Smart LED Television - 55 Inch",
    "description": "Experience stunning visuals with this 55-inch Smart LED TV. Stream your favorite shows and movies in high definition.",
    "imageUrl": "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80",
    "price": 18990
  },
  {
    "title": "Modern Leather Sofa - Charcoal Gray",
    "description": "Upgrade your living room with this elegant charcoal gray leather sofa. Comfort meets style with this modern piece of furniture.",
    "imageUrl": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "price": 7999
  },
  {
    "title": "Professional DSLR Camera Kit",
    "description": "Capture breathtaking photos with this professional DSLR camera kit. Unlock your creativity and take your photography to the next level.",
    "imageUrl": "https://images.unsplash.com/photo-1519907328249-da60056c1ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "price": 12999
  },
  {
    "title": "Wireless Charging Pad for Smartphones",
    "description": "Charge your smartphone wirelessly with this sleek and convenient wireless charging pad. Say goodbye to messy cables.",
    "imageUrl": "https://images.unsplash.com/photo-1633381638729-27f730955c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "price": 129
  }
];

/**
 * @desc Adds product to database
 * Note: Already added data will not be added due to unique name constraint.
 */
export default async function seedData() {
  await prisma.product.createMany({
    data: data,
  })
}
