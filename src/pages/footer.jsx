import React from 'react'
import { AiFillLinkedin, AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

export default function Footer() {
    return (
        <div>
            <footer class="foot text-gray-600 body-font">
                <div class="container  px-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}>
                    <div class=" flex  mt-[83px] mb-[40px] justify-between text-white flex-wrap md:pr-20 -mb-10 md:text-left text-center">
                        <div class="lg:w-6/12 md:w-1/2 w-full px-4">
                            <h2 class=" lo ">Logo</h2>
                            <nav class="lop list-none  mt-[32px]">
                                <p>
                                    is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.
                                </p>
                            </nav>
                            <span class="inline-flex  mt-[34px] justify-center sm:justify-start">
                                <a class="a ml-[0px]">
                                    <AiOutlineTwitter />
                                </a>
                                <a class="a ml-[15px]">
                                    <AiOutlineInstagram />
                                </a>
                                <a class="a ml-[15px]">

                                    <AiOutlineGoogle />
                                </a>
                                <a class="a ml-[15px]">
                                    <AiFillLinkedin />
                                </a>
                            </span>
                        </div>


                        <div class="lg:w-[20%]   w-1/2 w-full px-4">
                            <h2 class="pa title-font  font-medium  tracking-widest text-sm mb-3">Company</h2>
                            <nav class="list-none mb-10">
                                <li className='li'>
                                    About
                                </li>
                                <li className='li'>
                                    How it Works
                                </li>
                                <li className='li'>
                                    Term
                                </li>
                                <li className='li'>
                                    Privacy Policy
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-[20%] w-1/2  w-full px-4">
                            <h2 class="pa title-font font-medium   tracking-widest text-sm mb-3">More</h2>
                            <nav class="list-none mb-10">
                                <li className='li'>
                                    Documentation
                                </li>
                                <li className='li'>
                                    License
                                </li>

                            </nav>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}
