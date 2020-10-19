import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-cliente-crud',
  templateUrl: './lance-crud.component.html',
  styleUrls: ['./lance-crud.component.css']
})
export class LanceCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLanceCreate(): void{
    this.router.navigate(['/leilao/create'])
  }
}
