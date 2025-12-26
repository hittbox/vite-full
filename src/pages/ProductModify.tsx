import FormContainer from '@/shared/components/FormContainer';
import SubmitBlueButton from '@/shared/components/SubmitBlueButton';
import { useNavigate, useParams } from 'react-router-dom';

const ProductModify = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleCompleteModify = () => {
    // 수정 로직 구현
    nav(`/shop/detail/${id}`);
  };

  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="text-2xl">상품 수정 페이지</div>

      <FormContainer />
      <SubmitBlueButton onClick={handleCompleteModify} text="수정 완료하기" />
    </div>
  );
};

export default ProductModify;
