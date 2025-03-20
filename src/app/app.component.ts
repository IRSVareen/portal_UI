import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DataService } from './services/data.service';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('suka') image!: ElementRef;
  title = 'portal';
  suka!: HTMLElement;
  ejectedCount: number = 45126;
  rejectedCount: number = 124587;
  gpuTemperature: number = 65;
  cpuTemperature: number = 62;
  conveyorSpeed: number = 3.21;
  motorAmpere: number = 5.19;
  airPressure: number = 5.5;
  visionTemperature: number = 68;
  panelTemperature: number = 62;
  leftCameraTemperature: number = 58;
  rightCameraTemperature: number = 58;
  isConveyorHover = false;
  isCpuHover = false;
  isGpuHover = false;
  isVisionHover = false;
  isPanelHover = false;
  isCamHover = false;
  isMotorHover = false;
  isAirPressureHover = false;
  isEjectedHover = false;
  isRejectedHover = false;
  isStop = false;
  serverData: any;

  constructor(private dataService: DataService) {
    this.serverData = dataService.serverData;
    // console.log(dataService);
    setInterval(() => {
      this.updateValue();
    }, 1000);
    (window as any).initTranslate = this.googleTranslateElementInit.bind(this);
  }

  ngAfterViewInit(): void {
    this.suka = this.image.nativeElement;
    this.loadGoogleTranslate();
    setTimeout(() => {
      // Defer DOM manipulation
      const icon = document.querySelector(
        '.goog-te-gadget-icon'
      ) as HTMLElement;
      if (icon) {
        icon.style.display = 'none';
      }
    }, 500);
  }

  updateValue() {
    requestAnimationFrame(() => {
      this.rejectedCount += Math.floor(Math.random() * 10);
      this.ejectedCount += Math.floor(Math.random() * 10);
      this.cpuTemperature = parseFloat(
        (this.cpuTemperature + Math.random() * 1.2).toFixed(2)
      );
      if (this.cpuTemperature > 90 || this.gpuTemperature > 90 || this.visionTemperature > 90 || this.leftCameraTemperature > 90 || this.rightCameraTemperature > 90) { this.isStop = true; }
      this.gpuTemperature = parseFloat(
        (this.gpuTemperature + Math.random() * 1.2).toFixed(2)
      );
      this.visionTemperature = parseFloat(
        (this.visionTemperature + Math.random() * 1.2).toFixed(2)
      );
      this.panelTemperature = parseFloat(
        (this.panelTemperature + Math.random() * 1.2).toFixed(2)
      );
      this.leftCameraTemperature = parseFloat(
        (this.leftCameraTemperature + Math.random() * 1.2).toFixed(2)
      );
      this.rightCameraTemperature = parseFloat(
        (this.rightCameraTemperature + Math.random() * 1.2).toFixed(2)
      );
      this.conveyorSpeed = parseFloat(
        (this.conveyorSpeed + Math.random() * 2).toFixed(2)
      );
      this.motorAmpere = parseFloat(
        (this.motorAmpere + Math.random()).toFixed(2)
      );
      this.airPressure = parseFloat(
        (this.airPressure + Math.random() * 2).toFixed(2)
      );
    });
  }

  showConveyorData(show: boolean) {
    this.isConveyorHover = show;
  }
  showCpuData(show: boolean) {
    this.isCpuHover = show;
  }
  showGpuData(show: boolean) {
    this.isGpuHover = show;
  }
  showPanelData(show: boolean) {
    this.isPanelHover = show;
  }
  showVisionData(show: boolean) {
    this.isVisionHover = show;
  }
  showCamData(show: boolean) {
    this.isCamHover = show;
  }
  showMotorData(show: boolean) {
    this.isMotorHover = show;
  }
  showAirPressureData(show: boolean) {
    this.isAirPressureHover = show;
  }
  showEjectedData(show: boolean) {
    this.isEjectedHover = show;
  }
  showRejectedData(show: boolean) {
    this.isRejectedHover = show;
  }
  trackByErrorCode(index: number, item: any) {
    return index;
  }
  addAnimation() {
    this.suka.classList.add('sukaEjectScale');
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
    const existingIframe = document.querySelector(
      'iframe.goog-te-banner-frame'
    );
    if (existingIframe) {
      existingIframe.remove();
    }
    const script = document.createElement('script');
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=initTranslate';
    script.async = true;
    script.onload = () => this.googleTranslateElementInit();
    document.body.appendChild(script);
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

  getConveyorImage() {
    if (this.isStop) {
      return '/assets/icons/conveyor.png';
    }

    if (this.conveyorSpeed > 4.01 && this.conveyorSpeed < 7.12) {
      return '/assets/icons/conveyor-warning.png';
    } else if (this.conveyorSpeed > 7.12 || this.conveyorSpeed < 2.99) {
      return '/assets/icons/conveyor-error.png';
    }
    return '/assets/icons/conveyor-belt-running.png';
  }

  getCpuImage() {
    if (this.isStop) {
      return '/assets/icons/cpu.png';
    }

    if (this.cpuTemperature > 70 && this.cpuTemperature < 80) {
      return '/assets/icons/cpu-warning.png';
    } else if (this.cpuTemperature > 80) {
      return '/assets/icons/cpu-temp-error.png';
    }
    return '/assets/icons/cpu-running.png';
  }

  getGpuImage() {
    if (this.isStop) {
      return '/assets/icons/gpu.png';
    }

    if (this.gpuTemperature > 70 && this.gpuTemperature < 80) {
      return '/assets/icons/gpu-warning.png';
    } else if (this.gpuTemperature > 80) {
      return '/assets/icons/gpu-temp-error.png';
    }
    return 'assets/icons/gpu-running.png';
  }

  getPanelImage() {
    if (this.isStop) {
      return '/assets/icons/panel.png';
    }

    if (this.panelTemperature > 70 && this.panelTemperature < 75) {
      return '/assets/icons/panel-warning.png';
    } else if (this.panelTemperature > 75) {
      return '/assets/icons/panel-error.png';
    }
    return '/assets/icons/panel-running.png';
  }

  getVisionImage() {
    if (this.isStop) {
      return '/assets/icons/left-cam.png';
    }

    if (this.visionTemperature > 70 && this.visionTemperature < 80) {
      return '/assets/icons/left-cam-warning.png';
    } else if (this.visionTemperature > 80) {
      return '/assets/icons/left-cam-error.png';
    }
    return '/assets/icons/left-cam-running.png';
  }

  getLeftCamImage() {
    if (this.isStop) {
      return '/assets/icons/left-cam.png';
    }

    if (this.leftCameraTemperature > 65 && this.leftCameraTemperature < 80) {
      return '/assets/icons/left-cam-warning.png';
    } else if (this.leftCameraTemperature > 80) {
      return '/assets/icons/left-cam-error.png';
    }
    return '/assets/icons/left-cam-running.png';
  }

  getRightCamImage() {
    if (this.isStop) {
      return '/assets/icons/left-cam.png';
    }

    if (this.rightCameraTemperature > 65 && this.rightCameraTemperature < 80) {
      return '/assets/icons/left-cam-warning.png';
    } else if (this.rightCameraTemperature > 80) {
      return '/assets/icons/left-cam-error.png';
    }
    return '/assets/icons/left-cam-running.png';
  }

  getMotorImage() {
    if (this.isStop) {
      return '/assets/icons/motor.png';
    }

    if (this.motorAmpere > 6.0 && this.motorAmpere < 7.12) {
      return '/assets/icons/motor-warning.png';
    } else if (this.motorAmpere > 7.12) {
      return '/assets/icons/motor-error.png';
    }
    return '/assets/icons/motor-running.png';
  }

  getAirPressureImage() {
    if (this.isStop) {
      return '/assets/icons/air.png';
    }

    if (this.airPressure > 7.4 && this.airPressure < 8.0) {
      return '/assets/icons/air-warning.png';
    } else if (this.airPressure > 8.0 || this.airPressure < 4.0) {
      return '/assets/icons/air-error.png';
    }
    return '/assets/icons/air-running.png';
  }
}
