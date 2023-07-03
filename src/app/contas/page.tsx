import InputPlaceHolder from '@/components/form/input/InputPlaceHolder'
import style from './page.module.css'
import BlueButton from '@/components/form/button/BlueButton'
import List from '@/components/list/List'
import { getContas } from '../../../prisma/controllers/conta'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type Conta = {
    conta: string,
    saldo: number
}

export const getServerSideProps:GetServerSideProps<{conta: Conta}> = async() => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const conta = await res.json()

    console.log(1)
    return {
        props: { conta }
    }
};

export default async function page({
    conta,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const listagemContas = await getContas()
    return (
        <>
        <div className={style.corpo}>
            <div className={style.buscar_e_inserir}>
                <InputPlaceHolder type="text" name="accname" text="Buscar conta bancária" placeholder="Buscar conta"/>
                <BlueButton type="button" value="Inserir conta" href="/contas/new"/>
            </div>

            <List listagem={listagemContas} />
            {conta.saldo}
        </div>
        </>
    )
};

//<Input type="text" name="accname" text="Conta bancária"/>
//<Input type="number" name="limitcred" text="Limite de crédito"/>
//<Input type="number" name="balance" text="Saldo atual"/>
