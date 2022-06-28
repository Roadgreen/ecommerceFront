import React from 'react'
import styles from './cartCommand.module.css'
import {FaCcPaypal,FaCcVisa,FaCcMastercard} from 'react-icons/fa'
import {AiOutlineLock} from 'react-icons/ai'

function cartCommand(props) {
    const dataC = props.dataC;
const iconstyle = {color: '#4C8077',width:'100px',fontSize: '60px'}

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
            <p>{dataC.TotalPrice}€ </p>
        </div>
        <div><span></span></div>
        <div>
            <input placeholder='Ajouter un code promotionnel' />
        </div>
        <div><span></span></div>
        <button>COMMANDER</button>
        <div className={styles.panPayment}><h3>Paiement sécurisé</h3>
        <FaCcMastercard style={iconstyle} />
        <FaCcPaypal style={iconstyle}/>
        <FaCcVisa style={iconstyle}/>
        </div>
        <div className={styles.panPayment}><h3>Frais de livraison</h3>
        <h4>Livraison Standard à Domicile (2 à 5 jours ouvrés)</h4>
        <p>À partir de 4,50 € ou OFFERTE dès 45 €</p>
        <h4>Livraison Express A Domicile (1 jours avant 12h si commandé avant 12h)</h4>
        <p>11,50 euros</p>
        </div>
    </div>
    )
}

export default cartCommand