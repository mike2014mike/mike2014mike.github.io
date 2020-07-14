---
layout:     post
title:      C# 漢語拼音轉換
date:       2020-03-30 10:37:19
author:     Mike Chen
summary:    
categories: C#
thumbnail:  code
tags:
 - C#
 - Pinyin
 - 漢語拼音轉換
---


## 說明
* 老婆大人工作上需要大量轉換漢字為拼音，按照他們的工作SOP需要一個一個字去查詢。
* 身為工程師怎可以讓老婆浪費時間去做這種事情呢？當然是希望全部複製貼上後就搞定啦！
* 拜合適套件所賜，全部Coding過程不到15分鐘，老婆以崇拜的眼光在一旁看著。
* 之後老婆也很佛心的將程式提供給同事們，大幅降低大家的工作量。
* 老婆都這麼佛心了，我這邊就將程式碼完整公布啦，希望可以幫助到有需要的人。

## Package
* NPinyin.Core.3.0.0

## Code

```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.VisualBasic;
using System.Globalization;
using MetroFramework.Forms;
 


namespace PinyinTest
{
    public partial class Form1 : MetroForm
    {
        TextInfo myTI = new CultureInfo("en-US", false).TextInfo;

        public Form1()
        {
            InitializeComponent();
        }


        private void metroButton1_Click(object sender, EventArgs e)
        {
            //直接利用TextBox元件的Lines屬性即可得到以列為單位的字串陣列(string[])
            string[] strChinese = (!String.IsNullOrEmpty(txtChinese.Text.Trim())) ? txtChinese.Lines : null;

            string strPinyin = "";

            foreach (string str in strChinese) {
                //將繁體中文字轉換成簡體中文
                //簡體中文 (GB2312) 系統的 LocaleID (LCID) 為 2052
                string strCN = Strings.StrConv(str, VbStrConv.SimplifiedChinese, 2052);

                //轉換成拼音
                string pinyin = NPinyin.Pinyin.GetPinyin(strCN);

                strPinyin += pinyin + "\r\n";
            }

            txtPinyin.Text = myTI.ToTitleCase(strPinyin);
        }
    }
}

```

## 執行畫面
![執行畫面預覽](https://i.imgur.com/vZcssNn.png)