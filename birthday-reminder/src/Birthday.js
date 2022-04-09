import React from "react";
import { data } from "./data";

const Birthday = () => {
    const [people, setPeople] = React.useState(data)

    const removeUser = (id) => {
        const newPeople = people.filter((person) => person.id != id)
        setPeople(newPeople)
    }
    return <>
        <h1>{people.length} birthdays today</h1>
        {people.map((person) => {
            const {id, name, age, img} = person

            return <div className="item" >
                    <div className="user" key={id}>
                        <img src={img} alt="" />
                        <div className="info">
                            <h2>{name}</h2>
                            <p>{age}</p>
                        </div>
                    </div>
                    <a href="#" className="remove-btn" onClick={() => removeUser(id)}>remove</a>
                </div>
        })}

        <a href="#" className="btn" onClick={() => setPeople([])}>clear all</a>

    </>

}

export default Birthday;
