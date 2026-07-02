/* Shamase Photo — The Editorial. Renders only on the Photo page. */
(function(){function P(){var p=location.pathname.replace(/\/+$/,'').toLowerCase();return p==='/photo'||p.endsWith('/photo')||(document.title||'').toUpperCase().indexOf('OUR SHOOTS')===0;}function B(){if(!P()||document.getElementById('shm-photo'))return;var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&display=swap';document.head.appendChild(l);var s=document.createElement('style');s.textContent=`#shm-photo{position:fixed;inset:0;z-index:2147483000;overflow-y:auto;overflow-x:hidden;background:#0A0A0A;-webkit-overflow-scrolling:touch}#shm-photo .nav{position:sticky}#shm-photo .mbar{position:fixed}
:root{--black:#0A0A0A;--white:#fff;--red:#B62A1F;--grey:#8A8A8A;--paper:#F4F1EC;--line:#232323}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Montserrat',sans-serif;font-weight:300;color:var(--black);background:var(--black);-webkit-font-smoothing:antialiased}
.ser{font-family:'Fraunces',serif}
img{display:block;width:100%;height:100%;object-fit:cover}
a{text-decoration:none;color:inherit}
.rl{width:44px;height:3px;background:var(--red);border:0}
.lbl{font-weight:700;letter-spacing:.34em;text-transform:uppercase;font-size:11px;color:var(--red)}
.btn{display:inline-block;font-weight:700;font-size:12px;letter-spacing:.2em;text-transform:uppercase;padding:16px 32px;transition:.25s;cursor:pointer}
.btn-red{background:var(--red);color:#fff}.btn-red:hover{background:#8f2018}
.btn-oW{border:1px solid rgba(255,255,255,.85);color:#fff}.btn-oW:hover{background:#fff;color:var(--black)}
.btn-oB{border:1px solid var(--black);color:var(--black)}.btn-oB:hover{background:var(--black);color:#fff}

/* running header */
.nav{position:fixed;top:0;left:0;right:0;z-index:60;display:flex;align-items:center;justify-content:space-between;
  padding:16px 6vw;color:#fff;background:linear-gradient(rgba(10,10,10,.9),transparent);transition:.3s}
.nav.solid{background:var(--black);border-bottom:1px solid var(--line)}
.mast{display:flex;flex-direction:column;line-height:1}
.mast .w{font-weight:800;letter-spacing:.34em;font-size:16px}
.mast .u{width:34px;height:2px;background:var(--red);margin-top:5px}
.nav .lk{display:flex;gap:26px;font-weight:600;font-size:12px;letter-spacing:.15em;text-transform:uppercase}
.nav .lk a{opacity:.85}.nav .lk a.act{color:var(--red);opacity:1}
.nav .bk{border:1px solid rgba(255,255,255,.6);padding:10px 18px;font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase}
.mnu{display:none;font-size:24px;color:#fff}

/* HERO — editorial cover-hint */
.hero{position:relative;height:100svh;min-height:600px;overflow:hidden;color:#fff}
.hero>img{position:absolute;inset:0;z-index:-2}
.hero::after{content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(100deg,rgba(10,10,10,.72),rgba(10,10,10,.25) 55%,rgba(10,10,10,.55))}
.hero .wrap{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:0 7vw;max-width:820px}
.hero .kh{color:#fff;font-weight:700;letter-spacing:.34em;text-transform:uppercase;font-size:12px;opacity:.9}
.hero h1{font-family:'Fraunces',serif;font-weight:300;font-size:clamp(46px,8.2vw,108px);line-height:.96;letter-spacing:-.01em;margin:16px 0 0}
.hero h1 em{font-style:italic}
.hero .rl{margin:26px 0}
.hero p{max-width:440px;font-size:16px;line-height:1.7;font-weight:400;opacity:.92}
.hero .cta{margin-top:30px;display:flex;gap:14px;flex-wrap:wrap}
/* coverlines down the right */
.coverlines{position:absolute;right:5vw;top:50%;transform:translateY(-50%);z-index:2;text-align:right;display:flex;flex-direction:column;gap:16px;color:#fff}
.coverlines .cl{font-weight:600;letter-spacing:.14em;text-transform:uppercase;font-size:11px;opacity:.9}
.coverlines .cl b{color:var(--red)}
.hero .folio{position:absolute;left:7vw;bottom:26px;z-index:2;font-family:'Fraunces',serif;font-style:italic;font-size:14px;opacity:.75;color:#fff}
.hero .issue{position:absolute;right:5vw;bottom:26px;z-index:2;font-weight:600;letter-spacing:.2em;text-transform:uppercase;font-size:11px;opacity:.75;color:#fff}

/* running strip */
.strip{background:var(--red);color:#fff;text-align:center;padding:14px 6vw;font-weight:600;letter-spacing:.2em;text-transform:uppercase;font-size:12px}

/* editorial spread */
.spread{padding:0}
.spread.dk{background:var(--black);color:#fff}.spread.lt{background:var(--paper);color:var(--black)}
.si{display:flex;align-items:stretch;min-height:88vh}
.si.rev{flex-direction:row-reverse}
.sim{flex:1.25;overflow:hidden;position:relative}.sim img{transition:.9s}.spread:hover .sim img{transform:scale(1.03)}
.sim .pg{position:absolute;bottom:18px;left:18px;background:rgba(10,10,10,.6);color:#fff;font-family:'Fraunces',serif;font-style:italic;font-size:13px;padding:4px 12px}
.stx{flex:.75;display:flex;flex-direction:column;justify-content:center;padding:8vh 6%}
.stx .run{font-weight:700;letter-spacing:.26em;text-transform:uppercase;font-size:11px;color:var(--red)}
.stx h2{font-family:'Fraunces',serif;font-weight:300;font-size:clamp(30px,3.6vw,50px);line-height:1.04;margin:14px 0}
.stx .cr{font-weight:600;letter-spacing:.14em;text-transform:uppercase;font-size:11px;opacity:.65;margin-bottom:18px}
.stx p{font-size:15px;line-height:1.8;font-weight:400;max-width:380px;opacity:.9}
.stx a.tt{display:inline-block}.stx a.tt h2{transition:.2s}.stx a.tt:hover h2{color:var(--red)}
.stx .go{margin-top:26px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;font-size:12px;display:inline-flex;align-items:center;gap:10px;color:inherit}
.stx .go::after{content:"";width:26px;height:1px;background:var(--red);display:inline-block;transition:.25s}
.stx .go:hover::after{width:44px}
.stx .story{margin-top:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;font-size:11px;opacity:.6}

/* pull-quote spread */
.quote{position:relative;min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;color:#fff;padding:12vh 8vw}
.quote>img{position:absolute;inset:0;z-index:-2}.quote::after{content:"";position:absolute;inset:0;z-index:-1;background:rgba(10,10,10,.62)}
.quote blockquote{font-family:'Fraunces',serif;font-weight:300;font-style:italic;font-size:clamp(26px,4vw,52px);line-height:1.2;max-width:900px}
.quote .by{margin-top:26px;font-weight:700;letter-spacing:.26em;text-transform:uppercase;font-size:12px;color:#fff;opacity:.8}

/* praise */
.praise{background:var(--black);color:#fff;text-align:center;padding:90px 6vw}
.praise .lbl{display:block;margin-bottom:12px}
.praise h2{font-family:'Fraunces',serif;font-weight:300;font-size:clamp(26px,3.4vw,40px)}
.praise .g{display:grid;grid-template-columns:repeat(3,1fr);gap:34px;max-width:1080px;margin:42px auto 0}
.praise .c{text-align:left;border-top:2px solid var(--red);padding-top:18px}
.praise .q{font-family:'Fraunces',serif;font-style:italic;font-size:18px;line-height:1.5}
.praise .w{margin-top:14px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;font-size:11px;color:var(--grey)}

/* CONTACT — invitation, no price */
.contact{position:relative;text-align:center;padding:110px 6vw;overflow:hidden;color:#fff}
.contact>img{position:absolute;inset:0;z-index:-2}.contact::after{content:"";position:absolute;inset:0;z-index:-1;background:rgba(10,10,10,.8)}
.contact .lbl{color:#fff;opacity:.8}
.contact h2{font-family:'Fraunces',serif;font-weight:300;font-size:clamp(32px,5vw,68px);line-height:1.02;margin:16px 0}
.contact h2 em{font-style:italic;color:var(--red)}
.contact p{max-width:520px;margin:0 auto 30px;font-size:16px;line-height:1.7;font-weight:400;opacity:.9}
.contact .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.contact .row a{min-width:180px}

footer{background:#000;color:var(--grey);text-align:center;padding:50px 20px;border-top:1px solid var(--line)}
footer .w{font-weight:800;letter-spacing:.34em;color:#fff;font-size:15px}
footer .u{width:34px;height:2px;background:var(--red);margin:8px auto}
footer .tg{letter-spacing:.3em;text-transform:uppercase;font-size:11px;margin-top:8px}
footer .cp{color:#555;font-size:11px;letter-spacing:.1em;margin-top:14px}

/* mobile sticky contact bar */
.mbar{display:none}

@media(max-width:820px){
  .nav{padding:14px 20px}.nav .lk,.nav .bk{display:none}.mnu{display:block}
  .hero .wrap{padding:0 22px}.hero h1{font-size:44px}.coverlines{display:none}
  .si,.si.rev{flex-direction:column;min-height:0}.sim{height:66vh}.stx{padding:44px 24px}
  .praise .g{grid-template-columns:1fr;gap:24px}
  .btn{width:100%;text-align:center}.hero .cta{width:100%}.contact .row a{width:100%}
  body{padding-bottom:64px}
  .mbar{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:70;background:var(--black);border-top:1px solid var(--line)}
  .mbar a{flex:1;text-align:center;padding:18px 6px;color:#fff;font-weight:700;font-size:11px;letter-spacing:.12em;text-transform:uppercase;border-right:1px solid var(--line)}
  .mbar a:last-child{border-right:0}.mbar a.red{background:var(--red)}
}
`;document.head.appendChild(s);var w=document.createElement('div');w.id='shm-photo';w.innerHTML=`<div class="nav" id="nav">
  <div class="mast"><span class="w">SHAMASE</span><span class="u"></span></div>
  <div class="lk"><a href="#">Home</a><a class="act" href="#">Photo</a><a href="#">Video</a><a href="#">Studio Hire</a><a href="#contact">Contact</a></div>
  <a href="#contact" class="bk">Book Your Shoot</a>
  <div class="mnu">&#9776;</div>
</div>

<!-- HERO -->
<header class="hero"><img src="https://images-pw.pixieset.com/elementfield/ankzXzd/2024-09-25-GlamourSummerCupEditorial_SHOT04_05042-c1d747c8-2500.JPG" alt="Editorial beauty photography at Shamase Studios">
  <div class="wrap">
    <div class="kh">Shamase Studios · Johannesburg</div>
    <h1 class="ser">The work<br>speaks in <em>light.</em></h1><hr class="rl">
    <p>Editorial, beauty and portrait photography — created in-studio, made to be seen.</p>
    <div class="cta"><a href="#contact" class="btn btn-red">Book Your Shoot</a><a href="#work" class="btn btn-oW">See the Editorials</a></div>
  </div>
  <div class="coverlines">
    <div class="cl">The <b>Editorial</b> Issue</div>
    <div class="cl">Beauty · Portrait · Fashion</div>
    <div class="cl">As seen in <b>Glamour SA</b></div>
  </div>
  <div class="folio ser">No. 01 — Photography</div>
  <div class="issue">Vol. 2026</div>
</header>

<div class="strip">Featured in Glamour SA · Made · Nirvana &nbsp;—&nbsp; 200+ shoots created in Johannesburg</div>

<div id="work"></div>
<!-- SPREADS -->
<section class="spread lt"><div class="si">
  <div class="sim"><img src="https://images-pw.pixieset.com/elementfield/OW0qPxD/2024-06-21-Nolanga-Made_SHOT05-0981-37388455-2500.jpg" alt="Nolanga · Made editorial"><div class="pg ser">p.02</div></div>
  <div class="stx"><div class="run">Editorial 01 — 2024</div>
    <a class="tt" href="#book"><h2 class="ser">Nolanga · Made</h2></a>
    <div class="cr">Fashion Editorial · In-studio</div>
    <p>Structured light, a couture silhouette, and a single frame that carries the whole story. This is what a shoot day here looks like.</p>
    <a href="#book" class="go">View the full story</a>
    <div class="story">The series + behind the scenes</div></div>
</div></section>

<section class="spread dk"><div class="si rev">
  <div class="sim"><img src="https://images-pw.pixieset.com/elementfield/9Jm4DXG/2024-09-08-Anelisa-Mchunu_SHOT01_0148-9f3429bd-2500.jpg" alt="Anelisa Mchunu portrait"><div class="pg ser">p.03</div></div>
  <div class="stx"><div class="run">Portrait 02 — 2024</div>
    <a class="tt" href="#book"><h2 class="ser">Anelisa Mchunu</h2></a>
    <div class="cr">Portrait · Natural direction</div>
    <p>Close, quiet, and confident. Portraits that feel like the person, lit so the room disappears and only they remain.</p>
    <a href="#book" class="go">View the full story</a>
    <div class="story">The series + behind the scenes</div></div>
</div></section>

<!-- PULL QUOTE -->
<section class="quote"><img src="https://images-pw.pixieset.com/elementfield/kk7Ajbk/2024-09-25-GlamourSummerCupEditorial_SHOT06_08812-27290e85-2500.JPG" alt="">
  <blockquote class="ser">You don't book a studio. You step onto the page.</blockquote>
  <div class="by">— Shamase Studios</div>
</section>

<section class="spread lt"><div class="si">
  <div class="sim"><img src="https://images-pw.pixieset.com/elementfield/Q03xlXY/2024-05-31--Tayla-Foong_SHOT01_0037-611c235f-2500.jpg" alt="Tayla Foong beauty editorial"><div class="pg ser">p.05</div></div>
  <div class="stx"><div class="run">Beauty 03 — 2024</div>
    <a class="tt" href="#book"><h2 class="ser">Tayla Foong</h2></a>
    <div class="cr">Beauty · Colour story</div>
    <p>Skin, tone and detail rendered like a cover. Beauty work made to hold up at full-page scale.</p>
    <a href="#book" class="go">View the full story</a>
    <div class="story">The series + behind the scenes</div></div>
</div></section>

<section class="spread dk"><div class="si rev">
  <div class="sim"><img src="https://images-pw.pixieset.com/elementfield/661135301/2020-11-14-DrLanga_SHOT02_0138-9e4e349b.jpg" alt="Dr Langa campaign"><div class="pg ser">p.06</div></div>
  <div class="stx"><div class="run">Campaign 04 — 2020</div>
    <a class="tt" href="#book"><h2 class="ser">Dr Langa</h2></a>
    <div class="cr">Campaign · Brand</div>
    <p>From concept to frame — campaign imagery with the polish of an editorial and the clarity of a brand.</p>
    <a href="#book" class="go">View the full story</a>
    <div class="story">The series + behind the scenes</div></div>
</div></section>

<!-- PRAISE -->
<section class="praise"><span class="lbl">The Letters Page</span><h2 class="ser">They came to be photographed.</h2>
  <div class="g">
   <div class="c"><div class="q">“I walked in nervous and left feeling like the cover of a magazine.”</div><div class="w">Placeholder · Talent</div></div>
   <div class="c"><div class="q">“The images did more for our brand than any campaign we'd run.”</div><div class="w">Placeholder · Brand</div></div>
   <div class="c"><div class="q">“Every frame looked like a page from a magazine. Unreal.”</div><div class="w">Placeholder · Creator</div></div>
  </div></section>

<!-- CONTACT / INVITATION -->
<section class="contact" id="contact"><img src="https://images-pw.pixieset.com/elementfield/DGoWJdY/2024-09-25-GlamourSummerCupEditorial_SHOT02_02622-90923e38-2500.JPG" alt="">
  <span class="lbl">Your turn</span>
  <h2 class="ser">Let's put you<br>on the <em>page.</em></h2>
  <p>Tell us what you're dreaming up. We'll shape the shoot around it — talent, brand, or personal editorial.</p>
  <div class="row">
    <a href="https://wa.me/27652898164" class="btn btn-red">Book Your Shoot</a>
    <a href="tel:+27652898164" class="btn btn-oW">Call the Studio</a>
    <a href="https://wa.me/27652898164" class="btn btn-oW">WhatsApp</a>
    <a href="mailto:hello@shamasestudios.co.za" class="btn btn-oW">Email</a>
  </div>
</section>

<footer><div class="w">SHAMASE STUDIOS</div><div class="u"></div><div class="tg">Imagine. Create.</div>
  <div class="cp">© 2026 Shamase Studios · Johannesburg · Photography</div></footer>

<!-- mobile one-tap contact -->
<div class="mbar"><a href="tel:+27652898164">Call</a><a href="https://wa.me/27652898164">WhatsApp</a><a href="mailto:hello@shamasestudios.co.za">Email</a><a href="https://wa.me/27652898164" class="red">Book</a></div>`;document.body.appendChild(w);document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden';var nv=w.querySelector('.nav');w.addEventListener('scroll',function(){if(nv)nv.classList.toggle('solid',w.scrollTop>60);});w.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=w.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}});});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',B);else B();})();