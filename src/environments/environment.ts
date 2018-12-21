// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCh4_gDXNMKT6Fu2iNij45o8lDvpHg85Ng",
        authDomain: "luxuria-international.firebaseapp.com",
        databaseURL: "https://luxuria-international.firebaseio.com/",
        projectId: "luxuria-international",
        storageBucket: "gs://luxuria-international.appspot.com/",
        messagingSenderId: "447721828758"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import "zone.js/dist/zone-error";  // Included with Angular CLI.