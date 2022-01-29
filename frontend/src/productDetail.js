import ProductAlbum from "./productAlbum";
import './productDetail.css';

const images = [
{
    rel: "Front_Zoom",
    unitOfMeasure: "pixels",
    width: "736",
    height: "1000",
    href: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009682_sd.jpg",
    primary: true
},
{
    rel: "Front_Large",
    unitOfMeasure: "pixels",
    width: "220",
    height: "160",
    href: "https://pisces.bbystatic.com/prescaled/160/220/image2/BestBuy_US/images/products/6009/6009682_sd.jpg",
    primary: false
},
{
    rel: "Front_Medium",
    unitOfMeasure: "pixels",
    width: "70",
    height: "140",
    href: "https://pisces.bbystatic.com/prescaled/140/70/image2/BestBuy_US/images/products/6009/6009682_sd.jpg",
    primary: false
},
{
    rel: "Alt_View_Standard_11",
    unitOfMeasure: "pixels",
    width: "500",
    height: "500",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6009/6009682cv11d.jpg",
    primary: false
},
{
    rel: "Alt_View_Standard_12",
    unitOfMeasure: "pixels",
    width: "500",
    height: "500",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6009/6009682cv12d.jpg",
    primary: false
},
{
    rel: "Alt_View_Standard_13",
    unitOfMeasure: "pixels",
    width: "500",
    height: "500",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6009/6009682cv13d.jpg",
    primary: false
},
{
    rel: "Alt_View_Standard_14",
    unitOfMeasure: "pixels",
    width: "500",
    height: "500",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6009/6009682cv14d.jpg",
    primary: false
},
{
    rel: "Front_Standard",
    unitOfMeasure: "pixels",
    width: "500",
    height: "500",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6009/6009682_sd.jpg",
    primary: false
},
{
    rel: "Front_Detail",
    unitOfMeasure: "pixels",
    width: "210",
    height: "105",
    href: "https://pisces.bbystatic.com/prescaled/105/210/image2/BestBuy_US/images/products/6009/6009682_sd.jpg",
    primary: false
},
{
    rel: "Front_Thumbnail",
    unitOfMeasure: "pixels",
    width: "54",
    height: "108",
    href: "https://pisces.bbystatic.com/prescaled/108/54/image2/BestBuy_US/images/products/6009/6009682_sd.jpg",
    primary: false
},
{
    rel: "Alt_View_Zoom_13",
    unitOfMeasure: "pixels",
    width: "937",
    height: "1000",
    href: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009682cv13d.jpg",
    primary: false
},
{
    rel: "Alt_View_Zoom_14",
    unitOfMeasure: "pixels",
    width: "1000",
    height: "1000",
    href: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009682cv14d.jpg",
    primary: false
},
{
    rel: "Alt_View_Zoom_11",
    unitOfMeasure: "pixels",
    width: "1000",
    height: "999",
    href: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009682cv11d.jpg",
    primary: false
},
{
    rel: "Alt_View_Zoom_12",
    unitOfMeasure: "pixels",
    width: "1000",
    height: "998",
    href: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009682cv12d.jpg",
    primary: false
}
];

function ProductDetail(props) {
    return (<div>
        <ProductAlbum className='product-detail-album' images={ images } />
    </div>);
}

export default ProductDetail;