import React from 'react'
import { Serviceim } from '../data'
import { AiOutlineArrowRight } from "react-icons/ai"
import Heading from '../components/Heading'
import Para from '../components/Paragraph'

export default function Section3() {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container   mx-auto">
                    <div class=" mx-auto flex border flex-wrap">
                        <div className='meet lg:w-[42%]  '>
                            <div className=' moo lg:w-3/5 lg:ml-[358px] w-[auto] m-[15px] text-white mt-[117px] mb-[111px]  bg-black w-full lg:h-[318px] h-auto object-cover object-center rounded'>
                                <div class="p-4 md:w-ful flex flex-col text-center items-center">
                                    <div class="woo w-28 mt-[33px] h-28 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500   flex-shrink-0" >
                                    </div>
                                    <div class="  mt-[28px] mb-[35px]  text-white">
                                        <Heading Header={{ class: "meeth2", h: <h2 >Dianne Russell</h2> }} />
                                        <Para prg={{
                                            class: "meetp", p1: <p >More than 20 years of experience
                                                in the field architecture and has
                                                worked on project up to 100+</p>
                                        }} />

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="lg:w-2/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <Heading Header={{
                                class: "arc lg:w-[480px] text-[22px] lg:text-[46px] lg:leading-12  sm:text-center lg:text-left text-gray-900 ", h: <h1>Meet and talk with
                                    our best architecture</h1>
                            }} />
                            <Para prg={{
                                class: "arcp lg:ml-[178px] w-full", p1: <p >All our teams are professional and competent in
                                    their fields and will help you realize your dream
                                    building with the excellent result.</p>
                            }} />

                            <div class="flex lg:ml-[180px]  mt-[63px] w-[88%] ">
                                <button class="meetbtn ">See all team</button>
                                <button class="metbtn  inline-flex justify-center items-center">How it works <AiOutlineArrowRight className='ml-2' /></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
