import React from 'react'
import { Serviceim } from '../data'
import { AiOutlineArrowRight } from "react-icons/ai"
import Heading from '../components/Heading'
import Para from '../components/Paragraph'

export default function Section4() {
    return (
        <div>
            <section class="body-font overflow-hidden">
                <div class="container  px-5 mt-[123px] mx-auto">
                    <div class="lg:w-[95%]  justify-between  flex flex-wrap">

                        <div class="lg:w-2/5 w-full lg:pl-10 ">
                            <Heading Header={{
                                class: "arc2  w-3/4 text-[46px] ", h: <h1>Our Story
                                    Who we are</h1>
                            }} />
                            <Para prg={{
                                class: "arc2p lg:w-[500px] text-[18px] mt-[24px]", p1: <p >Established in 1992, PT. Wahana Cipta operates as a General
                                    Contracting company with a footprint that we have planted
                                    throughout Indonesia. Initially, we focused on construction in
                                    the field of residential housing development in Jakarta.
                                    As the company grows, now we are present as a reliable...</p>
                            }} />
                            <div class="flex  h-[60px] mt-[49px]     ">
                                <button class="meet2btn">See More</button>

                            </div>
                        </div>
                        <div className='meet2 lg:w-[42%]'>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
