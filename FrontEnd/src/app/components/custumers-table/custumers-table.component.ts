import {Component, OnInit} from '@angular/core';
import {CustomersService} from "../../services/customers.service";
interface custumer{
  id:number,
  name:String,
  email:String
}
@Component({
  selector: 'app-custumers-table',
  templateUrl: './custumers-table.component.html',
  styleUrls: ['./custumers-table.component.css']
})
export class CustumersTableComponent implements OnInit{
  custumers!: custumer[];
  user: custumer = {
    id: 2,
    name: "ahmed",
    email: "khalid"
  };
  constructor(private customerService:CustomersService) {
  }
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.custumers = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
