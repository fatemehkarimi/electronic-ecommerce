// Items found on an api response
var generalRes = {
    RESULT:            'results',
    ERROR:              'errorCode',
};

var productShortRes = {
    SKU:                    'sku',
    CUSTOMER_REVIEWS:       'customerReviews',
    REVIEW_AVERAGE_SCORE:   'averageScore',
    REVIEW_COUNT:           'count',
    DESCRIPTION:            'descriptions',
    DESCRIPTION_SHORT:      'short',
    IMAGES:                 'images',
    IMAGES_STANDARD:        'standard',
    NAMES:                  'names',
    TITLE:                  'title',
    PRICES:                 'prices',
    PRICES_REGULAR:         'regular',
    PRICES_CURRENT:         'current',
    LINKS:                  'links',
    LINK_PRODUCT:           'product',
    LINK_WEB:               'web',
    LINK_ADD_TO_CART:       'addToCart',
    RANK:                   'rank'
}

export { generalRes, productShortRes };