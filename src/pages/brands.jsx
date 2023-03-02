import React from 'react'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'


export default function Brands() {
    return (
        <>
            <div className='container-fluid lg:h-[180px] h-auto flex justify-center'>
                <div className='w-[89%] flex flex-wrap items-center justify-between'>
                    <img className='lg:h-[45px]   lg:w-[163px]' src={brand1}></img>
                    <img className='lg:h-[79px]   lg:w-[143px]' src={brand2}></img>
                    <img className='lg:h-[54px]   lg:w-[126px]' src={brand3}></img>
                    <img className='lg:h-[67ox]   lg:w-[146px]' src={brand4}></img>
                    <img className='lg:h-[120px]   lg:w-[219px]' src={brand5}></img>
                </div>
            </div>
        </>
    )
}
