import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <div>
            <footer className={`${location.pathname === '/login' ? 'hidden' : ''}`} style={{position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f7f7f7'}}>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© {currentYear} Vivek. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">GitHub</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
