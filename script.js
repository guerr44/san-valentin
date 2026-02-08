const app = document.getElementById("app");
const music = document.getElementById("bgMusic");
let nickname = "";

/* FONDO */
function createFalling(){
    const icons=["💖","🌸","🌺","💗","🌷"];
    setInterval(()=>{
        const el=document.createElement("div");
        el.className="falling";
        el.innerText=icons[Math.floor(Math.random()*icons.length)];
        el.style.left=Math.random()*100+"vw";
        el.style.animationDuration=(3+Math.random()*5)+"s";
        document.body.appendChild(el);
        setTimeout(()=>el.remove(),8000);
    },300);
}

/* LOGIN */
function loadLogin(){
    document.body.className="pink";
    app.innerHTML=`
    <div class="card">
        <h1>Bienvenida 💖</h1>
        <input placeholder="Tu nombre">
        <button onclick="loadIntro()">Registrarme</button>
    </div>`;
}

/* INTRO */
function loadIntro(){
    music.play();
    app.innerHTML=`
    <div class="card">
        <h2>Registro completado con éxito 💘</h2>
        <p>Antes de todo quiero darte una pequeña introducción</p>
        <button onclick="loadLetter()">Empecemos</button>
    </div>`;
}

/* CARTA 1 */
function loadLetter(){
    document.body.style.background="white";
    app.innerHTML=`
    <div class="letterPaper">
        <div class="mainTitle">Will you be my Valentín</div>
        <p>
        Después de oraciones, risas y momentos contigo,
        quedó claro algo: eres la persona a la que quiero siempre.
        Mi corazón la verdad ya tomó su decisión, quiero pasar 
        el 14 de febrero contigo.
        </p>
        <div class="navButtons">
            <button onclick="loadIntro()">Anterior</button>
            <button onclick="loadReasons()">Siguiente</button>
        </div>
    </div>`;
}

/* RAZONES */
function loadReasons(){
    app.innerHTML=`
    <div class="letterPaper">
        <div class="mainTitle">5 razones por las que eres mi elección perfecta</div>

        <div class="grid">
            <div>1. Tienes la sonrisa más bonita de todo el universo</div>
            <div>❤️</div>
            <div>2. Eres una gran persona</div>
            <div>❤️</div>
            <div>3. Eres mi universo entero</div>
            <div>❤️</div>
            <div>4. Ya no me imagino nada sin ti</div>
            <div>❤️</div>
            <div>5. Eres la respuesta a mis oraciones</div>
        </div>

        <h3>Señales por las que debes decir "Sí"</h3>

        <div class="redBoxes">
            <div>Te la pasarás bomba</div>
            <div>Si mínimo sonreíste una vez viendo esto, es una señal</div>
            <div>Somos la pareja perfecta para todo</div>
        </div>

        <div class="navButtons">
            <button onclick="loadLetter()">Anterior</button>
            <button onclick="askNickname()">Siguiente</button>
        </div>
    </div>`;
}

/* APODO */
function askNickname(){
    app.innerHTML=`
    <div class="card">
        <h2>Escribe tu apodo favorito 💘</h2>
        <input id="nickInput">
        <button onclick="saveNickname()">Siguiente</button>
    </div>`;
}

function saveNickname(){
    nickname=document.getElementById("nickInput").value;
    loadQuestion();
}

/* PREGUNTA */
function loadQuestion(){
    app.innerHTML=`
    <div class="letterPaper">
        <div class="mainTitle">Aquí irá la gran pregunta 💘</div>
        <div class="navButtons">
            <button onclick="askNickname()">Anterior</button>
            <button onclick="showEnvelope()">Siguiente</button>
        </div>
    </div>`;
}

/* SOBRE */
function showEnvelope(){
    app.innerHTML=`
    <div class="envelope" onclick="openLetter()">
        <div>
            <p>Te tengo una sorpresa...</p>
            <p>Da click en el corazón</p>
            <div style="font-size:40px">❤️</div>
            <p>De: Josue<br>Para: ${nickname}</p>
        </div>
    </div>`;
}

/* CARTA FINAL */
function openLetter(){
    app.innerHTML=`
    <div class="letterPaper">
        <p>
        En los últimos dos meses me has hecho sentir de una manera inimaginable,
        y yo quiero darte el universo entero, eres la persona con quien quiero pasar
        el resto de mis días, a quien quiero amar, hacer reír,
        tienes los abrazos más cálidos, los ojos más hermosos,
        una voz que al escucharla es poesía, unos cachetitos tan lindos,
        te adoro con el alma, entonces:
        </p>

        <div class="bigQuestion">¿Quieres ser mi San Valentín?</div>

        <div class="buttonsFinal">
            <button id="noBtn" onmouseover="moveNo()">No</button>
            <button id="yesBtn" onclick="showVictory()">Sí</button>

        </div>
    </div>`;
}

function moveNo(){
    const btn=document.getElementById("noBtn");
    btn.style.position="absolute";
    btn.style.top=Math.random()*80+"%";
    btn.style.left=Math.random()*80+"%";
    document.getElementById("yesBtn").style.transform="scale(1.4)";
}

function showVictory(){
    document.body.className="pink";

    app.innerHTML = `
        <div class="card" style="width:90%; max-width:800px;">
            <h1 style="font-size:60px; color:#d90429;">VAMOOOOOOOS 🎉💘</h1>
            <h2>Sabía que ibas a aceptar</h2>

            <video width="100%" controls autoplay style="margin-top:20px; border-radius:12px;">
                <source src="baile.mp4" type="video/mp4">
            </video>
        </div>
    `;
}


/* START */
createFalling();
loadLogin();

