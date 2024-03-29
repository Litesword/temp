import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class cardComponent implements OnInit {

  @Input() cardTitle!: string;
  @Input() cardText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
