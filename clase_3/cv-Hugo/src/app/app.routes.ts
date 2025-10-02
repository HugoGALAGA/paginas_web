import { Routes } from '@angular/router';
import { AboutMe } from './components/about-me/about-me';
import { SkillsComponent } from './components/skills/skills';
import { Experience } from './components/experience/experience';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    
    { path: 'about', component: AboutMe },
    { path: 'skills', component: SkillsComponent },
    { path: 'experience', component: Experience }
];