import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverData = {
    totalEjected: 45032,
    totalIgnored: 3402,
    totalRejected: 2312,
    totalUnknown: 7800,
    deviceId: 'SUK-AL-V3-2.0-10044',
    Efficiency: 24,
    sessionCount: 2,
    selectedRecipe: 'Recipe_1',
    sDate: '2025-02-19',
    sTime: '15:55:00',
    log: [
        {
            errorCode: 1002,
            message: 'Pressure low',
            errorFrequency: 2,
            errorTime: '2025-02-19 14:11:03',
            errorCause: 'Air Pressure might have gone below 4.5 bar',
            errorRemedy:
                'Check the pressure from compressor unit,Check the shut off valve in ON position',
        },
        {
            errorCode: 1002,
            message: 'Pressure low',
            errorFrequency: 2,
            errorTime: '2025-02-19 14:11:03',
            errorCause: 'Air Pressure might have gone below 4.5 bar',
            errorRemedy:
                'Check the pressure from compressor unit,Check the shut off valve in ON position',
        },
    ],
};
}
