import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Skil } from '../models/skil';

@Injectable({
  providedIn: 'root'
})
export class SkilsService {

  skilsName: string[] = [
    'Angular',
    'Flutter',
    'Java Spring Boot',
    'Node JS',
    'Mongo DB',
    'MySQL',
    'PostgreSQL',
    'Sql Server',
    'Sass',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'C#',
    'Tomcat',
    'NestJS',
    'Docker',
    'Git',
    'GitHub',
    'GitLab',
    'GitFlow',
    'Gulp',
    'Firebase',
    'GraphQL',
    'Python',
    'Java',
    'Sql',
    'Git',
    'GitHub',
    'GitLab',
    'GitFlow',
    'Bootstrap'  
  ];

  constructor( private http: HttpClient ) { }

  getSkils():Observable<any> {  
    return this.http.get<Skil[]>('assets/skils.json');    
  }

  getThem():Observable<any> {
    return this.http.get<any>('assets/db/theme.json');
  }

}
