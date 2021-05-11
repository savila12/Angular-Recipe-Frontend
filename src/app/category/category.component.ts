import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null | undefined;
  category: any;
  recipeName: string | undefined;
  recipeTime: string | undefined;
  recipePortions: number | undefined;
  recipeIngredients: string | undefined;
  recipeSteps: string | undefined;
  recipeIsPublic: boolean | undefined;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  createRecipe(): any {
    console.log('component: ', this.category, this.recipeName);
    const newRecipe = {
      name: this.recipeName,
      time: this.recipeTime,
      portions: this.recipePortions,
      ingredients: this.recipeIngredients,
      steps: this.recipeSteps,
      isPublic: this.recipeIsPublic
    };
    this.recipeName = '';
    this.categoryService.createRecipe(this.category, newRecipe).subscribe((response: any)  => {
      this.category.recipeList = [...this.category.recipeList, response];

      console.log(response);
    });
  }
  deleteRecipe(recipe: any): any {
    const index = this.category.recipeList.indexOf(recipe);
    console.log(index);
    this.categoryService.deleteRecipe(this.category, recipe.id).subscribe((response: any) => {
      this.category.recipeList.splice(index, 1);
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( (params) => {
        this.categoryId = params.get('id');
        // @ts-ignore
        this.categoryService.getCategory(this.categoryId).subscribe((response: any) => {
          this.category = response;
          console.log(this.category);
        });
      });
  }

}
