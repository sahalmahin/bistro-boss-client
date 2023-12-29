import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid md:grid-cols-2 gap-10 mb-12 my-16">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;