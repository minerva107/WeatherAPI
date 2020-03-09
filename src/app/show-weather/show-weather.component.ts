import { Component, OnInit } from '@angular/core';
import { WeatherHttpUtilService } from '../weather-http-util.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
  export class ShowWeatherComponent implements OnInit {

  temp: string;
  stateWeather: string;
  icon = 'http://openweathermap.org/img/wn';
  iconVal: string;
  type = 'png';
  src: string;
  myWeather: WeatherHttpUtilService;


  constructor(weatherService: WeatherHttpUtilService) {
    this.myWeather = weatherService;
  }

  getAndFill() {
    // this.weatherService.city = 'Barcelos';
    this.myWeather.baseask().subscribe(

      data => {
        this.temp = data['main']['temp'];
        this.stateWeather = data['weather'][0]['description'];
        this.iconVal = data ['weather'][0]['icon'];
        this.src = this.icon + this.iconVal + this.type;


      });
    }

    ngOnInit() {
    }
}
