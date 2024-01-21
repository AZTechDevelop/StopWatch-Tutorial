const FolosireaUseState = () => {
    return(
    <div>
        <br />
    <h1 style={{margin:'auto',textAlign:'center'}}>Creati un nou fisier numit StopWatch.jsx</h1>
    <h2>Pentru inceput avem in fisierul StopWatch.jsx</h2>
    
    <pre>
        <code>
            {`
            import React, { useState, useEffect } from 'react';  // importan useState si useEffect
            // Vom definii componenta StopWatch sub formă de funcție
            const StopWatch = () => {
                // Stare pentru gestionarea timpului și a cronometrului
                const [time, setTime] = useState({ minutes: 0, seconds: 0, tens: 0 });
                // Stare pentru gestionarea stării de rulează sau nu cronometrul
                const [isRunning, setIsRunning] = useState(false);

            }
            `}
        </code>
    </pre>
    <h3>Folosirea 'useState' </h3>
    <p>'useState' este un hook care permite 
        componentelor funcționale să-și țină evidența stării locale (actioneaza ca o functie)
    </p>
    <p>Sintaxa: const [state][setState] = useState(InitialState)</p>
    <p>state: reprezinta valoarea curenta a starii</p>
    <p>setSate: functia care poate fi apelata pentru a actualiza starea</p>
    <p>InitialState: valoarea initiala a starii</p>
    </div>
    )
}

export default FolosireaUseState;