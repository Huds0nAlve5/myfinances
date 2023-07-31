import style from './Input.module.css'

export default function InputLabel({type, name, text, setData}: any) {
    if (typeof document !== 'undefined'){
        const saldo = document.getElementById('saldo') as HTMLInputElement;
        const patternAcc = '[0-9,]'
        const patternLimit = "[0-9]*[\.][0-9]{2}"   

        saldo?.addEventListener('change', function() {
            var v = parseFloat(this.value);
            if (isNaN(v)) {
                this.value = '';
            } else {
                this.value = v.toFixed(2);
            }
        });
        
        saldo?.addEventListener('keypress', function(e){  
            const char = e.key

            if(saldo.value.match(patternLimit) || !char.match(patternAcc)){
                e.preventDefault()
            }
        });
}

    if(type == "number" && name == "saldo"){
        return (
            <label htmlFor="input" className={style.label}>{text}<br/>
                <input type={type} name={name} onChange={(e) => setData(Number(e.target.value).toFixed(2))} className={style.input} id="saldo"/>
            </label>
        )
    }

    else{
        return (
            <label htmlFor="input" className={style.label}>{text}<br/>
                <input type={type} name={name} onChange={(e) => setData(e.target.value)} className={style.input}/>
            </label>
        )
    }
    
};
