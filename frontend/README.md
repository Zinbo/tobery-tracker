# Tobery Tracker - Frontend

## To do

### Set Up
- [x] Check tests all work
- [x] Get any recommended VS Code extensions

### Set up Home Page
- [x] Set up Material UI colours properly
- [x] Design HTML for home page
- [x] Set up routes

### Set up Add visit page
- [ ] Design page
- [ ] Hook up to back end
- [ ] Set up back end for save

## How to deploy
```
1. Go to storage bucket
2. Upload dist folder
3. Run gsutil rsync -r gs://tobery-tracker.appspot.com ./tobery-tracker-angular
4. cd tobery-tracker-angular
5. gcloud app deploy
```
