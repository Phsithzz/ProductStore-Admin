    export interface Product{
        id:number
        name:string
        image:string
        price:string
        create_at:string
    }

    export interface ProductStore{
        products:Product[]
        loading:boolean
        error:string | null
        fetchProducts:()=>Promise<void>
        deleteProduct:(id:number)=>Promise<void>
    }