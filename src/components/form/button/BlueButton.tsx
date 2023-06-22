import style from './bluebutton.module.css'

export default function BlueButton({type, value, href}:any) {
    return(
        <a href={href}><button type={type} className={style.bluebutton}>{value}</button></a>
    )
};
