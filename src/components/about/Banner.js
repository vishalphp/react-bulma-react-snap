import React from 'react'
import { MdDone } from "react-icons/md";


export default function Banner() {
  return (
    <div className='has-background-dark'>
    <div className='container '>
     <section className='has-text-centered pt-6 pb-6 w-500 m-auto'>

        <div className='backsteal-fonts is-size-4 has-text-white has-text-centered is-uppercase has-text-weight-semibold'>BulmaTutorial</div>
        <div className='signpainterhouseslant is-size-2 has-text-white has-text-centered is-capitalized is-italic has-text-weight-semibold'>About Project</div>
        <hr className='has-background-grey-lighter'/>
        <ul className='has-text-centered backsteal-fonts has-text-white is-capitalized'>
            <li><MdDone className='has-text-primary-light is-align-items-center' /> Where can I get some?</li>
            <li><MdDone className='has-text-primary-light'/> randomised words which don't look even slightly</li>
            <li><MdDone className='has-text-primary-light'/>The first line of Lorem Ipsum</li>
            <li><MdDone className='has-text-primary-light'/>  cites of the word in classical literature</li>
            <li><MdDone className='has-text-primary-light'/> The standard chunk of Lorem Ipsum used since the 1500s is reproduced</li>
        </ul> 
     </section>
     </div>
     </div>
  )
}
