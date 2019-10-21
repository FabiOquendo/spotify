import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CardModule } from 'primeng/card';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import { DomseguroPipe } from '../pipes/domseguro.pipe';

@NgModule({
  declarations: [MainComponent, SearchComponent, NavbarComponent, DomseguroPipe],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    MenubarModule,
    TabViewModule,
    PanelModule,
    DialogModule,
    TableModule
  ]
})
export class PagesModule { }
