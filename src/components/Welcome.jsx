import banner1 from '../assets/images/ArogyaBanner.jpg';
import banner2 from '../assets/images/ArogyaBanner.jpg';
import sesame from '../assets/images/products/sesame.png';
import Safflower from '../assets/images/products/safflower.png';
import almond from '../assets/images/products/almond.png';
import castor from '../assets/images/products/castor.png';
import flax from '../assets/images/products/flax.png';
import niger from '../assets/images/products/niger.png';
import milk from '../assets/images/products/milk.png';
import ghee from '../assets/images/products/ghee.png';
import mustard from '../assets/images/products/mustard.png';
import coconut from '../assets/images/products/coconut.png';


const products = [
    { name: 'Organic Coconut Oil', image: coconut, description: 'Cold-pressed from the finest coconuts, our organic coconut oil is perfect for cooking, skincare, and hair care.' },
    { name: 'Organic Sesame Oil', image: sesame, description: 'Rich in antioxidants, our organic sesame oil is perfect for stir-frying, drizzling over salads, or adding to your favorite recipes.' },
    { name: 'Organic Mustard Oil', image: mustard, description: 'Extracted from high-quality mustard seeds, this oil is perfect for traditional cooking, offering a bold flavor and numerous health benefits.' },
    { name: 'Organic Groundnut Oil', image: banner1, description: 'Cold-pressed from premium peanuts, this oil is rich in monounsaturated fats and perfect for daily cooking.' },
    { name: 'Organic Safflower Oil', image: Safflower, description: 'This light and neutral-tasting oil is excellent for cooking at high temperatures and can also be used in skin care.' },
    { name: 'Organic Castor Oil', image: castor, description: 'Famous for its therapeutic properties, our castor oil is ideal for skin, hair, and overall wellness.' },
    { name: 'Organic Niger Oil', image: niger, description: 'Rich in essential fatty acids, our organic niger oil is perfect for skin and hair care.' },
    { name: 'Organic Flaxseed Oil', image: flax, description: 'Packed with Omega-3 fatty acids, our organic flaxseed oil supports heart health and is perfect for smoothies or salads.' },
    { name: 'Organic Almond Oil', image: almond, description: 'This oil is loaded with Vitamin E and is great for skincare and hair treatment.' },
    { name: 'Organic Cow Milk', image: milk, description: 'Fresh and pure cow milk, perfect for cooking, beverages, and dairy-based recipes.' },
    { name: 'Organic Ghee', image: ghee, description: 'Our organic ghee is made from the finest cow milk, offering rich flavor and countless health benefits.' }
];

const WelcomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <header className="bg-green-900 text-white py-6 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold">Welcome to Arogya Abhilashi</h1>
                    <p className="text-sm sm:text-base mt-2">
                        Your trusted source for premium organic oils cultivated through sustainable, bull-driven farming practices.
                    </p>
                </div>
            </header>

            {/* Banner Section */}
            <section className="relative bg-gradient-to-b from-green-900 to-green-800">
                <div className="relative">
                    {/* Banner Image */}
                    <img
                        src={banner1}
                        alt="Organic Oils"
                        className="w-full h-[350px] sm:h-[500px] object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center px-4">
                        <div className="text-center text-white px-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                                Pure Organic Oils for Health and Wellness
                            </h2>
                            <p className="mt-3 text-base sm:text-lg">
                                Experience the richness and purity of oils cultivated with the care and strength of bull-driven agriculture.
                            </p>
                            <button
                                onClick={() => alert("Learn More Coming Soon!")}
                                className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <main className="flex-grow bg-gray-50">
                <div className="container">
                    {/* Content Wrapper */}
                    <div className="bg-gradient-to-b from-gray-200 via-white to-gray-100 overflow-hidden">
                        {/* Hero Section */}
                        <div className="relative mt-4">
                            <img
                                src={banner2}
                                alt="Organic Living"
                                className="w-full h-[350px] sm:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                                    Discover the Benefits of Pure Organic Oils
                                </h2>
                                <p className="mt-3 text-sm sm:text-lg text-center">
                                    Our oils are extracted through traditional methods using bull-powered farming, ensuring purity, quality, and sustainability.
                                </p>
                            </div>
                        </div>

                        {/* About Section */}
                        <section className="p-4">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
                                Why Choose Organic Oils?
                            </h3>
                            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
                                Our oils are cold-pressed and crafted using bull-driven farming methods that preserve the nutrients and natural benefits of the plants. Free from chemicals and synthetic additives, they are a natural choice for health-conscious consumers.
                            </p>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                    <h4 className="text-xl sm:text-2xl font-semibold text-green-800">Sustainably Sourced</h4>
                                    <p className="text-gray-600 mt-4">
                                        Our oils are sourced from plants grown using environmentally friendly, bull-driven farming techniques, ensuring that each bottle is as pure as nature intended.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                    <h4 className="text-xl sm:text-2xl font-semibold text-green-800">Cold-Pressed Extraction</h4>
                                    <p className="text-gray-600 mt-4">
                                        We use cold-press extraction methods that retain the full nutritional benefits of the oil, providing you with the highest quality product for your health.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                    <h4 className="text-xl sm:text-2xl font-semibold text-green-800">No Chemicals</h4>
                                    <p className="text-gray-600 mt-4">
                                        Our oils are completely free from harmful chemicals or preservatives, ensuring a pure and natural product that you can trust for your daily wellness needs.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Product Spotlight Section */}
                        {/* Product Spotlight Section */}
                        <section className="bg-gradient-to-b from-green-100 via-green-200 to-green-300 p-4">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
                                Featured Organic Oils and Ghee
                            </h3>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {products.map((product, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                                        <h4 className="text-xl font-semibold text-gray-700 mt-4">{product.name}</h4>
                                        <p className="text-gray-600 mt-2">{product.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Contact Details Section */}
                        <div className="p-8">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
                                Contact Us
                            </h3>
                            <p className="text-center text-gray-600 mt-2">
                                Have any questions or want to place an order? Our team is ready to assist you with all your needs.
                            </p>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 p-4 rounded-full">
                                        <svg
                                            className="h-8 w-8 text-green-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 2a4 4 0 01-8 0M4 22h16a2 2 0 002-2v-5a6 6 0 00-6-6H8a6 6 0 00-6 6v5a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-700 mt-3">Name</h4>
                                    <p className="text-gray-600">Arogya Abhilashi Support</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 p-4 rounded-full">
                                        <svg
                                            className="h-8 w-8 text-green-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a9 9 0 00-9 9h18a9 9 0 00-9-9z"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-700 mt-3">Email</h4>
                                    <a
                                        href="mailto:support@arogyaabhilashi.com"
                                        className="text-green-600 hover:underline"
                                    >
                                        support@arogyaabhilashi.com
                                    </a>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 p-4 rounded-full">
                                        <svg
                                            className="h-8 w-8 text-green-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 10h2a1 1 0 011 1v6a1 1 0 001 1h4a1 1 0 001-1v-6a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 001 1h2a1 1 0 001-1v-7a1 1 0 011-1h2"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-700 mt-3">Phone</h4>
                                    <a
                                        href="tel:+916362149934"
                                        className="text-green-600 hover:underline"
                                    >
                                        +91 6362149934
                                    </a>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-green-100 p-4 rounded-full">
                                        <svg
                                            className="h-8 w-8 text-green-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8c1.1 0 2 .9 2 2v6a2 2 0 01-4 0v-6c0-1.1.9-2 2-2zm-7 4a5 5 0 015-5h4a5 5 0 015 5v7a5 5 0 01-5 5H10a5 5 0 01-5-5v-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-700 mt-3">
                                        Location
                                    </h4>
                                    <p className="text-gray-600 text-center">Hyderabad, Himayathnagar, Telangana, 560064</p>
                                </div>
                            </div>
                        </div>

                        {/* Call-to-Action Section */}
                        <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 p-8 text-center">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                Need Immediate Assistance?
                            </h3>
                            <p className="mt-4 text-green-200">
                                Our dedicated support team is here to assist you with any product queries, orders, or concerns.
                            </p>
                            <button
                                onClick={() => alert("We’ll get back to you soon!")}
                                className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="bg-green-900 text-white py-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                        © 2024 Arogya Abhilashi. All Rights Reserved.
                    </p>
                    <p className="text-sm">
                        Designed with ❤️ by Bharath
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default WelcomePage;
