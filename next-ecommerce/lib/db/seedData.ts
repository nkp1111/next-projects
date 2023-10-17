import prisma from "./prisma";

const data: {
  title: string,
  description: string,
  imageUrl: string | string[],
  price: number,
  category?: string,
  rating?: any,
  brand?: string,
  thumbnail?: string
}[] = [
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
    },
    {
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "imageUrl": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "imageUrl": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "imageUrl": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "imageUrl": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "imageUrl": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "imageUrl": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "imageUrl": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "imageUrl": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "electronics",
      "imageUrl": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    },
    {
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "electronics",
      "imageUrl": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    },
    {
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "electronics",
      "imageUrl": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    },
    {
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "electronics",
      "imageUrl": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "category": "electronics",
      "imageUrl": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "category": "electronics",
      "imageUrl": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category": "women's clothing",
      "imageUrl": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category": "women's clothing",
      "imageUrl": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category": "women's clothing",
      "imageUrl": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    },
    {
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "women's clothing",
      "imageUrl": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category": "women's clothing",
      "imageUrl": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 146
      }
    },
    {
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "imageUrl": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    },
    {
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "rating": 4.69,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "rating": 4.09,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
    },
    {
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "rating": 4.3,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
    },
    {
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "rating": 4.09,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
    },
    {
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "rating": 4.57,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg"
      ]
    },
    {
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,

      "rating": 4.25,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
      ]
    },
    {
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "rating": 4.43,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
      ]
    },
    {
      "title": "Infinix INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "price": 1099,
      "rating": 4.54,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
      ]
    },
    {
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "price": 1099,

      "rating": 4.43,
      "brand": "HP Pavilion",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
      ]
    },
    {
      "title": "perfume Oil",
      "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      "price": 13,
      "rating": 4.26,
      "brand": "Impression of Acqua Di Gio",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
      ]
    },
    {
      "title": "Brown Perfume",
      "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      "price": 40,
      "rating": 4,
      "brand": "Royal_Mirage",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/12/1.jpg",
        "https://i.dummyjson.com/data/products/12/2.jpg",
        "https://i.dummyjson.com/data/products/12/3.png",
        "https://i.dummyjson.com/data/products/12/4.jpg",
        "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
      ]
    },
    {
      "title": "Fog Scent Xpressio Perfume",
      "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      "price": 13,

      "rating": 4.59,
      "brand": "Fog Scent Xpressio",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/13/1.jpg",
        "https://i.dummyjson.com/data/products/13/2.png",
        "https://i.dummyjson.com/data/products/13/3.jpg",
        "https://i.dummyjson.com/data/products/13/4.jpg",
        "https://i.dummyjson.com/data/products/13/thumbnail.webp"
      ]
    },
    {
      "title": "Non-Alcoholic Concentrated Perfume Oil",
      "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      "price": 120,

      "rating": 4.21,
      "brand": "Al Munakh",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/14/1.jpg",
        "https://i.dummyjson.com/data/products/14/2.jpg",
        "https://i.dummyjson.com/data/products/14/3.jpg",
        "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
      ]
    },
    {
      "title": "Eau De Perfume Spray",
      "description": "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      "price": 30,
      "rating": 4.7,
      "brand": "Lord - Al-Rehab",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/15/1.jpg",
        "https://i.dummyjson.com/data/products/15/2.jpg",
        "https://i.dummyjson.com/data/products/15/3.jpg",
        "https://i.dummyjson.com/data/products/15/4.jpg",
        "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
      ]
    },
    {
      "title": "Hyaluronic Acid Serum",
      "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      "price": 19,
      "rating": 4.83,
      "brand": "L'Oreal Paris",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/16/1.png",
        "https://i.dummyjson.com/data/products/16/2.webp",
        "https://i.dummyjson.com/data/products/16/3.jpg",
        "https://i.dummyjson.com/data/products/16/4.jpg",
        "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
      ]
    },
    {
      "title": "Tree Oil 30ml",
      "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      "price": 12,

      "rating": 4.52,
      "brand": "Hemani Tea",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/17/1.jpg",
        "https://i.dummyjson.com/data/products/17/2.jpg",
        "https://i.dummyjson.com/data/products/17/3.jpg",
        "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
      ]
    },
    {
      "title": "Oil Free Moisturizer 100ml",
      "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      "price": 40,

      "rating": 4.56,
      "brand": "Dermive",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/18/1.jpg",
        "https://i.dummyjson.com/data/products/18/2.jpg",
        "https://i.dummyjson.com/data/products/18/3.jpg",
        "https://i.dummyjson.com/data/products/18/4.jpg",
        "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
      ]
    },
    {
      "title": "Skin Beauty Serum.",
      "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      "price": 46,
      "rating": 4.42,
      "brand": "ROREC White Rice",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/19/1.jpg",
        "https://i.dummyjson.com/data/products/19/2.jpg",
        "https://i.dummyjson.com/data/products/19/3.png",
        "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
      ]
    },
    {
      "title": "Freckle Treatment Cream- 15gm",
      "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      "price": 70,
      "rating": 4.06,
      "brand": "Fair & Clear",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/20/1.jpg",
        "https://i.dummyjson.com/data/products/20/2.jpg",
        "https://i.dummyjson.com/data/products/20/3.jpg",
        "https://i.dummyjson.com/data/products/20/4.jpg",
        "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
      ]
    },
    {
      "title": "- Daal Masoor 500 grams",
      "description": "Fine quality Branded Product Keep in a cool and dry place",
      "price": 20,

      "rating": 4.44,
      "brand": "Saaf & Khaas",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/21/1.png",
        "https://i.dummyjson.com/data/products/21/2.jpg",
        "https://i.dummyjson.com/data/products/21/3.jpg"
      ]
    },
    {
      "title": "Elbow Macaroni - 400 gm",
      "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      "price": 14,
      "rating": 4.57,
      "brand": "Bake Parlor Big",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/22/1.jpg",
        "https://i.dummyjson.com/data/products/22/2.jpg",
        "https://i.dummyjson.com/data/products/22/3.jpg"
      ]
    },
    {
      "title": "Orange Essence Food Flavou",
      "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      "price": 14,

      "rating": 4.85,
      "brand": "Baking Food Items",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/23/1.jpg",
        "https://i.dummyjson.com/data/products/23/2.jpg",
        "https://i.dummyjson.com/data/products/23/3.jpg",
        "https://i.dummyjson.com/data/products/23/4.jpg",
        "https://i.dummyjson.com/data/products/23/thumbnail.jpg"
      ]
    },
    {
      "title": "cereals muesli fruit nuts",
      "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      "price": 46,

      "rating": 4.94,
      "brand": "fauji",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/24/1.jpg",
        "https://i.dummyjson.com/data/products/24/2.jpg",
        "https://i.dummyjson.com/data/products/24/3.jpg",
        "https://i.dummyjson.com/data/products/24/4.jpg",
        "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
      ]
    },
    {
      "title": "Gulab Powder 50 Gram",
      "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      "price": 70,
      "rating": 4.87,
      "brand": "Dry Rose",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/25/1.png",
        "https://i.dummyjson.com/data/products/25/2.jpg",
        "https://i.dummyjson.com/data/products/25/3.png",
        "https://i.dummyjson.com/data/products/25/4.jpg",
        "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
      ]
    },
    {
      "title": "Plant Hanger For Home",
      "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      "price": 41,
      "rating": 4.08,
      "brand": "Boho Decor",
      "category": "home-decoration",
      "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/26/1.jpg",
        "https://i.dummyjson.com/data/products/26/2.jpg",
        "https://i.dummyjson.com/data/products/26/3.jpg",
        "https://i.dummyjson.com/data/products/26/4.jpg",
        "https://i.dummyjson.com/data/products/26/5.jpg",
        "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
      ]
    },
    {
      "title": "Flying Wooden Bird",
      "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      "price": 51,
      "rating": 4.41,
      "brand": "Flying Wooden",
      "category": "home-decoration",
      "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/27/1.jpg",
        "https://i.dummyjson.com/data/products/27/2.jpg",
        "https://i.dummyjson.com/data/products/27/3.jpg",
        "https://i.dummyjson.com/data/products/27/4.jpg",
        "https://i.dummyjson.com/data/products/27/thumbnail.webp"
      ]
    },
    {
      "title": "3D Embellishment Art Lamp",
      "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)",
      "price": 20,
      "rating": 4.82,
      "brand": "LED Lights",
      "category": "home-decoration",
      "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/28/1.jpg",
        "https://i.dummyjson.com/data/products/28/2.jpg",
        "https://i.dummyjson.com/data/products/28/3.png",
        "https://i.dummyjson.com/data/products/28/4.jpg",
        "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
      ]
    },
    {
      "title": "Handcraft Chinese style",
      "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      "price": 60,
      "rating": 4.44,
      "brand": "luxury palace",
      "category": "home-decoration",
      "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/29/1.jpg",
        "https://i.dummyjson.com/data/products/29/2.jpg",
        "https://i.dummyjson.com/data/products/29/3.webp",
        "https://i.dummyjson.com/data/products/29/4.webp",
        "https://i.dummyjson.com/data/products/29/thumbnail.webp"
      ]
    },
    {
      "title": "Key Holder",
      "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      "price": 30,
      "rating": 4.92,
      "brand": "Golden",
      "category": "home-decoration",
      "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
      "imageUrl": [
        "https://i.dummyjson.com/data/products/30/1.jpg",
        "https://i.dummyjson.com/data/products/30/2.jpg",
        "https://i.dummyjson.com/data/products/30/3.jpg",
        "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
      ]
    }
  ];

/**
 * @desc Adds product to database
 * Note: Already added data will not be added due to unique name constraint.
 */
export default async function seedData() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: data.map((item) => {
      const currencyConversionFactor = (Math.random() * 100) + 1;
      return {
        title: item.title,
        description: item.description,
        price: +(item.price * currencyConversionFactor),
        imageUrl: typeof item.imageUrl === "string"
          ? item.imageUrl : item.imageUrl[0],
      };
    }),
  });
}
