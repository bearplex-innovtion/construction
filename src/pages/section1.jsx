import React from 'react'
import Heading from '../components/Heading'
import Para from '../components/Paragraph'
import { Serviceim } from '../data'

export default function Section1() {
    return (
        <>
            <section className="  text-gray-600 body-font" style={{ background: "#F8F8F8" }}>
                <div className="container flex md:flex-row flex-col">
                    <div className="  md:text-left">
                        <Heading Header={{ class: "serh1 sm:text-3xl text-[30px] ml-[60px] lg:ml-[120px] title-font text-gray-900 ", h: <h1 >Our Excellent  Services</h1> }} />
                    </div>
                    <div className=" flex ">
                        <Para prg={{
                            class: "serp leading-relaxed  lg:w-[531px] lg:ml-[321px]   ml-[100px] lg:text-[18px] text-base ", p1: <p>Check out our best service you can possibly orders in building
                                your company and don't forget to ask via our email or our
                                customer service if you are interested in using our services</p>
                        }} />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center mt-[80px] '>
                    <div className=' w-[100%] w-[350px] md:w-[350px] lg:w-[355px]  sm-ml:[20px] lg:ml-[40px] ' >
                        <div className='serim  w-100 h-100 ' style={{ backgroundImage: `url(${Serviceim.img[0]})`, backgroundSize: "100% 100%" }}></div>

                        <Heading Header={{ class: "servieh1 ", h: <h1 >{Serviceim.h1[0]}</h1> }} />
                        <Para prg={{ class: "servicep", p1: <p>{Serviceim.p[0]}</p> }} />
                    </div>
                    <div className=' w-[100%] w-[350px] md:w-[350px] lg:w-[355px]  sm-ml:[20px] lg:ml-[40px] '>
                        <div className='serim w-[368px]' style={{ backgroundImage: `url(${Serviceim.img[1]})`, backgroundSize: "100% 100%" }}></div>

                        <Heading Header={{ class: "servieh1 ", h: <h1 >{Serviceim.h1[1]}</h1> }} />
                        <Para prg={{ class: "servicep", p1: <p>{Serviceim.p[1]}</p> }} />

                    </div>
                    <div className='w-[100%] w-[350px] md:w-[350px] lg:w-[355px]  sm-ml:[20px] lg:ml-[40px]  '>
                        <div className='serim w-[368px]' style={{ backgroundImage: `url(${Serviceim.img[2]})`, backgroundSize: "100% 100%" }}></div>

                        <Heading Header={{ class: "servieh1 ", h: <h1 >{Serviceim.h1[2]}</h1> }} />
                        <Para prg={{ class: "servicep", p1: <p>{Serviceim.p[2]}</p> }} />
                    </div>
                </div>
            </section>
        </>
    )
}
