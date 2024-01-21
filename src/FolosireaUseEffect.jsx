const FolosireaUseEffect = () => {

    return(
        <div>
        <h3>Acum, tot in functia StopWatch vom folosi useEffect</h3>
        <br />
        <pre>
            <code>
                {`
                // Efect pentru gestionarea cronometrului
                useEffect(() => {
                  let intervalId;
                
                  // Verificăm dacă cronometrul rulează
                  if (isRunning) {
                    // Setăm un interval care se execută la fiecare 10 milisecunde
                    intervalId = setInterval(() => {
                  // setInterval() este o tehnică folosită pentru a executa o funcție sau un fragment de cod la intervale regulate de timp
                  // Această funcție este utilă atunci când dorim să actualizam dinamic conținutul unei pagini web 
                      //ce se schimba
                      setTime((prevTime) => {
                        let newTens = prevTime.tens + 1;
                        let newSeconds = prevTime.seconds;
                        let newMinutes = prevTime.minutes;
                
                        // Logica pentru actualizarea timpului
                        if (newTens === 100) {
                          newTens = 0;
                          newSeconds += 1;
                
                          if (newSeconds === 60) {
                            newSeconds = 0;
                            newMinutes += 1;
                          }
                        }
                        //returnam noile minute,seconde si milisecunde
                        return { minutes: newMinutes, seconds: newSeconds, tens: newTens };
                      });
                    }, 10);
                  }
                
                  // Curățăm intervalul când cronometrul se oprește
                  return () => clearInterval(intervalId);
                }, [isRunning]);
                
                `}
            </code>
        </pre>
        <h3>Folosirea useEffect</h3>
        <p>'useEffect' este un hook care permite gestionarea efectelor secundare în componente funcționale.</p>
        <p>Acesta se foloseste de obicei in lucrul cu API-uri, gestionarea DOM-ului, in acest exemplu este utilizat 
            pentru a gestiona efectele secundare (trecerea milisecundelor in secunde, secunde in minute)
        </p>
        </div>
    )
}
export default FolosireaUseEffect;