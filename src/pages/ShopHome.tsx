import CRUDButton from '@/shared/components/CRUDButton';
import { useNavigate } from 'react-router-dom';

const mockList = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 3, name: 'Item 3', price: 300 },
  { id: 4, name: 'Item 4', price: 400 },
  { id: 5, name: 'Item 5', price: 500 },
  { id: 6, name: 'Item 6', price: 600 },
  { id: 7, name: 'Item 7', price: 700 },
  { id: 8, name: 'Item 8', price: 800 },
];

const ShopHome = () => {
  const nav = useNavigate();
  const onClickItem = (id: number) => {
    nav(`/shop/detail/${id}`);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="mt-20 p-2 text-xl font-bold text-green-500">Enjoy Shopping!</div>
      <CRUDButton onClick={() => nav('/shop/new')} text="새 상품 등록하기" />

      <div className="mt-5 flex w-[700px] flex-row flex-wrap justify-center gap-10">
        {mockList.map((item) => (
          <div key={item.id} className="size-30 bg-blue-400" onClick={() => onClickItem(item.id)}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopHome;
