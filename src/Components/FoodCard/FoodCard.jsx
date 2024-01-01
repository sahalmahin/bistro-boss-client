const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
    const handleAddToCart=()=>{
        
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="bg-900-slate text-white absolute right-0 mr-4 mt-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title flex flex-col items-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;