import { NextResponse } from 'next/server'
import { setConta } from '../../../../../prisma/controllers/conta'

export async function POST(req: Request) {
    const contas = await req.json()
    const {conta, saldo} = contas

    await setConta(conta, parseFloat(saldo))

    return NextResponse.json({conta, saldo})
  }