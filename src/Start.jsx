
const start = () => {

    return(
        <div>
            <h2>In acest tutorial vei afla cum sa creeaza un cronometru si logica din spatele codului</h2>
            <h3>Pentru inceput avem</h3>
            
            <h3>In creearea acestui cronometru s-a folosit 'useState' si 'useEffect' </h3>
            <p>'useState' este un hook care permite 
                componentelor funcționale să-și țină evidența stării locale (actioneaza ca o functie)
            </p>
            <p>Sintaxa: const [state][setState] = useState(InitialState)</p>
            <p>state: reprezinta valoarea curenta a starii</p>
            <p>setSate: functia care poate fi apelata pentru a actualiza starea</p>
            <p>InitialState: valoarea initiala a starii</p>
            <br />
            <p>'useEffect' este un hook care permite gestionarea efectelor secundare în componente funcționale.</p>
            <p>Acesta se foloseste de obicei in lucrul cu API-uri, gestionarea DOM-ului, in acest exemplu este utilizat 
                pentru a gestiona efectele secundare (trecerea milisecundelor in secunde, secunde in minute)
            </p>
            <pre style={{background:'grey'}}>
            <code>
                <h4></h4>
            </code>
            </pre>
        </div>
    )
}

export default start;