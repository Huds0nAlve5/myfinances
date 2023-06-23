import { NextRequest, NextResponse } from 'next/server'

export async function GET(req:NextRequest, res:NextResponse) {
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

    return NextResponse.json(listaContas)
  }