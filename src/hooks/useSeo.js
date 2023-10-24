import React, {useState, useEffect} from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const useSeo = (props) => {
const {titleData, metaData, linksData} = props;
const [buildSeo, setBuildSeo] =useState('');
const location = useLocation();
//let pageSeo = location.pathname.substring(1) === '' ? 'home' : location.pathname.substring(1); 

useEffect(()=>{
    BuildAll();
},[location]);
 

const titleBuilder = () =>{ 
  return <title>{titleData}</title>;
}

const metaDataBuilder = ()=>{
   return Object.values(metaData).map((nameText, index)=> <meta key={index} {...nameText} /> );
}
const linksDataBuilder = () =>{
    return Object.values(linksData).map((nameText, index)=> <link key={index} {...nameText} /> )
}

const BuildAll = () =>{  
    const titleDataByBuilder = titleBuilder();
    const metaDataByBuilder = metaDataBuilder(); 
    const linkDataByBuilder = linksDataBuilder();
    setBuildSeo(<Helmet>{titleDataByBuilder}{metaDataByBuilder}{linkDataByBuilder}</Helmet>)
}



    return buildSeo;
}


export const SeoProvider = ({children}) =>{

  return <HelmetProvider>{children}</HelmetProvider>

}



export default useSeo;