import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginViewModel } from 'src/app/models/login/loginViewModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.max(50), Validators.min(5)]],
    confirmPassword: ['', [Validators.required, Validators.max(50), Validators.min(5)]]
  });
  loginVievModel?: LoginViewModel;
  @Output() editEvent = new EventEmitter();

  constructor(private authService: AuthService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login() {
    this.loginVievModel = this.loginForm.value as LoginViewModel;
    this.authService.login(this.loginVievModel).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.toastr.success("Login was successfully!", "Success", {
            tapToDismiss: true,
            timeOut: 2000,
            progressBar: true,
          });
          this.loginForm.reset();
        }
        else {
          this.toastr.error("Login wasn't successfully!", "Failed", {
            tapToDismiss: true,
            timeOut: 2000,
            progressBar: true,
          });
          this.loginForm.reset();
        }
      },
      error: errors => {
        console.log(errors);
        this.loginForm.reset();
      }
    });
  }
}
