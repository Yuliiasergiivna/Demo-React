import style from './Produits.module.css'

export default function Produits({produits}){
    return(
        <ul>
        {produits.map(produit =>
            <ListProduits key={produit.name} {...produit}/>
        )}
        </ul> 
    );}


function ListProduits({name, description, price, promo}){
    const formattedPrice = new Intl.NumberFormat('be-BE',{
        style: 'currency',
        currency: 'EUR'
    }).format(price);
    return(
    <li className={style['product-card']}>
    <h5>{name}</h5>
    {promo &&(
        <p className={style['promo']}>Promotion!{promo}</p>
        )
    }
    <p className={style['price']}>Prix: {formattedPrice}</p>
    {description &&(
            <p className={style['description']}>{description}</p>
        )
    }
    </li>    
    )
}