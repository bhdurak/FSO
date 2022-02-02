import React from "react";
import Content from "./content";
import Header from "./header";
import Total from "./total";

const Course = ({course}) => {
    return (
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts.map(part => part.exercises).reduce((e1,e2) => e1 + e2)} />
        </>
    )
}

export default Course