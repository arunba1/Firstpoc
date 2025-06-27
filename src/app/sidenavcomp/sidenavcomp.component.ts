import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidenavcomp',
  standalone: true,
  imports: [SidebarModule,ButtonModule,RouterOutlet,RouterLink],
  templateUrl: './sidenavcomp.component.html',
  styleUrl: './sidenavcomp.component.scss'
})
export class SidenavcompComponent implements OnInit{
  sidebarVisible:boolean=true;
  displaysidebar:string = 'smallsidebar'
  constructor(private Primengconfig:PrimeNGConfig){}

  windowWidth : number = 0;
  windowHeight: number = 0;

  ngOnInit(): void {
    this.Primengconfig.ripple=true;
  }

  @HostListener('window:resize',['$event'])
  onWindowResize(event:Event){
    this.windowWidth=(event.target as Window).innerWidth
    this.windowHeight=(event.target as Window).innerHeight
    console.log('window:resize : ',this.windowWidth,' X :', this.windowHeight);
    
  }

  mouseenterfunctionality(){
    this.displaysidebar='bigsidebar'
  }

  mouseleavefunctionality(){
    this.displaysidebar='smallsidebar'
  }
}
