import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css'],
})
export class StepperOverviewExample implements OnInit,AfterViewInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('step1') step1: TemplateRef<HTMLElement>;
  @ViewChild('step2') step2: TemplateRef<HTMLElement>;
  @ViewChild('step3') step3: TemplateRef<HTMLElement>;
  @ViewChild('done') done: TemplateRef<HTMLElement>;

  formTemplate: TemplateRef<HTMLElement>;

  stepperConfig = [
    {
      step: {
        label: 'Form Details',
        stepControl: this.firstFormGroup
      }
    },
    {
      step: {
        label: 'Assessment',
        stepControl: this.secondFormGroup
      }
    },
    {
      step: {
          label: 'Configurations',
          stepControl: this.thirdFormGroup
      }   
    },
    {
      step: {
          label: 'Done',
          stepControl: this.thirdFormGroup
      }
    }
  ];
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    //this.formTemplate = this.step1;   
  }

  ngAfterViewInit() {
    this.formTemplate = this.step1;
   // this.stepper.selectedIndex = 2;
  }

  onSelectionChange(event: StepperSelectionEvent) {
    switch (event.selectedIndex) {
      case 0:
        this.formTemplate = this.step1;
        break;
      case 1:
        this.formTemplate = this.step2;
        break;
      case 2:
        this.formTemplate = this.step3;
        break;
      default:
        this.formTemplate = this.done;
        break;
    }
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
