import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FireserviceService } from '../../../../app/fireservice.service';
//import { AngularFireDatabase } from "@angular/fire/database";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  form: FormGroup;
  password:string="";
  email:string="";
  
  constructor(public router:Router, public fireService:FireserviceService) { 
    
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

  onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.fireService.loginWithEmail({email:this.form.value['email'],password:this.form.value['password']}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
          //alert('Welcome '+ res['name']);
          this.router.navigateByUrl('tabs');
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
    //console.log(this.form.value);
  }

  signup(){
    this.router.navigateByUrl('sign-up');
  }

}
