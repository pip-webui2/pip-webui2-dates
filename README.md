# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Date components

![](https://img.shields.io/badge/license-MIT-blue.svg)

##Components

### Date-time range 

**Control visualizes specific time interval**

**Using**

```html
<pip-time-range [startDate]="startDate" [endDate]="endDate"></pip-time-range>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-dates/raw/master/doc/images/date-time-range.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-dates/raw/master/doc/images/date-time-range.png"/>
</a>

### Date-time range edit

**Control allows to specify time interval rounded to days or half-hour chunks**

**Using**



```html
<pip-time-range-edit [startDate]="startDate" [endDate]="endDate" 
    (startDateChange)="startDate = $event" (endDateChange)="endDate = $event">
</pip-time-range-edit>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-dates/raw/master/doc/images/date-time-range-edit.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-dates/raw/master/doc/images/date-time-range-edit.png"/>
</a>

## Pipes

### Elapsed

**Shows localized time interval from date to now**

**Using**

```html
    {{ dateInPast | elapsed }}
```

### Localized date

**Shows localized date**

**Using**

```html
    {{ startDate | localizedDate: 'dd MMM yyyy HH:mm' }}
```

## Installation

To install this module using npm:

```bash
npm install pip-webui2-dates --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
