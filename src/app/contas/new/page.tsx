'use client'

import BlueButton from "@/components/form/button/BlueButton";
import InputLabel from "@/components/form/input/InputLabel";
import { FormEvent } from "react";
import { useState } from "react";

export default function page() {
    const [conta, setConta] = useState<string>()
    const [saldo, setSaldo] = useState<number>()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const res = await fetch("http://localhost:3000/contas/new/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    conta, saldo
                }
            )
        })
    }

    return(
        <>
            <form method="post" action="/contas/new/api">
                <InputLabel type="text" name="conta" text="Conta" setData={setConta}/>
                <InputLabel type="number" name="saldo" text="Saldo" setData={setSaldo}/>
                <BlueButton type="submit" value="Cadastrar" event={handleSubmit}/>
            </form>
        </>
    )
};
