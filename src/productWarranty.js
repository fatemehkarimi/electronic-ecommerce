import { useProductWarrantyFetch } from './hooks/useProductDetailFetch';
import PConst from './appConstants';
import './productWarranty.css';

function PlanOption({ plan }) {
    return(<div className='product-warranty-option'>
        <label
         className='ticky-radio-button-container'
         htmlFor={ plan[PConst.WARRANTY_ID] }>
            <input
             type='radio'
             id={ plan[PConst.WARRANTY_ID] }
             name='plan-option' />
            <span className='ticky-radio-button' ></span>
            <span className='ticky-radio-button-text product-warranty-info'>
                <div className='product-warranty-info'>
                    <div className='product-warranty-name'>
                        { plan[PConst.WARRANTY_SHORT_NAME] }
                    </div>
                    <div className='product-warranty-option-price'>
                        <span className='price-symbol'>$</span>
                        { plan[PConst.WARRANTY_CURRENT_PRICE] }
                    </div>
                </div>
            </span>
        </label>
    </div>);
}

function ProductWarranty({ productKey }) {
    const { warranty, loading, error } = useProductWarrantyFetch(productKey);

    return ( <>
        { !error && warranty && warranty.length > 0 ?
            <div className='product-warranty'>
                <h2>Add a Protection Plan:</h2>
                <div className='product-warranty-option-wrapper'>
                    { 
                        warranty.map((plan) => {
                            return <PlanOption key={ plan[PConst.WARRANTY_ID] } plan={ plan } />;
                        })
                    }
                </div>
            </div>
            : undefined
        }
    </>);
}

export default ProductWarranty;