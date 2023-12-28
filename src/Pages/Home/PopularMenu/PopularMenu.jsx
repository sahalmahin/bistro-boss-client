import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section>
            <SectionTitle
                heading='From Our Menu'
                subHeading='Popular Items'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mb-12">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;