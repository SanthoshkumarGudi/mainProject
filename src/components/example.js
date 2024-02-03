// import React from "react";
// import Section from "./sections";
// import TabButton from "./tabButton";
// import App from "../App";




// export default function Examples(){
//     return(
//         <>
//         <Section title="Examples"  id="examples">
      
//       <menu>
//         {/* we cant use functions directly in the component it shoul be passed as a value thats why we ll use arrow function */}
//     <TabButton isSelected={selectedTopic==='components' } 
//     onClick={()=>handleSelect('components')} className="components"
//     >
//       Components</TabButton>
//     <TabButton isSelected={selectedTopic==='jsx'}
//      onClick={()=>handleSelect('jsx')}
//      >
//       JSX
//       </TabButton>
//     <TabButton isSelected={selectedTopic==='props'}
//      onClick={()=>handleSelect('props')}
//      >props
//      </TabButton>
//     <TabButton isSelected={selectedTopic==='state'}
//      onClick={()=>handleSelect('state')}
//      >state
//      </TabButton>
//     </menu>
    
//       {/* ternary operator */}
//       {/* {!selectedTopic&&
//       <p>please select a topic..</p>} */}
//       {/* {!selectedTopic ? (
//       <p>please select a topic..</p>
//       ) : (
//       <div>
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//       )} */}

      
//       {tabContent}
      
//       </Section>
    
    
    
//         </>

//     );
// }