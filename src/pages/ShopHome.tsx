import type { ProductDomain } from '@/domain/Product';
import { getProductList } from '@/remote/api/ProductApi';
import CRUDButton from '@/shared/components/CRUDButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopHome = () => {
  const nav = useNavigate();
  const onClickItem = (id: string) => {
    nav(`/shop/detail/${id}`);
  };

  const [products, setProducts] = useState<ProductDomain[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductList();
        setProducts(res);
      } catch (error) {
        alert('상품 정보 조회에 실패했습니다. 다시 시도해주세요.');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!!</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="mt-20 p-2 text-xl font-bold text-green-500">Enjoy Shopping!</div>
      <CRUDButton onClick={() => nav('/shop/new')} text="새 상품 등록하기" />

      <div className="mt-5 flex w-[700px] flex-row flex-wrap justify-center gap-10">
        {products.map((item) => (
          <div key={item.id} className="size-30 bg-blue-400" onClick={() => onClickItem(item.id)}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopHome;
