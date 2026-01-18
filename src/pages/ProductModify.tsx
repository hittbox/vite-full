import type { ProductDomain } from '@/domain/Product';
import { getProduct, modifyProduct } from '@/remote/api/ProductApi';
import type { ModifyProductRequest } from '@/remote/request/ModifyProductRequest';
import FormContainer from '@/shared/components/FormContainer';
import SubmitBlueButton from '@/shared/components/SubmitBlueButton';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductModify = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDomain>();
  const [formData, setFormData] = useState<ProductDomain>({
    id: '',
    name: '',
    price: 0,
    description: '',
    image_url: '',
    created_by: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  // useEffect -- 초기 상태 로드 필요
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async (id: string) => {
      try {
        const res = await getProduct(id);
        setProduct(res);
        setFormData({
          id: res.id,
          name: res.name,
          price: res.price,
          description: res.description,
          image_url: res.image_url,
          created_by: res.created_by,
        });
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct(id);
  }, [id]);

  const handleCompleteModify = async () => {
    if (!id) return;

    try {
      const refinedData: ModifyProductRequest = {
        name: formData.name,
        price: formData.price,
        description: formData.description,
        image_url: formData.image_url,
      }
      await modifyProduct(id, refinedData);

      alert('상품 정보가 수정되었습니다.');
    } catch (error) {
      console.error(error);
    } finally {
      nav(`/shop/detail/${id}`);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!!</div>;
  if (!product) return <div>Error!!</div>;

  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="text-2xl">상품 수정 페이지</div>

      <FormContainer formData={formData} setFormData={setFormData} />
      <SubmitBlueButton onClick={handleCompleteModify} text="수정 완료하기" />
    </div>
  );
};

export default ProductModify;
