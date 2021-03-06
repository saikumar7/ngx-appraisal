import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { getInsertHealthReqPayload } from './ya-health';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from './../../shared/services/util/util.service';
import { ProfileService } from './../../shared/services/profile/profile.service';
import { AppraisalService } from './../../shared/services/appraisal/appraisal.service';
import { ActiveModelService } from '../../shared/services/active-model/active-model.service';


@Component({
  selector: 'mdcps-ya-health',
  templateUrl: './ya-health.component.html',
  styleUrls: ['./ya-health.component.scss']
})
export class YaHealthComponent implements OnInit {

  /**
   * @public
   */
  public config: any;

  /**
    * @public
    */
  public healthForm: FormGroup;

  /**
   * @public
   */
  public appraisalId: string;


  /**
   * @public
   */
  public response: any = {};

  /**
   * @constructor
   * @param {fb<FormBuilder>}
   * @param {util<UtilService>}
   */
  constructor(
    private fb: FormBuilder,
    private util: UtilService,
    private appraisal: AppraisalService,
    private profileService: ProfileService,
    private activeModel: ActiveModelService) {
    this.initFormConfig();
    this._init();
  }

  /**
   * @public
   */
  public ngOnInit(): void {
    this.healthForm = this.fb.group({
      medicalIssues: new FormControl('', []),
      hasTraumaticEvent: new FormControl('', []),
      isVictimPhysical: new FormControl('', []),
      isVictimEmotional: new FormControl('', []),
      isVictimSexual: new FormControl('', []),
      isVictimNeglect: new FormControl('', []),
      isVictimOther: new FormControl('', []),
      victimOtherText: new FormControl('', []),
      lastDentalExam: new FormControl('', []),
      lastMedicalExam: new FormControl('', []),
      lastVisionExam: new FormControl('', []),
      lastPsychExam: new FormControl('', []),
      isSexuallyActive: new FormControl('', []),
      hasAdult: new FormControl('', []),
      hasBeenTestedHIV: new FormControl('', []),
      lastHIVTestDate: new FormControl('', []),
      hivTestResults: new FormControl('', []),
      hasBeenTestedSTD: new FormControl('', []),
      lastSTDTestDate: new FormControl('', []),
      stdTestResults: new FormControl('', []),
      isMentalHealth: new FormControl('', []),
      isSubstanceAbuse: new FormControl('', []),
      isLearningDisability: new FormControl('', []),
      isDevelopDisability: new FormControl('', []),
      isPhysicalDisability: new FormControl('', []),
      isTakingMedication: new FormControl('', []),
      currentMedicationText: new FormControl('', []),
      areMedicationsAdministered: new FormControl('', []),
      keepTrackOfAppointments: new FormControl('', [])
    });
  }

   /**
   * @private
   */
  private _init(): void {
    this.appraisalId = this.util.getQueryStringValue('appraisalId');

    this.appraisal.init(this.appraisalId, 'getHealthInfo')
      .subscribe(data => {
        this.response = data;
      });
  }

  /**
   * @public
   */
  public initFormConfig(): void {
    this.config = {
      nextBtn: true,
      prevBtn: true,
      nextBtnLabel: 'Relationships',
      previousBtnLabel: 'Pregnant/Parenting'
    };
  }

  /**
   * @public
   * @param {event<any>}
   */
  public onNext(event: any): void {
    if (event.form && event.form.valid) {
      this._saveInfo(getInsertHealthReqPayload({
        data: event.value,
        healthInfo: this.response,
        emailId: this.util.getQueryStringValue('uname')
      }));
    }
    this.util.navigate('/relationships');
  }

  /**
   * @private
   */
  private _saveInfo(data: any): void {
    this.appraisal.init(this.appraisalId, 'saveHealthInfo', null, {body: data})
      .subscribe(v => {
        console.log(v);
      });
  }

  /**
   * @public
   */
  public onPrevious(event: any): void {
    this.util.navigate('/parenting');
  }

}
