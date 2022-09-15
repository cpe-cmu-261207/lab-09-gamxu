import React from 'react'
import Navbar from '../components/Navbar'

export default function (props) {
  return (
    <div 
    style={{border:"solid 1px ", maxWidth:"1050px", backgroundColor: "gray"}}
    className="mt-4 mx-auto gap-2 rounded-3 p-3 mb-4"
    >
        <div 
        style={{border:"solid 1px ", maxWidth:"1000px", backgroundColor: "white"}}
        className="mt-2 mx-auto gap-2 rounded-3 p-3 mb-2"
        >
            <Navbar/>
            {props.children}
        </div>   
    </div>
  )
}
