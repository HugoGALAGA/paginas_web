import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  public isDarkMode: boolean = false;
  public isContactVisible: boolean = true;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode; 
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleContact(): void {
    this.isContactVisible = !this.isContactVisible;
  }
}