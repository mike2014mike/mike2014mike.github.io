$(function () {
    console.log("ready!");
    $('#getBtn').click();
});



var vm = new Vue({
    el: '#app',
    data: {
        result: []
    },
    computed: {
    },
    methods: {
        getData() {
            var self = this;
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbzgi7A8mvHKhvvwgAmZLdZGRzp67mYTwE_qHXCUmeoTQvJwOj7P/exec",
                success: function (data) {
                    console.log(data.data);

                    //取得所有產品名稱
                    var product_names = data.data.map(row => Object.values(row)[2])
                        .reduce((a, b) => a.concat(b), [])
                        .filter((data, index, arr) => arr.indexOf(data) == index)
                    console.log(product_names);

                    //inital items
                    var items = [];
                    product_names.map(ele => {
                        items.push({
                            name: ele, vote: 0
                        })
                    })

                    //計算得票數
                    data.data.map(data_ele => {
                        items.map(item => {
                            if (data_ele.product == item.name) {
                                item.vote++;
                            }
                        })
                    })

                    //轉換Google Chart所需格式
                    self.result = [];
                    self.result.push(['名稱', '得票數']);
                    items.map(ele => {
                        self.result.push([ele.name, ele.vote])
                    })
                    // console.log(self.result);
                    if (self.result.length > 2) {
                        self.startDraw();
                    }

                }
            });
        },
        startDraw() {
            google.charts.load('current', { 'packages': ['bar'] });
            google.charts.setOnLoadCallback(this.drawBarChart);

            google.charts.load("current", { packages: ["corechart"] });
            google.charts.setOnLoadCallback(this.drawPieChart);
        },
        drawBarChart() {
            console.log(this.result);
            var data = google.visualization.arrayToDataTable(this.result);

            var options = {
                legend: { position: 'none' },
                chart: {
                    title: '目前商品得票數統計',
                    subtitle: '統計時間：' + this.showTime(),
                },
                axes: {
                    x: {
                        0: { side: 'top', label: '得票數' } // Top x-axis.
                    }
                },
                bars: 'horizontal' // Required for Material Bar Charts.
            };

            var chart = new google.charts.Bar(document.getElementById('barchart'));
            chart.draw(data, google.charts.Bar.convertOptions(options));
        },
        drawPieChart() {
            console.log(this.result);
            var data = google.visualization.arrayToDataTable(this.result);

            var options = {
                title: '目前得票數統計',
                is3D: true,
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
            chart.draw(data, options);
        },
        showTime() {
            var timeDate = new Date();
            var tMonth = (timeDate.getMonth() + 1) > 9 ? (timeDate.getMonth() + 1) : '0' + (timeDate.getMonth() + 1);
            var tDate = timeDate.getDate() > 9 ? timeDate.getDate() : '0' + timeDate.getDate();
            var tHours = timeDate.getHours() > 9 ? timeDate.getHours() : '0' + timeDate.getHours();
            var tMinutes = timeDate.getMinutes() > 9 ? timeDate.getMinutes() : '0' + timeDate.getMinutes();
            var tSeconds = timeDate.getSeconds() > 9 ? timeDate.getSeconds() : '0' + timeDate.getSeconds();
            return timeDate = timeDate.getFullYear() + '/' + tMonth + '/' + tDate + ' ' + tHours + ':' + tMinutes + ':' + tSeconds;
        }
    }
})