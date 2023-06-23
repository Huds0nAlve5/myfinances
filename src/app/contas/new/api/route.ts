import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const contas = await req.json()
    const {conta, saldo} = contas

    return NextResponse.json({conta, saldo})
  }