import React from 'react';
import Navbar from "@/components/Navbar";

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="font-work-sans">
            <Navbar/>

            <main className="top-[62px] relative w-full">{children}</main>
        </div>
    );
};

export default Layout;
