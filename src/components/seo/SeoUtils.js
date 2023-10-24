import React from 'react'
import { META_INFO, LINK_INFO, TITLE_INFO } from './SeoConstants'
import  {Helmet } from 'react-helmet-async';

export default function SeoUtils(props) {
 

return (
   <>  
    <Helmet>
     {
          TITLE_INFO[props?.page ? props.page: 'common'] !== undefined ?
          Object.values(TITLE_INFO[props?.page ? props.page: 'common']).map((nameText, index)=> <title key={index}>{Object.values(nameText)}</title> )
           : ''
      }
    
      {
            META_INFO[props?.page ? props.page: 'common'] !== undefined ?
               Object.values(META_INFO[props?.page ? props.page: 'common']).map((nameText, index)=> <meta key={index} {...nameText} /> )
                : ''
      }
      {
            LINK_INFO[props?.page ? props.page: 'common'] !== undefined ?
            Object.values(LINK_INFO[props?.page ? props.page: 'common']).map((nameText, index)=> <link key={index} {...nameText} /> )
             : ''
       }
    </Helmet>
      </>

  )
}

//og:
//link rel-preconnect
//link apple icon
//link favicon
//title
//description
//keyword
//robots
//style
//preload
//structure json
//canonical
//html attributes
//font

