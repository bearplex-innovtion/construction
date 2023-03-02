// import React from 'react'
// import Im from "../images/home.png"
// export default function Home() {
//     return (
//         <div>
//             <section class="text-gray-600 border  body-font overflow-hidden">
//                 <div class="container px-5 py-24 mx-auto">
//                     <div class="lg:w-4/5 mx-auto flex flex-wrap">
//                         <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 border">
//                             <h1 class=" text-gray-900 text-[64px] title-font font-medium mb-4">We Provide Architectural design and Construction</h1>

//                             <p class="leading-relaxed mb-4">​More than 100 building and housing projects that we have built.
//                                 The building owner chose us over other contractors in Jakarta,
//                                 because our work is different</p>

//                             <div class="flex">
//                                 <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
//                                 <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
//                                 <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                                     <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                                         <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                         <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={Im} />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }
// import React from 'react';
// import hero from '../images/home.png'
// import img from '../images/home.png'

// export default function Home() {
//     return (
//         <>

//             <div className='header h-[111vh]' style={{ fontFamily: "'Poppins', sans-serif", background: "linear-gradient(139.84deg, #474747 4.14%, #222222 44.22%)" }}>
//                 {/* <Navbar /> */}
//                 <div className='container-fluid flex justify-center'>
//                     <div className='w-[80%] grid grid-cols-2 flex '>
//                         <div className=''>
//                             <h1 className='py-5 text-white text-[64px] font-medium leading-[96px]' style={{ fontFamily: "'Poppins', sans-serif" }}>We Provide Architectural design and Construction</h1>
//                             <p className='text-gray-300 text-lg leading-9 font-medium tracking-wider' style={{ fontFamily: "'Poppins', sans-serif" }}>More than 100 building and housing projects that we have built.
//                                 The building owner chose us over other contractors in Jakarta,
//                                 because our work is different</p>
//                             <button>Discover More</button>
//                             <div className='w-[55%] py-12 flex justify-between'>
//                                 <div className='flex items-center flex-col'>
//                                     {/* <h1 className='text-white text-4xl font-bold'>{Heading.h3}</h1> */}
//                                     {/* <Para data={{ para: <p className='text-gray-300 text-lg font-semibold'>{Paragraph.p2}</p> }} /> */}
//                                 </div>
//                                 <div className='flex items-center flex-col'>
//                                     {/* <Head data={{ head: <h1 className='text-white text-4xl font-bold'>{Heading.h4}</h1> }} /> */}
//                                     {/* <Para data={{ para: <p className='text-gray-300 text-lg font-semibold'>{Paragraph.p3}</p> }} /> */}
//                                 </div>
//                                 <div className='flex items-center flex-col'>
//                                     {/* <Head data={{ head: <h1 className='text-white text-4xl font-bold'>{Heading.h5}</h1> }} /> */}
//                                     {/* <Para data={{ para: <p className='text-gray-300 text-lg font-semibold'>{Paragraph.p4}</p> }} /> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='relative' style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% 100%" }}>
//                             <div className='h-[166px] w-[120%]  absolute mt-[582px] z-12 ml-[-126px]'>
//                                 <img className='h-[190px] w-[2000px] ' src={img}></img>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from 'react';
import Heading from '../components/Heading';
import Para from '../components/Paragraph';
import Navbar from '../components/navbar';
import img from "../images/Frame 630.png"
import hero from "../images/home.png"

import { Headin, Paragraph } from '../data';
const Section2 = () => {
    return (
        <section class="bg text-gray-600  body-font">
            <Navbar />
            <div class="w-full mt-[55px] mx-auto flex flex-wrap">
                <div class="flex flex-wrap w-[95%]   ml-[5%]">
                    <div class=" lg:w-3/6  md:w-full">
                        <div class="flex  rounded-lg sm:flex-row flex-col">
                            <div className=' w-full'>
                                <Heading Header={{
                                    class: "", h: <h1 className='py-5   text-white text-[64px] font-medium leading-[96px]' style={{
                                        fontFamily: "'Poppins', sans-serif", Weight: "500"
                                        , LineHeight: "96px"
                                    }}>{Headin.h2}</h1>
                                }} />
                                <Para prg={{ class: "text-gray-300 text-lg mt-[24px] leading-9 font-medium tracking-wider", p1: <p style={{ fontFamily: "'Poppins', sans-serif" }}>{Paragraph.p1}</p> }} />
                                <button className='meetbtn mt-[62px]'>Discover More</button>
                                <div className='w-[55%] mb-[53px]  mt-[43px] flex justify-between'>
                                    <div className='flex items-center flex-col  '>
                                        <Heading Header={{ class: "", h: <h1 className='text-white text-[36px] font-bold' style={{ fontWeight: "700", lineHeight: "54px" }}>{Headin.h3}</h1> }} />
                                        <Para prg={{ class: "text-gray-300 text-[18px] font-semibold mt-[17px]", p1: <p style={{ fontWeight: "600", lineHeight: "27px" }}>{Paragraph.p2}</p> }} />
                                    </div>
                                    <div className='flex items-center flex-col'>
                                        <Heading Header={{ class: "", h: <h1 className='text-white text-[36px] font-bold' style={{ fontWeight: "700", lineHeight: "54px" }}>{Headin.h4}</h1> }} />
                                        <Para prg={{ class: 'text-gray-300 text-[18px] font-semibold mt-[19px]', p1: <p style={{ fontWeight: "600", lineHeight: "27px" }}>{Paragraph.p3}</p> }} />
                                    </div>
                                    <div className='flex items-center flex-col'>
                                        <Heading Header={{ class: "", h: <h1 className='text-white text-[36px] font-bold' style={{ fontWeight: "700", lineHeight: "54px" }}>{Headin.h5}</h1> }} />
                                        <Para prg={{ class: "text-gray-300 text-[18px] font-semibold mt-[20px]", p1: <p style={{ fontWeight: "600", lineHeight: "27px" }}>{Paragraph.p4}</p> }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" lg:w-3/6 md:w-full ">
                        <div className='flex items-end  h-full w-full' style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% 85%" }}>
                            <div className='h-[166px] w-[120%]   ml-[-128px] ' >
                                <img className='h-[190px] w-[2000px]  ' src={img}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >


    );
};

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Section2 />
        </div>
    );
};

export default Home;

// {/* <div className="border text-white mx-auto ">
//     <div className="lg:w-3/6 w-11/12 pr-8">
//         <div className='border'>
//             <Heading Header={{
//                 class: "border", h: <h1 className='py-5  text-white text-[64px] font-medium leading-[96px]' style={{
//                     fontFamily: "'Poppins', sans-serif", Weight: "500"
//                     , LineHeight: "96px"
//                 }}>{Headin.h2}</h1>
//             }} />
//             <Para prg={{ class: " className='text-gray-300 text-lg leading-9 font-medium tracking-wider'", p1: <p style={{ fontFamily: "'Poppins', sans-serif" }}>{Paragraph.p1}</p> }} />
//             {/* <Button data={{ text: "Discover More" }} /> */}
//             <div className='w-[55%] py-12 flex justify-between'>
//                 <div className='flex items-center flex-col'>
//                     <Heading Header={{ class: "border", h: <h1 className='text-white text-4xl font-bold'>{Headin.h3}</h1> }} />
//                     <Para prg={{ class: "'text-gray-300 text-lg font-semibold", p1: <p>{Paragraph.p2}</p> }} />
//                 </div>
//                 <div className='flex items-center flex-col'>
//                     <Heading Header={{ class: "border", h: <h1 className='text-white text-4xl font-bold'>{Headin.h4}</h1> }} />
//                     <Para prg={{ class: 'text-gray-300 text-lg font-semibold', p1: <p>{Paragraph.p3}</p> }} />
//                 </div>
//                 <div className='flex items-center flex-col'>
//                     <Heading Header={{ class: "border", h: <h1 className='text-white text-4xl font-bold'>{Headin.h5}</h1> }} />
//                     <Para prg={{ class: "text-gray-300 text-lg font-semibold", p1: <p>{Paragraph.p4}</p> }} />
//                 </div>
//             </div>
//         </div>

//     </div>
//     <div className="lg:w-3/6 w-11/12 ">
//         {/* <div className='relative' style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% 100%" }}> */}
//         <div className=''>
//             <img className=' h-[787px] w-full' src={img}></img>
//         </div>
//         {/* </div> */}
//     </div>
// </div> */}