import React from 'react'
import { MdDone } from "react-icons/md";


export default function Banner() {
  return (
    <div className='has-background-dark'>
    <div className='container '>
     <section className='has-text-centered pt-6 pb-6 w-500 m-auto'>

        <div className='backsteal-fonts is-size-4 has-text-white has-text-centered is-uppercase has-text-weight-semibold'>BulmaTutorial</div>
        <div className='signpainterhouseslant is-size-2 has-text-white has-text-centered is-capitalized is-italic has-text-weight-semibold'>Seo Friendly Project</div>
        <hr className='has-background-grey-lighter'/>
        <ul className='has-text-centered backsteal-fonts has-text-white is-capitalized'>
            <li><MdDone className='has-text-primary-light is-align-items-center' /> UI + SASS + React icon</li>
            <li><MdDone className='has-text-primary-light'/> Meta Tags and other seo tags handle on route change</li>
            <li><MdDone className='has-text-primary-light'/> Progressive Web App</li>
            <li><MdDone className='has-text-primary-light'/> React Snap</li>
        </ul> 
     </section>
     </div>
     </div>
  )
}
