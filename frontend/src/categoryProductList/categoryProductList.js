import React from 'react';
import { useParams } from 'react-router-dom';
import { useCategoryProductsFetch } from '../hooks/useCategoryProductsFetch';
import NavBar from '../navbar';
import PConst from '../productConstants';

function CategoryProductList() {
    const { categoryId, categoryName } = useParams();
    const { products, totalPages, loading, error } = useCategoryProductsFetch(categoryId, 1);

    return (
        <div className=''>
            <NavBar />
            {
                products && products.length > 0 ?
                products.map((item) => (
                    <div>
                        { item[PConst.PRODUCT_NAME] }
                    </div>
                ))
                :<></>
            }
        </div>
    );
}

export default CategoryProductList;