import type { ProductDomain } from '@/domain/Product';
import { useCreateProduct } from '@/hooks/product/useCreateProduct';
import FormContainer from '@/shared/components/FormContainer';
import SubmitBlueButton from '@/shared/components/SubmitBlueButton';
import { useState } from 'react';

const ProductCreate = () => {
  // UI 데이터
  const [formData, setFormData] = useState<ProductDomain>({
    name: '',
    price: 0,
    description: '',
    image_url: '',
  });

  const { mutate, isPending } = useCreateProduct();

  const handleCreateItem = () => {
    mutate(formData);
  };

  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="text-2xl">새 상품 등록 페이지</div>
      <FormContainer formData={formData} setFormData={setFormData} />
      <SubmitBlueButton onClick={handleCreateItem} text={isPending ? '등록 중...' : '생성하기'} />
    </div>
  );
};

export default ProductCreate;
