import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private skills = ['Angular', 'TypeScript', 'CSS', 'HTML5', 'Bootstrap'];
  private jobs = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev', 'QA Tester'];

  constructor() { }

  getSkills(): string[] {
    return this.skills;
  }

  getJobs(): string[] {
    return this.jobs;
  }
}