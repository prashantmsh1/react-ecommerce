import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            alt=""
                            src={
                                process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            }
                        />
                        <div className="over-text">{item.attributes.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
