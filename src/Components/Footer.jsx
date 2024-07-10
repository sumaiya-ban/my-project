import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Container from './Container';

const Footer = () => {
  return (
    <section className='lg:mt-[65px] mt-8 font-inter'>
      <Container>
      <div className='flex-row lg:flex   justify-between'>
        <div className=' lg:w-[178px] '>
      <h2 className="font-semibold text-3xl text-center lg:text-left text-black">Our office</h2>
      <div className='lg:mt-[58px] mt-5 w-2/4 lg:w-full m-auto text-center lg:text-left'>
      <div classname="">
        
        <div className="font-semibold text-base text-ash flex justify-between items-center  "><div ><FaPhoneVolume className='w-6 h-6' /></div>(334) 202-4792</div>
        <div className='font-normal text-base lg:mt-8 mt-4 text-black'>haddawy@comcast.net</div>
        <div className='lg:mt-8 mt-4 text-lg font-normal text-ash'>998 Devonshire Ave.Camp Hill, PA 17011</div>
      </div>
      </div>
        
      </div>
      
      <div className=''>
        <h2 className="font-semibold text-3xl text-black text-center lg:text-left">Say hello</h2>
        <div className='lg:mt-[58px] mt-2 lg:w-[476px] w-full relative'>
          <div className=''>
          <input type="email" id="email" className="bg-normal-ash   
        border-gray-300 text-ash text-sm rounded focus:ring-blue-500  w-full  py-[17px] pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500  " placeholder="Name" required />
         <input type="email" id="email" className="bg-normal-ash  
        border-gray-300 text-ash text-sm rounded focus:ring-blue-500   w-full py-[17px] pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 lg:mt-5 mt-2  " placeholder="Telephonee" required /> 
        <input type="email" id="email" className="bg-normal-ash  
        border-gray-300 text-ash text-sm rounded focus:ring-blue-500  w-full py-[17px] pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 lg:mt-5 mt-2  " placeholder="Email" required /> 
        
        <input type="email" id="email" className=" bg-normal-ash  
        border-gray-300 text-ash text-sm rounded focus:ring-blue-500 lg:mt-5 mt-2 pt-[17px] pl-4 pb-[114px]  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500  " placeholder="Comment" required />
        
         
        
          
        </div>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 mt-2 font-medium rounded text-base px-[134px] lg:px-[50px] py-4 
        lg:ml-[306px] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
        </div>
        
        
        
      </div>
      <div>
      <h2 className="font-semibold lg:mt-0 mt-8 text-3xl text-black text-center lg:text-left">Keep connected</h2>
      <div className='lg:mt-[58px] mt-4'>
      <div className=' '>
        <div className="flex items-center justify-around lg:block ">
        <div className='flex items-center w-[109px] justify-between '><FaTwitter />Twitter</div>
        <div className='flex items-center w-[131px] justify-between lg:mt-4'><FaFacebookF />Facebook</div>
        </div>
        
      </div>
      </div>
        
      </div>
      
    </div>
      </Container>
    </section>
    
  )
}

export default Footer
