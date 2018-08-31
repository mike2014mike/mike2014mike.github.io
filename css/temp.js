let btnText = "Button";

// 傳統只有單引號與雙引號可用，有時候還要配合反斜線和加號。
let htmlTemplate1 = '<div><a href="#">' + btnText + '</a></div>';
let htmlTemplate2 = "<div><a href='#'>" + btnText + "</a></div>";
let htmlTemplate3 = "<div><a href=\"#\">" + btnText + "</a></div>";

// ES6 的 `(反引號) 可直接將 HTML 原始內容放入，支援換行。
// 參數可以做運算、帶 function
let getNum = () => {
  return Math.floor(Math.random() * 10);
};

let htmlTemplateES6 = `
      <div>
        <a href="#">${btnText + '!!! ' + getNum()}</a>
      </div>
    `;
document.body.innerHTML = htmlTemplateES6;