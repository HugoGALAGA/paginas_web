import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.css']
})
export class JobsComponent implements OnInit {

  public jobs: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
  }
}