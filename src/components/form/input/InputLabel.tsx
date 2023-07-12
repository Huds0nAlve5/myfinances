export default function InputLabel({type, name, text, setData}: any) {
    if (typeof document !== 'undefined'){
    const saldo = document.getElementById('saldo') as HTMLInputElement;
        saldo?.addEventListener('change', function() {
            var v = parseFloat(this.value);
            if (isNaN(v)) {
                this.value = '';
            } else {
                this.value = v.toFixed(2);
            }
        });
    }

    if(type == "number" && name == "saldo"){
        return (
            <label htmlFor="input">{text}
                <input type={type} name={name} onChange={(e) => setData(e.target.value)} id="saldo"/>
            </label>
        )
    }

    else{
        return (
            <label htmlFor="input">{text}
                <input type={type} name={name} onChange={(e) => setData(e.target.value)}/>
            </label>
        )
    }
    
};
