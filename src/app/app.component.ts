import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavcompComponent } from './sidenavcomp/sidenavcomp.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidenavcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstpoc';
}
