import { prismaClient } from "../prismaClient";

export async function getContas() {
    return await prismaClient.conta.findMany()
}

export async function setConta(conta:string, saldo:number) {
    await prismaClient.conta.create({
        data: {
            conta,
            saldo
        }
    })
}