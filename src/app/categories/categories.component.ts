import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
declare const M: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: any[] | undefined;
  public categoryName: string | undefined;
  public categoryDescription: string | undefined;
  public recipeName: string | undefined;

  constructor(private categoryService: CategoryService) { }

  getCategories(): any {
    // @ts-ignore
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    }, (err: any) => console.log(err));
  }

  createCategory(): any {
    const newCategory = {
      name: this.categoryName,
      description: this.categoryDescription
    };
    this.categoryService.createCategory(newCategory).subscribe((response: any) => {
      // @ts-ignore
      this.categories = [...this.categories, response];
    }, (err: any) => console.log(err));
  }

  createRecipe(category: { id: any; }): any {
    console.log('component: ', category, this.recipeName);
    const newRecipe = {name: this.recipeName};
    this.categoryService.createRecipe(category, newRecipe).subscribe((response: any) => {
      console.log(response);
    });
  }

  deleteCategory(category: any): any {
    // @ts-ignore
    const index = this.categories.indexOf(category);
    console.log(index);
    this.categoryService.deleteCategory(category).subscribe((response: any) => {
      // @ts-ignore
      this.categories.splice(index, 1);
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.getCategories();

    if (!localStorage.getItem('currentUser')){
      const toastHTML = '<span> You must login to see your categories</span>';
      M.toast({html: toastHTML});
    }
  }

}
