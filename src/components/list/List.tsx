import style from './list.module.css'

export default function List({listagem}:any) {
    return (
        <>
            <table style={{backgroundColor: "red"}}>
                <thead>
                    <tr>
                        {Object.keys(listagem[0]).map(
                            (item, i) => i != 0 ? 
                            <th className={style.capitalize} key={i}>{item}</th> 
                            : "")}
                    </tr>
                </thead>
                <tbody>
                        {listagem.map((item:string) => {
                            return (
                                <tr>
                                    <td key={Object.values(item)[0]}>{Object.values(item)[1]}</td>
                                    <td key={Object.values(item)[0]}>{Object.values(item)[2]}</td>
                                </tr>
                            )
                        })}

                </tbody>
            </table>
        </>
    )
};
