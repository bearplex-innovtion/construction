
import React from 'react'
import Heading from "./Heading"
import { NavData, Headin } from '../data'

export default function Navbar() {
    return (
        <>
            <header class="container mx-auto  text-gray-600 p-4 body-font ">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium  items-center text-gray-900 mb-5 md:mb-0">

                        <Heading Header={{ class: "text-white text-[24px] ml-[40px] font-bold not-italic", h: <h1 style={{ fontFamily: "'Poppins', sans-serif" }} >{Headin.h1}</h1> }} />

                    </a>
                    <nav class="lg:ml-[161px] w-[73%]  flex flex-wrap items-center text-base justify-between">
                        {
                            NavData.li.map((ele, i) => {
                                return (
                                    <li className='text-gray-300 hover:cursor-pointer list-none text-[18px] mb-5 font-bold' style={{ fontFamily: "'Poppins', sans-serif", fontStyle: "normal", fontWeight: "700", lineHeight: "27px" }}>{ele}</li>
                                )
                            })
                        }
                    </nav>

                </div>
            </header>
        </>
    )
}
