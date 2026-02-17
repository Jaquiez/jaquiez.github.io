const LoadingHelper = {
    "welcome": `<h2>root@localhost: ~$ ./welcome </h2>`,
    "welcome-container": `<div id="whoami"><p>
                    root@localhost: ~$ whoami
                </p>
                <ul>
                    <li>An Offensive Security engineer with an interest in web + low level security.
                    </li>
                    <li>
                        Learning web application security through CTFs.
                    </li>
                    <li>
                        Learning low level security through... lots of patience.
                    </li>
                    <li>
                        Playing CTF's with <a target="_blank" href="https://ctftime.org/team/367652/">Leg.</a>
                    </li>
                </ul></div>
            <img class="profile-picture" src="mrkrabs.jpg">`,
    "ls": `            <p>
    root@localhost: ~$ ls
</p>
<div style="text-align: center;">
    <a href="/">~</a>
    <a href="/Blogs">Blogs</a>
    <a href="/Projects">Projects</a>
    <a href="/Contact">Contact</a>
    <a href="#readme">README.txt</a>
</div>`,
    "readme": `            <p>
    root@localhost: ~$ cat README.txt
</p>
<p>
    Thank you for visiting my site. Please enjoy your stay!
</p>`
}

function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

async function typeText(ELEM,content, delay, keepCursor) {
    return new Promise(async (res) => {
        for (let i = 0; i < content.length; ++i) {
            await sleep(delay)
            ELEM.innerHTML = content.substring(0, i) + `<span class="typing-cursor">&nbsp;</span> `;
        }
        if(!keepCursor){
            ELEM.innerHTML = content;
        }
        res(true);
    })

}
async function loadIndex() {
    const KEYS = Object.keys(LoadingHelper);
    for (let x = 0; x < KEYS.length; ++x) {
        const key = KEYS[x];
        const ELEM = document.getElementById(key);

        // Start with transition class and bubbles visible
        ELEM.classList.replace('transparent', 'transition');
        await sleep(100);
        ELEM.classList.replace('transition', 'panel');
        await typeText(ELEM,LoadingHelper[key],10,true);
    }

}

window.onload = () => {
    document.body.style.setProperty('--bubble-gif-url', `url('/spongebob-bubbles.gif?t=${Date.now()}')`);
    if (window.location.pathname === '/') {
        loadIndex();
    }
}