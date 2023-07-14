import style from './Input.module.css'

export default function InputLabel({type, name, text, setData}: any) {
    if (typeof document !== 'undefined'){
        const saldo = document.getElementById('saldo') as HTMLInputElement;
        const pattern = '[0-9,]'   
    
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
            
            if(!char.match(pattern)){
                e.preventDefault()
            }
        });
}

    if(type == "number" && name == "saldo"){
        return (
            <label htmlFor="input">{text}
                <input type={type} name={name} onChange={(e) => setData(Number(e.target.value).toFixed(2))} className={style.input} id="saldo"/>
            </label>
        )
    }

    else{
        return (
            <label htmlFor="input">{text}
                <input type={type} name={name} onChange={(e) => setData(e.target.value)} className={style.input}/>
            </label>
        )
    }
    
};
