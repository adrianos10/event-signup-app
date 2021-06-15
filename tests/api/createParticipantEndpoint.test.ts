import { testApiHandler } from 'next-test-api-route-handler';
import createParticipantHandler from 'pages/api/create-participant';
import randomstring from 'randomstring';

const mockParticipantData = {
  firstname: 'John',
  lastname: 'Doe',
  email: `${randomstring.generate({
    length: 6,
  })}@example.com`,
  eventId: 1,
};

const commonHeaders = { 'Content-Type': 'application/json' };

const stringifiedMockParticipantData = JSON.stringify(mockParticipantData);

describe('API', () => {
  describe('/create-participant', () => {
    it('gives HTTP 400 when required payload is not provided', async () => {
      await testApiHandler({
        handler: createParticipantHandler,
        test: async ({ fetch }) => {
          expect((await fetch({ method: 'POST' })).status).toBe(400);
        },
      });
    });

    it('accepts only HTTP POST method', async () => {
      // There is no GET method because it doens't accept body so it shouldn't be used

      await testApiHandler({
        handler: createParticipantHandler,
        test: async ({ fetch }) => {
          expect(
            (
              await fetch({
                method: 'PUT',
                headers: { ...commonHeaders },
                body: stringifiedMockParticipantData,
              })
            ).status
          ).toBe(400);
        },
      });

      await testApiHandler({
        handler: createParticipantHandler,
        test: async ({ fetch }) => {
          expect(
            (
              await fetch({
                method: 'PATCH',
                headers: { ...commonHeaders },
                body: stringifiedMockParticipantData,
              })
            ).status
          ).toBe(400);
        },
      });

      await testApiHandler({
        handler: createParticipantHandler,
        test: async ({ fetch }) => {
          expect(
            (
              await fetch({
                method: 'DELETE',
                headers: { ...commonHeaders },
                body: stringifiedMockParticipantData,
              })
            ).status
          ).toBe(400);
        },
      });
    });
  });
});
