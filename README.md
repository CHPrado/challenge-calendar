# Calendar

A calendar app to add your reminders. You can set a title, description, color, city, date and time with weather forecast based on the city for the previous 5 days and nex 7 days.

Check it running on [Heroku](https://challenge-calendar.herokuapp.com/).

## Setup app

In the project directory, run:

### `npm install`

If there is any dependency problems in the installation, adding `--legacy-peer-deps` to `npm install` should make it work.

### `npm install --legacy-peer-deps`

## API Keys

You have to setup your Google API key in the file `public/index.html`:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=<YOUR_KEY>&libraries=places"></script>
```

And your Open Weather API Key in the file `src/services/forecastApi/forecastApi.ts`:

```javascript
const API_KEY = "YOUR_KEY"
```

## Run the app

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

