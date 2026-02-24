import { sql } from "../config/db.js"

export const getAllProducts = async(req,res) =>{
    try {
        const products = await sql`
        SELECT * 
        FROM products
        ORDER BY create_at DESC
        `
        res.status(200).json({
            success:true,
            data:products
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success:false,
            message:"getAllProducts Error"
        })
    }
}

export const createProduct = async(req,res) =>{
       const {name,price,image} = req.body

    if(!name||!price||!image){
        return res.status(400).json({
            success:false,
            message:"required Data"
        })
    }

    try {
        
        const newProduct = await sql`
        INSERT INTO products (name,price,image)
        VALUES (${name}, ${price}, ${image})
        RETURNING *
        `
        res.status(200).json({
            success:true,
            data:newProduct
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success:false,
            message:"getProduct Error"
        })
    }
}

export const getProduct = async(req,res) =>{

 
}

export const updateProduct = async(req,res) =>{}

export const deleteProduct = async(req,res) =>{}