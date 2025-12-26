import FormContainer from '@/shared/components/FormContainer';
import SubmitBlueButton from '@/shared/components/SubmitBlueButton';
import { useNavigate } from 'react-router-dom';

const ProductCreate = () => {
  const nav = useNavigate();
  const handleCreateItem = () => {
    // 생성 로직 구현
    nav('/');
  };
  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="text-2xl">새 상품 등록 페이지</div>
      <FormContainer />
      <SubmitBlueButton onClick={handleCreateItem} text="생성하기" />
    </div>
  );
};

export default ProductCreate;
