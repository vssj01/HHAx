import { Component, OnInit } from '@angular/core';
import { WorkslistService } from '@app/services/workslist.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  getData: any;
  constructor(public workslist: WorkslistService) {}
  ngOnInit() {
    this.workslist.getWorksListData().subscribe((res: any) => {
      this.getData = res;
      console.log(this.getData);
    });
  }

}
