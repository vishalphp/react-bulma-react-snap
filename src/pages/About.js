import React from 'react'
import Banner from '../components/about/Banner'
import SingleColumn from '../components/about/SingleColumn'
import useSeo from '../hooks/useSeo';

export default function About() {

  const seoObject = {
    titleData:'this is About us page',
    metaData: [ 
     {
       name:'description',
       content: 'this is a description of About us page',
     },
     {
       name: 'keyword',
       content : 'About us, index'
     },
     {
       property: 'og:type',
       content: "facebook About us type healmet"
     },
     {
       property: 'og:description',
       content: "facebook About us description healmet"
     },
     {
       property: 'og:title',
       content: "facebook Seo About us Project healmet"
     },
     {
       name: 'twitter:creator',
       content: "twitter Seo About us Project healmet creator"
     },
     {
       name: 'twitter:card',
       content: "twitter Seo About us Project healmet card"
     },
     {
       name: 'twitter:title',
       content: "twitter Seo About us Project healmet title"
     },
     {
       name: 'twitter:description',
       content: "twitter Seo About us Project healmet description"
     },
   ],
    linksData:[]
 }

const buildAll  = useSeo(seoObject);
  return (
     <>
     {buildAll}
     <Banner />
     <SingleColumn />
     </>
  )
}
