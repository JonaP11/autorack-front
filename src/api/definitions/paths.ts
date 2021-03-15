/**
 * Paths of the backend API.
 */
export default class ApiPaths {
  private static API_URL = process.env.REACT_APP_API_ROOT;

  static ROOT = ApiPaths.API_URL + '/';

  static SIMPLE_ADD = ApiPaths.API_URL + '/add';
}
