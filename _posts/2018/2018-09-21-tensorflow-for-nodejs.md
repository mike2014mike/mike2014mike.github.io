---
layout:     post
title:      【Node.js】JavaScript 也能玩機器學習！？Node版的 TensorFlow.js
date:       2018-09-21 10:37:19
author:     Mike Chen
summary:    
categories: Study
thumbnail:  code
tags:
 - NodeJS
 - Machine-Learning
 - TensorFlow
---

### 關於 Node.js 版本的 TensorFlow

TensorFlow.js 早期只能用於前端進行訓練和運行機器學習模型，最近的更新增加了對Node.js的實驗性支援，這讓後端使用 Node.js 的我們也有機會可以使用這個開源的庫，而不需要使用 Python。其套件名稱為 `tfjs-node` ，請注意此為 alpha 測試版本。

  1. `@tensorflow/tfjs` - 核心TensorFlow.js包
  2. `@tensorflow/tfjs-node` - TensorFlow.js的Node.js 擴展
  3. `@tensorflow/tfjs-node-gpu` - TensorFlow.js 的GPU支持的nodejs擴展

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