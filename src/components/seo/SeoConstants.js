import React from 'react';

export const META_INFO = {

    common:[
           {
            name:'description',
            content: 'this is a default seo description for pages',
            },
          ],
    home: [ 
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
        
  };

export const TITLE_INFO ={
                        common :[ {
                          title:'this is a default title for page',
                         }],
                         home:[ 
                           {
                            title: 'This is Home Page',    
                            }
                          ],
                          about:[
                            {
                              title: 'This is About us page',    
                              }
                          ]
                          };
  
export const LINK_INFO ={
        common:[],
        home:[{
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
};
