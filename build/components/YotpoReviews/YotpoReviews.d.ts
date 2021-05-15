import { FC } from 'react';
import { NacelleShopProduct } from '@nacelle/types';
export declare type YotpoReviewsProps = {
    product: NacelleShopProduct;
    price: string;
    urlPath: string;
};
/**
 * Adds a div to the DOM for Yotpo to embed reviews
 */
declare const YotpoReviews: FC<YotpoReviewsProps>;
export default YotpoReviews;
