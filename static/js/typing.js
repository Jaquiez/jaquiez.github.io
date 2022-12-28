let info = document.getElementById("info");

let texts = [
"jaquiez $ whoami",
`CS Student @ UMASS Amherst. Interested in web exploitation, 
development, and application security. Currently learning web 
exploitation through CTFs, will post writeups as well as other 
stuff I do.
`,
`jaquiez $ ls`,
`<a href=/>/</a> &emsp; <a href=Blog> /Blog </a> &emsp; <a href=Projects> /Projects </a>  &emsp; <a href=/Contact> /Contact </a>`,
`jaquiez $ cat thank_you.txt`,
`Thank you for visiting my website. I hope you enjoy the content :)`,
]

const sleep = ms => new Promise(r => setTimeout(r, ms));
const calcSleepTime = (length) => length < 500 ? 750 : length*1.5;

const asyncExec = async ()=>{
    for(let i =0;i<texts.length;++i){
        let obj = i%2===0 
            ? document.createElement('h1') 
            : document.createElement('p');
        let counter = -1;
        let text = texts[i];
        info.append(obj);
        let sleepTime = calcSleepTime(text.length);
        while(++counter<text.length){
            obj.innerHTML += text[counter];
            await sleep(10)
        }
        obj.innerHTML = text;
        info.append(document.createElement('br'))
        await sleep(sleepTime)
    }
}

asyncExec();