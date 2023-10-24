import React from 'react'
import Banner from '../components/home/Banner'
import ThreeColumnContent from '../components/home/ThreeColumnContent'
import SingleColumn from '../components/home/SingleColumn' 
import useSeo from '../hooks/useSeo';

export default function HomePage() {

  const seoObject = {
                 titleData:'this ishomepage',
                 metaData: [ 
                  {
                    name:'description',
                    content: 'this is a description of home page',
                  },
                  {
                    name: 'keyword',
                    content : 'home, index'
                  },
                  {
                    property: 'og:type',
                    content: "facebook type healmet"
                  },
                  {
                    property: 'og:description',
                    content: "facebook description healmet"
                  },
                  {
                    property: 'og:title',
                    content: "facebook Seo Project healmet"
                  },
                  {
                    name: 'twitter:creator',
                    content: "twitter Seo Project healmet creator"
                  },
                  {
                    name: 'twitter:card',
                    content: "twitter Seo Project healmet card"
                  },
                  {
                    name: 'twitter:title',
                    content: "twitter Seo Project healmet title"
                  },
                  {
                    name: 'twitter:description',
                    content: "twitter Seo Project healmet description"
                  },
                ],
                 linksData:[{
                  rel:"apple-touch-icon",
                  sizes:"72x72",
                  to:"http://mysite.com/img/apple-touch-icon-57x57.png"
                  },
                  {
                  key:"en",
                  hrefLang:"en",
                  to:"http://example.com/en"
                  },
                  {
                  key:"canonical", 
                  to:"http://mysite.com/example"
                  }
                ]
              }

  const buildAll  = useSeo(seoObject);


  return (
    <>
      {buildAll}
      <Banner />
      <ThreeColumnContent />
      <SingleColumn /> 
    </>
  )
}
