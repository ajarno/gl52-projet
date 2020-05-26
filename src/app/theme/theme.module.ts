import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuComponent } from './components/menu/menu.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, LayoutModule];

const MAT_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
];

const COMPONENTS = [
  MenuComponent,
];

@NgModule({
  imports: [...BASE_MODULES, ...MAT_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS, ...MAT_MODULES],
  declarations: [...COMPONENTS],
})
export class ThemeModule { }