import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES_PATH } from './config/path.config' 

export default function Screen() { 

    const { root, home, about } = ROUTES_PATH;
 

  return (
     <Routes> 
       <Route path={root.path} element={root.rendHtml} >
           <Route index element={home.rendHtml} />
           <Route path={about.path} element={about.rendHtml} />   
      </Route>
     </Routes>
  )
}
