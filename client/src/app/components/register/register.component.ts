import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterVievModel } from 'src/app/models/register/registerViewModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.max(50), Validators.min(5)]],
    confirmPassword: ['', [Validators.required, Validators.max(50), Validators.min(5)]]
  });
  registerVievModel?: RegisterVievModel;
  @Output() editEvent = new EventEmitter();

  constructor (private authService: AuthService, private fb: FormBuilder, private toastr: ToastrService) {}
   
  ngOnInit(): void {
    
  }

  register() {
    this.registerVievModel = this.registerForm!.value as RegisterVievModel;
    this.authService.register(this.registerVievModel).subscribe({
      next: response => {
        if(response.isSuccess)
        {
          this.toastr.success(response.message, "Success", {
            tapToDismiss: true,
            timeOut: 2000,
            progressBar: true,
          });
          this.registerForm.reset();
        }
        else
        {
          this.toastr.error(response.message, "Failed", {
            tapToDismiss: true,
            timeOut: 2000,
            progressBar: true,
          });
          this.registerForm.reset();
        }
      },
      error: errors => {
        console.log(errors);
        this.registerForm.reset();
      }
    });
  }
}
