import React from 'react'
import styles from './cartCommand.module.css'
function cartCommand(props) {
    const dataC = props.dataC;

    return( <div className={styles.containerCommand}>
        <div>
            <h2>RÉCAPITULATIF DE LA COMMANDE</h2>
        </div>
        <div><span></span></div>

        <div>
            <h4>Article(s)</h4>
            <p>{dataC.ArticleQuant}</p>
        </div>
        <div><span></span></div>
        <div>
            <h4>Sous-Total</h4>
            <p>{dataC.TotalPrice}</p>
        </div>
        <div><span></span></div>
        <div>
            <input placeholder='Ajouter un code promotionnel' />
        </div>
        <div><span></span></div>
        <button>COMMANDER</button>
    </div>
    )
}

export default cartCommand