import React from 'react';
import Sections from './About_Content';
import Mysections from '../components/Abouts';

const About = ({match}) => {
    const name = match.params.name;
    const about = Sections.find((about)=> about.name === name);
    if (!about) return <h1> Information does not excist </h1>;
    const otherSections= Sections.filter(about=> about.name !==name)
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
                {about.title}
                </h1>
                {about.content.map((paragraph, index) => (
                    <p className="mx-auto leading-relaxed text-base mb-4" key={index}> 
                    {paragraph} 
                    </p> 
                ))
                }

           <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900"> 
           
           Other Sections</h1>    

           <div className="flex flex-wrap -m-4 ">
               <Mysections infomasio={otherSections}/>               
               </div> 
                
        </>
        );
};

export default About;