import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './service/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // public newSearche: string;
  // public errorMessage: string;
  // public search_out;
  // public my_list = [];
  // public my_list_switch = false;

  constructor(
     // private httpService: HttpService
  ) {}

  public ngOnInit() {
      // this.my_list = localStorage.getItem('MY_LIST');
      // console.log('localStorage: ' + this.my_list);
  }

  // public searche(form: NgForm) {
  //    const title = form.value.title;
  //    const adress_custom = `http://www.omdbapi.com/?apikey=5123d5bc&t=${title}&plot=short`;
  //   //  console.log(title);
  //   // console.log(adress_custom);
  //    this.httpService.respAdress(adress_custom)
  //      .subscribe(
  //        (e) => {
  //          this.search_out = e;
  //          console.log('search_out');
  //          console.log(this.search_out);
  //          console.log(this.search_out.Title);
  //          console.log(this.search_out.Year);
  //          console.log('imdbID: ' + this.search_out.imdbID);
  //          // localStorage.setItem('MY_LIST', this.search_out);
  //          // this.my_list = localStorage.getItem('MY_LIST');
  //         // this.my_list.push(this.search_out);
  //          //localStorage.setItem('MY_LIST', this.my_list);
  //         // this.my_list.push(this.search_out);
  //        },
  //        (error) => {
  //          this.errorMessage = error.message;
  //        }
  //      );
  // }
  //
  // public add_to_list() {
  //   this.my_list.push(this.search_out);
  //   this.my_list_switch = true;
  //   this.search_out = null;
  // }

}

