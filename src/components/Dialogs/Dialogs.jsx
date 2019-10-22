import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +  ' ' + s.active}>
                    Alfa
                </div>
                <div className={s.dialog}>
                    Stepan
                </div>
                <div className={s.dialog}>
                    Misha
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Lera
                </div>
                <div className={s.dialog}>
                    Danila
                </div>
                
            </div>
        
        <div className={s.messages}>
        <div className={s.message}>Hey</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>How is your is ...</div>


        </div>
        </div>
    )
}

export default Dialogs