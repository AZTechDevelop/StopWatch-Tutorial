const FunctiiStatus = () => {
    return(
        <div>
            <h3>Vom avea nevoie de 3 functii pentru cele 3 butoane: Start, Stop si Reset</h3>
            <pre>
                <code>
                    {`
                    // Funcție pentru a începe/pauza cronometrul
                    const startStopwatch = () => {
                      setIsRunning((prevIsRunning) => !prevIsRunning);
                    };
                  
                    // Funcție pentru a opri cronometrul
                    const stopStopwatch = () => {
                      setIsRunning(false);
                    };
                  
                    // Funcție pentru a reseta cronometrul
                    const resetStopwatch = () => {
                      setIsRunning(false);
                      // Reseteaza starea timpului la valorile inițiale
                      setTime({ minutes: 0, seconds: 0, tens: 0 });
                    };
                    `}
                </code>
            </pre>
        </div>
    )
}
export default FunctiiStatus