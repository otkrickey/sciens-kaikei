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
                    src="https://charts.mongodb.com/charts-saiens-tqbhl/embed/charts?id=99068e19-fe35-497f-9a84-99bcb95f31e4&maxDataAge=300&theme=light&autoRefresh=true"></iframe>
                <iframe
                    className="bg-white border-none rounded-md shadow-md mb-4"
                    // style={{ transform: "scale(0.6)" }}
                    width="640" height="480"
                    src="https://charts.mongodb.com/charts-saiens-tqbhl/embed/charts?id=959ece19-663a-4045-81d6-595d0b2b8a69&maxDataAge=600&theme=light&autoRefresh=true"></iframe>
            </div>
        </main>
    );
};

export default StatsPage;
