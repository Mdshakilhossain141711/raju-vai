import Discount from '../components/discount/Discount';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainpage/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import TopCate from '../components/top/TopCate';

const Pages = ({ productItems, cartItem, addToCard }) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeals productItems={productItems} addToCard={addToCard} />
            <TopCate />
            <NewArrivals />
            <Discount />
        </>
    )
}

export default Pages