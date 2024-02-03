

import React from "react";





import Card from './components/card';
import { CORE_CONCEPTS } from './components/data';
import Contacts from './components/contacts';
import Child from './components/tabButton';
import { useState } from 'react';
import { EXAMPLES } from './components/data';
import CoreConcepts from './components/coreConcepts';
import Section from './components/sections';
import TabButton from './components/tabButton';
import Header from './components/header';
import Tab from './components/tabs';
import Examples from './components/example';


// const concept=["core","fundamental","advanced"];



function App() {
 const [ selectedTopic, setSelectedTopic]=useState();
function handleSelect(selectedButton){
   setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }


let tabContent=<p>Please select a statement</p>
if(selectedTopic){
    tabContent=<div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
}

  return (
    
       











<div>
       <Header/>
      <CoreConcepts/> 
    {/* <Contacts name="Santhosh" age="25" message="hello"/>
    <Contacts name="loki" age="6" message="hi how are you"/> */}
    <Section title="Examples"  id="examples"> 
    <Tab  buttons={
      <>
      <TabButton isSelected={selectedTopic==='components' } 
      onClick={()=>handleSelect('components')} 
      >
      Components</TabButton>
      <TabButton isSelected={selectedTopic==='jsx'}
     onClick={()=>handleSelect('jsx')}
      >
      JSX
      </TabButton>
    <TabButton isSelected={selectedTopic==='props'}
     onClick={()=>handleSelect('props')}
     >props
     </TabButton>
    <TabButton isSelected={selectedTopic==='state'}
     onClick={()=>handleSelect('state')}
     >state
     </TabButton>
     
    </>
    } >{tabContent}</Tab>
    
       
      {/* we cant use functions directly in the component it shoul be passed as a value thats why we ll use arrow function */}
    
    {/* ternary operator */}
      {/* {!selectedTopic&&
      <p>please select a topic..</p>} */}
      {/* {!selectedTopic ? (
      <p>please select a topic..</p>
      ) : (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
      )} */}

      
      
      </Section>
      
      </div>
  

  )
}
export default App;

