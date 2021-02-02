import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  @Input() officeOptions: any;
  @Input() medicalOptions: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor() {}
  ngOnInit() {
    console.log(this.officeOptions, '========');

    // this.dropdownList = [
    //   { id: 1, itemName: 'India' },
    //   { id: 2, itemName: 'Singapore' },
    //   { id: 3, itemName: 'Australia' },
    //   { id: 4, itemName: 'Canada' },
    //   { id: 5, itemName: 'South Korea' },
    //   { id: 6, itemName: 'Germany' },
    //   { id: 7, itemName: 'France' },
    //   { id: 8, itemName: 'Russia' },
    //   { id: 9, itemName: 'Italy' },
    //   { id: 10, itemName: 'Sweden' },
    // ];
    // TO DO: Assign list based on label name
    this.dropdownList = this.officeOptions;
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: 'myclass custom-class',
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
