import { AfterContentChecked, AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2, ChangeDetectorRef, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const TIME_PIRCKER_VALUE_ACCESSOT: any;
export declare class ClockPickerComponent implements OnInit, AfterViewInit, ControlValueAccessor, AfterContentChecked {
    elem: ElementRef;
    renderer: Renderer2;
    private _cdRef;
    private _ngZone;
    private _document;
    hoursPlate: ElementRef;
    minutesPlate: ElementRef;
    plate: ElementRef;
    svg: ElementRef;
    g: ElementRef;
    hand: ElementRef;
    fg: ElementRef;
    bg: ElementRef;
    bearing: ElementRef;
    twelvehour: boolean;
    darktheme: boolean;
    placeholder: String;
    label: string;
    duration: number;
    showClock: boolean;
    buttonLabel: string;
    disabled: boolean;
    tabIndex: any;
    outlineInput: boolean;
    openOnFocus: boolean;
    timeChanged: EventEmitter<string>;
    isOpen: boolean;
    isMobile: any;
    touchDevice: boolean;
    showHours: boolean;
    moveEvent: string;
    tapEvent: string;
    elements: HTMLCollectionOf<Element>;
    elementNumber: any;
    dialRadius: number;
    outerRadius: number;
    innerRadius: number;
    tickRadius: number;
    diameter: number;
    isBrowser: any;
    hoursTicks: any;
    minutesTicks: any;
    selectedHours: any;
    endHours: string;
    touchSupported: any;
    mousedownEvent: any;
    mousemoveEvent: any;
    mouseupEvent: any;
    isMouseDown: boolean;
    documentClickFun: Function;
    constructor(elem: ElementRef, renderer: Renderer2, _cdRef: ChangeDetectorRef, _ngZone: NgZone, _document: any, platformId: string);
    ontouchmove(event: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    checkDraw(): void;
    mousedown(e: any, space?: any): void;
    hideKeyboard(): void;
    onFocusInput(): void;
    openBtnClicked(): void;
    private _handleOutsideClick;
    closeBtnClicked(): void;
    close(): void;
    clearTimeInput(): void;
    setHour(hour: String): void;
    setMinute(min: String): void;
    setAmPm(ampm: String): void;
    showHoursClock(): void;
    showMinutesClock(): void;
    generateTick(): void;
    setHand(x: any, y: any, roundBy5: any): void;
    offset(obj: any): {
        left: number;
        top: number;
    };
    onChangeCb: (_: any) => void;
    onTouchedCb: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
