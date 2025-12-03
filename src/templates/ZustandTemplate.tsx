import { useBearStore } from './stores/bearStore';

export const ZustandPage = () => {
  const { bears, increase, decrease, setBears, reset } = useBearStore();

  return (
    <div className="flex flex-col gap-4 p-5">
      <h1>{bears} 🐻</h1>

      <button onClick={increase} className="bg-black px-3 py-1 text-white">
        Increase
      </button>

      <button onClick={decrease} className="bg-gray-800 px-3 py-1 text-white">
        Decrease
      </button>

      <button onClick={() => setBears(10)} className="bg-blue-600 px-3 py-1 text-white">
        Set 10 Bears
      </button>

      <button onClick={reset} className="bg-red-500 px-3 py-1 text-white">
        Reset
      </button>
    </div>
  );
};
