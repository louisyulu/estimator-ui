import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch('https://louis-poc-rules-java.azurewebsites.net/person',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: req.body,
        }
    );
    const data = await response.json();
    res.status(200).send(data);
}