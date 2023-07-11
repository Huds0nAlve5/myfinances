import InputPlaceHolder from '@/components/form/input/InputPlaceHolder'
import style from './page.module.css'
import BlueButton from '@/components/form/button/BlueButton'
import List from '@/components/list/List'
import { getContas } from '../../../prisma/controllers/conta'

export default async function page(){
    const listagemContas = await getContas()
    return (
        <>
            <div className={style.corpo}>
                <div className={style.buscar_e_inserir}>
                    <InputPlaceHolder type="text" name="accname" text="Buscar conta bancária" placeholder="Buscar conta"/>
                    <BlueButton type="button" value="Inserir conta" href="http://localhost:3000/contas/new"/>
                </div>

                <List listagem={listagemContas} />
            </div>
        </>
    )
};

//<Input type="text" name="accname" text="Conta bancária"/>
//<Input type="number" name="limitcred" text="Limite de crédito"/>
//<Input type="number" name="balance" text="Saldo atual"/>
