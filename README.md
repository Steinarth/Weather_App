# Weather in major cities
A simple weather application written in react-native where users can search for cities and see how the weather is at that time.
The App uses the [Metaweather API](https://www.metaweather.com/api/) to get the current forecast of the given city.

## Motivation
The motivation for building this app was that I wanted to dive into how react-native works. I find that there is no better 
way to learn a programming language, than to start with a simple project and therefor decided to create a simple application 
that fetches real time data from a forecast API.

## Screenshots

<img width="350" height="600" src="/assets/Cairo.jpg"> <img align="right" width="350" height="600" src="/assets/birmingham.jpg">
<p align="center">
  <img height="600" width="350" src="/assets/error_screen.jpg">
</p>

## Running the project with Expo
### Prerequisites
- nodejs
- npm
- Expo for android or ios (Depending on what phone you have)

### Set-up
Inside the root of the project (where the package.json file is) run:
```bash
$ yarn install
$ yarn start
```
Now you should have a the Expo development tools running on localhost, and should open the Expo application in your phone and scan the QR code displayed on localhost with your phone.
