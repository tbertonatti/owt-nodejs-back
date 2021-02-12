## Open Weather Test - NodeJS Backend
[Frontend](https://github.com/tbertonatti/owt-react-front)
## Requirements

* Git
* Node
* An OpenWeather API Key

## Setup

### Set environment variables:

If using Windows with powershell:

```bash
$env:OWKEYID="<yourOpenWeatherApiKey>"
```
If using Windows with cmd:

```bash
set OWKEYID=<yourOpenWeatherApiKey>
```
If using Linux:

```bash
export OWKEYID=<yourOpenWeatherApiKey>
```

### Clone the repo and install the dependencies:

```bash
git clone https://github.com/tbertonatti/owt-nodejs-back.git
cd owt-nodejs-back
npm install
```

## Start the app

To start the express server, run the following

```bash
npm start
```

Open [http://localhost:8000/v1/](http://localhost:8000/v1/) to take a look around of the app.

## Run the tests

To run the tests, run the following

```bash
npm test
```