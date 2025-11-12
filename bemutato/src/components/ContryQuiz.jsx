import{ useState, useEffect } from 'react';
import QuizJatek from '../Contryquiz.json';

function CounrtyQuiz() {

    const [valasz, setValasz] = useState("")
    const [kerdes, setKerdes] = useState(0)
    const [eredmeny,setEredmeny] = useState(false)
    const [pontok, setPontok] = useState(0)
    const [valaszKevero, setValaszKevero] = useState([]);

    const aktualisKerdes = QuizJatek[kerdes]
    

    const handleValasz = (tipp) =>{
        setValasz(tipp)
        if (tipp == aktualisKerdes.name){
            setPontok(pontok + 1)
        }
    }

    const kovetkezoKerdes = () =>{
        if (kerdes + 1 < QuizJatek.length){
            setKerdes(kerdes + 1)
            setValasz("")
        }
        else{
            setEredmeny(true)
        }
    }

    useEffect (() =>{
        const kevero = [...aktualisKerdes.options].sort(() => Math.random() - 0.5);
        setValaszKevero(kevero)
    }, [aktualisKerdes])
  return(
<div>
    {!eredmeny ? (
        <div>
            <img src={aktualisKerdes.pic}></img>

            <div>
                {valaszKevero.map ((data, index) => (
                    <button key={index} onClick={() => handleValasz(data)} disabled={valasz} className={valasz ? data == aktualisKerdes.name ? "helyes" : data == valasz ? "hiba": "" :""}>{data}</button>
                ))}
            </div>
            {valasz && (
                <button onClick={kovetkezoKerdes}>{kerdes + 1 < QuizJatek.length ? "következő" : "eredmények"}</button>

            )}
        </div>

    ): 
    (
        <div>
            <h1>Vége a quiznek!</h1>
            <h2>Elért pontszám: {pontok}/{QuizJatek.length}</h2>


        </div>
    )
    }
</div>
  )

}

export default CounrtyQuiz;