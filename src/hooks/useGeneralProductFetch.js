import { useState, useEffect } from "react";
import { generalRes, productShortRes } from "../apiConstants";
import PConst from '../productConstants';

export const useGeneralProductFetch = (request, params) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProductsRequest = async (request, params) => {
      try {
        setError(false);
        setLoading(true);

        const result = await request(...params);
        if(generalRes.ERROR in result) {
          setError(true);
          return;
        }

        var newProducts = [];
        result[generalRes.RESULT].forEach((item) => {
          var product = {};
          product[PConst.PRODUCT_IDENTITY_KEY] = 
            item[productShortRes.SKU];

          product[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE]
            = item[productShortRes.CUSTOMER_REVIEWS]
                  [productShortRes.REVIEW_AVERAGE_SCORE];

          product[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT]
            = item[productShortRes.CUSTOMER_REVIEWS]
                  [productShortRes.REVIEW_COUNT];

          product[PConst.PRODUCT_REGULAR_PRICE]
            = item[productShortRes.PRICES]
                  [productShortRes.PRICES_REGULAR];

          product[PConst.PRODUCT_NAME]
            = item[productShortRes.NAMES]
                  [productShortRes.TITLE];

          product[PConst.PRODUCT_STANDARD_IMAGE]
            = item[productShortRes.IMAGES]
                  [productShortRes.IMAGES_STANDARD];

          newProducts.push(product);
        });

        setProducts(newProducts);

      } catch(error) {
        console.log(error);
        setError(true);
      }

      setLoading(false);
    }

    fetchProductsRequest(request, params);
  }, [request, params]);

  return { products, loading, error };
}