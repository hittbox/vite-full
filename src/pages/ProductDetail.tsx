import { type ProductDomain } from '@/domain/Product';
import { deleteProduct, getProduct } from '@/remote/api/ProductApi';
import CRUDButton from '@/shared/components/CRUDButton';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDomain>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async (id: string) => {
      try {
        const res = await getProduct(id);
        setProduct(res);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct(id);
  }, [id]);

  const handleDeleteProduct = async () => {
    if (!id) return;

    try {
      alert('정말로 삭제하시겠습니까?');
      await deleteProduct(id);
    } catch (error) {
      console.error(error);
    } finally {
      nav('/');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!!</div>;
  if (!product) return <div>Error!!</div>;

  return (
    <div className="m-20 flex flex-col gap-10">
      <div className="text-2xl">{product.name}</div>
      <div className="flex justify-end gap-2">
        <CRUDButton
          onClick={() => {
            nav(`/shop/modify/${id}`);
          }}
          text="수정하기"
        ></CRUDButton>
        <CRUDButton
          className="bg-red-300"
          onClick={handleDeleteProduct}
          text="삭제하기"
        ></CRUDButton>
      </div>

      <form className="flex flex-col gap-5 bg-gray-100">
        <div>
          <div> 이미지: </div>
          <div>{product.image_url}</div>
        </div>
        <div>
          <div> 제품 설명: </div>
          <div>{product.description}</div>
        </div>
        <div>
          <div> 가격: </div>
          <div>{product.price}</div>
        </div>
      </form>
    </div>
  );
};

export default ProductDetail;
