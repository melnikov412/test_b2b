import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public id: string;
  public discription_all;
  public errorMessage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      my => {
        this.id = my.get('id');
        console.log('ID ----- : ' + this.id);
      },
      err => console.log(err)
    );
    const adress_custom = `http://www.omdbapi.com/?apikey=5123d5bc&i=${this.id}`;
    this.httpService.respAdress(adress_custom)
      .subscribe(
        (e) => {
          this.discription_all = e;
          // console.log('E');
          // console.log(e);
          // console.log(e.Title);
          // console.log(e.Year);
          // console.log('imdbID: ' + e.imdbID);
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }
}
