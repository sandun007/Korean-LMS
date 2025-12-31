// Header.jsx
import Topheader from "./header/Topheader.jsx";
import Bottomheader from "./header/Bottomheader.jsx";
import { useState, useEffect } from 'react';

function Header() {
    const [show, setShow] = useState(true);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            if (current > lastY && current > 100) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastY(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastY]);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50 flex flex-col
                transition-transform duration-300
                ${show ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <Topheader />
            <Bottomheader />
        </header>
    );
}

export default Header;