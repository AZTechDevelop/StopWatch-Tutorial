
const Inceput = () => {

    return(
        <div>
            <p>Tot ce mai ramane de facut este sa mergem in fisierul `App.jsx` si sa adaugam noua componenta `StopWatch`</p>
            <p>Fisierul dumneavoastra ar trebui sa arate c-am asa</p>
            <pre>
                <code>
                    {`
                    import './App.css';

                    import StopWatch from './StopWatch';
                    
                    function App() {
                      return (
                        <>
                        <StopWatch />
                        </>
                      )
                    }
                    
                    export default App;
                    `}
                </code>
            </pre>
            <h4>Putem observa ca avem importat fisierul `./App.css`, daca doriti sa va customizati singur cronometrul 
                nu mai adaugati acest cod in './App.css'
            </h4>
            <pre>
                <code>
                    {`
                    *{
                        padding:0;
                        margin:0;
                        box-sizing:border-box;
                        font-family:sans-serif;
                      }
                      
                      body{
                        background:#4D96D5;
                        display:flex;
                        justify-content:center;
                        align-items: center;
                        min-height:100vh;
                      }
                      
                      .stopwatch{
                        text-align:center;
                        color:white;
                      }
                      
                      h1{
                        font-size:4rem;
                        margin:0 0 20px;
                      }
                      
                      p{
                        font-size:2rem;
                        margin:20px;
                      }
                      
                      .stopwatch button{
                        padding:10px;
                        margin:10px;
                        border-radius:5px;
                        color:#4D96D5;
                        background:#CAE0D0;
                        cursor:pointer;
                        font-size:25px;
                        transition:0.6;
                        border:none
                      }
                      
                      .stopwatch button:hover{
                      color:#374FA0;
                      }
                    `}
                </code>
            </pre>
        </div>
    )
}

export default Inceput;