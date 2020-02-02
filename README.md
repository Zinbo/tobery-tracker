# Tobery Tracker

## Why?
Track all toby carvery's we've been to

## How?

## Technology Used
- Cloud provider(?)
- Angular
- NativeScript
- TypeScript
- MicroInteractions (animations)?
- Google Maps
- Selenium (Scrappy?)
- Sass
- Material UI
- Node
- Mongo or Redis?

## Design

### Features
- Keep track of restaurants we've been to
- Keep record of star rating, photos, notes, data visited,
- Can tag restaurant as visitied and upload info
- Show a map of restaurants we haven't been to
- Put in route, shows you restaurant on the way
- Alerts when new restaurant added
- stats on visits

### Domain
```
Visit {
    time: datetime,
    review: text
    rating: integer (out of 5),
    photos: binary,
    location: geospatial
}
```

```
Restaurant {
    name: text,
    address: geospatial location
}
```

### Pages

#### Front Page
Picture, hamburger icon, stats

#### Add Visit Page
Choose restaurant and give review text, stars, add photos.

#### See All Visits Page
Show list with rating, click to see read only view (can edit?)

#### Find New Page
Show map, see circles, click circles, show how far we are from there.

#### Find en Route Page
put in start location and end location, put in threshold in miles, e.g. 5 miles. Shows places within threshold.

### Database

### Architecture

### ADRs

## Questions

## To do

### Set Up
- [x] Set up Azure account
- [ ] Set up deploying to Azure
- [x] Clean up Readmes

