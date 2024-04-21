## Add TF

```js
import * as tf from '@tensorflow/tfjs';
tf.setBackend('webgl')
```

## Animal Picture Upload and Prediction

```vue
<template>
    <h1>Animal Image</h1>
    <input type="file" v-on:change="handleFileUpload($event)" />

    <div class="image-preview" v-if="preview">
        <img v-bind:src="preview" class="img-fluid" ref="img" />
        <button @click="predict()">Predict</button>
    </div>

    <PredictionResult :predictions="predictions" v-if="predictions"></PredictionResult>

</template>

<script>
import * as mobilenet from '@tensorflow-models/mobilenet';
import PredictionResult from './PredictionResult.vue'

export default {
    name: 'FlowerImage',
    components: {
        PredictionResult
    },
    data: () => {
        return {
            preview: null,
            image: null,
            predictions: null
        }
    },
    methods: {
        handleFileUpload(event) {
            const input = event.target;
            if (input.files) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        predict() {
            mobilenet.load()
                .then(model => {
                    return model.classify(this.$refs.img)
                })
                .then(predictions => {
                    this.predictions = predictions
                })
        }
    }
}
</script>

<style>
.image-preview {
    width: 500px;
    margin: 0 auto;
}

.img-fluid {
    max-width: 100%;
}
</style>
```

## Prediction Result with Props
```vue
<template>
    <table>
        <thead>
            <th>Class</th>
            <th>Probability</th>
        </thead>
        <tbody>
            <tr v-for="(prediction, i) in predictions" :key="i">
                <td>{{ prediction.className }}</td>
                <td>{{ prediction.probability }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'PredictionResult',
    props: {
        predictions: Array
    }
}
</script>
```