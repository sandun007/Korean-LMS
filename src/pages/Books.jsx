import React from 'react';
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import Booksview from "@/components/books/Booksview.jsx";

function Books() {
    return (
        <div>
            <Header />
            <main className="flex-1 pt-32 md:pt-35">
                <Booksview />
            </main>
            <Footer />
        </div>
    )
}

export default Books;
