import React from 'react'
import Heading from '../components/Heading'
import Para from '../components/Paragraph'
import { Update } from '../data'

export default function Section5() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mt-[121px] mx-auto">
                    <div class="flex flex-col">

                        <div class="flex flex-wrap sm:flex-row flex-col  mb-12">
                            <h1 class="uph1 sm:w-2/5 lg:text-[46px] text-[34px] mb-2 sm:mb-0">News & Update</h1>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div class=" md:w-1/3 sm:mb-0 mb-6">
                            <div class=" ml-[6%] rounded-lg  overflow-hidden">
                                <img alt="" class="upim  object-cover object-center h-full w-full" src={Update.img[0]} />
                            </div>
                            <Heading Header={{ class: "h w-[87%] mx-auto mt-[22.5px]", h: <h1 className='inline-flex font-bold text-[20px] '>{Update.h1} <h1 className='ml-[18px]'>{Update.h2[0]}</h1></h1> }} />
                            <Para prg={{
                                class: "s5p text-base leading-relaxed mt-[23.5px] w-[340px] m-5 text-[20px] ml-[25px]", p1: <p >Epoxy paint and epoxy floor
                                    contractor. Have you heard the two
                                    terms? And what does that have to
                                    do with the construction of existing
                                    buildings? Epoxy itself is included in
                                    the type of resin... <a class="text-indigo-500 inline-flex items-center ">Read More</a></p>
                            }} />

                        </div>
                        <div class=" md:w-1/3 sm:mb-0 mb-6">
                            <div class="ml-[6%] rounded-lg  overflow-hidden">
                                <img alt="" class="upim   object-cover object-center h-full w-full" src={Update.img[1]} />

                            </div>
                            <Heading Header={{ class: "h  w-[87%] mx-auto mt-[22.5px]", h: <h1 className='inline-flex font-bold text-[20px] '>{Update.h1} <h1 className='ml-[18px]'>{Update.h2[1]}</h1></h1> }} />

                            <Para prg={{
                                class: "s5p text-base leading-relaxed mt-[23.5px] w-[310px] m-5 text-[20px] ml-[25px]", p1: <p >Planning the construction of a
                                    warehouse for both industrial,
                                    personal and other goods storage
                                    must be done carefully.
                                    When the planning is done properly,
                                    the construction is...<a class="text-indigo-500 inline-flex items-center ">Read More</a></p>
                            }} />
                        </div>
                        <div class=" md:w-1/3 sm:mb-0 mb-6">
                            <div class="ml-[6%] rounded-lg overflow-hidden">
                                <img alt="" class="upim object-cover object-center h-full w-full" src={Update.img[2]} />

                            </div>
                            <Heading Header={{ class: "h w-[87%] mx-auto mt-[22.5px]", h: <h1 className='inline-flex font-bold text-[20px] '>{Update.h1} <h1 className='ml-[18px]'>{Update.h2[2]}</h1></h1> }} />

                            <Para prg={{
                                class: " s5p text-base leading-relaxed mt-[23.5px] w-[340px] m-5 text-[20px] ml-[25px]", p1: <p >Having a solid home is certainly
                                    everyone'  s dream. How not, the
                                    house is a place where the residents
                                    can rest and take shelter from the
                                    bad weather... <a class="text-indigo-500 inline-flex items-center ">Read More</a></p>
                            }} />

                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
