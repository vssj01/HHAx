import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/shared/tabs/tabs.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { MultiSelectComponent } from './components/shared/multi-select/multi-select.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SearchSectionComponent } from './components/shared/search-section/search-section.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DatagridComponent } from './components/shared/datagrid/datagrid.component';

import { TreeviewModule } from 'ngx-treeview';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MultiSelectComponent,
    SearchSectionComponent,
    LayoutComponent,
    DatagridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AngularMultiSelectModule,
    FormsModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    CollapseModule,
    TooltipModule.forRoot(),
    TreeviewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
