// components/page.js
'use server'
import React from 'react';

export const WithData = async(Component) => {
    return async (props) => {
        const response1 = fetch('https://stg-qp.cogecomedia.com/static/style/cogeco-stage.domain-custom.style.json', { cache: "force-cache", tags: ['collection'] });
        const response2 = fetch('https://stg-qp.cogecomedia.com/static/style/cogeco-stage.domain-base.style.json', { cache: "force-cache", tags: ['collection'] });
        const response3 = fetch('https://stg-qp.cogecomedia.com/static/config/cogeco-stage.host.json', { cache: "force-cache", tags: ['collection'] });
        const response4 = fetch('https://stg-qp.cogecomedia.com/static/config/cogeco-stage.config.json', { cache: "force-cache", tags: ['collection'] });
        
        const [result1, result2, result3, result4]  = await Promise.all([response1, response2, response3, response4]);
       
        const [r1, r2, r3, r4] = await Promise.all([
            result1.json(), 
            result2.json(),
            result3.json(), 
            result4.json(), 
          ]);
        const newProps = { result1: r1, result2: r2, result3: r3, result4: r4, ...props };
        // props.data = data;
      console.log(JSON.stringify(newProps));
        // Render the component if the user is an admin
        return  <Component {...newProps} />; // Or a loading indicator or a "not authorized" message
    };
};


