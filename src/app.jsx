import React from 'react'
import Brands from './pages/brands'
// import Navbar from './components/navbar'
import Footer from './pages/footer'
import Home from './pages/home'
import Section1 from './pages/section1'
import Section2 from './pages/section2'
import Section3 from './pages/section3'
import Section4 from './pages/section4'
import Section5 from './pages/section5'
import Section6 from './pages/section6'
import "./style.css"


export default function App() {
    return (
        <>
            {/* <Navbar /> */}
            <Home />
            <Brands />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />

        </>
    )
}