import React from 'react'
import { Project } from '../data'

export default function Section6() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container  mx-auto lg:mb-[147px] mt-[95px] mb-[80px]">
                    <div class="flex flex-col">

                        <div class="flex flex-wrap sm:flex-row flex-col  mb-12">
                            <h1 class="uph1 sm:w-1/4 lg:text-[46px]  text-[34px] mb-2 sm:mb-0">Our collection
                                best project</h1>
                        </div>
                    </div>
                    <div class="flex  flex-wrap justify-center mt-[38px]">
                        <div class="p-5 lg:w-1/4  sm:w-1/2 w-[90%]">
                            <div class="h-64 lg:h-[550px] " style={{ backgroundImage: `url(${Project.img[0]})`, backgroundSize: "100% 100%" }}>
                            </div>

                        </div>
                        <div class="p-5 lg:w-1/4 sm:w-1/2 w-[90%]">
                            <div class="h-64 lg:h-[550px] " style={{ backgroundImage: `url(${Project.img[1]})`, backgroundSize: "100% 100%" }}>
                            </div>

                        </div>
                        <div class="p-5 lg:w-1/4 sm:w-1/2 w-[90%]">
                            <div class="h-64 lg:h-[550px] " style={{ backgroundImage: `url(${Project.img[2]})`, backgroundSize: "100% 100%" }}>
                            </div>

                        </div>
                        <div class="p-5 lg:w-1/4 sm:w-1/2 w-[90%]">
                            <div class="h-64 lg:h-[550px] " style={{ backgroundImage: `url(${Project.img[3]})`, backgroundSize: "100% 100%" }}>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
