import CRUDButton from '@/shared/components/GrayButton';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();
  const img = '(서버에서 가져올) 이미지 URL';
  const name = `(서버에서 가져올) 상품 이름`;
  const price = 10000;
  const description = '상품 상세 설명입니다.';

  const handleDeleteProduct = () => {
    alert('정말로 삭제하시겠습니까?');
    // 삭제 로직 구현
    nav('/');
  };
  return (
    <div className="m-20 flex flex-col gap-10">
      <div className="text-2xl">{name}</div>
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
          <div>{img}</div>
        </div>
        <div>
          <div> 제품 설명: </div>
          <div>{description}</div>
        </div>
        <div>
          <div> 가격: </div>
          <div>{price}</div>
        </div>
      </form>
    </div>
  );
};

export default ProductDetail;
