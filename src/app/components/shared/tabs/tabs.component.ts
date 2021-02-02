import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabs = ['tab1', 'tab2', 'tab3'];
  constructor() {}
  ngOnInit() {}
}
