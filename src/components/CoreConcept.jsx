import {CORE_CONCEPTS} from '../data.js';
import CoreConcepts from './CoreConcepts.jsx';
import Section from './Section.jsx';

export default function CoreConcept ()
{
    return (
        <>
         <Section title="Core Concepts!"id="core-concepts">
          <ul>
            {/* We can create dynamic data jsx as follows */}
            { CORE_CONCEPTS.map((element,index,array)=> 
            <CoreConcepts {...element}/>)}
            {/* Above is most common way of outputing list of datol */}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} /> */}
            {/* Alternative way of setting props if props name is same as that in object */}
            {/* <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </Section>
        </>
    )
}