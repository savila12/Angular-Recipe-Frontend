import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
declare const M: { toast: (arg0: { html: string; }) => void; };

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: any[] | undefined;
  public categoryName: string | undefined;
  public categoryDescription: string | undefined;

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

  ngOnInit(): void {
    this.getCategories();

    if (!localStorage.getItem('currentUser')){
      const toastHTML = '<span> You must login to see your categories</span>';
      M.toast({html: toastHTML});
    }
  }

}
