import React from 'react'
import Navbar from '../components/Navbar'
import MainLayout from '../layout/MainLayout'

export default function experience() {
  return (
    <MainLayout>
        <div className='d-flex flex-column'>
            <span 
            style={{fontWeight:"bolder"}} 
            className='fs-4 d-flex justify-content-center mt-4'
            >
                My experience
            </span>

            <div className='d-flex justify-content-center mt-5'>
                <img style={{border:"solid"}} className="rounded-3"src='/image/proj1.png' width='300px'></img>
                <div style={{textAlign:'center'}} className='d-flex flex-column ms-5 mt-4'>
                    <span style={{fontWeight:"bolder"}}  className='fs-5 mb-3'>Scratch Game Project</span>
                    <span >This is my fitst project in the Computer Engineering course.</span>                    
                </div>

            </div>

            <div className='d-flex justify-content-center mt-5'>
                <img style={{border:"solid"}} className="rounded-3" src='/image/proj2.png' width='300px'></img>
                <div style={{textAlign:'center'}} className='d-flex flex-column ms-4 mt-5'>
                    <span style={{fontWeight:"bolder"}}  className='fs-5 mb-3'>C++ Mathematic Games</span>
                    <span >This is my first C++ project in the Computer Engineering course.</span>                    
                </div>

            </div>

            <div className='d-flex justify-content-center mt-5'>
                <img style={{border:"solid"}} className="rounded-3" src='/image/proj3.png' width='300px'></img>
                <div style={{textAlign:'center'}} className='d-flex flex-column ms-5 mt-5'>
                    <span style={{fontWeight:"bolder"}}  className='fs-5 mb-3'>Shirt Logo Design</span>
                    <span >This is my side work. I design various logo for T-shirt </span><br/>
                    <span >and sell them on Print on Demand platforms.</span>                     
                </div>

            </div>

        </div>
    </MainLayout>
  )
}
