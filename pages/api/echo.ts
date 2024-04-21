import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const msg = req.body;
    // const response = await fetch(`http://localhost:8080/echo?msg=${msg}`);
    const response = await fetch(`https://louis-poc-rules-java.azurewebsites.net/echo?msg=${msg}`);
    const data = await response.json();
    res.status(200).send(data);
}