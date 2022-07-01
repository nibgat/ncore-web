<p align="center">
    <img
        width="650"
        height="450"
        src="https://ncore.nibgat.space/assets/images/darklogo.png"
    />
    <br/>
    NİBGAT® | NCore Web Component Library
    <br/>
    <br/>
</p>

### Base Library

-   The library is exporting sample base components to be used in react project you can test it like this :
    -   NPM: `npm install ncore-web --save`
    -   YARN: `yarn add ncore-web`

```js
import {
    NCoreProvider,
    Button
} from 'ncore-web';

const App = () => {
    return <NCoreProvider>
        <div className="App">
            <Button title="hi" />
        </div>
    </NCoreProvider>;
}
```
