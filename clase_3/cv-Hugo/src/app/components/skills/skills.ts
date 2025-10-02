import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DataService } from '../../services/data'; 

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent implements OnInit {
  
  public skills: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
  }
}