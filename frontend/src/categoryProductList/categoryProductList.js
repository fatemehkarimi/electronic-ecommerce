import React from 'react';
import { useParams } from 'react-router-dom';
import { useCategoryProductsFetch } from '../hooks/useCategoryProductsFetch';
import NavBar from '../navbar';
import Grid from '../components/grid/grid';
import Card from '../components/card/card';
import PConst from '../productConstants';
import './categoryProductList.css';

function CategoryProductList() {
    const { categoryId, categoryName } = useParams();
    const { products, totalPages, loading, error } = useCategoryProductsFetch(categoryId, 1);

    return (
        <div className='category-product-list'>
            <NavBar />
            <div className='category-product-list-content'>
                <div className="category-product-grid-container">
                    <Grid>
                        {
                            products && products.length > 0 ?
                            products.map((item) => {
                                return (
                                    <Card image={ item[PConst.PRODUCT_STANDARD_IMAGE] }
                                        title={ item[PConst.PRODUCT_NAME] }
                                        review={ {
                                            "countReview": item[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT],
                                            "value": item[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE]
                                        } }
                                    />);
                            })
                            : <></>
                        }
                    </Grid>
                </div>
                <div>Filter</div>
            </div>
        </div>
    );
}

export default CategoryProductList;