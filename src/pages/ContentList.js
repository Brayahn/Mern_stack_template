import React from 'react';
import Sections from './About_Content';
import About_ from '../components/About_';


const ContentList = () => {
    return (       
        <> 
        <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
            Sections
        </h1><div className='container py-4 mx-auto'>
            <div className='flex flex-wrap -m-4'>
               <About_ info={Sections}/>
            </div>
            </div>
            </>     
    );
};

export default ContentList;
