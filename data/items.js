const items = [
    {
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        data_category: 'jewellery'
        
    },

    {
        id: '002',
        image: 'images/9.jpg',
        company: 'Fastrack',
        item_name: 'Fastrack Limitless Glide Advanced UltraVU HD Display',
        original_price: 1045,
        current_price: 400,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
        data_category: 'electronics'
    },
    {
        id: '003',
        image: 'images/11.webp',
        company: 'CUKOO',
        item_name: 'Play Nation Crawling Crab Rechargeable Musical Toy For Kids',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
        data_category: 'toys'
    },
    {
        id: '004',
        image: 'images/10.webp',
        company: 'NUEVOSDAMAS',
        item_name: 'Skillmatics Silicone Stacking Toys',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
         data_category: 'toys'
    },

    {
        id: '005',
        image: 'images/12.webp',
        company: 'NUEVOSDAMAS',
        item_name: 'Toy Imagine™ 8.5 inch LCD Writing Tablet Pad for Kids.',
        original_price: 2599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
         data_category: 'toys'
    },

    {
        id: '006',
        image: 'images/13.webp',
        company: 'NUEVOSDAMAS',
        item_name: 'Littles Plastic Junior Ring (Multicolour)',
        original_price: 1600,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
         data_category: 'toys'
    },
    {
        id: '007',
        image: 'images/4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
        data_category : "beauty"
    },
    {
        id: '008',
        image: 'images/5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 450,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
        data_category: "clothing"
    },

    {
        id: '009',
        image: 'images/6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
        data_category:"clothing"
    },
    {
        id: '0010',
        image: 'images/7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
        data_category:"clothing"
    },
    {
        id: '0011',
        image: 'images/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category:"beauty"
    },

    {
        id: '0012',
        image: 'images/14.jpg',
        company: 'Xiomi',
        item_name: 'Xiaomi Pad 6',
        original_price: 285,
        current_price: 542,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "electronics"
    },
    {
        id: '0013',
        image: 'images/14.jpg',
        company: 'HP',
        item_name: 'HP Laptop 15s, AMD Ryzen 5 5500U',
        original_price: 285,
        current_price: 262,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "electronics"
    },

    {
        id: '0014',
        image: 'images/15.webp',
        company: 'Zebronics',
        item_name: 'ZEBRONICS Zeb-Thunder PRO On-Ear Wireless Headphone',
        original_price: 285,
        current_price: 500,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "electronics"
    },

    {
        id: '0015',
        image: 'images/17.webp',
        company: 'Xiomi',
        item_name: 'Mi 108 cm (43 inches) X Series 4K Ultra HD Smart Google TV',
        original_price: 285,
        current_price: 700,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "electronics"
    },


    {
        id: '0016',
        image: 'images/18.webp',
        company: 'Moroccanoil',
        item_name: 'Moroccanoil Blonde Perfecting Purple Conditioner ',
        original_price: 285,
        current_price: 800,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "beauty"
    },


    {
        id: '0017',
        image: 'images/19.webp',
        company: 'Swiss beauty',
        item_name: 'Swiss Beauty Hydra Anti Wrinkle Eye Serum Patch ',
        original_price: 285,
        current_price: 850,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "beauty"
    },

    {
        id: '0018',
        image: 'images/20.webp',
        company: 'Garnier',
        item_name: 'Garnier Men Turbo Bright Double Action Face Wash ',
        original_price: 285,
        current_price: 750,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "beauty"
    },

    {
        id: '0019',
        image: 'images/21.webp',
        company: 'Leriya Fashion',
        item_name: 'Western Dress ',
        original_price: 285,
        current_price: 900,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "clothing"
    },

    {
        id: '0020',
        image: 'images/22.webp',
        company: 'GRECIILOOKS',
        item_name: 'Mens Regular Fit Shirt ',
        original_price: 285,
        current_price: 1000,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "clothing"
    },

    {
        id: '0021',
        image: 'images/23.webp',
        company: 'Shining Diva Fashion',
        item_name: 'Shining Diva Fashion ',
        original_price: 285,
        current_price: 1900,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "jewellery"
    },


    {
        id: '0022',
        image: 'images/24.webp',
        company: 'Shining Diva Fashion',
        item_name: 'Latest Stylish Design Fancy Pearl Necklace Jewellery Set',
        original_price: 285,
        current_price: 1000,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "jewellery"
    },


    {
        id: '0023',
        image: 'images/25.webp',
        company: 'Crompton',
        item_name: 'Crompton Ameo 750-Watt Mixer Grinder with MaxiGrind',
        original_price: 285,
        current_price: 1400,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "home-appliances"
    },

    {
        id: '0024',
        image: 'images/26.webp',
        company: 'Pigeon',
        item_name: 'Pigeon Healthifry Digital Air Fryer',
        original_price: 285,
        current_price: 1420,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "home-appliances"
    },

    
    {
        id: '0025',
        image: 'images/27.webp',
        company: 'INALSA',
        item_name: 'INALSA Wet and Dry Vacuum Cleaner for Home',
        original_price: 285,
        current_price: 1800,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "home-appliances"
    },


    {
        id: '0026',
        image: 'images/28.webp',
        company: 'AGARO',
        item_name: 'AGARO Marvel 19 Liters Oven',
        original_price: 285,
        current_price: 300,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
        data_category: "home-appliances"
    },

    


];