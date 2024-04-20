import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.body);
    const msg = req.body['msg'];
    const response = await fetch(`http://localhost:8080/echo?msg=${msg}`);
    console.log(response);
    const data = await response.json();
    res.status(200).send(data);
    
}