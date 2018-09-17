---
layout:     post
title:      JavaScript 也能玩機器學習 - Tensorflow.js
date:       2018-09-18 10:37:19
author:     Mike Chen
summary:    
categories: javascript
thumbnail:  code
tags:
 - javascript
 - 深度學習
 - 機器學習
 - Tensorflow.js
---

### 官網
* [https://js.tensorflow.org/](https://js.tensorflow.org/)

### 筆記

* TensorFlow.js 分成低階與高階兩組 API。
  1. 低階 API：由 deeplearn.js 衍生，負責處理一些低階如線性代數的資料運算等等，來協助我們處理機器學習中的數學運算部分。

  2. 高階 API：則是用來包裝一些常用的機器學習演算法，同時允許我們載入訓練好的模型，像是由Keras訓練的模型等等。

* 目前 TensorFlow.js 不支援 Node.js 開發，因此我們只能在瀏覽器上使用，未來會支援 Node.js，但時程未定。

* 簡單的問題，Learning Rate 不宜過大。

### code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <!-- Load TensorFlow.js -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.0"> </script>
</head>

<body>

  <div style="border: 1px solid green; width: 200px; margin: 0 auto; margin-bottom: 10px; text-align: center;">
    正確模型：y = 2x
  </div>
  <div style="border: 1px solid blue; width: 200px; margin: 0 auto; text-align: center;">
    預測模型：y = ax，求 a
  </div>

  <p>Before Training: <span id="before_ans"></span></p>
  <p>After Training: <span id="after_ans"></span></p>

  <button id="btn">訓練</button>

  <script>
    // 要被訓練的參數，這個參數隨著訓練次數增加會越來越準確
    let trainingAnswer;

    // 產生一個模型公式 y = a * x
    function predict(x) {
      return tf.tidy(() => {
        return trainingAnswer.mul(x)
      });
    }
    /*
    tf.tidy()是用來避免變數在TensorFlow運算中占用過多記憶體的一種管理機制
    .mul()，則是TensorFlow.js低階運算API的一種，主要用來進行乘法運算。
    透過這個predict()函式，我們能運算出目前模式產生出來的預測值
    */

    // 定義損失函式(Loss Function)
    /*
    損失函式是用來評估預測值與正確地案的差距，在訓練過程中，
    這個損失函式的輸出應該會越來越小，
    在這邊我們使用Mean Square Error函式作為評估的公式，
    代表的是預測結果與訓練資料中所有答案平方差的平均
    */
    function loss(predictions, labels) {
      const meanSquareError = predictions.sub(labels).square().mean();
      return meanSquareError;
    }

    // 定義訓練函式
    // Stochastic Gradient Descent(SGD)演算法
    function train(xs, ys, numIterations) {
      // 參數xs代表訓練用問題資料集，ys代表答案資料集，numIterations代表訓練次數
      const learningRate = 0.1;
      const optimizer = tf.train.sgd(learningRate);
      // tf.train.sgd(learningRate)代表使用 SGD 訓練演算法，並以 learningRate 的學習率進行訓練。

      for (let iter = 0; iter < numIterations; iter++) {
        optimizer.minimize(() => {
          const predsYs = predict(xs);
          return loss(predsYs, ys);
        });
      }
      /* 
      optimizer.minimize()方法，來調整參數，方法的callback中，
      我們將透過損失函式算出誤差值並回傳，minimize()方法會自動幫助我們調整損失函式中關聯到的參數，
      並透過調整參數把誤差值降到最低。
      */
    }

    // 產生訓練資料
    function generateData(numPoints, answer) {
      return tf.tidy(() => {
        // 產生常態分佈的隨機資料
        const xs = tf.randomNormal([numPoints], -1, 1);
        // 套用正確模型產生答案
        const ans = tf.scalar(answer);
        const ys = ans.mul(xs);
        // 回傳訓練資料與答案
        return {
          xs,
          ys
        };
      })
    }

    // 執行訓練
    async function learnCoefficients(dataCount, iterations) {
      const correctAnswer = 2; // 正確答案
      const trainingData = generateData(dataCount, correctAnswer);

      // console.log('Before Training: ', await trainingAnswer.data());
      document.querySelector('#before_ans').innerHTML = await trainingAnswer.data();

      // Train the model!
      await train(trainingData.xs, trainingData.ys, iterations);

      // 印出訓練結果
      // console.log('After TRaining: ', await trainingAnswer.data());
      document.querySelector('#after_ans').innerHTML = await trainingAnswer.data();
    }



    document.querySelector('#btn').addEventListener('click', function () {
      trainingAnswer = tf.variable(tf.scalar(Math.random()));
      /*
      透過tf.scalar()將Math.random()的隨機值當作TensorFlow的數值資料，
      再使用tf.variable()將這個數值當作是一個變數，因此上面程式我們可以解讀為：
      在TensorFlow中宣告一個變數，並給予一個隨機數值。
      */
      learnCoefficients(100, 1000);
    })

  </script>
</body>

</html>
```


### y = a * x ^ 2 + b * x + c

```js
// Define function
function predict(input) {
  // y = a * x ^ 2 + b * x + c
  // More on tf.tidy in the next section
  return tf.tidy(() => {
    const x = tf.scalar(input);

    const ax2 = a.mul(x.square());
    const bx = b.mul(x);
    const y = ax2.add(bx).add(c);

    return y;
  });
}

// Define constants: y = 2x^2 + 4x + 8
const a = tf.scalar(2);
const b = tf.scalar(4);
const c = tf.scalar(8);

// Predict output for input of 2
const result = predict(2);
result.print() // Output: 24

```


### y = a * x ^ 3 + b * x ^ 2 + c * x + d

```js
// Define function
function predict(input) {
  return tf.tidy(() => {
    const ax3 = a.mul(x.pow(tf.scalar(3, 'int32')));
    const bx2 = b.mul(x.square());
    const cx = c.mul(x);
    const y = ax3.add(bx2).add(cx).add(d);
    return y;
  });
}



```

### 參考

* [用十分鐘瞭解 Tensorflow.js (Google的JavaScript深度學習套件)](https://www.slideshare.net/ccckmit/tensorflowjs-googlejavascript)

* [polynomial-regression-core/index.js](https://github.com/tensorflow/tfjs-examples/blob/master/polynomial-regression-core/index.js)

* [前端也能玩Machine Learning：TensorFlow.js初體驗](https://wellwind.idv.tw/blog/2018/04/07/tensorflow-js-basic/)

* [A Gentle Introduction to TensorFlow.js](https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702)

* [Mean Squared Error (MSE)](https://developers.google.com/machine-learning/glossary/#MSE)