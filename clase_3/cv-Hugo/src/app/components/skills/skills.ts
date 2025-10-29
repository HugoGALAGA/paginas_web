import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-skills',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {

  private allSkills: string[] = ['HTML5', 'CSS3', 'JavaScript', 'Bash', 'Git'];
  
  public filteredSkills: string[] = [...this.allSkills];

  filterSkills(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    
    this.filteredSkills = this.allSkills.filter(skill => 
      skill.toLowerCase().includes(searchTerm)
    );
  }
}