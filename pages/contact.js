import React from 'react'
import Navbar from '../components/Navbar'
import MainLayout from '../layout/MainLayout'

export default function contact() {
  return (
    <MainLayout>
        <div style={{textAlign:'center'}} className='s-fex flex-column'>
            <span 
            style={{fontWeight:"bolder"}} 
            className='fs-4 d-flex justify-content-center mt-4'
            >
                Contact
            </span>
            
            <div class="vstack align-items-center mt-3">
                <span>Name: Wuttipat Sanchai</span>
                 <span>Nickname: Did</span>
                <span
                    >Address: 60 Wall Street, J.P. Morgan Bank Building, Deutsche Bank
                    Building, New York City, 114109
                </span>
                <span>Phone: 0811790216</span>
        
            </div>
            <span>Facebook: </span>
                <a href="https://www.facebook.com/wuttipat.sanchai/"
                    >https://www.facebook.com/wuttipat.sanchai/
                </a>
                <br />

            <span>Facebook: </span>
                <a href="mailto:wuttipat_s@cmu.ac.th" target="_top"
                    >wuttipat_s@cmu.ac.th
                </a>

       
        </div>
    </MainLayout>
  )
}
