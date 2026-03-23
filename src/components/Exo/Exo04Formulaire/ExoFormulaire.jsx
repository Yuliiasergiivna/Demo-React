import { useForm } from "react-hook-form";
import { useState } from "react";
import style from './ExoFormulaire.module.css'

export const ExoFormulaire = ()=>{

    // const [count, setCount] = useState('');
    // const [tip, setTip] = useState('');
    // const [people, setPeople] = useState(1);

    const [resultats, setResultats] = useState(null);

    const { register, handleSubmit, reset, formState : {errors} } = useForm(
        {mode : 'onChange',
            values : {
                count : '',
                tip : '10',
                people: 1
            }
        }
    );

    const onSubmit = (data) =>{
        const note = parseFloat(data.count);
        const pourcent = parseFloat(data.tip);
        const personnes = parseInt(data.nbPeople);

        const pourboire = note *(pourcent/100);
        const total = note +pourboire;
        const parPersonne = total/ personnes;

        setResultats({
            pourboire : pourboire.toFixed(2),
            total : total.toFixed(2),
            parPersonne : parPersonne.toFixed(2)
        });
    };

    const onReset =() => {
        reset();
        setResultats(null);
    }


    return(
        <div className={style.formule}>
            <form className={style.form}  onSubmit={handleSubmit(onSubmit)}>

                <div className={style['groupe-form']}>
                    <label htmlFor="count">Note totale (€)</label>
                    <input
                        id="count"  
                        type="number" 
                        {...register(
                            'count', {required : true}
                        )}
                        >
                    </input>
                    {errors.count && <span className={style.errors}>Requis</span>}
                </div>

                <div className={style['groupe-form']}>
                    <label htmlFor="tip">Pourboire (%)</label>
                    <select id='tip' {...register('tip', {required: true})}>
                        <option value="5%">5</option>
                        <option value="10%">10</option>
                        <option value="15%">15</option>
                        <option value="20%">20</option>
                    </select>
                </div>
                <div className={style['groupe-form']}>
                    <label htmlFor="nbPeople">Nombre de personnes :</label>
                    <input id="nbPeople" type="number" {...register("nbPeople", {required : true, minLength: 1})}>
                    </input>
                    {errors.nbPeople && <span className={style.errors}>Minimum 1 personne</span>}
                </div>
                <div className={style.buttons}>
                    <button type="submit">Valider</button>
                </div>
            </form>
            <div className={style.results}>
                <div className={style.resultItem}>
                    <p>Pourboire : {resultats?.pourboire || "0.00"} €</p>
                </div>
                <div className={style.resultItem}>
                    <p>Total : {resultats?.total || "0.00"} €</p>
                </div >
                <div className={style.resultItem}>
                    <p>Par personne : {resultats?.parPersonne} €</p>
                </div>
                <div className={style.button}>
                    <button type="button" onClick={onReset}>Réinitialiser</button>
                </div>
            </div>
            
        </div>
    )
}