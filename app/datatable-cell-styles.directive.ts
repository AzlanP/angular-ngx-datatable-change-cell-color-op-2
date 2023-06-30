import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDatatableCellStyles]'
})
export class DatatableCellStylesDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public modificarEstiloCelda(row: number, col: number, backgroundColor: string, color: string): void {
    const table = this.elementRef.nativeElement as HTMLElement;

    // Obtiene las filas y verifica si existe la fila y la columna especificadas
    const rows = table.getElementsByTagName('datatable-body-row');
    if (row < 0 || row >= rows.length) {
      console.error('Fila inválida');
      return;
    }

    const cells = rows[row].getElementsByTagName('datatable-body-cell');
    if (col < 0 || col >= cells.length) {
      console.error('Columna inválida');
      return;
    }

    // Obtiene la celda y modifica su estilo
    const cell = cells[col] as HTMLElement;
    this.renderer.setStyle(cell, 'background-color', backgroundColor);
    this.renderer.setStyle(cell, 'color', color);
  }
}

