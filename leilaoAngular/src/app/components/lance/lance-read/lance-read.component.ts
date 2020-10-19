import { LanceService } from '../lance.service';
import { Lance } from '../lance.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LanceDataSource } from './lance-read-datasource';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './lance-read.component.html',
  styleUrls: ['./lance-read.component.css']
})
export class LanceReadComponent implements OnInit {

  

  displayedColumns = ['nome','valor'];
  lances = []
  constructor(private lanceService: LanceService) { }

  ngOnInit(): void {
    this.lanceService.read().subscribe(lances =>{
      console.log(lances);
      this.lances = lances;
    })
  }

}
