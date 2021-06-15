import { prismaMock } from 'singleton';

import { Event, Participant } from '.prisma/client';

describe('Database', () => {
  it('should create participant', async () => {
    const participant: Participant = {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      eventId: 1,
    };

    prismaMock.participant.create.mockResolvedValue(participant);

    await expect(
      prismaMock.participant.create({ data: participant })
    ).resolves.toEqual(participant);
  });

  it('should find participant', async () => {
    const participant: Participant = {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      eventId: 1,
    };

    prismaMock.participant.findFirst.mockResolvedValue(participant);

    await expect(
      prismaMock.participant.findFirst({ where: { email: participant.email } })
    ).resolves.toEqual(participant);
  });

  it('should get list of events', async () => {
    const event: Event = {
      id: 1,
      date: new Date(),
    };

    prismaMock.event.findMany.mockResolvedValue([event]);

    await expect(prismaMock.event.findMany()).resolves.toEqual([event]);
  });
});
