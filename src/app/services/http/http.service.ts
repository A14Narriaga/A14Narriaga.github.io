import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { methodTypes } from '../../utils';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseUrl = environment.apiUri;

  constructor(
    private httpClient: HttpClient
  ) { }

  request = (
    method: methodTypes,
    url: string,
    body?: any,
    params: HttpParams = new HttpParams()
  ): Observable<any> => method === 'get' || method === 'delete'
      ? this.httpClient[method](`${this.baseUrl}${url}`, { params })
      : this.httpClient[method](`${this.baseUrl}${url}`, body, { params })

}
