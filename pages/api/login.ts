import type { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../data/users'

const handler = async(req: NextApiRequest, res: NextApiResponse) =>{
    const {mail, password} = req.body

    const findUser = users.find(user => user.mail === mail && user.password === password)

    if(!findUser) {
      return   res.status(403).send({message:'Access denied'})
    }

    res.setHeader("set-cookie", `Access=true; path=/; samesite=lax; httponly;`)
    return res.status(200).send({message: 'Login successful'})

}

export default handler;
