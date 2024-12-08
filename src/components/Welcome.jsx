import banner1 from '../assets/images/ArogyaBanner.jpg'
import banner2 from '../assets/images/ArogyaBanner.jpg'

const WelcomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <header className="bg-green-900 text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to Arogya Abhilashi</h1>
                    <p className="text-sm mt-2">
                        Your trusted destination for premium organic products!
                    </p>
                </div>
            </header>

            {/* Banner Section */}
            <section className="relative bg-gradient-to-b from-green-900 to-green-800">
                <div className="relative">
                    {/* Banner Image */}
                    <img
                        src={banner1}
                        alt="Banner"
                        className="w-full h-[500px] object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h2 className="text-3xl sm:text-5xl font-bold">
                                Fresh Organic Products Just for You!
                            </h2>
                            <p className="mt-3 text-lg">
                                Explore a wide variety of organic products for a healthier life.
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
                                alt="Welcome Banner"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
                                <h2 className="text-4xl font-bold">Organic Products for a Better Tomorrow</h2>
                                <p className="mt-3 text-lg">
                                    Embrace a healthier lifestyle with our curated selection of organic goods.
                                </p>
                            </div>
                        </div>

                        {/* Contact Details Section */}
                        <div className="p-8">
                            <h3 className="text-3xl font-semibold text-gray-800 text-center">
                                Contact Us
                            </h3>
                            <p className="text-center text-gray-600 mt-2">
                                Have any questions or want to place an order? Reach out to us.
                            </p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    <p className="text-gray-600">Hyderabad, Himayathnagar, Telangana, 560064</p>
                                </div>
                            </div>
                        </div>

                        {/* Call-to-Action Section */}
                        <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 p-8 text-center">
                            <h3 className="text-2xl font-bold text-white">
                                Need Immediate Assistance?
                            </h3>
                            <p className="mt-4 text-green-200">
                                Reach out to us for any queries or product information.
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
