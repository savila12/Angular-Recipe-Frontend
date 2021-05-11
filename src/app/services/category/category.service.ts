import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const herokuUrl = 'http://damp-bayou-38809.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/categories`, requestOptions);
  }

  createCategory(newCategory: { name: string | undefined; description: string | undefined; }): any {
    console.log(newCategory);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/categories/`, newCategory, requestOptions);
  }

  getCategory(categoryId: string | null): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/categories/${categoryId}`, requestOptions);
  }

  // tslint:disable-next-line:variable-name
  createRecipe(category: any, newRecipe: any): any {
    console.log('service: ', category, newRecipe);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/categories/${category.id}/recipes`, newRecipe, requestOptions);
  }

  deleteCategory(category: any): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .delete(`${herokuUrl}/api/categories/${category.id}`, requestOptions);
  }

  deleteRecipe(category: any, recipeId: any): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .delete(`${herokuUrl}/api/categories/${category.id}/recipes/${recipeId}`, requestOptions);
  }
}
