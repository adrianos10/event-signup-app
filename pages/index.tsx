export { default } from 'components/pages/main';
import { MainPageProps } from 'components/pages/main/types';
import prisma from 'lib/prisma';
import { GetServerSideProps } from 'next';
import serializeData from 'utils/serializeData';

export const getServerSideProps: GetServerSideProps<MainPageProps> =
  async () => {
    try {
      const events = await prisma.event.findMany();
      const serializedEvents = serializeData(events);

      return {
        props: {
          events: serializedEvents,
        },
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return {
        props: {
          events: [],
        },
      };
    }
  };
