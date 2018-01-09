import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private clientname: string;


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.clientname = this.router.snapshot.paramMap.get('clientname');

  }

}
