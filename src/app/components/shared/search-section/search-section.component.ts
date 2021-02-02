import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WorkslistService } from '../../../services/workslist.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent implements OnInit {
  title = 'angular-ops-worklist';
  isCollapsed = false;
  dropdownSettings = {};
  getData: any;
  workListGroup: FormGroup;
  locations: any;
  desciplineDropdown: any;
  medicalDropdown: any
  medicalValues: any
  constructor(public workslist: WorkslistService) {}
  ngOnInit() {
    this.items = this.getItems([this.simpleItems, this.simpleItems2]);
    this.desciplineDropdown = this.getItems([this.descipline1, this.descipline2]);
    this.medicalDropdown = this.getItems([this.medical1, this.medical2]);
    this.workListGroup = new FormGroup({
      expiryDate: new FormControl('30'),
      team: new FormControl('all'),
      caregiverName: new FormControl(''),
      branch: new FormControl('all'),
      location: new FormControl('all'),
    });
    this.workslist.getWorksListData().subscribe((res: any) => {
      this.getData = res;
      console.log(this.getData);
    });
  }
  onSubmit() {
    if (this.isCollapsed) {
      let office = this.officeOptions;
      let medical = this.medicalValues;
      let expiryDate = this.workListGroup.get('expiryDate').value;
      let team = this.workListGroup.get('team').value;
      let caregiverName = this.workListGroup.get('caregiverName').value;
      let location = this.workListGroup.get('location').value;
      let branch = this.workListGroup.get('branch').value;
      let descipline = this.desciplineValues
      this.dropdownSettings = {
        office,
        medical,
        expiryDate,
        team,
        branch,
        location,
        caregiverName,
        descipline       
        
      };
      console.log(this.dropdownSettings);
      // if (this.dropdownSettings === {a:'a'}) {
      //   //get json form db
      // }
      this.getData = [
        {
          "medical": "Annual Health Assessment",
          "expirationdate": "01/28/2021",
          "reporteddate": "01/21/2021",
          "caregiver": "Rishi",
          "caregiverid": "1295",
          "location": "location1",
          "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "assignedto": "Lucky",
          "office": "primary",
          "branch":"branch1",
          "descipline":"Option1",
          "taskstatus": "open"
        }
      ];
    } else {
      let office = this.officeOptions;
      let medical = this.medicalValues;
      let expiryDate = this.workListGroup.get('expiryDate').value;
      
      this.dropdownSettings = {
        office,
        medical,
        expiryDate,
      };
      this.getData = [
        {
          "medical": "Annual Health Assessment",
          "expirationdate": "01/28/2021",
          "reporteddate": "01/21/2021",
          "caregiver": "Rishi",
          "caregiverid": "1295",
          "location": "location1",
          "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "assignedto": "Lucky",
          "office": "primary",
          "branch":"branch1",
          "descipline":"Option1",
          "taskstatus": "open"
        }
      ];
      console.log('this.dropdownSettings : ' ,this.dropdownSettings);
    }
  }
  // treeview code
  officeOptions: any;
  items: any;
  config: TreeviewConfig = {
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 500,
    hasDivider: true,
  };

  simpleItems = {
    text: 'India01',
    value: 'India01',
    checked:false,
    children: [
      {
        text: 'Gujarat',
        value: 'Gujarat',
        checked:false,
        children: [
          {
            text: 'Ahmedabad',
            value: 'Ahmedabad',
            disabled: false,
            collapsed: true,
            checked: false,
            children: [
              {
                text: 'Support Varmora Office',
                value: 'Support Varmora Office',
                checked:false,
              },
            ],
          },
        ],
      },
    ],
  };

  simpleItems2 = {
    text: 'Organization',
    value: 'Organization',
    collapsed: true,
    checked:false,
    children: [
      {
        text: 'Arizona',
        value: 'Arizona',
        checked:false,
        children: [
          {
            text: 'Phoenix',
            value: 'Phoenix',
            checked:false,
            children: [
              {
                text: 'Support Phoenix',
                value: 'Support Phoenix',
                checked:true,
              },
            ],
          },
        ],
      },
    ],
  };

  descipline1 = {
    text: 'd1',
    value: 'd1',
    checked:true
  };
  descipline2 = {
    text: 'd2',
    value: 'd2',
    checked:true
  };
  desciplineValues: any;
  onDesciplineSelected($event){
    this.desciplineValues = $event

  }
  medical1 ={text: 'm1', value: 'm1', checked: true}
  medical2 = {text: 'm2', value: 'm2', checked: true}
  onMedicalSelected($event){
    this.medicalValues = $event
  }

 

  getItems(parentChildObj) {
    let itemsArray = [];
    parentChildObj.forEach((set) => {
      itemsArray.push(new TreeviewItem(set));
    });

    return itemsArray;
  }
  onSelectedChange($event) {
    this.officeOptions = $event;
  }
  resetValues() {
    console.log('smnfgjshg');
  }
}
