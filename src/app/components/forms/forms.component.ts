import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from 'src/app/services/filter-units.service';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  public results: Location[] = [];
  filteredResults: Location[] = [];

  public formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private getUnitsService: GetUnitsService,
    private filterUnitsService: FilterUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });

    this.getUnitsService.getAllUnits().subscribe((res) => {
      this.results = res.locations;
      this.filteredResults = res.locations;
    });
  }

  public onSubmit() {
    let { showClosed, hour } = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(
      this.results,
      showClosed,
      hour
    );
  }
  public onClean() {
    this.formGroup.reset();
  }
}
