import { useDeleteProduct } from '@/hooks/product/useDeleteProduct';
import { useGetProduct } from '@/hooks/product/useGetProduct';
import CRUDButton from '@/shared/components/CRUDButton';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading, isError } = useGetProduct(id || '');
  const { mutate: deleteProductMutate } = useDeleteProduct(id || '');

  const handleDeleteProduct = () => {
    alert('정말로 삭제하시겠습니까?');
    deleteProductMutate();
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
