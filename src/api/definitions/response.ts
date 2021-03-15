// These implementations should be consistent with the backend.

export type ResponseBase = {};

export type StatusedResponse = {
  ok: boolean,
}

export type MessagedResponse = {
  message: string,
}

export type RootResponse = ResponseBase & StatusedResponse & MessagedResponse;

export type SimpleAddResponse = ResponseBase & StatusedResponse & {
  result: number,
}
