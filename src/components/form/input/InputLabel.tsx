export default function InputLabel({type, name, text}: any) {
    return (
        <label htmlFor="input">{text}
            <input type={type} name={name}/>
        </label>
    )
};
