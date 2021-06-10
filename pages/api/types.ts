import { Participant } from '@prisma/client';

import { ALREADY_EXISTS_STATUS_CODE } from './consts';

export type CreateParticipantHandlerResponse =
  | { statusCode: typeof ALREADY_EXISTS_STATUS_CODE; participant: Participant }
  | undefined;
