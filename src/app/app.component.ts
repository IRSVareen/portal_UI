import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { DataService } from './services/data.service';
declare var google: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('suka') image!: ElementRef;
    title = 'portal';
    suka!: HTMLElement;
    ejectedCount: number = 45126;
    rejectedCount: number = 124587;
    gpuTemperature: number = 65;
    cpuTemperature: number = 62;
    machineRunning: boolean = true;
    conveyorSpeed: number = 3.21;
    motorAmpere: number = 5.19;
    visionTemperature: number = 68;
    panelTemperature: number = 65;
    leftCameraTemperature: number = 58;
    rightCameraTemperature: number = 58;
    // isCPUError = false;
    // isGPUError = false;
    // ispanelError = false;
    // isvisionError = false;
    // isleftCamError = false;
    // isrightCamError = false;
    isConveyorHover = false;
    isCpuHover = false;
    isGpuHover = false;
    isVisionHover = false;
    isPanelHover = false;
    isCamHover = false;
    isMotorHover = false;
    isEjectedHover = false;
    isRejectedHover =false;
    isStop = false;
    serverData: any;

    constructor(private dataService: DataService) {
        this.serverData = dataService
        setInterval(() => {
            this.updateValue();
            // this.showTemp();
        }, 1000);
        (window as any).initTranslate =
            this.googleTranslateElementInit.bind(this);
    }
    ngOnInit(): void {
        this.loadGoogleTranslate();
    }
    ngAfterViewInit(): void {
        this.suka = this.image.nativeElement;
    
        setTimeout(() => { // Defer DOM manipulation
            const icon = document.querySelector('.goog-te-gadget-icon') as HTMLElement;
            if (icon) {
                icon.style.display = 'none';
            }
        }, 500);
    }
    
    
    updateValue() {
        requestAnimationFrame(() => {
            this.rejectedCount += Math.floor(Math.random() * 10);
            this.ejectedCount += Math.floor(Math.random() * 10);
            this.cpuTemperature += Math.random() * 1.5;
            this.gpuTemperature += Math.random() * 2;
            this.visionTemperature += Math.random() * 1.5;
            this.panelTemperature += Math.random() * 1.5;
            this.leftCameraTemperature += Math.random() * 1.5;
            this.rightCameraTemperature += Math.random() * 1.5;
            this.conveyorSpeed += Math.random() * 1.5;
            this.motorAmpere += Math.random();
        });
    }
    
    // showTemp() {
    //     this.isCPUError = this.cpuTemperature > 70;
    //     this.isGPUError = this.gpuTemperature > 70;
    //     this.isvisionError = this.visionTemperature > 80;
    //     this.ispanelError = this.panelTemperature > 75;
    //     this.isleftCamError = this.leftCameraTemperature > 65;
    //     this.isrightCamError = this.rightCameraTemperature > 65
    // }
    showConveyorData(show: boolean){
        this.isConveyorHover = show;
    }
    showCpuData(show: boolean){
        this.isCpuHover = show;
    }
    showGpuData(show: boolean){
        this.isGpuHover = show;
    }
    showPanelData(show: boolean){
        this.isPanelHover = show;
    }
    showVisionData(show: boolean){
        this.isVisionHover = show;
    }
    showCamData(show: boolean){
        this.isCamHover = show;
    }
    showMotorData(show: boolean){
        this.isMotorHover = show;
    }
    showEjectedData(show: boolean){
        this.isEjectedHover = show;
    }
    showRejectedData(show: boolean){
        this.isRejectedHover = show;
    }
    trackByErrorCode(index: number, item: any) {
        return index;
    }
    addAnimation() {
        this.suka.classList.add('sukaEjectScale');
        // document.querySelector('.ejectCount')?.setAttribute('display', 'none');
    }
    removeAnimation() {
        this.suka.classList.remove('sukaEjectScale');
        this.suka.classList.add('sukaUndoScale');
        setTimeout(() => {
            this.suka.classList.remove('sukaUndoScale');
        }, 2000);
    }
    
    startHoverEffect(borderBox: HTMLElement) {
        borderBox.style.display = 'block';
    }
    endHoverEffact(borderBox: HTMLElement) {
        borderBox.style.display = 'none';
    }
    getImageCord(event: any) {
        console.log(event?.offsetX);
        console.log(event?.offsetY);
    }


    loadGoogleTranslate() {
        if (document.querySelector('script[src*="translate_a/element.js"]')) {
            this.googleTranslateElementInit();
            return;
        }
    
        setTimeout(() => { // Defer loading to avoid render blocking
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=initTranslate';
            script.defer = true;
            document.body.appendChild(script);
        }, 1000); // Delay loading after page load
    }
    

    googleTranslateElementInit() {
        if (!document.getElementById('google_translate_element')) {
            const translateDiv = document.createElement('div');
            translateDiv.id = 'google_translate_element';
            document.body.appendChild(translateDiv);
        }

        new google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                includedLanguages: 'en,gu,hi,ta,te,mr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        );
    }
}
