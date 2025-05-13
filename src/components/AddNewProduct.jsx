import { useAddNewProductMutation } from "../app/service/dummyData";
const AddNewProduct = () => {
    const [addNewProduct, {data, error, isLoading}] = useAddNewProductMutation();

    if (error) {
        return (
            <div className="text-red-500">
                <h1>Error</h1>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="text-blue-500">
                <h1>Loading...</h1>
            </div>
        )
    }

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                title: "New Product",
                description: "This is a new product",
                price: 100,
                images: ["https://example.com/image.jpg"],
                category: "electronics",
            };

            await addNewProduct(newProductData)
        } catch (err) {
            
        }
    }

    return ( 
        <div>
            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>
            <button onClick={handleAddProduct} disabled={isLoading}>Add New</button>
        </div>
     );
}
 
export default AddNewProduct;