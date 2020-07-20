import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string;
  body: string;
  inscricao: Subscription;
  insc: Subscription;

  constructor(private route: ActivatedRoute) {

    //this.title = this.route.snapshot.params['title']
    //this.body = this.route.snapshot.params['body']

   }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe((params: any) =>{

      this.title = params['title']

    })

    this.insc = this.route.params.subscribe((params: any) =>{

      this.body = params['body']

    })

  }

  ngOnDestroy(){

    this.inscricao.unsubscribe();
    this.insc.unsubscribe();

  } 

}
