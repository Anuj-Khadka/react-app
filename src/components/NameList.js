import React from "react";

function NameList() {
  const names = ["Anuj", "Algae", "Brutpull"];
  const name = names.map(name => <h1>{name}</h1>)
  return (
    <div>
      {/* {names.map(name => <h1>{name}</h1>)} */}
      {name}
    </div>
  );
}


// this function just maps the object 
function NameObject(){
    const peopleList = [
        {
            id: 1,
            name: "Anuj",
            skill: "React"
        },
        {
            id: 2,
            name: "Algae",
            skill: "Vue"
        },
        {
            id: 3,
            name: "Brutpull",
            skill: "Angular"
        }
    ]
    // const person = peopleList.map(people => <h2>I am {people.name} and I know {people.skill}</h2>)
    // key prop is an special attribute to be included when creating lists of element ------------- they are not accessible in the child component.
    const person = peopleList.map(people => <Person key={people.id} person={people}/>)
    return(
        <div>
            {person}
        </div>
    )
}


function Person({person}){
    return(
        <h2>I am {person.name} and I know {person.skill}</h2>
    )
}



export default NameList;
export {NameObject}