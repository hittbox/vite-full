import type { ProductDomain } from '@/domain/Product';
import { createProduct } from '@/remote/api/ProductApi';
import FormContainer from '@/shared/components/FormContainer';
import SubmitBlueButton from '@/shared/components/SubmitBlueButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCreate = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState<ProductDomain>({
    id: '',
    name: '',
    price: 0,
    description: '',
    image_url: '',
    created_by: '',
  });

  const handleCreateItem = async () => {
    try {
      await createProduct({
        name: formData.name,
        price: formData.price,
        description: formData.description,
        image_url: '',
        created_by: null,
      });

      alert('상품이 등록되었습니다.');
    } catch (error) {
      console.error('등록 실패: ', error);
      alert('상품 등록 중 오류가 발생했습니다.');
    } finally {
      nav('/');
    }
  };

  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="text-2xl">새 상품 등록 페이지</div>
      <FormContainer formData={formData} setFormData={setFormData} />
      <SubmitBlueButton onClick={handleCreateItem} text="생성하기" />
    </div>
  );
};

export default ProductCreate;
