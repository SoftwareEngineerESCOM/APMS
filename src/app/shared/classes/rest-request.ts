export class RESTRequest {
  token: string;
  payload: Object;
  constructor(token: string, payload: Object) {
    this.token = token;
    this.payload = payload;
  }
}
