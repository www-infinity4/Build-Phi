export type PhiAdvertisement = {
  id: string;
  title: string;
  priceLabel: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  badge?: string;
  testOnly?: boolean;
};

export type PhiAdvertisementActions = {
  buy: () => void;
  collect: () => void;
  share: () => void | Promise<void>;
  shopSimilar: () => void;
};

export const PHI_SHOP_CART_KEY = "infinity_phi_shop_cart_v1";
export const PHI_SHOP_CART_EVENT = "infinity-shop-cart-updated";
export const PHI_STARCOIN_SHARE_EVENT = "infinity-starcoin-share";
export const STARCOIN_SHARE_REWARD = 0.1;
