import React from "react";

const Persons = ({persons, onDelete}) => {
    return (
        <>
            {persons.map(person => {
                return (
                    <p key={person.id}>{person.name} {person.number}
                    <button onClick={() => onDelete(person.id)}>delete</button>
                    </p>
                    )}
                )
            }
            
        </>
    )
}

export default Persons