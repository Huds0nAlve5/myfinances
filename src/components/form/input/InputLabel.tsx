export default function InputLabel({type, name, text, setData}: any) {
    return (
        <label htmlFor="input">{text}
            <input type={type} name={name} onChange={(e) => setData(e.target.value)} required={true}/>
        </label>
    )
};
