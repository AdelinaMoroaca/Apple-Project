import React, { useState} from "react";

export default function ConditinalRendering(){
    const [person, setPerson] = useState({
        name: 'Jane Doe',
        age: 15,
    })

    //Metoda1: functie care returneaza cod HTML
    function isOldEnoughToDrive(){
        if(person.age >= 18) return <span>Can drive! ~ M1</span>
        else return <span>Cannot drive! ~ M1</span>
    }

    return(
        <div style={{backgroundColor:'yellowgreen', display: 'flex', flexDirection: 'column'}}>
            
            <button onClick={() => setPerson({...person, age: 20})}>Modify age</button>
            <h3>{person.name}</h3>
            <p>{person.age}</p>

            {/* Metoda1: functie care returneaza cod HTML */}
            {isOldEnoughToDrive()}

            {/* Metoda 2: afisam sau nu o anumita componenta, in functie de o conditie */}
            {person.age >= 20 && <span>Is older than 20! ~ M2 </span>}
        
            {/* Metoda 3: afisam cu operatorul ?: fie o componenta, fie alta */}
            {/* conditie ? conditia e adevarata: conditia e falsa */}
            {person.age > 18 ? <span>CAN drink!</span> : <span>CANN't drink! ~ M3 </span>}
        </div>
    )
}








