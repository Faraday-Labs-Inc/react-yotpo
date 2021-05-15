import { FC } from 'react';
import { Product } from '../../types/Types';
export declare type YotpoReviewsProps = {
    product: Product;
    price: string;
    urlPath: string;
};
/**
 * Adds a div to the DOM for Yotpo to embed reviews
 */
declare const YotpoReviews: FC<YotpoReviewsProps>;
export default YotpoReviews;
