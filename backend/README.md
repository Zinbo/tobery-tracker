# Tobery Tracker - Backend

## To do

## To install
- Download MongoDB
- Install with custom setup

### Set Up
- [x] Create Node application
- [x] Set up package structure
- [x] Set up local db
- [x] Set up mlab db
- [x] Set up different environments
- [x] Check tests still run
- [x] Get any recommended VS Code extensions
- [x] Check out how to use winston logging

### Set up Data Layer
- [x] Set up domain classes
- [x] Set up CRUD functionality

### Misc
- [ ] Set up dependency injection
- [ ] Set up validation in domain classes
- [ ] Add interface for proxy
- [ ] Add tests
- [ ] Add error handling
- [ ] Set up null checks


## In new Environment
Right now, you have to manually retrieve restaurant data when deployed to a new environment, do:
```
GET https://nodebackend-dot-tobery-tracker.appspot.com/restaurants/refresh-from-source
```