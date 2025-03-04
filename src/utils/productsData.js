let products = [
    {
        id: 1,
        name: 'Apple Iphone 13',
        imgPath: '/images/products/apple-iphone-13-blue.webp',
        price: 480,
        color: 'Blue',
        weight: '174g',
        dimensions: '5.78 x 2.81 x 0.301 in',
        materials: 'Front: Ceramic Shield   Back: Glass   Frame: Aerospace-grade aluminum',
        desc: 'A refurbished iPhone 13 is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',

    },
    {
        id: 2,
        name: 'Apple iPhone 13 Pro',
        imgPath: '/images/products/apple-iphone-13-pro-white.webp',
        price: 630,
        color: 'White',
        weight: '204g',
        dimensions: '5.78 x 2.82 x 0.3 in',
        materials: 'Front: Ceramic Shield   Back: Glass   Frame: Surgical-grade stainless steel',
        desc: 'A refurbished iPhone 13 Pro is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 3,
        name: 'Apple iPhone 13 Pro Max',
        imgPath: '/images/products/apple-iphone-13-pro-max-white.webp',
        price: 700,
        color: 'White',
        weight: '240g',
        dimensions: '6.33 x 3.07 x 0.3 in',
        materials: 'Front: Ceramic Shield   Back: Glass   Frame: Surgical-grade stainless steel',
        desc: 'A refurbished iPhone 13 Pro Max is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 4,
        name: 'Apple iPhone 14 Pro Max',
        imgPath: '/images/products/apple-iphone-14-pro-max-black.webp',
        price: 1000,
        color: 'Black',
        weight: '240g',
        dimensions: '6.33 x 3.05 x 0.31 in',
        materials: 'Front: Ceramic Shield   Back: Glass   Frame: Surgical-grade stainless steel',
        desc: 'A refurbished iPhone 14 Pro Max is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 5,
        name: 'Apple iPhone 15 Pro Max',
        imgPath: '/images/products/apple-iphone-15-pro-max-natural-titanium.webp',
        price: 1300,
        color: 'Natural Titanium',
        weight: '221g',
        dimensions: '6.47 x 3.06 x 0.31 in',
        materials: 'Front: Ceramic Shield   Back: Glass   Frame: Natural Titanium',
        desc: 'A refurbished iPhone 15 Pro Max is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 6,
        name: 'Google Pixel 7',
        imgPath: '/images/products/google-pixel-7-black.webp',
        price: 480,
        color: 'Black',
        weight: '197g',
        dimensions: '6.3 x 2.9 x 0.3 in',
        materials: 'Front: Gorilla Glass Victus   Back: Glass   Frame: Aluminum',
        desc: 'A refurbished Google Pixel 7 is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 7,
        name: 'Moto G Power 64GB',
        imgPath: '/images/products/motorola-moto-g-power-black.webp',
        price: 250,
        color: 'Black/Blue',
        weight: '203g',
        dimensions: '6.57 x 3.02 x 0.38 in',
        materials: 'Front: Glass   Back: Plastic   Frame: Plastic',
        desc: 'A refurbished Moto G Power 64GB is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 8,
        name: 'Samsung Galaxy S22',
        imgPath: '/images/products/samsung-s22-gold.webp',
        price: 400,
        color: 'Gold',
        weight: '167g',
        dimensions: '5.75 x 2.78 x 0.30 in',
        materials: 'Front: Corning Gorilla Glass Victus+   Back: Glass   Frame: Aluminum',
        desc: 'A refurbished Samsung Galaxy S22 is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 9,
        name: 'Samsung Galaxy Z Flip 4',
        imgPath: '/images/products/samsung-galaxy-z-flip-4-purple.webp',
        price: 450,
        color: 'Purple',
        weight: '187g',
        dimensions: '4.27 x 2.83 x 0.63 in (when folded)',
        materials: 'Front: Gorilla Glass Victus+   Back: Glass   Frame: Aluminum',
        desc: 'A refurbished Samsung Galaxy Z Flip 4 is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 10,
        name: 'Samsung Galaxy A54',
        imgPath: '/images/products/samsung-galaxy-a54-black.webp',
        price: 725,
        color: 'Black',
        weight: '202g',
        dimensions: '6.40 x 2.99 x 0.33 in',
        materials: 'Front: Gorilla Glass 5   Back: Plastic   Frame: Plastic',
        desc: 'A refurbished Samsung Galaxy A54 is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 11,
        name: 'Motorola G Pure',
        imgPath: '/images/products/motorola-g-pure-black.webp',
        price: 280,
        color: 'Black',
        weight: '188g',
        dimensions: '6.53 x 2.98 x 0.34 in',
        materials: 'Front: Glass   Back: Plastic   Frame: Plastic',
        desc: 'A refurbished Motorola G Pure is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    },
    {
        id: 12,
        name: 'Motorola G 5G',
        imgPath: '/images/products/motorola-moto-g-5g-gray.webp',
        price: 320,
        color: 'Gray',
        weight: '204g',
        dimensions: '6.61 x 3.01 x 0.37 in',
        materials: 'Front: Glass   Back: Plastic   Frame: Plastic',
        desc: 'A refurbished Motorola G 5G is a pre-owned device that has been professionally inspected, cleaned, and restored to full functionality. It may show minor cosmetic signs of wear, such as small scratches or scuffs, but it performs like a new phone. Refurbished models are tested to ensure key features like the display, battery, and camera meet quality standards. The battery health is typically above 80%, and the phone is unlocked for use with most carriers. It usually comes with a compatible charger and may include a limited warranty, though original packaging and accessories might not be provided.',
    }

];

export default products;