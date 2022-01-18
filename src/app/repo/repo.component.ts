import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  
    repos!:any;
    foundR= false;
    fetchedrepo!: string;

  constructor(private repoService:SearchService) { }

  ngOnInit(): void {   
  }

  @ViewChild('formInputs') findRepoForm!: NgForm;

  Repsearch() {
    this.fetchedrepo = this.findRepoForm.value.search;
    
    this.repoService.findRepo(this.fetchedrepo).then((response:any) => {
        this.repos = this.repoService.frepos;
        this.foundR = true;
      }
    );

    }

}

