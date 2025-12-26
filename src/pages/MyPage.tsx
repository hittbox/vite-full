const MyPage = () => {
  const userName = '사용자이름';
  const email = '12@hongik.ac.kr';

  const handleLogout = () => {
    alert('로그아웃 하시겠습니까?');
    // 로그아웃 처리 로직 추가 예정
  };
  return (
    <div className="mt-30 flex items-center justify-center">
      <div className="flex h-[200px] w-[60%] flex-row items-center justify-center gap-10 rounded-2xl border border-gray-400">
        <div className="size-30 bg-amber-200">
          <div>(프로필 사진)</div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div>{userName} 님</div>
          <div>{email}</div>
          <button onClick={handleLogout} className="cursor-pointer">
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
