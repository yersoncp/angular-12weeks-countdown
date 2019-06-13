import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-weeks',
  templateUrl: './date-weeks.component.html',
  styleUrls: ['./date-weeks.component.css']
})
export class DateWeeksComponent implements OnInit {

  public currentDate: Moment;

  constructor() { }

  ngOnInit() {
    this.initBuild();
  }

  initBuild() {
    let formatStr = 'YYYY MMM DD HH:mm A';
    let _startDate = moment('2019-04-01 00:00');
    this.currentDate = this._getDate12w(_startDate);

    let ratio = (1000 * 60) / 4; // 1 min

    setInterval(_ => {
      this.currentDate = moment(this.currentDate).add(1, 'minutes');
    }, ratio);
  }

  _getDate12w(_startDate) {
    let _startYearOf = moment().startOf('year').format('YYYY-MM-DD H:mm');
    let _dateNow = moment().format('YYYY-MM-DD H:mm');
    let _startYear = moment(_startYearOf);
    let _currentDateReal = moment(_dateNow);
    return moment(_startYear).add(_currentDateReal.diff(_startDate, 'minutes') * 4, 'minutes');
  }

}