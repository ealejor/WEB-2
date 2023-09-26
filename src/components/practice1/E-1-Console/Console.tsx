import "./console.css"
import React, {useState} from 'react';

export function Console() {
    const [country, setCountry] = useState<string>("")
    const [capital, setCapital] = useState<string>("")
    const listenerCountry = (event: {
        target: {
            value: React.SetStateAction<string>;
        };
    }) => {
        setCountry(event.target.value)
    }
    const listenerCapital = (event: {
        target: {
            value: React.SetStateAction<string>;
        };
    }) => {
        setCapital(event.target.value)
    }
    return (
        <>
            <h1>FORMULARIO</h1>
            <div>
                <label>PAÍS</label>
                <input onChange={listenerCountry}/>
            </div>
            <div>
                <label>CAPITAL</label>
                <input onChange={listenerCapital}/>
            </div>
            <div>
                <button onClick={() => {
                    console.log(`${country} ${capital}`)
                }}>
                    MOSTRAR EN CONSOLA
                </button>
            </div>
        </>
    );
}
