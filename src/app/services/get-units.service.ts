import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';
import { environment } from 'environment';
import { Location } from '../types/location.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private url: string = environment.api;

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<
    Location[]
  >([]);

  private allUnits$: Observable<Location[]> =
    this.allUnitsSubject.asObservable();

  private filteredUnits: Location[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitsResponse>(`${this.url}`).subscribe((res) => {
      this.allUnitsSubject.next(res.locations);
      this.filteredUnits = res.locations;
    });
  }

  ngOnInit(): void {}

  public getAllUnits(): Observable<Location[]> {
    return this.allUnits$;
  }

  public getFilteredUnits() {
    return this.filteredUnits;
  }
  public setFilteredUnits(value: Location[]) {
    this.filteredUnits = value;
  }
}
