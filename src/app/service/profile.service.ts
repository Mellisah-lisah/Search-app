import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class ProfileService {
  private username :string;
  private Clientid  = ' 64f43088843952a17963';
  private Clientsecret = 'bed7a54e2aa776ae8e858d42c76224ac566b7fbf';

  constructor(private http:HttpClient) {
    console.log("it wotks");
    this. username = 'Mellisah-lisah'
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "? client_id=" +this.Clientid + "&client_secret="+
 + this.Clientsecret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "? client_id=" +this.Clientid + "&client_secret="+
 + this.Clientsecret)
  }
}
