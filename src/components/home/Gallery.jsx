"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

function Gallery() {

    const images = [
        {
            title: "Gyeongbokgung Palace – Seoul",
            link: "https://en.wikipedia.org/wiki/Gyeongbokgung_Palace",
            thumbnail: "https://media.istockphoto.com/id/509661920/photo/gyeongbokgung-palace-twilight-sunset.jpg?s=612x612&w=0&k=20&c=bthZNta-mtrgpPdiHAORdRD7lpH4VlINEruDr4SIEaY=",
        },
        {
            title: "Namsan Tower Autumn View – Seoul",
            link: "https://www.agoda.com/travel-guides/south-korea/seoul/discover-seouls-most-photo-worthy-spots-in-south-korea/",
            thumbnail: "https://www.agoda.com/wp-content/uploads/2024/08/Namsan-Tower-during-autumn-in-Seoul-South-Korea.jpg",
        },
        {
            title: "Gamcheon Culture Village – Busan",
            link: "https://en.wikipedia.org/wiki/Gamcheon_Culture_Village",
            thumbnail: "https://www.agoda.com/wp-content/uploads/2024/08/Gamcheon-Culture-Village-busan-featured.jpg",
        },
        {
            title: "Changdeokgung Palace – Seoul",
            link: "https://www.myodysseytours.com/south-korea/tourist-sights.html",
            thumbnail: "https://media.odynovotours.com/article/66000/changdeokgung-palace_63354.jpg",
        },
        {
            title: "Haedong Yonggungsa Temple – Busan",
            link: "https://www.agoda.com/travel-guides/south-korea/busan/haedong-yonggungsa-temple-a-spiritual-journey-through-busans-coastal-gem/",
            thumbnail: "https://www.agoda.com/wp-content/uploads/2024/06/Featured-image-Haedong-Yonggungsa-Temple-and-Haeundae-Sea-in-Busan-South-Korea-1244x700.jpg",
        },
        {
            title: "Jeju Island Scenic View",
            link: "https://www.istockphoto.com/photos/jeju-island",
            thumbnail: "https://media.istockphoto.com/id/579410588/photo/jeju-island.jpg?s=612x612&w=0&k=20&c=SPCmQYNVscnRbUkkGhhEz859hBSwLv4ZDdgYAPVbqfs=",
        },
        {
            title: "Bukchon Hanok Village – Seoul",
            link: "https://handluggageonly.co.uk/12-best-places-in-south-korea-to-visit/",
            thumbnail: "https://handluggageonly.co.uk/wp-content/uploads/2019/02/Hand-Luggage-Only-5-1.jpg",
        },
        {
            title: "Jeongbang Waterfall – Jeju",
            link: "https://travelcrafters.com.au/jeju-island-south-korea-volcanic-landscapes-waterfalls-and-unique-culture",
            thumbnail: "https://travelcrafters.com.au/wp-content/uploads/2025/03/Jeju-Island-scenic-places-Canva-The-Jeongbang-Waterfall.jpg",
        },
        {
            title: "Han River Sunset – Seoul",
            link: "https://www.agoda.com/travel-guides/south-korea/seoul/discover-seoul-top-must-visit-attractions-in-south-koreas-vibrant-capital/",
            thumbnail: "https://www.agoda.com/wp-content/uploads/2024/08/Han-River-seoul-korea-1126x700-1-1244x700.jpg",
        },
        {
            title: "Gyeongbokgung in Autumn – Seoul",
            link: "https://www.onthegotours.com/South-Korea/Guides/Best-Places-To-Visit",
            thumbnail: "https://www.onthegotours.com/repository/Gyeongbokgung-palace-in-autumn-Seoul--South-Korea--On-The-Go-Tours-324891477495442.jpg",
        },
        {
            title: "National Museum of Korea – Seoul",
            link: "https://ling-app.com/sv/blog/tourist-attractions-in-south-korea/",
            thumbnail: "https://ling-app.com/wp-content/uploads/2023/09/National-Museum-Of-Korea_Tourist-Attractions-In-South-Korea-Ling-App.jpg",
        },
        {
            title: "Seoul Skyline & Modern Vibes",
            link: "https://timesofindia.indiatimes.com/travel/destinations/seoul-south-korea-citys-top-experiences-and-best-time-to-visit/articleshow/111258550.cms",
            thumbnail: "https://static.toiimg.com/photo/111258550.cms",
        },
        {
            title: "Jeju Island Volcanic Landscape",
            link: "https://planetescape.pl/en/blog/najpiekniejsza-wyspa-korei-poludniowej-12-atrakcji-wyspy-jeju/",
            thumbnail: "https://planetescape.pl/blog//app/uploads/2024/09/Jeju-Island-4.jpg",
        },
        {
            title: "Gamcheon Village Panoramic – Busan",
            link: "https://dailytravelpill.com/busan-gamcheon-culture-village/",
            thumbnail: "https://dailytravelpill.com/wp-content/uploads/2019/02/gamcheon-culture-village-busan-panoramic-view-1.jpg",
        },
        {
            title: "Gyeongbokgung Palace Sunset",
            link: "https://www.istockphoto.com/photos/south-korea-landmarks",
            thumbnail: "https://media.istockphoto.com/id/1676101015/photo/gyeongbokgung-palace-in-sunset-is-beautiful-seoul-south-korea.jpg?s=612x612&w=0&k=20&c=QmJ5axXRBX31-7X502XHhYxyiNsPpkt6WxrgX224WbA=",
        },
    ];
    return (
        <div>
            <HeroParallax products={images} />;
        </div>
    )
}

export default Gallery
