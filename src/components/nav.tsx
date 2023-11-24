import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="flex flex-row items-center justify-center space-x-4 mb-4">
            <ul className="flex flex-row items-center justify-center space-x-4">
                <li className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    <Link className="text-white" href="/">会計</Link>
                </li>
                <li className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                    <Link className="text-white" href="/stats">統計</Link>
                </li>
                <li className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    <a className="text-white" href="https://charts.mongodb.com/charts-saiens-tqbhl/public/dashboards/6560da00-9ab1-467e-8ebc-82c846ed7d17">ダッシュボード</a>
                    <svg className="inline-block w-4 h-4 ml-1"
                        fill="none" stroke="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.5625 2 L 25.6875 22.90625 C 25.390625 23.148438 25.253906 23.535156 25.339844 23.910156 C 25.425781 24.28125 25.71875 24.574219 26.089844 24.660156 C 26.464844 24.746094 26.851563 24.609375 27.09375 24.3125 L 48 3.4375 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 1.476563 10 0.941406 10.183594 0.5625 10.5625 C 0.183594 10.941406 0 11.476563 0 12 L 0 48 C 0 48.523438 0.183594 49.058594 0.5625 49.4375 C 0.941406 49.816406 1.476563 50 2 50 L 38 50 C 38.523438 50 39.058594 49.816406 39.4375 49.4375 C 39.816406 49.058594 40 48.523438 40 48 L 40 18 C 40.003906 17.640625 39.816406 17.304688 39.503906 17.121094 C 39.191406 16.941406 38.808594 16.941406 38.496094 17.121094 C 38.183594 17.304688 37.996094 17.640625 38 18 L 38 48 L 2 48 L 2 12 L 32 12 C 32.359375 12.003906 32.695313 11.816406 32.878906 11.503906 C 33.058594 11.191406 33.058594 10.808594 32.878906 10.496094 C 32.695313 10.183594 32.359375 9.996094 32 10 Z" /></svg>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;