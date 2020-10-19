import { Lance } from './lance.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LanceService {

  baseUrl = "http://localhost:3000/lance"
  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: Lance): Observable<Lance>{
    return this.http.post<Lance>(this.baseUrl,cliente);
  }
  read(): Observable<Lance[]>{
    return this.http.get<Lance[]>(this.baseUrl)
  }
}
