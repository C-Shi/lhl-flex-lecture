# Advanced Topic
- [x] Angular at a glance
- [x] Docker 101

### React vs Angular vs Vue

|Parameters|React|Angular|Vue|
|---|---|---|---|
|Framework Size|Small|Large|Small|
|CLI tool|create-react-app|@angular/cli|@vue/cli|
|Language|JavaScript|Typescript|JavaScript|

![Statistics](./images/angular-vs-vue-vs-react.jpeg)

### Build a small Weather App using Angular

![App Design](./images/weather_app.png)

### Angular HTTP modules and Observables
1. Angular by default use **Observables** instead of **Promise**
2. In Observable pattern, Observer **Subscribe** to Observables
3. This also include angular HTTP modules
4. Weather Requesing Example
    - Promise:
        - John ask Bob to provide the weather
        - Bob "promise" to give John weather when he has internet access
        - Bob then search for the weather data and told John it was Sunny with 25C
        - Bob left
    - Obsersables:
        - John ask Bob to providing live weather in real time, and write it down in a white board
        - Bob then "Subscribe" to a weather forcasting radio
        - Everytime there is an update from the forcasing, Bob will update the whiteboard info
        - John is able to keep weather data update real time

### RxJS and BehaviorSubject
1. Reactive Extenstions for JavaScript
2. Built-in angular observables Library
3. `BehaviorSubject` is a type of RxJS Observables used for statement management

```ts
export class WeatherService {

  constructor() { }

  weatherSubject = new BehaviorSubject({
    city: "",
    weather: "",
    temperature: ""
  })

  // set weather value
  setWeather(city: string, weather: string, temperature: string) {
    this.weatherSubject.next({
      city, weather, temperature
    })
  }

  // get weather value
  getWeather() {
    return this.weatherSubject.asObservable()
  }
}
```

### Containerization and Docker
##### What is Containerization
> Containerization is a software deployment process that bundles an application’s code with all the files and libraries it needs to run on any infrastructure. Traditionally, to run any application on your computer, you had to install the version that matched your machine’s operating system.

##### What is Docker
> Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. 

##### Image
> A snapshot of your App and its environment in a form of layering (Node -> App -> Nginx)
##### Container
> A realization of image and an actual runtime for your App

- Install Docker Desktop
- Add a `Dockerfile` to the project
    ```
    FROM node:18.18-bullseye as build

    WORKDIR /app

    RUN npm install -g @angular/cli

    COPY ./package.json ./

    RUN npm install

    COPY . .

    EXPOSE 4200

    CMD ["ng", "serve", "--host", "0.0.0.0"]
    ```
- Build docker image `docker build`
- Run container `docker run`