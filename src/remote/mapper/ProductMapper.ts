import type { ProductDomain } from '@/domain/Product';
import type { GetProductListResponse } from '../response/GetProductResponse';

export const toProductDomain = (response: GetProductListResponse): ProductDomain => ({
  id: response.id,
  name: response.name,
  price: response.price,
  image_url: response.image_url,
});
