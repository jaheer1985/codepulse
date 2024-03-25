import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryModel } from '../models/add-category-model';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  providers:[CategoryService],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  model: AddCategoryModel;

  constructor(private categoryService: CategoryService)
  {
    this.model = {

      Name: '',
      UrlHandle: ''

    };
  
  }
 
  SaveTheForm()
  {
    this.categoryService.addCategory(this.model).subscribe ({

      next: (Response) => {
        console.log ("query successful!");
      }
      
    });
  }
}
