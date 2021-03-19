import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#my-scrollbar'), options);
var active = document.getElementsByClassName('ant-pagination-item-active');
var index = active[0].attributes[0].value; 
index = Number(index);
index = index + 1;
var page = document.getElementsByClassName("ant-pagination-item-" + index); 
var x = document.getElementsByClassName('ic-dynamic-badge-lazMall'); 
var index_page = index - 1;
var count = x.length;
console.log("trang"+index_page+" = "+count+""); 
page[0].click();

var active = document.querySelectorAll(".shopee-page-controller .shopee-button-solid--primary");
var index = active[0].innerText;
index = Number(index);
index = index + 1;
var page = document.querySelectorAll('.shopee-page-controller button')
var x = document.querySelectorAll("._2Ar0KQ")
var index_page = index - 1;
var count = x.length;
console.log("trang"+index_page+" = "+count+""); 
page[index].click();