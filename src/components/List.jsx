import React from "react";
import Card from "./Card";

function List() {
    const person = [ 
    {Name:"Pitchayut Buajoy", job:"Student", hobby: "xxxxxxxxx"},
    {Name:"Pitchayut Buajoy", job:"Student", hobby: "xxxxxxxxx"},
    {Name:"Pitchayut Buajoy", job:"Student", hobby: "xxxxxxxxx"},
];
    return (
       <>
       {person.map((e) => {
        return <Card name={e.Name} job={e.job} hobby={e.hobby}></Card>
       }
       )}
       </>
    )
}
export default List;