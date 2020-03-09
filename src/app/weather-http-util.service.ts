import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpUtilService {

  constructor(private http: HttpClient) { }

  weatherApiLink = 'https://api.openweathermap.org/data/2.5/weather';
  params = '?q=';
  city: string = "Barcelos";
  country = ',pt';
  apiKey = '&APPID=27572f5bbca7f98bcd805ae3a4f99413';
  celcius = '&units=metric';
  language = '&lang=pt';

   baseask() {
    // console.log(this.weatherApiLink + this.params + this.city + this.country + this.apiKey)
   return this.http.get(this.weatherApiLink + this.params + this.city + this.country + this.apiKey + this.celcius + this.language);
   }
  }
