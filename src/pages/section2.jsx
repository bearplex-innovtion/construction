import React from 'react'
import im from "../images/Vector.png"
import { Make, Serviceim } from '../data'
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs"
import { FaToolbox } from "react-icons/fa"
import Para from '../components/Paragraph';
import Heading from '../components/Heading';
export default function Section2() {
    return (
        <>
            <section className="  text-gray-600 body-font" style={{ background: "white" }}>

                <div className="container flex md:flex-row flex-col">
                    <div className="  md:text-left mt-[74px]">
                        <h1 className="makh1 sm:text-3xl text-[30px] ml-[60px] lg:ml-[90px] title-font text-gray-900 "><div className='as'></div>What Make Us
                            Different?</h1>
                    </div>
                    <div className=" flex ">
                        <Para prg={{
                            class: "serp leading-relaxed  lg:w-[531px] lg:ml-[321px] mb-[20px]  ml-[40px]  lg:text-[18px] text-base ", p1: <p>Check out our best service you can possibly orders in building
                                your company and don't forget to ask via our email or our
                                customer service if you are interested in using our services</p>
                        }} />
                    </div>
                </div>

                <div class="container lg:mx-[60px]  flex flex-wrap px-5 pb-[100px] w-full mx-auto">

                    <div class="flex justify-center mt-[74px] flex-wrap -m-4 text-center">
                        <div class="p-4 mb-3 sm:w-[50%] lg:w-[25%] ">
                            <div class=" rounded-lg ">
                                <div className='flex justify-center content-center  items-center rounded-full' style={{
                                    background: "rgba(35, 135, 192, 0.3)", width: "90px", height: " 90px", marginTop: "0px"
                                }}>
                                    <div className='rounded-full flex justify-center items-center' style={{
                                        width: "71px", height: "71px", marginTop: "1px", background: "#2387C0"
                                    }}>
                                        <FaToolbox style={{ color: "white", fontSize: "34px" }} />
                                    </div></div>
                                <Heading Header={{ class: "makeh1 ml-[0px] ", h: <h1 >{Make.h1[0]}</h1> }} />
                                <Heading Header={{ class: "makep", h: <h1 >{Make.p[0]}</h1> }} />


                            </div>
                        </div>
                        <div class="p-4 mb-3 sm:w-[50%] lg:w-[25%]  ">
                            <div class="  rounded-lg ">
                                <div className='flex justify-center content-center items-center rounded-full' style={{
                                    background: "rgba(35, 135, 192, 0.3)", width: "90px", height: " 90px", marginTop: "0px"
                                }}>
                                    <div className='rounded-full flex justify-center items-center' style={{
                                        width: "71px", height: "71px", marginLeft: " 1px", marginTop: "1px", background: "#2387C0"
                                    }}>
                                        <img className='h-8 w-8' src={im} alt="" />
                                    </div></div>
                                <Heading Header={{ class: "makeh1 ", h: <h1 >{Make.h1[1]}</h1> }} />
                                <Heading Header={{ class: "makep", h: <h1 >{Make.p[1]}</h1> }} />


                            </div>
                        </div>
                        <div class="p-4 mb-3 sm:w-[50%] lg:w-[25%]">
                            <div class=" rounded-lg">
                                <div className='flex justify-center content-center items-center rounded-full' style={{
                                    background: "rgba(35, 135, 192, 0.3)", width: "90px", height: " 90px", marginTop: "0px"
                                }}>
                                    <div className='rounded-full flex justify-center items-center' style={{
                                        width: "71px", height: "71px", marginLeft: " 1px", marginTop: "1px", background: "#2387C0"
                                    }}><AiOutlineClockCircle style={{ color: "white", fontSize: "34px" }} /></div></div>
                                <Heading Header={{ class: "makeh1 ", h: <h1 >{Make.h1[2]}</h1> }} />
                                <Heading Header={{ class: "makep", h: <h1 >{Make.p[2]}</h1> }} />


                            </div>
                        </div>
                        <div class="p-4 mb-3 sm:w-[50%] lg:w-[25%]">
                            <div class=" rounded-lg">
                                <div className='flex justify-center content-center items-center rounded-full' style={{
                                    background: "rgba(35, 135, 192, 0.3)", width: "90px", height: " 90px", marginTop: "0px"
                                }}>
                                    <div className='rounded-full flex justify-center items-center' style={{
                                        width: "71px", height: "71px", marginLeft: " 1px", marginTop: "1px", background: "#2387C0"
                                    }}><BsShieldCheck style={{ color: "white", fontSize: "34px" }} />
                                    </div></div>
                                <Heading Header={{ class: "makeh1", h: <h1 >{Make.h1[3]}</h1> }} />
                                <Heading Header={{ class: "makep", h: <h1 >{Make.p[3]}</h1> }} />


                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}
