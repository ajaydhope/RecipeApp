import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('MaxicanChickenSoup','Mexican chicken tortilla soup','http://cdn.recipes100.com/v/3d71d60ce0e34b774f9cce09c10db85d.jpg'),
    new Recipe('MaxicanChickenSoup','Mexican chicken tortilla soup','http://cdn.recipes100.com/v/3d71d60ce0e34b774f9cce09c10db85d.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
