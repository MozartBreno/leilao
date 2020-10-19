import { Lance } from '../lance.model';
import { LanceService } from '../lance.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './lance-create.component.html',
  styleUrls: ['./lance-create.component.css']
})
export class LanceCreateComponent implements OnInit {

  lance: Lance = {
    nome: '',
    valor: null,
  }

  constructor(private LanceService: LanceService,
              private router: Router) { }

  ngOnInit(): void {
    
  }
  createLance():void {
    this.LanceService.create(this.lance).subscribe(() => {
      this.LanceService.showMessage("inserido com sucesso");
      this.router.navigate(['/leilao'])
    })
  }
  cancel():void {
    this.router.navigate(['/leilao'])
  }
}
