import { Component, OnInit } from '@angular/core';
import { data } from '../../data/data';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logo = 'Logo';// '../../assets/img/logo.png';
  sliderInfo: any[] = [
               {
                 'imgHeading': 'Image1',
                 'imgUrl' : '../../assets/img/banner/2.png',
                 'imgDesc' : 'images',
                 'class' : 'carousel-item active'
                 }, {
                  'imgHeading': 'Image2',
                  'imgUrl' : '../../assets/img/banner/1.png',
                  'imgDesc' : 'images',
                  'class' : 'carousel-item '
                  },
                  {
                    'imgHeading': 'Image3',
                    'imgUrl' : '../../assets/img/banner/3.png',
                    'imgDesc' : 'images',
                    'class' : 'carousel-item '
                    }
  ];
  constructor () { }

  ngOnInit() {
    $(document).ready(function() {
     // $('.carousel-inner div').next().addClass('active');
    });
    // this.data = datas[];
  }

}
