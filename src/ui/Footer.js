import React from 'react'
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="footer has-text-white">
      <div className="content has-text-centered">
        <section className='content w-100 m-auto '>
           <ul className='list-style-type-none is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center'>
            <li><FaGithub className='has-text-white' /></li>
            <li><FaTwitter className='has-text-white' /></li>
            <li><FaFacebook className='has-text-white' /></li>
           </ul>
        </section> 
        <section className='content'>
            @copyright by developer 2023
        </section> 
      </div>
    </footer>
  )
}
