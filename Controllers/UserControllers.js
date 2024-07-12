import express from 'express'

const app = express()


const UserControl = (req,res) => {

    res.json({message:"user controller and user route works"})

}

export default UserControl