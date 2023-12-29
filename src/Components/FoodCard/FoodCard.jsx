const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;