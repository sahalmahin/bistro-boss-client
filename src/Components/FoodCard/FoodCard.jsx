import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food => {
        if (user && user.email) {
            // TODO: sent cart item to the database
            console.log(user, user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                })
        } else {
            Swal.fire({
                title: "You are not login!",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //    send the user to the login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="bg-900-slate text-white absolute right-0 mr-4 mt-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title flex flex-col items-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;