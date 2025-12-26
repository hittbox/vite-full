interface GrayButtonProps {
  onClick: () => void;
  text: string;
}

const GrayButton = ({ onClick, text }: GrayButtonProps) => {
  return (
    <button onClick={onClick} className="cursor-pointer rounded-2xl bg-gray-300 p-2">
      {text}
    </button>
  );
};

export default GrayButton;
