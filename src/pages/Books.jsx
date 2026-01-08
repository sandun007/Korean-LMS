import React from 'react';
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import Booksview from "@/components/books/Booksview.jsx";
import Actionbar from "@/components/books/Actionbar.jsx";

function Books() {
    return (
        <div>
            <Header />
            <main className="flex-1 pt-32 md:pt-35">
                <Actionbar />
                <Booksview />
            </main>
            <Footer />
        </div>
    )
}

export default Books;
