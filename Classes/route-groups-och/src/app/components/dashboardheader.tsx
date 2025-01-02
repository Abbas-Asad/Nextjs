import Link from 'next/link';
import React from 'react';

const DashboardHeader = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="m-0">Dashboard</h1>
            <nav className="flex gap-4">
                <Link href="/profile" className="text-white no-underline">Profile</Link>
                <Link href="/settings" className="text-white no-underline">Settings</Link>
                <Link href="/logout" className="text-white no-underline">Logout</Link>
            </nav>
        </header>
    );
};

export default DashboardHeader;
