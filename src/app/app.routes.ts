import { Routes } from '@angular/router';
import { SidenavcompComponent } from './sidenavcomp/sidenavcomp.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        
    },
    {
        path:'test',
        component:TestComponent
    },
    {
        path:'flutter',
        loadChildren:async()=>(await import('@screens/fluttercomp')).routes,
    }
];
