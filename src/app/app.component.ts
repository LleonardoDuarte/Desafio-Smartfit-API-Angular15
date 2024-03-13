import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showList = new BehaviorSubject(false);
  public unitsLists: Location[] = [];

  constructor(private getUnitsService: GetUnitsService) {}

  public onSubmit() {
    this.showList.next(true);
    this.unitsLists = this.getUnitsService.getFilteredUnits();
  }
}
