import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = "assets/student.json";
  constructor(private http: HttpClient) { }
 getall():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}`);
 }
  getbyEmail(email: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/search?email=${email}`); 
  }
  addstudent(records: Student): Observable<any> {
    return this.http.post(`${this.baseUrl}`, { data: records });
  }
  updatestudent(id: string, records: Student): Observable<any> {
    return this.http.put(`${this.baseUrl}/id/${id}`, { data: records })
  }
  deletestudent(name: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/name/${name}`)
  }
  getbyid(id: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/search?id=${id}`);
  }
  
}
