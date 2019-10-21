import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  login() {
    let user: User = {
      username: this.username,
      password: this.password
    }
    this.authService.login(user).then((result:boolean) => {
      if(result) {
        this.authService.getToken().subscribe(
          data => {
            if(data) {
              localStorage.setItem('token', data.access_token);
              this.router.navigate(['/pages/home']);
            }
          }
        );
      } else {
        this.messageService.add({severity:'error', summary:'Invalid login', detail:'Invalid username or password'});
      }
    });
    
  };
}
