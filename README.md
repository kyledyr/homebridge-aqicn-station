# homebridge-aqicn

[![npm](https://img.shields.io/npm/v/homebridge-aqicn) ![npm](https://img.shields.io/npm/dt/homebridge-aqicn)](https://www.npmjs.com/package/homebridge-aqicn) [![verified-by-homebridge](https://badgen.net/badge/homebridge/verified/purple)](https://github.com/homebridge/homebridge/wiki/Verified-Plugins)

[aqicn](http://aqicn.org) plugin for [Homebridge](https://github.com/nfarina/homebridge)

## Installation

1. Install Homebridge using the [official instructions](https://github.com/homebridge/homebridge/wiki).
2. Install this plugin
3. Update your configuration file. See sample config.json snippet below.

### Configuration

Configuration sample:

```json
"platforms": [
    {
        "platform": "aqicn",
        "api_key": "N4wbhJlHEywbmGbV01SL3gHqrKKNavOfrLTt1OnZ",
        "station": "@245" 
        "polling_minutes": 30,
        "inactive_hours": 1
    }
]
```

#### Fields

* "platform": Must always be "aqicn" (required)
* "api_key": Your API key for calling aqicn, you can get one free from [here](https://aqicn.org/data-platform/token/) (required)
* "station": the station code, should look like @#### or A######. (required)
* "polling_minutes": Number of minutes between updates, polling disabled if no entry (optional)
* "inactive_hours": Number of hours before sensor is marked inactive. Set to 0 to always show active. (Default: `1`) (optional)
