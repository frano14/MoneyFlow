/* eslint-disable react/prop-types */
const Button = ({ text, handleSubmit }) => {
  return (
    <div
      className="bg-green py-2 px-4 text-center w-full text-white rounded-md"
      onClick={handleSubmit}
    >
      {text}
    </div>
  );
};

export default Button;
