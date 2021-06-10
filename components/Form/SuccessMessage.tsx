import { IoCheckmarkCircleOutline } from 'react-icons/io5';

function SuccessMessage(): JSX.Element {
  return (
    <div className="text-center">
      <IoCheckmarkCircleOutline
        className="mb-6 text-purple stroke-current m-auto"
        size="2em"
      />
      <div>Thank you! You have successfully signed up for our event!</div>
    </div>
  );
}

export default SuccessMessage;
