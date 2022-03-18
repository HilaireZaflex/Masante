import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-liste-tension',
  templateUrl: './ajout-patient.page.html',
  styleUrls: ['./ajout-patient.page.scss'],
})
export class AjoutPatientPage implements OnInit {

  constructor(
    private service :UserService
  ) { }

  ngOnInit() {
    
  }

}
