import { Participant } from '@prisma/client';
import prisma from 'lib/prisma';
import { NextApiHandler } from 'next';

import { ALREADY_EXISTS_STATUS_CODE } from './consts';
import { CreateParticipantHandlerResponse } from './types';

const createParticipantHandler: NextApiHandler<CreateParticipantHandlerResponse> =
  async (req, res) => {
    const { eventId, ...userData } = req.body as Omit<Participant, 'id'>;
    const { firstname, lastname, email } = userData;

    if (req.method === 'POST' && firstname && lastname && email && eventId) {
      try {
        const participant = await prisma.participant.findFirst({
          where: { email },
        });

        if (participant) {
          res.json({ statusCode: ALREADY_EXISTS_STATUS_CODE, participant });

          return;
        }

        await prisma.participant.create({
          data: {
            ...userData,
            event: { connect: { id: eventId } },
          },
        });

        res.end();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);

        res.status(500).end();
      }
    }

    res.status(400).end();
  };

export default createParticipantHandler;
