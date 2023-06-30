import { Component, Renderer2, ViewChild } from '@angular/core';
import { DatatableCellStylesDirective } from './datatable-cell-styles.directive';
import { InitDivDirective } from './init.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './material.scss'],
})
export class AppComponent {
  @ViewChild(DatatableCellStylesDirective)
  datatableCellStylesDirective: DatatableCellStylesDirective;

  constructor() {}
  // Datos de ejemplo para columnsProperties
  columnsProperties = {
    columns: [
      {
        prop: 'name',
        name: 'Nombre',
        showColumn: true,
        canEdit: true,
        showInMobile: true,
        control: 'text',
      },
      {
        prop: 'age',
        name: 'Edad',
        showColumn: true,
        canEdit: true,
        showInMobile: true,
        control: 'number',
        backgroundColor: 'blue',
      },
      {
        prop: 'email',
        name: 'Email',
        showColumn: true,
        canEdit: true,
        showInMobile: true,
        control: 'email',
        backgroundColor: 'red',
      },
      {
        prop: 'address',
        name: 'Dirección',
        showColumn: true,
        canEdit: true,
        showInMobile: true,
        control: 'text',
      },
    ],
  };

  // Datos de ejemplo para tableProperties
  tableProperties = {
    backgroundColor: '#333',
    bodyFontColor: '#225',
    canEdit: true,
    canAdd: true,
    canDelete: true,
    selectionType: 'checkbox',
    headerFont: 'Arial',
    headerFontSize: 18,
    headerFontColor: '#888',
  };

  // Datos de ejemplo para rows
  rows = [
    {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
      address: '123 Main St',
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'janesmith@example.com',
      address: '456 Elm St',
    },
    {
      name: 'Bob Johnson',
      age: 40,
      email: 'bobjohnson@example.com',
      address: '789 Oak St',
    },
    // Agrega más filas de datos según sea necesario
  ];

  // Datos de ejemplo para page
  page = {
    pageNumber: 1,
    size: 10,
    totalElements: this.rows.length,
  };

  // Datos de ejemplo para messages
  messages = {
    totalMessage: 'Total de filas:',
  };

  // Datos de ejemplo para basicProperty
  basicProperty = {
    fontColor: '#000000',
  };

  // Datos de ejemplo para selectionBackgroundColor
  selectionBackgroundColor = '#e0e0e0';

  getCellClass(rowIndex: number, colIndex: number): string {
    // Lógica para determinar la clase CSS basada en rowIndex y colIndex
    console.log('row: ', rowIndex + ' col ' + colIndex);
    if (rowIndex === 0 && colIndex === 1) {
      return 'highlight-cell';
    } else {
      return '';
    }
  }

  customProp = [];
  apply(col, row) {
    this.datatableCellStylesDirective.modificarEstiloCelda(
      col,
      row,
      'yellow',
      'red'
    );
  }
}
