import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  gitUserResults!:User
  repositoryResults:any;
  constructor(private userService:SearchService) { }

  ngOnInit(): void {
    this.userService.user().subscribe((gitResults:any)=>{
      this.gitUserResults=gitResults

      
      
    },)
    // error=>{
    //   console.log("Shoking Error",error);
      
    



    this.userService.fetchRepos().subscribe((RepositoryResults:any)=>{
      this.repositoryResults=RepositoryResults
        //  console.log("Repositories",RepositoryResults);
            
    },
    // error=>{

      // console.log("ResultsError",error);
      
    )
  }

}