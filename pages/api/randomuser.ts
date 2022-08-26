import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async(req: NextApiRequest, res: NextApiResponse) =>{
    const url = "https://randomuser.me/api/?results=10";
    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data.results);
} 

export default handler;