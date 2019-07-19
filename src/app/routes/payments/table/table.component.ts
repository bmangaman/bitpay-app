import { Component, ElementRef, HostListener, Input, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewChecked, OnInit {
  @Input() data: Array<any>;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('event', event.target.innerHeight);
    this.resizeToBe100Height();
  }

  public objectKeys = Object.keys;

  constructor(
    public elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.resizeToBe100Height();
  }

  ngAfterViewChecked() {
    this.resizeToBe100Height();
  }

  resizeToBe100Height(): void {
    let parentElementComputedStyle = window.getComputedStyle(this.elementRef.nativeElement.parentElement);
    let parentElementHeight: number = 
      parseInt(parentElementComputedStyle.getPropertyValue('height').slice(0, -1)) - 
      parseInt(parentElementComputedStyle.getPropertyValue('padding-top').slice(0, -1)) -
      parseInt(parentElementComputedStyle.getPropertyValue('padding-bottom').slice(0, -1));
    let childrenHeights: number = 0;

    const children = this.elementRef.nativeElement.parentElement.children;
    for (let child of children) {
      let childComputedStyle = window.getComputedStyle(child);
      if (child !== this.elementRef.nativeElement) {
        childrenHeights +=
          parseInt(childComputedStyle.getPropertyValue('height').slice(0, -1)) +  
          parseInt(childComputedStyle.getPropertyValue('padding-top').slice(0, -1)) +
          parseInt(childComputedStyle.getPropertyValue('padding-bottom').slice(0, -1)) +
          parseInt(childComputedStyle.getPropertyValue('margin-top').slice(0, -1)) +
          parseInt(childComputedStyle.getPropertyValue('margin-bottom').slice(0, -1));
      }
    }
    
    const tableHeaderHeight: number = this.elementRef.nativeElement.querySelector('thead').clientHeight;
    const finalHeight: number = parentElementHeight - (tableHeaderHeight + childrenHeights);

    this.elementRef.nativeElement.querySelector('tbody').style['max-height'] = `${finalHeight}px`;
  }

  generateCellClass(title: string, value: any): {} {
    let classes: string = title;

    if (title === 'status') {
      classes += ` ${value}`;
    }
    
    return classes;
  }

}
