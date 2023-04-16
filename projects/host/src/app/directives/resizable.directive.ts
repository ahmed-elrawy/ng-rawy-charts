import { Directive, ElementRef, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
    selector: '[resize]', // Attribute selector
})
export class ResizableDirective implements OnInit, OnDestroy {
    subscription$: Subscription = new Subscription();

    @Input() resizableGrabWidth = 5;
    @Input() direction = 'right'; // or left
    @Input() resizableMinWidth = 10;
    @Output() updateSize = new EventEmitter<number>();

    dragging = false;

    currentWidth =0
    mousedountclientX = 0


    constructor(private el: ElementRef) {
        const self = this;

        const EventListenerMode = { capture: true };

        function preventGlobalMouseEvents() {
            (document.body.style as any)['pointer-events'] = 'none';
        }

        function restoreGlobalMouseEvents() {
            (document.body.style as any)['pointer-events'] = 'auto';
        }



        const mouseMoveG = (evt: any) => {
            if (!this.dragging) {
                return;
            }
            evt.stopPropagation();
        };



        const mouseUpG = (evt: any) => {

            if (!this.dragging) {
                return;
            }
            restoreGlobalMouseEvents();
            this.dragging = false;
            evt.stopPropagation();
            if(this.mousedountclientX >evt.screenX){
                this.updateSize.emit(-1);
            }else{
                this.updateSize.emit(1);
            }

        };

        const mouseDown = (evt: any) => {
            this.mousedountclientX = evt.screenX
            if (this.inDragRegion(evt)) {
                this.dragging = true;
                preventGlobalMouseEvents();
                evt.stopPropagation();
            }
        };

        const mouseMove = (evt: any) => {
            if (this.inDragRegion(evt) || this.dragging) {
                el.nativeElement.style.cursor = 'col-resize';
            } else {
                el.nativeElement.style.cursor = 'default';
            }
        };

    

        this.subscription$.add(
            fromEvent(document, 'mousemove').pipe(
            ).subscribe((ev) => {
                mouseMoveG(ev)
            }),
        )
        this.subscription$.add(
            fromEvent(document, 'mouseup').pipe(
            ).subscribe((e) => {
                mouseUpG(e)
            })
        )
        this.subscription$.add(
            fromEvent(el.nativeElement, 'mousedown').pipe(
            ).subscribe((e) => {
                this.currentWidth = el.nativeElement.style.width.slice(0.-2)
                mouseDown(e)
            })
        )
        this.subscription$.add(fromEvent(el.nativeElement, 'mousemove').pipe(
        ).subscribe((e) => {
            mouseMove(e)

        }))
    }

    ngOnInit(): void {
        this.el.nativeElement.style['border-right'] =
            this.resizableGrabWidth + 'px solid darkgrey';


            this.el.nativeElement.style['border-left'] =
            this.resizableGrabWidth + 'px solid darkgrey';
    }

    inDragRegion(evt: any) {
        return (
            this.el.nativeElement.clientWidth -
            evt.clientX +
            this.el.nativeElement.offsetLeft <
            this.resizableGrabWidth
        );
    }

    ngOnDestroy(): void {
		this.subscription$.unsubscribe();
	}
}
