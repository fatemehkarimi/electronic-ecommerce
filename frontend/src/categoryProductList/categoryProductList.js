import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCategoryProductsFetch } from "../hooks/useCategoryProductsFetch";
import NavBar from "../navbar";
import Grid from "../components/grid/grid";
import Card from "../components/card/card";
import Review from "../components/review/review";
import { formatLongString } from "./../utils";
import PConst from "../productConstants";
import "./categoryProductList.css";

function CustomCard({ product }) {
  return (
    <Card image={product[PConst.PRODUCT_STANDARD_IMAGE]}>
      <span>{formatLongString(product[PConst.PRODUCT_NAME])}</span>
      <Review
        countReview={product[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT]}
        value={product[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE]}
        short="true"
      />
      <div className="category-product-list-custom-card-price">
        <span className="price-symbol">$</span>
        <span>{product[PConst.PRODUCT_REGULAR_PRICE]}</span>
      </div>
    </Card>
  );
}

function CategoryProductList() {
  const { categoryId, categoryName } = useParams();
  const [ currentPage, setCurrentPage ] = useState(1);
  const { products, totalPages, loading, error } = useCategoryProductsFetch(
    categoryId,
    currentPage
  );

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="category-product-list">
      <NavBar />
      <div className="category-product-list-content">
        <div className="category-product-grid-container">
          <Grid>
            {products && products.length > 0 ? (
              products.map((item) => {
                return (
                  <a
                    className="simple-link"
                    href={`/product/${item[PConst.PRODUCT_IDENTITY_KEY]}`}
                  >
                    <CustomCard product={item} />
                  </a>
                );
              })
            ) : (
              <></>
            )}
            <button onClick={ loadMore }>Load More</button>
          </Grid>
        </div>
        <div>Filter</div>
      </div>
    </div>
  );
}

export default CategoryProductList;
