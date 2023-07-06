import style from './bluebutton.module.css'

export default function BlueButton({type, value, href, event}:any) {
    return(
        <a href={href}><button type={type} className={style.bluebutton} onClick={event}>{value}</button></a>
    )
};
