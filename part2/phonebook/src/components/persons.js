import React from "react";

const Persons = ({persons}) => {
    return (
        <>
            {persons.map(person => <p key={person.name}>{person.name}</p>)}
        </>
    )
}

export default Persons