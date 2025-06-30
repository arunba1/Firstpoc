import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { RouterOutlet,RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
@Component({
  selector: 'app-sidenavcomp',
  standalone: true,
  imports: [SidebarModule,ButtonModule,RouterOutlet,RouterLink,FooterComponent,MenuModule,PanelMenuModule],
  templateUrl: './sidenavcomp.component.html',
  styleUrl: './sidenavcomp.component.scss'
})
export class SidenavcompComponent implements OnInit{
  sidebarVisible:boolean=true;
  displaysidebar:string = 'smallsidebar'
  constructor(private Primengconfig:PrimeNGConfig){}

  windowWidth : number = 0;
  windowHeight: number = 0;

  menuitem:MenuItem[] | undefined;
  menuitemBig:MenuItem[] | undefined;
  menuitemSmall:MenuItem[] | undefined;
  ngOnInit(): void {
    this.Primengconfig.ripple=true;
    this.menuitemBig = [
            { label: 'New Application', icon: 'pi pi-sparkles' },
            { label: 'Search Our Product', icon: 'pi pi-search' }
        ];

    this.menuitemSmall = [
            {icon: 'pi pi-sparkles' },
            {  icon: 'pi pi-search' }
        ];
        this.menuitem=this.menuitemSmall
  }

  @HostListener('window:resize',['$event'])
  onWindowResize(event:Event){
    this.windowWidth=(event.target as Window).innerWidth
    this.windowHeight=(event.target as Window).innerHeight
    console.log('window:resize : ',this.windowWidth,' X :', this.windowHeight);
    
  }

  mouseenterfunctionality(){
    this.displaysidebar='bigsidebar'
    this.menuitem=this.menuitemBig
  }

  mouseleavefunctionality(){
    this.displaysidebar='smallsidebar'
    this.menuitem=this.menuitemSmall
  }
}
