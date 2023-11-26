import React from 'react';
import { Inter } from 'next/font/google';
import Nav from '@/components/nav';

const inter = Inter({ subsets: ['latin'] });



const StatsPage: React.FC = () => {
    return (
        <main className={`flex flex-col items-center justify-center min-h-screen py-2 ${inter.className}`} style={{ minWidth: '640px' }}>
            <Nav />
            <div>
                <iframe
                    className="bg-white border-none rounded-md shadow-md mb-4"
                    // style={{ transform: "scale(0.6)" }}
                    width="640" height="480"
                    src="https://charts.mongodb.com/charts-saiens-tqbhl/embed/charts?id=c458631b-7518-49a8-a556-77013710407c&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
                <iframe
                    className="bg-white border-none rounded-md shadow-md mb-4"
                    // style={{ transform: "scale(0.6)" }}
                    width="640" height="480"
                    src="https://charts.mongodb.com/charts-saiens-tqbhl/embed/charts?id=c22c9f86-407d-4c56-835a-7eac8139812e&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            </div>
        </main>
    );
};

export default StatsPage;
