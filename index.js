/*

Uses innerHTML (sorry) to lazily load "output" from each command.

*/

/*

*/
const LoadingHelper = {
    "welcome":`<h2>root@localhost: ~$ ./welcome </h2>`,
    "whoami":`    
<p>
root@localhost: ~$ whoami
</p>           
<ul>
    <li>A CS student @ UMass Amherst with an interest in web + low level security.
    </li>
    <li>
        Learning web application security through CTFs.
    </li>
    <li>
        Learning low level security through... lots of patience.
    </li>
    <li>
        Playing CTF's with <a href="https://ctftime.org/team/78233">SavedByTheShell!</a>
    </li>
</ul>`,
    "ls":`            <p>
    root@localhost: ~$ ls
</p>
<div style="text-align: center;">
    <a href="/">~</a>
    <a href="/Blogs">Blogs</a>
    <a href="/Projects">Projects</a>
    <a href="/Contact">Contact</a>
    <a href="#readme">README.txt</a>
</div>`,
    "readme":`            <p>
    root@localhost: ~$ cat README.txt
</p>
<p>
    Thank you for visiting my site. Please enjoy your stay!
</p>`
}

function sleep(ms){
    return new Promise(async (res,rej)=>{
        await setTimeout(res,ms)
    })
}
window.onload = async ()=>{
    /*
        Had to write this with normal loops instead of higher order functions. The latter resulted in weird unintended behavior that seems "multithreaded"
    */
    const KEYS = Object.keys(LoadingHelper);
    for(let x = 0;x<KEYS.length;++x){
        const key = KEYS[x];
        const ELEM = document.getElementById(key);
        if(ELEM.nodeName === 'DIV'){
            await sleep(250);
            ELEM.classList.replace('transparent','panel');
        }
        for(let i=0;i<LoadingHelper[key].length;++i){
            await sleep(10)
            ELEM.innerHTML = LoadingHelper[key].substring(0,i);
        }
    }  

}