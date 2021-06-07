import { MainPageProps } from './types';

export default function Main(props: MainPageProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(props.events); // FIXME

  return <div>Main page</div>;
}
