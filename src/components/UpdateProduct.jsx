
import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = () => {
    const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation();

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: "Updated Product loo",
            };

            await updateProduct({
                id: 2,
                updatedProduct: updatedProductData,
            });
        } catch (err) {
            // Optionally handle error here
            console.error("Update failed", err);
        }
    };

    if (isLoading) {
        return (
            <div className="text-blue-500">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500">
                <h1>Error</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>
            <button onClick={handleUpdateProduct} disabled={isLoading}>
                Update
            </button>
        </div>
    );
};

export default UpdateProduct;
