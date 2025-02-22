import React, { Component } from 'react'
import spinner from './spinner.gif'

const Spinner = () =>{
    return (
      <div className='text-center'>
        <img className= 'my-3' style={{height:'100px'}} src={spinner} alt='spinner'/>
      </div>
    )
  }
  
export default Spinner

