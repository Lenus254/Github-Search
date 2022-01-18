import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public myGitName = 'lenus254';
  user: any;
  public githubUser!: string;
    public users!:any;
  

  myusername: string = 'lenus254'
    
  constructor(private userService:SearchService) { }

  findUser () {
    this.userService.UpdateUsername(this.myusername);
    this.userService.getUser().subscribe((user:any) => {
      // console.log(user);
      this.user = user;
    });

  }



  ngOnInit(): void {

  
  }


}
