import { useDeleteProductMutation } from "../app/service/dummyData";
const DeleteProduct = () => {

    const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation();

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
    const handleDeleteProduct = async (theId) => {
        try {
            await deleteProduct(theId);
        } catch (err) {
            // Optionally handle error here
            console.error("Delete failed", err);
        }
    }  
    return (
        <div>
            <h1>{data?.title ? "successfully deleted" : error}</h1>
            <button onClick={() => handleDeleteProduct(3)} disabled={isLoading}>
                Delete
            </button>
        </div>
    );
}
 
export default DeleteProduct;