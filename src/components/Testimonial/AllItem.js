import React from "react"

import "./Testimonial.css"
import Card from "./Card"
import Tdata from './Tdata';

const AllItem = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container grid1'>
          {Tdata.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default AllItem