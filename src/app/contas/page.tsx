import InputPlaceHolder from '@/components/form/input/InputPlaceHolder'
import style from './page.module.css'
import BlueButton from '@/components/form/button/BlueButton'
import List from '@/components/list/List'

export default function page() {
    const listaContas = [
        {
            'acccod' : '1',
            'conta' : 'nubank',
            'saldo': '100'
        },

        {
            'acccod' : '2',
            'conta' : 'inter',
            'saldo': '2,50'
        }
    ]

    return (
        <>
        <div className={style.corpo}>
            <div className={style.buscar_e_inserir}>
                <InputPlaceHolder type="text" name="accname" text="Buscar conta bancária" placeholder="Buscar conta"/>
                <BlueButton type="button" value="Inserir conta"/>
            </div>

            <List listagem={listaContas} />
        </div>
        </>
    )
};

//<Input type="text" name="accname" text="Conta bancária"/>
//<Input type="number" name="limitcred" text="Limite de crédito"/>
//<Input type="number" name="balance" text="Saldo atual"/>
