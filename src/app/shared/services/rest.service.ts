import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RESTResponse} from '../classes/rest-response';
import {RESTRequest} from '../classes/rest-request';
import {SERVER_URL} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  public static getUserToken(): string {
    return 'tokegottenfromlocalstorage';
  }

  public static buildRequest(payload: Object): RESTRequest {
    return new RESTRequest(RestService.getUserToken(), payload);
  }

  // All kind of requests
  public request(method: string, endpoint: string, payload: Object): Observable<RESTResponse> {

    const body = RestService.buildRequest(payload);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
      // params: (new HttpParams()).append('body', JSON.stringify(body))
    };

    switch (method.toLowerCase()) {
      case 'get':
        return this.http.get<RESTResponse>(SERVER_URL + endpoint, httpOptions);
      case 'post':
        return this.http.post<RESTResponse>(SERVER_URL + endpoint, body, httpOptions);
      case 'put':
        return this.http.put<RESTResponse>(SERVER_URL + endpoint,  body, httpOptions);
      case 'patch':
        return this.http.patch<RESTResponse>(SERVER_URL + endpoint, body, httpOptions);
      case 'delete':
        return this.http.delete<RESTResponse>(SERVER_URL + endpoint, httpOptions);
      default:
        return undefined;
    }
  }
}
