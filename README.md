# mapkitjs

An npm module for Apple's Mapkit JS for use with Vue. This implementation uses the latest version of Mapkit JS and places its contents inside of a types folder.
Based on Harvey Conner's repo, but with extra types from [mapkit-typescript](https://www.npmjs.com/package/mapkit-typescript).

![NPM version](https://img.shields.io/npm/v/@solidsilver/mapkitjs)

## Installation

```
npm install @solidsilver/mapkitjs
```

## Usage

```ts
import mapkit from "@solidsilver/mapkitjs";
```
To init MapKitJS:
```ts
mapkit.init({
      authorizationCallback: function(done: (jwt: string) => void) {
        // callback functionality goes here
        done(jwt);
      },
      language: "en"
    });
```

Then, create a new map for the component:
```ts
// As a getter:
get map_id(): string {
    return `map-${this._uid}`;
}
// Assuming your component has a map object:
this.map = new mapkit.Map(this.map_id);
```
See [Apple's documentation](https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973920-mapkit_map) on additional options on map creation.

From here, `mapkit` and `this.map` can be accessed and modified as [documented](https://developer.apple.com/documentation/mapkitjs).

## Updating

In order to update, simply replace the contents of the `types` folder, submit an issue, or make a pull request to update to the latest version.

The latest contents are pulled from:

https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js
