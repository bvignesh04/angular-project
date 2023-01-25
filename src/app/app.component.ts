import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members:string[] = [];
  newMember:string = '';
  errorMsg:string ='';
  numberOfTeams:number | "" ='';
  teams:string[][] = [];
  // allMember: number;
  addMember(){
    if(!this.newMember){
      this.errorMsg = "Name can't be empty"
      return;
    }
    this.members.push(this.newMember)
    this.newMember ="";
    this.errorMsg="";
    // console.log(this.members)
  }

  onInput(member:string){
this.newMember = member;
  }

  teamInput(noOfTeam:string){
    this.numberOfTeams = Number(noOfTeam)
  }

  generateTeams(){
    if(!this.numberOfTeams || '' || this.numberOfTeams <= 0){
      this.errorMsg = 'Invalid number for team'
      return;
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMsg = 'Not enough numbers'
    }
    
    this.errorMsg = ''
    const  allMember = [...this.members]
    // console.log(allMember)
    while(allMember.length){
      for(let i=0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMember.length)
        console.log(randomIndex);
        const member = allMember.splice(randomIndex,1)[0];
        // console.log('After',allMember)
        if(!member)break;
        if(this.teams[i]){
          this.teams[i].push(member)
        }
        else{
          this.teams[i] = [member];
        }
        console.log( 'test',this.teams)
  
     
      
      }
      
      
    }
    this.members = [];
    this.numberOfTeams= '';
    console.log(this.teams)
    }
    
}
