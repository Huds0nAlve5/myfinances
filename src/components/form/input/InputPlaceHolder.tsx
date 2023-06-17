import style from './Input.module.css'

export default function InputPlaceHolder({type, name, placeholder}: any) {
    return (
            <input type={type} name={name} placeholder={placeholder} className={style.input}/>
    )
};
