import { Component } from '@angular/core';
import { HomesGridComponent } from '../home-grid/home-grid.component';
//import { PaginationComponent } from '../pagination/pagination.component';
import { FavouriteHomeComponent } from '../favourite-home/favourite-home.component';
@Component({
  selector: 'app-home-list',
  imports: [HomesGridComponent, FavouriteHomeComponent],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
})
export class HomeListComponent {}