import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[initDiv]',
})
export class InitDivDirective implements AfterViewInit , OnChanges{
  @Input() rowIndex: number;
  @Input() colIndex: number;
  @Input() font: any;
  @Input() fontSize: any;
  @Input() fontColor: any;
  @Input() backgroundColor: any;
  private _customProp: Array<any> = [];
  public static bodyCells: Array<Array<HTMLElement>> = [];
  private initialized : boolean = false;
  @Input()
  get customProp(): Array<any> {
    return this._customProp;
  }

  set customProp(value: Array<any>) {
    this._customProp = value;
    // this.applyCustomStyle();
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.applyCustomStyle();
    this.initialized = true;
    console.log("initialized")
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes.customProp && this.initialized) {
      // Aquí puedes acceder al nuevo valor de customProp
      const newCustomProp = changes.customProp.currentValue;

      
    }
  }

 

  applyCustomStyle() {
    // Obtiene el elemento <div> actual
    // console.log("row: ", this.rowIndex + " col " + this.colIndex)
    const element = this.elementRef.nativeElement;

    // Encuentra el elemento padre con la etiqueta "datatable-body-cell"
    const bodyCell = this.findParentByTagName(element, 'datatable-body-cell');

    // Si se encuentra el elemento padre, le asigna la clase deseada
    const customStyle = this.customProp.find(
      (x) => x.col == this.colIndex && x.row == this.rowIndex
    );

    if (bodyCell) {
      this.renderer.setStyle(
        bodyCell,
        'background-color',
        customStyle ? customStyle['backgroundColor'] : this.backgroundColor
      );
      this.renderer.setStyle(bodyCell, 'color', this.fontColor);
    }


      if (!InitDivDirective.bodyCells[this.rowIndex]) {
        InitDivDirective.bodyCells[this.rowIndex] = [];
      }

      InitDivDirective.bodyCells[this.rowIndex][this.colIndex] = bodyCell;
      //console.log(InitDivDirective.bodyCells);

    // this.cdr.detectChanges();
   // console.log(this.elementRef.nativeElement.parentNode.parentNode.classList);
  }



 

  findParentByTagName(element: HTMLElement, tagName: string): HTMLElement {
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === tagName) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
}
