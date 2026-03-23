import { useState } from "react"
import style from "./LoginForm.module.css"

export const LoginForm =() =>{

   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [success, setSuccess] = useState();

   const changeValueUserName =(event) =>{
        console.log(event.target.value);
        setUserName(event.target.value);
        setSuccess();
   }

   const handleSubmit =(event)=>{
    event.preventDefault();//annule le comportement par gefaut
    if(username === 'Aurelien' && password === "coucou"){
        setSuccess(true);
        setUserName("");
        setPassword("");
    }else{
        setSuccess(false);
    }
   }

    return(
        <div className={style.login}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style ["form-group"]}>
                    <label htmlFor="username" >
                        Nom utilisateur
                    </label>
                    <input id="username" type="text" value={username} onChange={changeValueUserName}/>
                </div>
                <div className={style ["form-group"]}>
                    <label htmlFor="pwd">
                        Mot de passe
                    </label>
                    <input id="pwd" type="password" value={password} onChange={ (event) =>{setPassword(event.target.value); setSuccess();}}/>
                </div>
                <button type="submit"> Se connecter</button>
                {
                    (success?
                        <span className={style.success}>Bonjour Aurelien</span>
                        : 
                        (success === false)?
                        <span className={style.fail}>Vous êtes tropmé</span>
                        : ""
                    )
                }
            </form>
        </div>
    )
}