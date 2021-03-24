import {ResponseBase} from './response';

export type FetchStatus<T extends ResponseBase | never = never> = {
  fetched: boolean,
  fetching: boolean,
  response?: T,
}
