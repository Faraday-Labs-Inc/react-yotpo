import type { Wishlist as BCWishlist } from '../bigcommerce/api/wishlist';
import type { Customer as BCCustomer } from '../bigcommerce/api/customers';
import type { SearchProductsData as BCSearchProductsData } from '../bigcommerce/api/catalog/products';
export declare type Discount = {
    value: number;
};
export declare type LineItem = {
    id: string;
    variantId: string;
    productId: string;
    name: string;
    quantity: number;
    discounts: Discount[];
    path: string;
    variant: ProductVariant;
};
export declare type Measurement = {
    value: number;
    unit: 'KILOGRAMS' | 'GRAMS' | 'POUNDS' | 'OUNCES';
};
export declare type Image = {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
};
export declare type ProductVariant = {
    id: string;
    sku: string;
    name: string;
    requiresShipping: boolean;
    price: number;
    listPrice: number;
    image?: Image;
    isInStock?: boolean;
    availableForSale?: boolean;
    weight?: Measurement;
    height?: Measurement;
    width?: Measurement;
    depth?: Measurement;
};
export declare type Cart = {
    id: string;
    customerId?: string;
    email?: string;
    createdAt: string;
    currency: {
        code: string;
    };
    taxesIncluded: boolean;
    lineItems: LineItem[];
    lineItemsSubtotalPrice: number;
    subtotalPrice: number;
    totalPrice: number;
    discounts?: Discount[];
};
export interface Wishlist extends BCWishlist {
}
export interface Customer extends BCCustomer {
}
export interface SearchProductsData extends BCSearchProductsData {
}
/**
 * Cart mutations
 */
export declare type CartItemBody = {
    variantId: string;
    productId?: string;
    quantity?: number;
};
export declare type GetCartHandlerBody = {
    cartId?: string;
};
export declare type AddCartItemBody<T extends CartItemBody> = {
    item: T;
};
export declare type AddCartItemHandlerBody<T extends CartItemBody> = Partial<AddCartItemBody<T>> & {
    cartId?: string;
};
export declare type UpdateCartItemBody<T extends CartItemBody> = {
    itemId: string;
    item: T;
};
export declare type UpdateCartItemHandlerBody<T extends CartItemBody> = Partial<UpdateCartItemBody<T>> & {
    cartId?: string;
};
export declare type RemoveCartItemBody = {
    itemId: string;
};
export declare type RemoveCartItemHandlerBody = Partial<RemoveCartItemBody> & {
    cartId?: string;
};
/**
 * Temporal types
 */
interface Entity {
    id: string | number;
    [prop: string]: any;
}
export interface Product extends Entity {
    name: string;
    description: string;
    descriptionHtml?: string;
    slug?: string;
    path?: string;
    images: ProductImage[];
    variants: ProductVariant2[];
    price: ProductPrice;
    options: ProductOption[];
    sku?: string;
    productType?: string;
}
export interface ProductOption extends Entity {
    displayName: string;
    values: ProductOptionValues[];
}
export interface ProductOptionValues {
    label: string;
    hexColors?: string[];
}
interface ProductImage {
    url: string;
    alt?: string;
}
interface ProductVariant2 {
    id: string | number;
    options: ProductOption[];
}
interface ProductPrice {
    value: number;
    currencyCode: 'USD' | 'ARS' | string | undefined;
    retailPrice?: number;
    salePrice?: number;
    listPrice?: number;
    extendedSalePrice?: number;
    extendedListPrice?: number;
}
export {};
