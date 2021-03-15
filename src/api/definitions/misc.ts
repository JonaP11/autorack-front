import {ResponseBase} from './response';

export type FetchStatus<T extends ResponseBase> = {
  fetched: boolean,
  fetching: boolean,
  response?: T,
}
