import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegisterMode: boolean = false;
  isLoginMode: boolean = false;

  ngOnInit(): void {
    
  }

  editRegisterMode() {
    this.isRegisterMode = !this.isRegisterMode;
    if(this.isLoginMode) this.isLoginMode = !this.isLoginMode;
  }

  editLoginMode() {
    this.isLoginMode = !this.isLoginMode;
    if(this.isRegisterMode) this.isRegisterMode = !this.isRegisterMode;
  }
}
