import style from './bluebutton.module.css'

export default function BlueButton({type, value, href, event, disabled}:any) {
    return(
        <a href={href}><button type={type} className={style.bluebutton} onClick={event} disabled={disabled} id="teste1">{value}</button></a>
    )
};
