import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
interface custumer{
  id:any,
  name:String,
  email:String
}
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<custumer[]> {
    return this.http.get<custumer[]>("http://localhost:8085/customers");
  }

  AddCustomer(MyCustumer:custumer):custumer{
    let added:custumer;
    this.http.post<custumer>("http://localhost:8085/customers",MyCustumer).subscribe({
      next:(data:custumer) => {
        added = data;
      },
      error: err => {console.log(err)}
    });
    // @ts-ignore
    return added;
  }
}
