export class RESTResponse {
  code: number;
  message: string;
  payload: Object;

  constructor(code: number, message: string, payload: Object) {
    this.code = code;
    this.message = message;
    this.payload = payload;
  }
}
