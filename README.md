# React Native Google Place Autocomplete

React Native components for the Place Autocomplete service of the Google Places API Web Service.

## Installing

```
npm install react-native-google-place-autocomplete --save
```

## Example Usage

```
import GooglePlaceAutocomplete from 'react-native-google-place-autocomplete';

export default function Autocomplete() {
    return (
        <GooglePlaceAutocomplete
            googleAPIKey="YOUR API KEY"
            onResult={result => console.log}
            placeholder="Type to search..." />
    );
}
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `debounce` | `number` | `250` | The number of milliseconds to delay before requesting autocomplete predictions. |
| `googleAPIKey` | `string` |  | Your Google API Key. The **Google Places API Web Service** must be enabled for this key. |
| `placeholder` | `string` |  | The placeholder text to be displayed in the autocomplete input when the `value` is empty. |
| `value` | `string` |  | The value of the autocomplete input. |

## Events

| Name | Returns | Notes |
|---|---|---|
| `onChangeText` | `string` | |
| `onPredictions` | `Array<Prediction>` | Where a `Prediction` is defined by the `predictions` property of the response of the Place Autocomplete API.
| `onResult` | `Place` | Where a `Place` is defined by the `result` property of the response of the Place Detail API.


## Credits

Heavily influenced by [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete). Mainly a bit of restructuring and uses the [Google Places Autocomplete API](https://developers.google.com/places/web-service/autocomplete) rather than the [Nearby Search](https://developers.google.com/places/web-service/search) or [Geocoding](https://developers.google.com/maps/documentation/geocoding/start) API's.
