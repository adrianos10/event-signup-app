import { ReactText } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

function SuccessMessage({ children }: { children: ReactText }): JSX.Element {
  return (
    <div className="text-center">
      <IoCheckmarkCircleOutline
        className="mb-6 text-purple stroke-current m-auto"
        size="2em"
      />
      <div>{children}</div>
    </div>
  );
}

export default SuccessMessage;
