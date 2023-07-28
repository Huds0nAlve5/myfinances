'use client'

import BlueButton from "@/components/form/button/BlueButton";
import InputLabel from "@/components/form/input/InputLabel";
import { FormEvent } from "react";
import { useState } from "react";
import style from "./page.module.css"
import { useEffect } from "react";
import { text } from "node:stream/consumers";

interface ButtonHTMLAttributes extends HTMLElement {
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
}

export default function page() {
    const [conta, setConta] = useState<string>()
    const [saldo, setSaldo] = useState<number>()

    useEffect(() => {
        const botao:ButtonHTMLAttributes | null = document.getElementById("botao")

        if(((conta?.length == 0) || conta == undefined)|| (saldo == undefined))
            botao!.disabled = true
        else
            botao!.disabled = false

    }, [conta, saldo])
    
    const limparCampos = () => {
        const inputs = document.getElementsByTagName("input")
        for(let i = 0; i < inputs.length; i++){
            inputs[i].value = ""
        }
        
        setSaldo(0)
        setConta("")
    }

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

        limparCampos()
    }

    return(
        <>
            <form method="post" action="/contas/new/api" className={style.formulario}>
                <InputLabel type="text" name="conta" text="Conta" setData={setConta}/>
                <InputLabel type="number" name="saldo" text="Saldo" setData={setSaldo}/>
                <BlueButton type="submit" value="Cadastrar" event={handleSubmit}/>
            </form>
        </>
    )
};
