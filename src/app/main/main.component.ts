import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public newSearche: string;
  public errorMessage: string;
  public search_out;
  public my_list = [];
  public my_list_switch = false;

  constructor(
    private router: Router,
    private httpService: HttpService
  ) {}

  public ngOnInit() {
  }

  public goToDiscription(id: number, type: string) {
    this.router.navigate(['im', 'group', type, id]);
  }

  public searche(form: NgForm) {
    const title = form.value.title;
    const adress_custom = `http://www.omdbapi.com/?apikey=5123d5bc&t=${title}&plot=short`;
    this.httpService.respAdress(adress_custom)
      .subscribe(
        (e) => {
          this.search_out = e;
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }

  public add_to_list() {
    this.my_list.push(this.search_out);
    this.my_list_switch = true;
    this.search_out = null;
  }
}
