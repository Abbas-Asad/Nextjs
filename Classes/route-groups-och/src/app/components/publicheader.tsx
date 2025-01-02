import React from 'react';

const PublicHeader = () => {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">Public Header</div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/home" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/services" className="hover:underline">Services</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default PublicHeader;
