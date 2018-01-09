import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private clients: any[];

  constructor() { }

  ngOnInit() {

    this.clients = [
      {
        clientid: 1,
        clientno: 'F1',
        clientname: 'Foulston LLP',
        clientcreation: '01/01/14',
        clientbranch: 'South Carolina',
        clientcountry: 'USA'
      },
      {
        clientid: 2,
        clientno: 'F2',
        clientname: 'GLD LLP',
        clientcreation: '08/05/12',
        clientbranch: 'London',
        clientcountry: 'UK'
      },
      {
        clientid: 3,
        clientno: 'F2',
        clientname: 'Harrowells LLP',
        clientcreation: '13/11/04',
        clientbranch: 'York',
        clientcountry: 'UK'
      },
      {
        clientid: 4,
        clientno: 'F4',
        clientname: 'Manches LLP',
        clientcreation: '01/03/11',
        clientbranch: 'London',
        clientcountry: 'UK'
      },
      {
        clientid: 5,
        clientno: 'F5',
        clientname: 'Franklins LLP',
        clientcreation: '21/04/03',
        clientbranch: 'Northampton',
        clientcountry: 'UK'
      },
      {
        clientid: 6,
        clientno: 'F6',
        clientname: 'Birchall Blackburn LLP',
        clientcreation: '17/08/02',
        clientbranch: 'Manchester',
        clientcountry: 'UK'
      }
    ];

  }

}
