import cs from 'classnames';
import { ReactText } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import useIsDarkMode from 'store/hooks/useIsDarkMode';

function SuccessMessage({ children }: { children: ReactText }): JSX.Element {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={cs('text-center', { ['text-white']: isDarkMode })}>
      <IoCheckmarkCircleOutline
        className="mb-6 text-purple stroke-current m-auto"
        size="2em"
      />
      <div>{children}</div>
    </div>
  );
}

export default SuccessMessage;
