import React from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Card from "./card";

export default function CoreConcepts(){
    return(
        
        <section id="core-concepts">

        <ul>
        <h3>Core Concepts</h3>
          {CORE_CONCEPTS.map((conceptItem)=> (
            <Card key={conceptItem.image} {...conceptItem} />
          ))}
        </ul>
      {/* {/* <Card img={CORE_CONCEPTS[0].image}
      
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description} />

     <Card {...CORE_CONCEPTS[1]} />

      <Card {...CORE_CONCEPTS[2]} />

      <Card {...CORE_CONCEPTS[3]} /> */}
      </section> 
        
    );
}