import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private url: string = environment.api;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  public getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(`${this.url}`);
  }
}
