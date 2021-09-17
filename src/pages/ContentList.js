import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import sections from './About_Content';

const ContentList = () => {
    return (
        <>
        <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
          Sections
        </h1>
        <div className='container py-4 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {sections.map((article, index) =>
            
            <div key={index} className='p-4 md:w-1/2'>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Link to={`/about/${About.name}`}> </Link>

                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt="Image" />
                </div>
            </div>
            )}
          </div>
        </div>
      </>
    );
};

export default ContentList;