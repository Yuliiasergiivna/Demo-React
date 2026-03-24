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
            resetOptions : { keepFieldsRef : true },
            values : {
                count : '',
                tip : '5',
                nbPeople: 1
            }
        }
    );

    const onSubmit = (data) =>{
        const note = parseFloat(data.count) || 0;
        const pourcent = parseFloat(data.tip) || 0;
        const personnes = parseInt(data.nbPeople) || 1;

        // if(personnes <= 0)return;

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
                            'count', {required : true, min : 1}
                        )}
                        >
                    </input>
                    {errors?.count?. type === 'required' && <span className={style.errors}>Requis</span>}
                </div>

                <div className={style['groupe-form']}>
                    <label htmlFor="tip">Pourboire (%)</label>
                    <select id='tip' {...register('tip', {required: true})}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                        {errors?.count?. type === 'required' && <span className={style.errors}>Requis</span>}
                </div>
                <div className={style['groupe-form']}>
                    <label htmlFor="nbPeople">Nombre de personnes :</label>
                    <input id="nbPeople" type="number" {...register("nbPeople", {required : true, min: 1})}>
                    </input>
                    {errors?.nbPeople?.type === 'min' && <span className={style.errors}>Minimum 1 personne</span>}
                </div>
                <div className={style.buttons}>
                    <button type="submit">Valider</button>
                </div>
            </form>
            <div className={style.results}>
                <div className={style.resultItem}>
                    <span>Pourboire : </span>
                    <span>{resultats?.pourboire || "0.00"} €</span>
                </div>
                <div className={style.resultItem}>
                    <span>Total : </span>
                    <span>{resultats?.total || "0.00"} €</span>
                </div >
                <div className={style.resultItem}>
                    <span>Par personne : </span>
                    <span>{resultats?.parPersonne || '0.00'} €</span>
                </div>
                <div className={style.button}>
                    <button type="button" onClick={onReset}>Réinitialiser</button>
                </div>
            </div>
            
        </div>
    )
}