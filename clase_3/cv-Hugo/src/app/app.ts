import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { AboutMe } from './components/about-me/about-me';
import { SkillsComponent } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    NavbarComponent,
    AboutMe,
    SkillsComponent,
    Experience,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'cv-hugo';
  
  public isExperienceVisible: boolean = true;

  toggleExperienceVisibility(): void {
    this.isExperienceVisible = !this.isExperienceVisible;
  }
}