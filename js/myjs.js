var i = 0;
var j = 0;
var k = 0;
var l = 7;

var speed = 90; /* Скорость/длительность эффекта в миллисекундах */
var speed1 = 10;
var txt = 'Wake up Magpie...\n'; /* Текст */
var txt1 = 'The matrix has you';
var txt2 = 'Упс)))))';

function typeWriter() {
    if (i < txt.length){
            document.querySelector(".main__matrix > pre:nth-child(1)").innerHTML += txt.charAt(i);
        }
    else if (i == txt.length) {
        return;
    }
    i++;
    setTimeout(typeWriter, speed);
}

function typeWriter1() {
    if (j < txt1.length){
        document.querySelector(".main__matrix > pre:nth-child(1)").innerHTML += txt1.charAt(j);
    }
    else if (j == txt1.length) {
        return;
    }
    j++;
    setTimeout(typeWriter1, speed);
}

function typeWriter2() {
    if (k < txt2.length){
        document.querySelector("body > div > div.main__ups").innerHTML += txt2.charAt(k);
    }
    else if (k == txt2.length) {
        return;
    }
    k++;
    setTimeout(typeWriter2, speed);
}

function typeWriter3() {
if (l == -1) {
        return;
    }
        text = document.querySelector("body > div > div.main__ups").innerHTML
        text = text.replace(text[l],"")
        document.querySelector("body > div > div.main__ups").innerHTML = text
        l--;
        setTimeout(typeWriter3, speed1);
}

typeWriter()

setTimeout(typeWriter1,2000)

setTimeout(typeWriter2,6100)
setTimeout(typeWriter3,7300)
