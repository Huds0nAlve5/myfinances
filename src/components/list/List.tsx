import style from './list.module.css'
import { FaEdit, FaRegTimesCircle } from "react-icons/fa";

export default function List({listagem}:any) {
    return (
        <>
            {listagem.length > 0 ?
            <table className={style.tabela}>
                <thead>
                    <tr>
                        {Object.keys(listagem[0]).map(
                            (item, i) => i != 0 ? 
                            <th className={style.capitalize} key={i}>{item}</th> 
                            : "")}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {listagem.map((item:string) => {
                            return (
                                <tr>
                                    <td key={Object.values(item)[0]}>{Object.values(item)[1]}</td>
                                    <td key={Object.values(item)[1]}>R$ {Object.values(item)[2]}</td>
                                    <td><FaEdit/> <FaRegTimesCircle/></td>
                                </tr>
                            )
                        })}

                </tbody>
            </table>
            :
                "Não há dados"
            }
        </>
    )
};
