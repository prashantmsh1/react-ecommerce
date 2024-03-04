import "./Home.scss";
import { useEffect ,useContext} from "react";
import Banner from "../Home/Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDatafromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
    const {products,setProducts,categories,setCategories}=useContext(Context);
    useEffect(()=>{
        
        getProducts();
        getCategories();
    }, []);
 
    const getCategories = () => {
        fetchDatafromApi("/api/categories?populate=*").then((res) =>{ 
            console.log(res)
            setCategories(res)
        });
    };
    const getProducts = () => {
        fetchDatafromApi("/api/products?populate=*").then((res) =>{ 
            console.log(res)
           setProducts(res);
        });
    };
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products products={products}  headingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;
