import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../pipes/reverse-pipe';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, ReversePipe], 
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.css']
})
export class AboutMe {
  public myName: string = 'hugo galina';
  public today: Date = new Date();
}