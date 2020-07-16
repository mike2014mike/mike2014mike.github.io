---
layout:     post
title:      C# 應用微軟臉部辨識API實作
date:       2018-08-02 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
---

### Code

```csharp
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace myface
{
    public partial class Form1 : Form
    {

        const string subscriptionKey = "這邊填您自己的KEY";

        const string uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";

        
        public class Global
        {
            public static string faceId1;
            public static string faceId2;
            public static string pic1_path;
            public static string pic2_path;
        }

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }
        public async void MakeAnalysisRequest(string imageFilePath, string btnNumber)
        {
            HttpClient client = new HttpClient();

            // Request headers.
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscriptionKey);

            // Request parameters.
            string requestParameters = "returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion";

            // Assemble the URI for the REST API Call.
            string uri = uriBase + "?" + requestParameters;

            HttpResponseMessage response;

            // Request body. Posts a locally stored JPEG image.
            byte[] byteData = GetImageAsByteArray(imageFilePath);

            using (ByteArrayContent content = new ByteArrayContent(byteData))
            {
                // This example uses content type "application/octet-stream".
                // The other content types you can use are "application/json" and "multipart/form-data".
                content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

                // Execute the REST API call.
                response = await client.PostAsync(uri, content);

                // Get the JSON response.
                string contentString = await response.Content.ReadAsStringAsync();

                // Display the JSON response.
                Console.WriteLine("\nfaceId:\n");
                //string jsonstr = JsonPrettyPrint(contentString);
                //Console.WriteLine(contentString);
                

                JArray array = JsonConvert.DeserializeObject<JArray>(contentString);
                var result = from objs in array.Values<JObject>() /*走訪JArray裡每一筆JObject*/
                             //where objs["CategoryID"].ToString() == "6"
                             select objs;

                /*只取一筆的值*/
                //Console.Write(result.Single<JObject>()["faceId"].ToString());
                if (btnNumber == "btn1")
                {
                    Global.faceId1 = result.Single<JObject>()["faceId"].ToString();
                    Console.Write(Global.faceId1);
                    if (Global.faceId2 != null)
                    {
                        MakeRequest();
                        button3.Text = "開始比對";
                        button1.Enabled = true;
                        button2.Enabled = true;
                        button3.Enabled = true;

                    }
                }
                else {
                    Global.faceId2 = result.Single<JObject>()["faceId"].ToString();
                    Console.Write(Global.faceId2);
                    if (Global.faceId1 != null)
                    {
                        MakeRequest();
                        button3.Text = "開始比對";
                        button1.Enabled = true;
                        button2.Enabled = true;
                        button3.Enabled = true;
                    }
                }
                
                
            }
        }


        /// <summary>
        /// Returns the contents of the specified file as a byte array.
        /// </summary>
        /// <param name="imageFilePath">The image file to read.</param>
        /// <returns>The byte array of the image data.</returns>
        static byte[] GetImageAsByteArray(string imageFilePath)
        {
            FileStream fileStream = new FileStream(imageFilePath, FileMode.Open, FileAccess.Read);
            BinaryReader binaryReader = new BinaryReader(fileStream);
            return binaryReader.ReadBytes((int)fileStream.Length);
        }

        /// <summary>
        /// Formats the given JSON string by adding line breaks and indents.
        /// </summary>
        /// <param name="json">The raw JSON string to format.</param>
        /// <returns>The formatted JSON string.</returns>
        static string JsonPrettyPrint(string json)
        {
            if (string.IsNullOrEmpty(json))
                return string.Empty;

            json = json.Replace(Environment.NewLine, "").Replace("\t", "");

            StringBuilder sb = new StringBuilder();
            bool quote = false;
            bool ignore = false;
            int offset = 0;
            int indentLength = 3;

            foreach (char ch in json)
            {
                switch (ch)
                {
                    case '"':
                        if (!ignore) quote = !quote;
                        break;
                    case '\'':
                        if (quote) ignore = !ignore;
                        break;
                }

                if (quote)
                    sb.Append(ch);
                else
                {
                    switch (ch)
                    {
                        case '{':
                        case '[':
                            sb.Append(ch);
                            sb.Append(Environment.NewLine);
                            sb.Append(new string(' ', ++offset * indentLength));
                            break;
                        case '}':
                        case ']':
                            sb.Append(Environment.NewLine);
                            sb.Append(new string(' ', --offset * indentLength));
                            sb.Append(ch);
                            break;
                        case ',':
                            sb.Append(ch);
                            sb.Append(Environment.NewLine);
                            sb.Append(new string(' ', offset * indentLength));
                            break;
                        case ':':
                            sb.Append(ch);
                            sb.Append(' ');
                            break;
                        default:
                            if (ch != ' ') sb.Append(ch);
                            break;
                    }
                }
            }

            return sb.ToString().Trim();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog1 = new OpenFileDialog();
            //openFileDialog1.Multiselect = true;
            openFileDialog1.Filter = "jpg圖檔|*.jpg|png圖檔|*.png";
            openFileDialog1.Title = "選擇圖檔";

            if (openFileDialog1.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {                
                string imageFilePath = openFileDialog1.FileName;               
                
                pictureBox1.Image = Image.FromFile(imageFilePath);
                Global.pic1_path = imageFilePath; 
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog2 = new OpenFileDialog();
            //openFileDialog2.Multiselect = true;
            openFileDialog2.Filter = "jpg圖檔|*.jpg|png圖檔|*.png";
            openFileDialog2.Title = "選擇圖檔";

            if (openFileDialog2.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {                
                string imageFilePath = openFileDialog2.FileName;
                
                //MakeAnalysisRequest(imageFilePath, "btn2");
                pictureBox2.Image = Image.FromFile(imageFilePath);
                Global.pic2_path = imageFilePath;
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Global.faceId1 = null;
            Global.faceId2 = null;
            

            if (Global.pic1_path != null && Global.pic2_path != null)
            {
                button3.Text = "分析比對中...";
                button1.Enabled = false;
                button2.Enabled = false;
                button3.Enabled = false;

                MakeAnalysisRequest(Global.pic1_path, "btn1");
                MakeAnalysisRequest(Global.pic2_path, "btn2");
                
            }
            else {
                MessageBox.Show("請選取兩張圖片比較！");
            }
        }

        static async void MakeRequest()
        {
            HttpClient client = new HttpClient();
            // Request headers
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscriptionKey);

            string uri = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/verify";// +queryString;

            HttpResponseMessage response;

            string jsonstr = "{\"faceId1\":\"" + Global.faceId1 + "\",\"faceId2\":\"" + Global.faceId2 + "\"}";

            Console.WriteLine(jsonstr);
            byte[] byteData = Encoding.UTF8.GetBytes(jsonstr);

            using (ByteArrayContent content = new ByteArrayContent(byteData))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                response = await client.PostAsync(uri, content);
                string contentString = await response.Content.ReadAsStringAsync();
                Console.WriteLine("\nResponse:\n");
                Console.WriteLine(contentString);

                JObject obj = JObject.Parse(contentString);

                Console.WriteLine(obj["isIdentical"]);
                string isIdentical = obj["isIdentical"].ToString();
                int confidence = Convert.ToInt32(float.Parse(obj["confidence"].ToString())*100);
                if (isIdentical == "True")
                {
                    MessageBox.Show("我有" + confidence + "%的把握，兩人是同一人！");
                }
                else {
                    MessageBox.Show("兩人是不同人！");
                }
            }

        }
    }
}

```


### 執行畫面
以我寶貝兒子相片做測試：
![超級比一比](https://i.imgur.com/3IN8t6O.png)