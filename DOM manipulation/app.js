let iphone16 = document.getElementById("iphone16");
let iphone17 = document.getElementById("iphone17");
let iphone17pro = document.getElementById("iphone17pro");
let iphoneair = document.getElementById("iphoneair");
let image = document.querySelector("img");
let paragraph = document.querySelector("p");
iphone16.addEventListener("click",()=>{
    image.src="iphone_16.jpg";
    paragraph.innerHTML="Super Retina XDR display <br> 6.1‑inch (diagonal) all‑screen OLED display <br> 2556‑by‑1179-pixel resolution at 460 ppi<br> The iPhone 16 display has rounded corners.";
})
iphone17.addEventListener("click",()=>{
    image.src="iphone_17.jpg";
    paragraph.innerHTML="iPhone 17 And now Ultra Wide photos are 24MP by default, the perfect file size for high‑quality storing and sharing. <br> So you’ll get stunning, super-high-resolution shots — up close or far away, indoors and out, in conditions that go from bright to low light..7 So you can capture to your heart’s content — and beyond";
}   )       
iphone17pro.addEventListener("click",()=>{
    image.src="iphone_17pro.jpg";
    paragraph.innerHTML="Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside <br> out to be the most powerful iPhone models ever made. capacity, and durability.";
})
iphoneair.addEventListener("click",()=>{
    image.src="iphone_air.jpg";
    paragraph.innerHTML="Super Retina XDR display <br> 6.1‑inch (diagonal) all‑screen OLED display <br> 2556‑by‑1179-pixel resolution at 460 ppi<br> The iPhone Air display has rounded corners.";
})      