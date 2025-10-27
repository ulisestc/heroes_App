import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  template: `
    <p>
      heroe works!
    </p>
  `,
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => {
      console.log( id ); } );
    

  }
}
