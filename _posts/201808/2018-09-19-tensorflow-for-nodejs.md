---
layout:     post
title:      Node.js 版本的 TensorFlow
date:       2018-09-19 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - Node.js
 - 深度學習
 - 機器學習
 - TensorFlow.js
---

### 關於 Node.js 版本的 TensorFlow

* Node.js 上最近也可使用 TensorFlow.js 了，套件名稱為 `tfjs-node` ，但請注意此為 alpha 測試版本。

  1. `@tensorflow/tfjs` - Core TensorFlow.js library
  2. `@tensorflow/tfjs-node` - TensorFlow.js Node.js extension
  3. `@tensorflow/tfjs-node-gpu` - TensorFlow.js Node.js extension with GPU support

```
npm install @tensorflow/tfjs @tensorflow/tfjs-node
// or...
npm install @tensorflow/tfjs @tensorflow/tfjs-node-gpu
```

### 開始使用 TensorFlow.js
* 引入 TensorFlow.js

```js
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

tf.setBackend('tensorflow');
```

* 改寫官方的範例

```js
async function myFirstTfjs() {
	// Create a simple model.
	const model = tf.sequential();
	model.add(tf.layers.dense({units: 1, inputShape: [1]}));

	// Prepare the model for training: Specify the loss and the optimizer.
	model.compile({
		loss: 'meanSquaredError',
		optimizer: 'sgd'
	});

	// Generate some synthetic data for training. (y = 2x - 1)
	const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
	const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

	// Train the model using the data.
	await model.fit(xs, ys, {epochs: 250});

	// Use the model to do inference on a data point the model hasn't seen.
	// Should print approximately 39.
	const output = model.predict(tf.tensor2d([20], [1, 1])).toString()
	console.log(output);
}

myFirstTfjs();
```





### 參考

* [tfjs-node](https://github.com/tensorflow/tfjs-node)

* [tfjs-examples](https://github.com/tensorflow/tfjs-examples/blob/master/getting_started/index.js)

* [TensorFlow.js Example: Training MNIST with Node.js](https://github.com/tensorflow/tfjs-examples/tree/master/mnist-node)

* [Noob's Space — tfjs-node：Node.js 版本的 TensorFlow](https://noob.tw/tfjs-node/)

* [Machine Learning In Node.js With TensorFlow.js](https://hk.saowen.com/a/d79c2e029bd7ccbb9519239c7f179d145d87b6d1cfd6c3080c49d9fbcc975e0c)