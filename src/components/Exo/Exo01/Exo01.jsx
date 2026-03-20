import style from './Exo.module.css'

export default function Exo01({number}) {
    let message ="";
    let colorClass = "";
    if (number === 0) {
      message = <p id="zero">Le nombre {number} est zéro.</p>;
      colorClass = style["zero"];
    } else if(number %2 === 0) {
     message = <p id="pair">Le nombre {number} est pair.</p>;
     colorClass = style["pair"];
    } else {
      message = <p id="impair">Le nombre {number} est impair.</p>;
      colorClass = style["impair"];

    }
  return (
    <div className={style["number-box"]}>
      <p className={colorClass}>{message}</p>
    </div>
  );
}