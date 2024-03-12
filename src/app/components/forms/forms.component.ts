import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  public results = ['Um dia', 'Será seu'];

  public formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private getUnitsService: GetUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });

    this.getUnitsService.getAllUnits().subscribe((res) => console.log(res));
  }

  public onSubmit() {
    console.log(this.formGroup.value);
  }
  public onClean() {
    this.formGroup.reset();
  }
}
