import { Component, OnInit } from '@angular/core';
import moment, { Moment } from 'moment';

@Component({
  selector: 'app-date-weeks',
  styleUrls: ['./date-weeks.component.css'],
  templateUrl: './date-weeks.component.html'
})
export class DateWeeksComponent implements OnInit {

  public currentDate: Moment;

  constructor() { }

  public ngOnInit() {
    this._initBuild();
  }

  private _initBuild() {
    const formatStr = 'YYYY MMM DD HH:mm A';
    const ratio = (1000 * 60)/4;
    const _startDateArr = [
      `${moment().year()}-01-01 00:00`,
      `${moment().year()}-04-01 00:00`,
      `${moment().year()}-07-01 00:00`,
      `${moment().year()}-10-01 00:00`
    ];
    _startDateArr.some((e, index) => {
      if(moment().isBefore(e)) {
        this.currentDate = this._getDate12w(_startDateArr[index - 1 < 0 ? 0 : index - 1]);
        return true;
      }
    });

    //console.log(moment().isAfter('2019-06-15 00:00')); // despues
    //console.log(moment().isBefore('2019-06-21 23:59')); // antes

    const _interval = setInterval(_ => {
      this.currentDate = moment(this.currentDate).add(1, 'minutes');
      // if(moment('2019-10-23 02:45') == this.currentDate) {
      //   clearInterval(_interval);
      //   console.log(1);
      // }
    }, ratio);
  }

  private _getDate12w(_startDate) {
    const _startYearOf = moment(moment().startOf('year').format('YYYY-MM-DD H:mm'));
    const _dateNow = moment(moment().format('YYYY-MM-DD H:mm'));
    return moment(_startYearOf).add(_dateNow.diff(_startDate, 'minutes') * 4, 'minutes');
  }
}