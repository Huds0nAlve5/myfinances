'use client'

import BlueButton from "@/components/form/button/BlueButton";
import InputLabel from "@/components/form/input/InputLabel";
import { FormEvent } from "react";
import { useState } from "react";

export default function page() {
    const [conta, setConta] = useState()
    const [saldo, setSaldo] = useState()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return(
        <>
            <form method="post" action="/contas/new/api">
                <InputLabel type="text" name="conta" text="Conta"/>
                <InputLabel type="text" name="saldo" text="Saldo"/>
                <BlueButton type="submit" value="Cadastrar" event={handleSubmit}/>
            </form>
        </>
    )
};
