import { Component, inject } from "@angular/core";
import { HomeService } from "../services/home.service";
import { HomeCardComponent } from "../home-card/home-card.component";
import { Home } from "../models/home";

@Component({
  selector: "app-favorite-homes",
  imports: [HomeCardComponent],
  templateUrl: "./favourite-home.component.html",
  styleUrl: "./favourite-home.component.css",
})
export class FavouriteHomeComponent {
  homeService = inject(HomeService);
  favoriteHomes = this.homeService.favoritesHomes;
}