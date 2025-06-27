import { Component } from '@angular/core';
import { SidenavcompComponent } from '../sidenavcomp/sidenavcomp.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavcompComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
