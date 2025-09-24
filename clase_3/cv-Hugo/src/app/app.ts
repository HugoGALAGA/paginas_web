// En: src/app/app.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ¡IMPORTANTE! Para *ngIf y *ngFor

// Importa TODOS los componentes que vas a usar
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { AboutMe } from './components/about-me/about-me';
import { SkillsComponent } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que esta línea esté
  // Añade la propiedad 'imports' y lista todo aquí
  imports: [
    CommonModule,
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