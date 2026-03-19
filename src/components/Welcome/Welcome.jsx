import style from'./Welcome.module.css'

export default function Welcome({name, salle = "4-IT-5"}) {
  return (
    <div className={style["box"]}>
      <p>Bienvenue {name} sur le demo React!</p>
      <p>Nous sommes dans le salle de classe <span className={style["room"]}>{salle}</span>.</p>
    </div>
  );
}

