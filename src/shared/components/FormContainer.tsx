const FormContainer = () => {
  return (
    <form className="flex flex-col bg-gray-100">
      <div>
        <div> 제품명: </div>
        <input type="text" placeholder="Item Name" className="m-2 border p-2" />
      </div>
      <div>
        <div> 제품 설명: </div>
        <input type="textarea" placeholder="Item Description" className="m-2 w-[90%] border p-2" />
      </div>
      <div>
        <div> 가격: </div>
        <input type="number" placeholder="Item Price" className="m-2 border p-2" />
      </div>
      <div>
        <div> 이미지 업로드: </div>
        <input type="file" className="m-2 border p-2" />
      </div>
    </form>
  );
};

export default FormContainer;
