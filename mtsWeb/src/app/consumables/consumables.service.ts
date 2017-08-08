import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Consumable } from './consumable';

@Injectable()
export class ConsumablesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private consumableUrl = 'http://localhost/mts/mtsRest/public/api/v1/consumables';  // URL to web api

  constructor(private http: Http) { }

  getConsumables(): Promise<Consumable[]> {
    return this.http.get(this.consumableUrl)
               .toPromise()
               .then(response => response.json() as Consumable[])
               .catch(this.handleError);
  }


  getConsumable(id: number): Promise<Consumable> {
    const url = `${this.consumableUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Consumable)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.consumableUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Consumable> {
    return this.http
      .post(this.consumableUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Consumable)
      .catch(this.handleError);
  }

  update(consumable: Consumable): Promise<Consumable> {
    const url = `${this.consumableUrl}/${consumable.id}`;
    return this.http
      .put(url, JSON.stringify(consumable), {headers: this.headers})
      .toPromise()
      .then(() => consumable)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
