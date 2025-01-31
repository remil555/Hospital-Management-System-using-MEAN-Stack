import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly BASE_URL = 'http://localhost:4000/api/';

    constructor(private http: HttpClient) {}

    // Error handler
    private handleError(error: any): Observable<never> {
        console.error('API Error:', error);
        return throwError(() => new Error(error.message || 'Server Error'));
    }

    // User APIs
    login(data: any): Observable<any> {
        return this.http.post<any>(`${this.BASE_URL}user/login`, data)
            .pipe(catchError(this.handleError));
    }
    registerUser(data: any): Observable<any> {
      return this.http.post<any>(`${this.BASE_URL}user/register`, data)
        .pipe(catchError(this.handleError));
    }
    

    // Patient APIs
    getPatients(): Observable<any> {
        return this.http.get<any>(`${this.BASE_URL}patient/get`)
            .pipe(catchError(this.handleError));
    }

    addPatient(data: any): Observable<any> {
        return this.http.post<any>(`${this.BASE_URL}patient/add`, data)
            .pipe(catchError(this.handleError));
    }

    updatePatient(id: string, data: any): Observable<any> {
        return this.http.put<any>(`${this.BASE_URL}patient/update/${id}`, data)
            .pipe(catchError(this.handleError));
    }

    deletePatient(id: string): Observable<any> {
        return this.http.delete<any>(`${this.BASE_URL}patient/delete/${id}`)
            .pipe(catchError(this.handleError));
    }

    // Doctor APIs
    getDoctors(): Observable<any> {
        return this.http.get<any>(`${this.BASE_URL}doctor/get`)
            .pipe(catchError(this.handleError));
    }

    addDoctor(data: any): Observable<any> {
        return this.http.post<any>(`${this.BASE_URL}doctor/add`, data)
            .pipe(catchError(this.handleError));
    }

    updateDoctor(id: string, data: any): Observable<any> {
        return this.http.put<any>(`${this.BASE_URL}doctor/update/${id}`, data)
            .pipe(catchError(this.handleError));
    }

    deleteDoctor(id: string): Observable<any> {
        return this.http.delete<any>(`${this.BASE_URL}doctor/delete/${id}`)
            .pipe(catchError(this.handleError));
    }

    // Appointment APIs
    getAppointments(): Observable<any> {
        return this.http.get<any>(`${this.BASE_URL}appointment/get`)
            .pipe(catchError(this.handleError));
    }

    addAppointment(data: any): Observable<any> {
        return this.http.post<any>(`${this.BASE_URL}appointment/add`, data)
            .pipe(catchError(this.handleError));
    }

    updateAppointment(id: string, data: any): Observable<any> {
        return this.http.put<any>(`${this.BASE_URL}appointment/update/${id}`, data)
            .pipe(catchError(this.handleError));
    }

    deleteAppointment(id: string): Observable<any> {
        return this.http.delete<any>(`${this.BASE_URL}appointment/delete/${id}`)
            .pipe(catchError(this.handleError));
    }
}
