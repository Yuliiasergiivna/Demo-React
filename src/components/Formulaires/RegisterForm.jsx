import { useForm } from "react-hook-form"
import style from "./LoginForm.module.css"

export const RegisterForm = () => {

    const{ register, 
        handleSubmit, 
        reset, 
        formState : {errors} }= useForm( 
            {mode :'onChange',
            values:{
            lastname: '',
            firstname : '',
            email : '',
            password : ''
        }});

    const createAccount = (data)=>{
            console.log(data);
            alert("Votre compte a été créé avec succès");
            reset();
    }

    return(
        <div className={style.login}>
            <form className={style.form} onSubmit={handleSubmit(createAccount)}>
                <div className={style["group-form"]}>
                    <label htmlFor="firstname">Nom</label>
                    <input 
                        id="username" 
                        type="text" 
                        {...register('firstname', {required : true, maxLength: 150 
                    })}>
                    </input>
                    {
                    errors?.firstname?.type === 'required' && <span>Ce champs est requis</span>
                    }
                    {
                        errors?.firstname?.type === 'maxLength' && <span>Il ne faut pas dépasser 150 caractères</span>
                    }
                </div>
                <div className={style["group-form"]}>
                    <label htmlFor="lastname">Prénom</label>
                    <input 
                        id="username"   
                        type="text" 
                        {...register('lastname', 
                        {required : true, maxLength : 150})}>

                    </input>
                                    {
                    errors?.lastname?.type === 'required' && <span>Ce champs est requis</span>
                    }
                    {
                        errors?.lastname?.type === 'maxLength' && <span>Il ne faut pas dépasser 150 caractères</span>
                    }
                </div>
                <div className={style["group-form"]}>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email"  
                        type="email" 
                        {...register('email', 
                        {required : true, 
                        pattern : /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm})}>

                    </input>
                                    {
                    errors?.email?.type === 'required' && <span>Ce champs est requis</span>
                    }
                    {
                        errors?.email?.type === 'pattern' && <span>Vueillez respecter le format des emails</span>
                    }
                </div>
                <div className={style["group-form"]}>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="pwd" 
                        type="password" 
                        {...register('password', 
                        {required : true, pattern : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_=+]).{8,}$/g})}></input>
                    {
                    errors?.password?.type === 'required' && <span>Ce champs est requis</span>
                    }
                    {
                        errors?.password?.type === 'pattern' && <span>Vueillez respecter le format des passwords</span>
                    }
                </div>
                {/* <div className={style["group-form"]}>
                    <label htmlFor="firstname"></label>
                    <input></input>
                </div> */}
                <button type="submit">S'enregistre</button>
            </form>
        </div>
    )
}