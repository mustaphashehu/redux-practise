import { useGetProductByIdQuery } from "../app/service/dummyData";
const SingleProduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(1);
    console.log(data);
    
    return ( 
        <div>
            {data?.description}
        </div>
     );
}
 
export default SingleProduct;