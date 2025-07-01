import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
@Component({
  selector: 'app-flutter',
  standalone: true,
  imports: [RouterLink,ButtonDirective],
  templateUrl: './flutter.component.html',
  styleUrl: './flutter.component.scss'
})
export class FlutterComponent {

}
