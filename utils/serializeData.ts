import safeJsonStringify from 'safe-json-stringify';

// https://github.com/vercel/next.js/issues/13209#issuecomment-633149650
const serializeData = <
  T extends Record<string, unknown> | Record<string, unknown>[]
>(
  data: T
): T => JSON.parse(safeJsonStringify(data));

export default serializeData;
