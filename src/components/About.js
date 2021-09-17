import React from 'react';

const About = () => {
    return (
        <div>
             {Sections.map((about, index) => (

<div key={index} className="p-4 md:w-1/2">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link to={`/about/${about.name}`}>
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={about.thumbnail} alt="About Pic" />
        </Link>

        <div className="p-6"> 
            
                <Link  key={index} to={`/article/${about.name}`} > 
                
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3"> {about.title} </h3>  </Link>
                <p className="leading-relaxed mb-3"> {about.content [0].substring(0,100)}</p>
                <div className="flex item-center flex-wrap">  
                <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/about/${about.name}`}>
                            View more...
                    </Link>
                </div>
                </div>

    </div>
</div>
))}
        </div>
    );
};

export default About;