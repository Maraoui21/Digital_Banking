import { Component } from '@angular/core';
import {CustomersService} from "../../../services/customers.service";

interface custumer{
  id:any,
  name:String,
  email:String
}
@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css']
})
export class CustomerModalComponent {
  name!:String;
  email!:String;
  statusMessage!:String;
  constructor(private customersService:CustomersService) {
  }
  hundleForm(custumerFormEvent: Event) {
    custumerFormEvent.preventDefault();
    const Form = custumerFormEvent.target as HTMLElement;
    const nameInput = Form.querySelector("#name") as HTMLInputElement;
    this.name = nameInput.value;
    const emailInput = Form.querySelector("#email") as HTMLInputElement;
    this.email = emailInput.value;
    const MyCustomer:custumer = {id:null,name:this.name,email:this.email};
    this.PostCustomer(MyCustomer);
  }
  PostCustomer(MyCustomer: custumer) {
    const added:custumer = this.customersService.AddCustomer(MyCustomer);
    if (added!=null){
      this.statusMessage = "Custumer is added !";
    }
  }
}
