const Afisare = () => {
    return(
        <div>
            <h3>Tot ce ne ramane de facut este sa imbinam functiile corespunzator</h3>
            <pre>
                <code>
                    {`
                     return (
                        <div className="stopwatch">
                            <br />
                          <h1>StopWatch</h1>
                          <h2>Minutes, seconds, milliseconds</h2>
                    
                          <p>
                            <span id="minutes">{String(time.minutes).padStart(2, '0')}</span> :{' '}
                            <span id="seconds">{String(time.seconds).padStart(2, '0')}</span> :{' '}
                            <span id="tens">{String(time.tens).padStart(2, '0')}</span>
                          </p>
                    
                          <button onClick={startStopwatch} id="button-start">
                            {isRunning ? 'Pause' : 'Start'}
                          </button>
                          <button onClick={stopStopwatch} id="button-stop">
                            Stop
                          </button>
                          <button onClick={resetStopwatch} id="button-reset">
                            Reset
                          </button>
                        </div>
                      );
                    };
                    
                    export default StopWatch;
                    `}
                </code>
            </pre>
        </div>
    )
}

export default Afisare