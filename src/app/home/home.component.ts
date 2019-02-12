import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 ourservice = 'Our Services';

  ourServices: any[] = [
    {
      'img' : 'fa fa-3x fa-spotify',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    },
    {
      'img' : 'fa fa-3x fa-users',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    },
    {
      'img' : 'fa fa-3x fa-suitcase',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    },
    {
      'img' : 'fa fa-3x fa-bars',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    },
    {
      'img' : 'fa fa-3x fa-spotify',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    },
    {
      'img' : 'fa fa-3x fa-users',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    },
    {
      'img' : 'fa fa-3x fa-suitcase',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    },
    {
      'img' : 'fa fa-3x fa-bars',
      'name' : 'software Development',
      'desc' : 'transline is highly expert in software development'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
