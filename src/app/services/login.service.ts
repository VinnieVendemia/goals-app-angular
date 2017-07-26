import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  // TODO: use real login url
  private loginUrl = 'api/goals';  // URL to web api

  constructor(private http: Http) { }

	login(username: string, password: string): Promise<void> {
    return this.http
      .post(
          this.loginUrl,
          JSON.stringify(
            {
              username: username,
              password: password
            }
          ),
          {headers: this.headers}
        )
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
	}

  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}