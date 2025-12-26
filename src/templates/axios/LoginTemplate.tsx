import { signInWithGithub } from '@/remote/api/LoginApi';

const LoginTemplate = () => {
  return (
    <>
      <div className="text-2xl text-blue-500">Login</div>
      <div className="text-green-500">Welcome to the Login Page!</div>

      <button
        className="flex cursor-pointer items-center justify-center rounded-xl bg-gray-800 px-3 py-1 text-white"
        onClick={() => signInWithGithub('http://localhost:5173/axios-template')}
      >
        Login With Github!
      </button>
    </>
  );
};

export default LoginTemplate;
