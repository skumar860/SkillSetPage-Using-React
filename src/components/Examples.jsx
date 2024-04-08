import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState,Fragment } from 'react';
import Section from './Section.jsx';
import Tab from './Tab.jsx';

export default function Examples(){
    const [selectedTopic,setSelectedTopic]= useState();
    const handleSelect=(selectedButton)=>{
     setSelectedTopic(selectedButton)
    }
    let tabContent= <p>Please select any option.</p>
    return (
        <Section title="SkillSet" id="examples">
            <Tab Containerbutton="menu"
             buttons={
                    <>
          <TabButton isSelected={selectedTopic=='Csharp'} onSelect={()=>{handleSelect('Csharp')}}>C#</TabButton>
          <TabButton isSelected={selectedTopic=='React'} onSelect={()=>{handleSelect('React')}}>React</TabButton>
          <TabButton isSelected={selectedTopic=='Javascript'} onSelect={()=>{handleSelect('Javascript')}}>Javascript</TabButton>
          <TabButton isSelected={selectedTopic=='HTMLandCSS'} onSelect={()=>{handleSelect('HTMLandCSS')}}>HTML &CSS</TabButton>
                </>
            }>
            {selectedTopic ? tabContent=( 
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)
            : tabContent }
            </Tab>
        </Section>
    )
}