import { Component, OnInit, Output, EventEmitter ,Input} from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { ShareService } from "../../services/share.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators
} from "@angular/forms";

import {Router} from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  result: boolean;
  loginForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public share: ShareService,
    public builder: FormBuilder,
    public router : Router
  ) {}

  ngOnInit() {
    // this.dialogRef.updatePosition({ top: `30px`,
    // right: `40px`});
    this.loginForm = this.builder.group({
      username: [
        "",
        [Validators.required, Validators.minLength(8), Validators.pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/
        ) ] //ValidateAdmin
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        ]
      ]
    });
  }
  get username() {
    return this.loginForm.get("username");
  }
  get password() {
    return this.loginForm.get("password");
  }

  log(x) {
    console.log(x);
  }
  onSubmit() {
    if(this.loginForm.value.username == "ThanhQuan123" && this.loginForm.value.password == "WhoisJoe?1")
    {
      console.log("Submited");
      this.dialogRef.close();
      this.share.setTrue();
      console.log(this.share.loged)
      this.router.navigateByUrl('/admin')
    }
    else{
      this.share.setFalse();
      this.dialogRef.close();
      this.router.navigateByUrl('')
    }
    
  }
  
}
