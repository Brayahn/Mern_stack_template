import React from 'react';
import sections from './About_Content';

const About = ({match}) => {
    const name = match.params.name;
    const about = sections.find((about)=> about.name === name);
    if (!about) return <h1> Information does not excist </h1>;
    return (
        <div mb-20>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
                {about.title}
                </h1>
                {about.content.map((paragraph, index) => (
                    <p className="mx-auto leading-relaxed text-base mb-4" key={index}> {paragraph} </p> 
                ))
                }   
        </div>
    );
};

export default About;