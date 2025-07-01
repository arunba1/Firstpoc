import { Component } from '@angular/core';
import { SidenavcompComponent } from '../sidenavcomp/sidenavcomp.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavcompComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
