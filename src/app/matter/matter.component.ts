import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.css']
})
export class MatterComponent implements OnInit {

  private matterdesc: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.matterdesc = this.router.snapshot.paramMap.get('description');

  }

}
