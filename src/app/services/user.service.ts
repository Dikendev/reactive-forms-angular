import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpclient: HttpClient) {}

  public checkUsername(username: string) {
    console.log('username is: ', username);
    return this._httpclient.get<any[]>(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );
  }

  productionOrderData: any = [
    {
      id: 2,
      name: 'Fábrica I',
      panels: [
        { id: 11, name: 'M111' },
        { id: 245, name: '245' },
      ],
    },
    {
      id: 5,
      name: 'Fábrica VII',
      panels: [
        { id: 120, name: 'M120' },
        { id: 33, name: 'M33' },
      ],
    },
    {
      id: 6,
      name: 'Fábrica II',
      panels: [
        { id: 23232, name: 'M23232' },
        { id: 12323, name: 'M12323' },
        { id: 123, name: 'M123' },
      ],
    },
  ];

  factoryData: any = {
    id: 6,
    name: 'Fábrica II',
    panels: [
      { id: 23232, name: 'M23232' },
      { id: 12323, name: 'M12323' },
      { id: 123, name: 'M123' },
    ],
  };

  factoryAndPanelData: any = {
    id: 6,
    name: 'Fábrica II',
    panels: [{ id: 23232, name: 'M23232' }],
  };

  fetchData(formData: any): Observable<any> {
    return of({
      status: 'success',
      data: this.factoryData,
    }).pipe(delay(1000));
  }
}
