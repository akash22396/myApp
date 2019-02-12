import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-footer',
    templateUrl : './footer.component.html',
    styleUrls : ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    copyrightContent = 'All right reserved &copy; Copyright 2018-2019';

footerNav: any[] = [{
'head' : 'about us',
// tslint:disable-next-line:max-line-length
'aboutus' : 'Company India, within a short span of time has managed to become an industry leader in any and every respective field they set foot in. The world around us is changing, and with that, the problems and basic concepts of survival ',
'class' : 'sideline'
},
{
  'head' : 'quick link',
  'class' : 'sideline',
  'links' : [{
    'url': 'home',
    'urlName' : 'Home'
  },
  {
    'url': 'products',
    'urlName' : 'Products'
  },
  {
    'url': 'services',
    'urlName' : 'Services'
  },
  {
    'url': 'aboutus',
    'urlName' : 'about us'
  },
  {
    'url': 'contactus',
    'urlName' : 'contact us'
  },
  {
    'url': 'blog',
    'urlName' : 'blog'
  }],
},
  {
    'head' : 'contact us',
    'cmpName' : 'Comanpy Name  ',
    'add1' : 'Delhi ',
    'add2' : 'delhi india',
    'contactno' : '9876543210'
    }];
constructor() {}
ngOnInit () {

}

}
