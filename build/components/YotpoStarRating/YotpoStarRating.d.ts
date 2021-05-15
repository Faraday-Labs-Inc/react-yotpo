import { FC } from 'react';
export declare type YotpoStarRatingProps = {
    productId: string;
};
/**
 * Adds a div to the dom for Yotpo to embed product ratings.
 *
 * Note that the productId provided to this component should
 * be the Shopify base64 product id.
 */
declare const YotpoStarRating: FC<YotpoStarRatingProps>;
export default YotpoStarRating;
