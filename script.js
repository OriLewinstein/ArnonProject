"use strict";

let window1;
let window2;
let window3;

document.querySelector(".button").addEventListener("click", function () {
  let ourValue = document.getElementsByClassName("search")[0].value;

  window1 = window.open(
    `https://app.chaikinanalytics.com/pgr-widget/?symbol=${ourValue}`
  );
  window2 = window.open(
    `https://finviz.com/quote.ashx?t=${ourValue}&ty=c&ta=1&p=d`
  );
  window3 = window.open(
    `https://bigcharts.marketwatch.com/advchart/frames/frames.asp?show=&insttype=Stock&symb=${ourValue}&time=8&startdate=1%2F4%2F1999&enddate=4%2F22%2F2022&freq=1&compidx=aaaaa%3A0&comptemptext=&comp=none&ma=0&maval=9&uf=0&lf=67108864&lf2=0&lf3=0&type=64&style=320&size=4&x=50&y=18&timeFrameToggle=false&compareToToggle=false&indicatorsToggle=false&chartStyleToggle=false&state=15`
  );
});

document.querySelector(".closebtn").addEventListener("click", function () {
  window1.close();
  window2.close();
  window3.close();

  document.querySelector(".search").textContent = " ";
});

const btn = document.querySelector(".button");

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const event = new Event("click");
    btn.dispatchEvent(event);
  }
});
