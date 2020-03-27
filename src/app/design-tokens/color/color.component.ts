import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  public drawingColors = [
    {
      name: 'Line',
      hexCode: '#434343',
      usage: 'Line, border and text color',
      textColor: 'light',
      backgroundColor: 'line'
    },
    {
      name: 'Background',
      hexCode: '#ffffff',
      usage: 'Background of operators or text',
      textColor: 'dark',
      backgroundColor: 'background'
    },
    {
      name: 'Inactive',
      hexCode: '#b7b7b7',
      usage: 'Inactive lines, shapes and text',
      textColor: 'light',
      backgroundColor: 'inactive'
    }
  ];

  public firstPalettes = [
    {
      name: 'Notification 1',
      hexCode: '#FFCB21',
      textColor: 'dark',
      backgroundColor: 'palette-1__noti-1'
    },
    {
      name: 'Notification 2',
      hexCode: '#89C540',
      textColor: 'dark',
      backgroundColor: 'palette-1__noti-2'
    },
    {
      name: 'Notification 3',
      hexCode: '#F77C00',
      textColor: 'dark',
      backgroundColor: 'palette-1__noti-3'
    },
    {
      name: 'Notification 4',
      hexCode: '#6734BA',
      textColor: 'light',
      backgroundColor: 'palette-1__noti-4'
    }
  ];

  public secondPalettes = [
    {
      name: 'Notification 1',
      hexCode: '#D01C8B',
      textColor: 'dark',
      backgroundColor: 'palette-2__noti-1'
    },
    {
      name: 'Notification 2',
      hexCode: '#F1B6DA',
      textColor: 'dark',
      backgroundColor: 'palette-2__noti-2'
    },
    {
      name: 'Notification 3',
      hexCode: '#B8E186',
      textColor: 'dark',
      backgroundColor: 'palette-2__noti-3'
    },
    {
      name: 'Notification 4',
      hexCode: '#4DAC26',
      textColor: 'light',
      backgroundColor: 'palette-2__noti-4'
    }
  ];

  public thirdPalettes = [
    {
      name: 'Notification 1',
      hexCode: '#36175E',
      textColor: 'light',
      backgroundColor: 'palette-3__noti-1'
    },
    {
      name: 'Notification 2',
      hexCode: '#553285',
      textColor: 'light',
      backgroundColor: 'palette-3__noti-2'
    },
    {
      name: 'Notification 3',
      hexCode: '#7B52AB',
      textColor: 'light',
      backgroundColor: 'palette-3__noti-3'
    },
    {
      name: 'Notification 4',
      hexCode: '#9768D1',
      textColor: 'dark',
      backgroundColor: 'palette-3__noti-4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
