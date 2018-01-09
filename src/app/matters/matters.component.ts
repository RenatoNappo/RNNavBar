import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matters',
  templateUrl: './matters.component.html',
  styleUrls: ['./matters.component.css']
})
export class MattersComponent implements OnInit {

  matters: any[];

  constructor() { }

  ngOnInit() {

  this.matters = [
    {
      matterid: 1,
      matterno: '1',
      mattertype: 'Personal Injury',
      matterdesc: 'Accident - 04/08/15',
      mattercreation: '01/01/14'
    },
    {
      matterid: 2,
      matterno: '2',
      mattertype: 'Conveyancing',
      matterdesc: 'Purchase of 75 Aintree Road',
      mattercreation: '11/05/16'
    },
    {
      matterid: 3,
      matterno: '3',
      mattertype: 'Conveyancing',
      matterdesc: 'Sale of 18 Spinney Hill Road',
      mattercreation: '23/07/17'
    },
    {
      matterid: 4,
      matterno: '4',
      mattertype: 'Clinical Negligence',
      matterdesc: 'Action against Great Ormond Street Hospital',
      mattercreation: '19/03/13'
    },
    {
      matterid: 5,
      matterno: '5',
      mattertype: 'Litigation',
      matterdesc: 'Crown vs Mr. Al Hababja',
      mattercreation: '09/11/15'
    },
    {
      matterid: 6,
      matterno: '6',
      mattertype: 'Litigation',
      matterdesc: 'Crown vs Mr. Alswanhi',
      mattercreation: '09/11/15'
    }
  ];

  }

}
