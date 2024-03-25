import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/Category/category-list/category-list.component';
import { AddCategoryComponent } from './features/Category/add-category/add-category.component';

export const routes: Routes = [

    {
        path: 'admin/categories',
        component: CategoryListComponent,
        pathMatch: 'full'
    },

    {
        path: 'admin/categories/add',
        component: AddCategoryComponent,
        pathMatch: 'full'
    }
];
