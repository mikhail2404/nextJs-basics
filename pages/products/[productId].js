import fs from "fs/promises"
import path from "path"
const ProductDetailPage = ({product}) => {

    if(!product){
        return <p>Loading...</p>
    }
    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </>
    );
};


async function getData() {
    const filePath = path.join(process.cwd(), "dummy-backend.json")
    const jsonData = await fs.readFile(filePath)
    return  JSON.parse(jsonData)
}
export  async function getStaticProps(context) {
    const {params} = context

    const productId = params.productId
    const data = await getData()
    const product = data.products.find(product => product.id === productId)

    if(!product){
        return {notFound: true}
    }
    return {
        props: {
            product
        }
    }
}

export  async function getStaticPaths() {
    const data = await getData()
    const ids = data.products.map(product => product.id)

    const params = ids.map(id => ({params: {productId: id}}))
    return {
        paths: params,
        fallback: true
    }
}


export default ProductDetailPage;
