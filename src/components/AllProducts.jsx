import { useGetAllProductQuery } from "../app/service/dummyData";
const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductQuery();
    console.log(data);
    
    
    if (isError) {
        return  (
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
    
  return (
    <div className="">
      {data?.products.map((p) => (
        <div>
            <h1 key={p.id} className="text-3xl">{p.title}</h1>
            <img src={`${p.images}`} alt="" />
        </div>
      ))}
    </div>
  );
} 

export default AllProducts;