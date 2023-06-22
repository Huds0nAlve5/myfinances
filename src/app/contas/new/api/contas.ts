import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
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

    if (req.method === 'POST') {
        return res.status(200).json(listaContas)
    } else {
        return res.status(200).json(listaContas)
    }
  }