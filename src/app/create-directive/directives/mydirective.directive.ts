import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';


@Directive({
    selector: '[highlightme]'
})

export class MyDirective implements OnInit {

    @Input() defColor;

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('green');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('red');
    } 

    private highlight(color){
        this.el.nativeElement.style.backgroundColor = color;
    }

    ngOnInit(){
        this.el.nativeElement.style.backgroundColor = this.defColor;
    }
}
