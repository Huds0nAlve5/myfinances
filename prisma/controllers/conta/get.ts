import { prismaClient } from "../../prismaClient";

async function getContas() {
    const getContas = await prismaClient.conta.findMany()
    return getContas
}

console.log(getContas())