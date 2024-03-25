import { Injectable } from '@angular/core';
import { AddCategoryModel } from '../models/add-category-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryModel): Observable<void> {

    return this.http.post<void>('https://localhost:7021/api/Categories', model);

  }
}
