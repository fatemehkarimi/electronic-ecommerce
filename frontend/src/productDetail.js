import ProductAlbum from "./productAlbum";
import productData from "./5706647";
import ProductInfo from "./productInfo";
import './productDetail.css';


function ProductDetail(props) {
    return (<div className="product-detail">
        <div className="product-detail-left-col">
            <ProductAlbum images={ productData.images } />
        </div>
        <div className="product-detail-middle-col">
            <ProductInfo info={ productData } />
        </div>
    </div>);
}

export default ProductDetail;