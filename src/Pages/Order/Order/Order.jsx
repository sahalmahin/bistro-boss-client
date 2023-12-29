import { useState } from 'react';
import coverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const menu = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Cover img={coverImg} title='Order Food'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Desserts</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-2 gap-10 mb-12 my-16">
                    {
                        salad.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel> </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;