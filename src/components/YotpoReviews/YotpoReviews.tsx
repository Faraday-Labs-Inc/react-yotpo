import React, { FC, useMemo } from 'react';
import { Product } from '../../types/Types';

import decodeProductId from '../../utils/decodeProductId';
import { useYotpoRefresh } from '../../hooks/useYotpoRefresh';

export type YotpoReviewsProps = {
  product: Product;
  price: string;
  urlPath: string;
};

/**
 * Adds a div to the DOM for Yotpo to embed reviews
 */
const YotpoReviews: FC<YotpoReviewsProps> = ({
  product,
  price = '',
  urlPath = ''
}) => {
  useYotpoRefresh();

  const sourceProductId = useMemo(
    () => decodeProductId(product.id.toString()),
    [product.id]
  );

  return (
    <div
      className="yotpo yotpo-main-widget"
      data-product-id={sourceProductId}
      data-price={price}
      data-currency={product.price.currencyCode}
      data-name={product.name}
      data-url={`${window.location.origin}${urlPath}`}
      data-image-url={product.images[0].url}
      data-description={product.description}
    />
  );
};

export default YotpoReviews;
