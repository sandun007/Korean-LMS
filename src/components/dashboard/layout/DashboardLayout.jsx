"use client";

import React, { useState } from 'react';
import Sidebar from './Dashsidebar.jsx';

function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-neutral-900">

            <div
                className={`
                  hidden md:block flex-shrink-0 border-r border-neutral-200 dark:border-neutral-800 
                  bg-white dark:bg-neutral-950 transition-all duration-300 ease-out
                  ${sidebarOpen ? 'w-59' : 'w-16'}
                  `}
                onMouseEnter={() => setSidebarOpen(true)}
                onMouseLeave={() => setSidebarOpen(false)}
            >
                <Sidebar open={sidebarOpen} />
            </div>

            <div className="flex-1 overflow-y-auto transition-all duration-300 ease-out">
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;