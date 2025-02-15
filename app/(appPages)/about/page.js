import React from 'react'

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
           <div className="flex-grow p-8 bg-gray-100 text-black">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="mb-4">
                    Welcome to our platform! We specialize in the tech field, offering a variety of services to help you grow and succeed.
                </p>
                <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
                <p className="mb-4">
                    We offer sharing courses, making chats with relatable codes, and more. Our most popular topics include JavaScript, React, and Nexus.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Capabilities</h2>
                <p className="mb-4">
                    We are capable of providing high-quality educational content, engaging discussions, and practical coding examples to help you learn and grow.
                </p>
                <h2 className="text-2xl font-semibold mb-2">College Related Content in Nepal</h2>
                <p className="mb-4">
                    We also offer content related to colleges in Nepal, helping students find the best resources and opportunities for their education.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Improving the Web</h2>
                <p className="mb-4">
                    Our mission is to make the web a better place by providing valuable content and resources. We believe in continuous improvement and always strive to add new and relevant information.
                </p>
            </div>
        </div>
    )
}

export default About