import React from 'react';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import RootLayout from '../layout/RootLayout';

export const ROUTES_PATH = {
    root:{
     path: '/',
     rendHtml: <RootLayout />
    },
    home:{
       name: 'Home',
       path: 'index',
       rendHtml: <HomePage />    
    },
    about:{
        name: 'About',
        path: 'about',
        rendHtml: <About />    
     },
}

