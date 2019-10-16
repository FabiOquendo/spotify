import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CardModule } from 'primeng/card';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [MainComponent, SearchComponent, NavbarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    MenubarModule,
    TabViewModule
  ]
})
export class PagesModule { }
