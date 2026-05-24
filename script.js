/* ============ Translations ============ */
const T = {
  uk:{
    nav:{problems:"Проблеми",services:"Послуги",cases:"Кейси",about:"Про мене",cta:"Залишити заявку"},
    hero:{
      eyebrow:"Performance Marketer · FB & IG Ads",
      h1:"Реклама, що реально приносить клієнтів — а не лише крутиться у стрічці.",
      sub:"Запускаю та масштабую таргет для бізнесів, експертів і брендів. Прозоро, з фокусом на окупність кожної гривні.",
      ctaPrimary:"Обговорити проєкт",ctaSecondary:"Дивитись кейси",
      tag1:"1.5+ років",tag2:"30+ проєктів"
    },
    live:{
      kicker:"LIVE",title:"Рекламні кампанії крутяться прямо зараз",
      sub:"Поки ви читаєте — мої кампанії приносять заявки клієнтам у 8 нішах одночасно.",
      stats:[
        {n:248,label:"лідів цього місяця"},
        {n:3,label:"активних проєктів"},
        {n:34,label:"креативів у тестах"},
        {n:3.4,label:"середній ROAS",decimals:1}
      ],pulse:"ONLINE"
    },
    problems:{
      kicker:"01 — Знайомо?",title:"Типові болі, які я чую щодня",
      items:[
        {t:"«Зливаю бюджет — а заявок немає»",d:"Реклама працює, але клієнтів від неї нуль. Гроші просто згоряють."},
        {t:"«Таргетолог зник — і кампанії впали»",d:"Один тиждень тиша, потім — «потрібно більше часу». Ціна ліда подвоїлась."},
        {t:"«Не розумію, куди йдуть гроші»",d:"Звітів немає. Що тестується — невідомо. Що працює — теж загадка."},
        {t:"«Реклама була — продажів не стало»",d:"Перший місяць — норм. Другий — провал. Без оптимізації все ламається."}
      ]
    },
    services:{
      kicker:"02 — Що я роблю",title:"Послуги",
      items:[
        {tag:"Запуск",title:"Запуск з нуля",text:"Аналіз ніші, стратегія, креативи, налаштування Pixel + CAPI, перші кампанії під ключ.",time:"7 днів"},
        {tag:"Scale",title:"Масштабування",text:"Виводжу робочі кампанії на новий рівень без падіння ROAS і без вигорання аудиторії.",time:"21 день"},
        {tag:"Audit",title:"Аудит реклами",text:"Чесний розбір ваших кабінетів. Де зливається бюджет та що дасть приріст за 14 днів.",time:"3 дні"},
        {tag:"Creo",title:"Креативи + копірайтинг",text:"Сценарії reels, статичні банери, тексти, що зупиняють скрол і ведуть до заявки.",time:"5 днів"}
      ]
    },
    roi:{
      kicker:"03 — Калькулятор",title:"Скільки ви недозаробляєте на рекламі?",
      sub:"Проста модель: введіть свої цифри — побачите різницю між «як зараз» і «як буде зі мною».",
      budget:"Місячний бюджет на рекламу, ₴",cpl:"Поточна ціна ліда (CPL), ₴",
      conv:"Конверсія в продаж, %",check:"Середній чек, ₴",
      now:"ЗАРАЗ",with:"ЗІ МНОЮ",
      leadsLabel:"Лідів/міс",revLabel:"Виручка/міс",roasLabel:"ROAS",
      diffLabel:"Додатковий дохід / міс",cta:"Хочу так само",
      note:"Розрахунок базується на середньому зниженні CPL ‑38% і зростанні ROAS на 60% по моїх проєктах. Не гарантія — орієнтир."
    },
    cases:{
      kicker:"04 — Робота",title:"Кейси",sub:"Цифри з останніх проєктів. Імена прихованi за NDA.",
      items:[
        {niche:"Beauty‑бренд",before:"CPL 240₴",after:"CPL 78₴",roas:"ROAS ×5.4",note:"За 30 днів — у 3.1 раза більше заявок при тому ж бюджеті."},
        {niche:"Онлайн‑школа",before:"0 заявок",after:"184 / міс",roas:"ROAS ×4.7",note:"Запуск з нуля. Окупність воронки — на 11‑й день."},
        {niche:"E‑commerce одяг",before:"ROAS ×1.8",after:"ROAS ×6.2",roas:"−42% CPL",note:"Перебудова структури кампаній + нові reels‑креативи."}
      ]
    },
    process:{
      kicker:"05 — Як ми працюємо",title:"Чотири кроки до результату",
      steps:[
        {n:"01",t:"Бриф",d:"30‑хв дзвінок: продукт, аудиторія, цілі, цифри. Без води."},
        {n:"02",t:"Стратегія",d:"Медіаплан, воронка, креативні концепти, KPI на місяць."},
        {n:"03",t:"Тести",d:"5–8 креативів × 3–4 аудиторії. Перші ліди — за 48 год."},
        {n:"04",t:"Масштаб",d:"Те, що дає результат — масштабую. Те, що не дає — вимикаю."}
      ]
    },
    about:{
      kicker:"06 — Про мене",name:"Чолак Вікторія",role:"Performance Marketer",
      title:"Я не «запускаю рекламу».\nЯ будую систему продажів.",
      body:"Працюю з підприємцями, які втомились зливати бюджет на рекламу без результату. Прозора звітність, чесні цифри і максимум 5 проєктів одночасно — щоб у кожного був мій повний фокус.",
      stats:[
        {n:1.5,suffix:"+",label:"років у performance"},
        {n:30,suffix:"+",label:"запущених проєктів"},
        {n:12,suffix:"M₴",label:"бюджету під управлінням"},
        {n:3.4,suffix:"×",label:"середній ROAS",decimals:1}
      ]
    },
    faq:{
      kicker:"07 — Питання",title:"Часті запитання",
      items:[
        {q:"Скільки коштують послуги?",a:"Базовий запуск — від 18 000₴/міс + рекламний бюджет. Точну вартість назву після брифу."},
        {q:"Який мінімальний бюджет на рекламу?",a:"Тестовий місяць — від 12 000₴. Менші бюджети дають замало даних для оптимізації."},
        {q:"Через скільки буде результат?",a:"Перші заявки — у перші 48–72 год після запуску. Стабільний потік — з 2‑го тижня."},
        {q:"Я не в Україні. Працюємо?",a:"Так. Ринки EU / US / UK — мій профіль. Веду англійською."},
        {q:"Що якщо не зайде?",a:"Якщо за перший місяць не виходимо на узгоджений KPI — повертаю 50% оплати за роботу."}
      ]
    },
    form:{
      kicker:"08 — Заявка",title:"Залиште заявку — обговоримо ваш проєкт",
      sub:"Відповім протягом 2 годин у робочий час. Це безкоштовно і ні до чого не зобов'язує.",
      name:"Ім'я",contact:"Instagram або Telegram",contactPh:"@username",
      budget:"Бюджет на місяць",
      budgets:["До 15 000₴","15 000–50 000₴","50 000–150 000₴","150 000₴+"],
      niche:"Ваша ніша",nichePh:"напр. салон краси, онлайн‑школа",
      submit:"Надіслати заявку",
      success:"Готово. Я вам напишу протягом 2 годин ✓",
      error:"Щось пішло не так. Перевірте з'єднання або напишіть у Telegram.",
      privacy:"Натискаючи кнопку, ви погоджуєтесь на обробку даних. Я не передаю їх третім особам."
    },
    footer:{tagline:"Performance marketer · Odesa / remote",copy:"© 2026. Всі права захищені.",tg:"Telegram",ig:"Instagram",mail:"Email"}
  },
  en:{
    nav:{problems:"Problems",services:"Services",cases:"Cases",about:"About",cta:"Get in touch"},
    hero:{
      eyebrow:"Performance Marketer · FB & IG Ads",
      h1:"Ads that actually bring clients — not just impressions.",
      sub:"I launch and scale paid social for businesses, experts and brands. Transparent, focused on the return of every hryvnia spent.",
      ctaPrimary:"Start a project",ctaSecondary:"See cases",
      tag1:"1.5+ years",tag2:"30+ projects"
    },
    live:{
      kicker:"LIVE",title:"Ad campaigns running right now",
      sub:"While you're reading this — my campaigns are bringing leads in 8 niches at the same time.",
      stats:[
        {n:248,label:"leads this month"},
        {n:3,label:"active projects"},
        {n:34,label:"creatives in tests"},
        {n:3.4,label:"average ROAS",decimals:1}
      ],pulse:"ONLINE"
    },
    problems:{
      kicker:"01 — Sound familiar?",title:"Pains I hear every single day",
      items:[
        {t:"«Burning budget — getting no leads»",d:"Ads run, no clients. Money just disappears."},
        {t:"«My marketer ghosted — campaigns crashed»",d:"First a week of silence, then «I need more time». CPL doubled."},
        {t:"«No idea where the money goes»",d:"No reports. What's being tested — unknown. What works — also a mystery."},
        {t:"«We had ads — sales died anyway»",d:"First month was fine. Second — disaster. Without optimization, everything breaks."}
      ]
    },
    services:{
      kicker:"02 — What I do",title:"Services",
      items:[
        {tag:"Launch",title:"Launch from zero",text:"Niche research, strategy, creatives, Pixel + CAPI setup, first campaigns turnkey.",time:"7 days"},
        {tag:"Scale",title:"Scaling",text:"Take working campaigns to a new level — without ROAS drop or audience fatigue.",time:"21 days"},
        {tag:"Audit",title:"Ad audit",text:"Honest deep‑dive into your accounts: where money leaks and what brings growth in 14 days.",time:"3 days"},
        {tag:"Creo",title:"Creatives + copy",text:"Reels scripts, static banners, copy that stops the scroll and leads to a request.",time:"5 days"}
      ]
    },
    roi:{
      kicker:"03 — Calculator",title:"How much money are you leaving on the table?",
      sub:"Simple model: enter your numbers — see the difference between «as is» and «with me».",
      budget:"Monthly ad budget, ₴",cpl:"Current CPL, ₴",
      conv:"Lead → sale, %",check:"Average order value, ₴",
      now:"NOW",with:"WITH ME",
      leadsLabel:"Leads / mo",revLabel:"Revenue / mo",roasLabel:"ROAS",
      diffLabel:"Extra revenue / month",cta:"I want this",
      note:"Model based on average CPL drop ‑38% and ROAS uplift +60% on my projects. Reference, not a guarantee."
    },
    cases:{
      kicker:"04 — Work",title:"Cases",sub:"Numbers from recent projects. Names hidden under NDA.",
      items:[
        {niche:"Beauty brand",before:"CPL 240₴",after:"CPL 78₴",roas:"ROAS ×5.4",note:"30 days — 3.1× more leads at the same budget."},
        {niche:"Online school",before:"0 leads",after:"184 / mo",roas:"ROAS ×4.7",note:"Launch from zero. Funnel paid back on day 11."},
        {niche:"E‑commerce apparel",before:"ROAS ×1.8",after:"ROAS ×6.2",roas:"−42% CPL",note:"Account restructure + new reels creatives."}
      ]
    },
    process:{
      kicker:"05 — How we work",title:"Four steps to results",
      steps:[
        {n:"01",t:"Brief",d:"30‑min call: product, audience, goals, numbers. No fluff."},
        {n:"02",t:"Strategy",d:"Media plan, funnel, creative concepts, monthly KPIs."},
        {n:"03",t:"Tests",d:"5–8 creatives × 3–4 audiences. First leads in 48h."},
        {n:"04",t:"Scale",d:"What works — scale. What doesn't — kill."}
      ]
    },
    about:{
      kicker:"06 — About",name:"Cholak Victoria",role:"Performance Marketer",
      title:"I don't «run ads».\nI build sales systems.",
      body:"I work with founders tired of burning budget on ads with no return. Transparent reporting, honest numbers and max 5 active projects — so each of them gets my full focus.",
      stats:[
        {n:1.5,suffix:"+",label:"years in performance"},
        {n:30,suffix:"+",label:"campaigns shipped"},
        {n:12,suffix:"M₴",label:"ad budget managed"},
        {n:3.4,suffix:"×",label:"average ROAS",decimals:1}
      ]
    },
    faq:{
      kicker:"07 — Questions",title:"Frequently asked",
      items:[
        {q:"How much do your services cost?",a:"Base launch — from 18,000₴/mo + ad budget. Exact quote after the brief."},
        {q:"Minimum ad budget?",a:"Test month — from 12,000₴. Lower budgets give too little data to optimize."},
        {q:"How fast will I see results?",a:"First leads — within 48–72h after launch. Stable flow — from week 2."},
        {q:"I'm outside Ukraine. Can we work?",a:"Yes. EU / US / UK markets are my profile. I run ads in English."},
        {q:"What if it doesn't work?",a:"If we don't hit the agreed KPI in month one — I refund 50% of my fee."}
      ]
    },
    form:{
      kicker:"08 — Contact",title:"Leave a request — let's talk about your project",
      sub:"I reply within 2 hours during business hours. It's free and commits you to nothing.",
      name:"Name",contact:"Instagram or Telegram",contactPh:"@username",
      budget:"Monthly budget",
      budgets:["Up to 15,000₴","15,000–50,000₴","50,000–150,000₴","150,000₴+"],
      niche:"Your niche",nichePh:"e.g. beauty salon, online school",
      submit:"Send request",
      success:"Done. I'll get back to you within 2 hours ✓",
      error:"Something went wrong. Please check your connection or message me on Telegram.",
      privacy:"By clicking, you agree to data processing. I don't share it with third parties."
    },
    footer:{tagline:"Performance marketer · Odesa / remote",copy:"© 2026. All rights reserved.",tg:"Telegram",ig:"Instagram",mail:"Email"}
  }
};
 
/* ============ State ============ */
let lang = 'uk';
 
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.getElementById('btn-uk').classList.toggle('on', l==='uk');
  document.getElementById('btn-en').classList.toggle('on', l==='en');
  render();
  calcRoi();
}
 
/* ============ Helpers ============ */
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function fmt(n){ return Math.round(n).toLocaleString('uk-UA'); }
function set(id,html){ const el=document.getElementById(id); if(el) el.innerHTML=html; }
function setText(id,text){ const el=document.getElementById(id); if(el) el.textContent=text; }
 
/* ============ Animated Counter ============ */
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    const to = +el.dataset.to;
    const dec = +el.dataset.dec||0;
    const dur = 1600;
    const start = performance.now();
    const tick = now=>{
      const p = Math.min(1,(now-start)/dur);
      const eased = 1-Math.pow(1-p,3);
      const val = to*eased;
      el.textContent = dec ? val.toFixed(dec) : Math.round(val).toLocaleString('uk-UA');
      if(p<1) requestAnimationFrame(tick);
      else el.textContent = dec ? to.toFixed(dec) : to.toLocaleString('uk-UA');
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
},{threshold:0.3});
 
function makeCounter(to, dec=0){
  return `<span class="counter" data-to="${to}" data-dec="${dec}">0</span>`;
}
 
/* ============ Scroll Reveal ============ */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const delay = +e.target.dataset.delay||0;
      setTimeout(()=>e.target.classList.add('in'), delay);
      revealObserver.unobserve(e.target);
    }
  });
},{threshold:0.06, rootMargin:'0px 0px -8% 0px'});
 
/* ============ Render ============ */
function render(){
  const t = T[lang];
 
  /* Документ Title (вкладка браузера) */
  document.title = `${t.about.name} · Performance Marketer`;

  /* Nav */
  setText('nav-problems', t.nav.problems);
  setText('nav-services', t.nav.services);
  setText('nav-cases', t.nav.cases);
  setText('nav-about', t.nav.about);
  setText('nav-cta', t.nav.cta);
 
  /* Hero */
  setText('hero-eyebrow', t.hero.eyebrow);
  setText('hero-h1', t.hero.h1);
  setText('hero-sub', t.hero.sub);
 
  const ctaPrimary = document.getElementById('hero-cta-primary');
  if(ctaPrimary){ ctaPrimary.childNodes[0].textContent = t.hero.ctaPrimary+' '; }
  const ctaSecondary = document.getElementById('hero-cta-secondary');
  if(ctaSecondary){ ctaSecondary.childNodes[0].textContent = t.hero.ctaSecondary+' '; }
 
  /* Hero Name */
  setText('hero-photo-name', t.about.name);
  set('hero-tags',
    [t.hero.tag1, t.hero.tag2].map(tg=>`<span class="tag">${esc(tg)}</span>`).join('')
  );
 
  /* Live */
  setText('live-kicker', t.live.kicker);
  setText('live-pulse', t.live.pulse);
  setText('live-title', t.live.title);
  setText('live-sub', t.live.sub);
  set('live-grid', t.live.stats.map((s,i)=>`
    <div class="live-stat">
      <div class="live-num${i===0?' up':''}">${makeCounter(s.n, s.decimals||0)}</div>
      <div class="live-lbl">${esc(s.label)}</div>
    </div>
  `).join(''));
 
  /* Problems */
  setText('problems-kicker', t.problems.kicker);
  setText('problems-title', t.problems.title);
  const probIcons=['✕','⏱','?','↓'];
  set('problems-grid', t.problems.items.map((p,i)=>`
    <div class="reveal problem">
      <div class="ico">${probIcons[i]}</div>
      <h3 class="problem-title">${esc(p.t)}</h3>
      <p class="problem-desc">${esc(p.d)}</p>
    </div>
  `).join(''));
 
  /* Services */
  setText('services-kicker', t.services.kicker);
  setText('services-title', t.services.title);
  set('services-grid', t.services.items.map((s,i)=>`
    <div class="reveal svc-card">
      <span class="svc-tag">${esc(s.tag)}</span>
      <h3 class="svc-title">${esc(s.title)}</h3>
      <p class="svc-text">${esc(s.text)}</p>
      <div class="svc-foot"><span>TIMELINE</span><span>${esc(s.time)}</span></div>
    </div>
  `).join(''));
 
  /* ROI labels */
  setText('roi-kicker', t.roi.kicker);
  setText('roi-title', t.roi.title);
  setText('roi-sub', t.roi.sub);
  setText('roi-lbl-budget', t.roi.budget);
  setText('roi-lbl-cpl', t.roi.cpl);
  setText('roi-lbl-conv', t.roi.conv);
  setText('roi-lbl-check', t.roi.check);
  setText('roi-now-lbl', t.roi.now);
  setText('roi-with-lbl', t.roi.with);
  setText('roi-leads-lbl', t.roi.leadsLabel);
  setText('roi-rev-lbl', t.roi.revLabel);
  setText('roi-roas-lbl', t.roi.roasLabel);
  setText('roi-leads-lbl2', t.roi.leadsLabel);
  setText('roi-rev-lbl2', t.roi.revLabel);
  setText('roi-roas-lbl2', t.roi.roasLabel);
  setText('roi-diff-label', t.roi.diffLabel);
  const roiCta = document.getElementById('roi-cta');
  if(roiCta){ roiCta.childNodes[0].textContent = t.roi.cta+' '; }
  setText('roi-note', t.roi.note);
 
  /* Cases */
  setText('cases-kicker', t.cases.kicker);
  setText('cases-title', t.cases.title);
  setText('cases-sub', t.cases.sub);
  set('cases-grid', t.cases.items.map((c,i)=>`
    <div class="reveal case">
      <div class="case-niche">${esc(c.niche)}</div>
      <div class="case-row">
        <span class="case-strike">${esc(c.before)}</span>
        <span style="color:var(--muted)">→</span>
        <span class="case-after">${esc(c.after)}</span>
      </div>
      <div class="case-roas">${esc(c.roas)}</div>
      <p class="case-note">${esc(c.note)}</p>
    </div>
  `).join(''));
 
  /* Process */
  setText('process-kicker', t.process.kicker);
  setText('process-title', t.process.title);
  set('process-grid', t.process.steps.map((s,i)=>`
    <div class="reveal step">
      <div class="step-n">${esc(s.n)}</div>
      <div class="step-t">${esc(s.t)}</div>
      <p class="step-d">${esc(s.d)}</p>
    </div>
  `).join(''));
 
  /* About */
  setText('about-kicker', t.about.kicker);
  setText('about-name', t.about.name);
  setText('about-role', t.about.role);
  set('about-title', esc(t.about.title).replace(/\n/g,'<br>'));
  setText('about-body', t.about.body);
  set('about-stats', t.about.stats.map(s=>`
    <div class="about-stat">
      <div class="about-stat-num">${makeCounter(s.n,s.decimals||0)}<em>${esc(s.suffix)}</em></div>
      <div class="about-stat-lbl">${esc(s.label)}</div>
    </div>
  `).join(''));
 
  /* FAQ */
  setText('faq-kicker', t.faq.kicker);
  setText('faq-title', t.faq.title);
  set('faq-list', t.faq.items.map((it,i)=>`
    <div class="reveal faq-item" onclick="toggleFaq(${i})">
      <div class="faq-q"><span>${esc(it.q)}</span><span class="faq-toggle">+</span></div>
      <div class="faq-a">${esc(it.a)}</div>
    </div>
  `).join(''));
 
  /* Form */
  setText('form-kicker', t.form.kicker);
  setText('form-title', t.form.title);
  setText('form-sub', t.form.sub);
  setText('form-lbl-name', t.form.name);
  setText('form-lbl-contact', t.form.contact);
  setText('form-lbl-budget', t.form.budget);
  setText('form-lbl-niche', t.form.niche);
  document.getElementById('form-name').placeholder = t.form.name;
  document.getElementById('form-contact').placeholder = t.form.contactPh;
  document.getElementById('form-niche').placeholder = t.form.nichePh;
  setText('form-submit-text', t.form.submit);
  setText('form-privacy', t.form.privacy);
  // rebuild budget options
  const sel = document.getElementById('form-budget');
  sel.innerHTML = t.form.budgets.map(b=>`<option value="${esc(b)}">${esc(b)}</option>`).join('');
 
  /* Footer */
  setText('footer-tagline', t.footer.tagline);
  setText('footer-copy', t.footer.copy);
  setText('footer-tg', t.footer.tg);
  setText('footer-ig', t.footer.ig);
  setText('footer-mail', t.footer.mail);
 
  /* Re-observe new .reveal nodes */
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
    revealObserver.observe(el);
  });

  /* Re-observe counters */
  document.querySelectorAll('.counter').forEach(el=>counterObserver.observe(el));
}
 
/* ============ FAQ Toggle ============ */
let openFaq = -1;
function toggleFaq(i){
  const items = document.querySelectorAll('.faq-item');
  if(openFaq === i){ items[i].classList.remove('open'); openFaq=-1; return; }
  if(openFaq>=0) items[openFaq].classList.remove('open');
  items[i].classList.add('open');
  openFaq = i;
}
 
/* ============ ROI Calculator ============ */
function calcRoi(){
  const t = T[lang];
  const budget = +document.getElementById('roi-budget').value||0;
  const cpl    = +document.getElementById('roi-cpl').value||1;
  const conv   = +document.getElementById('roi-conv').value||0;
  const check  = +document.getElementById('roi-check').value||0;
 
  const nowLeads = budget/cpl;
  const nowSales = nowLeads*(conv/100);
  const nowRev   = nowSales*check;
  const nowRoas  = nowRev/Math.max(budget,1);
 
  const newCpl  = cpl*0.62;
  const newConv = Math.min(conv*1.2,100);
  const newLeads= budget/newCpl;
  const newSales= newLeads*(newConv/100);
  const newRev  = newSales*check;
  const newRoas = newRev/Math.max(budget,1);
  const diff    = Math.max(0,newRev-nowRev);
 
  setText('roi-now-leads', fmt(nowLeads));
  setText('roi-now-rev',   fmt(nowRev)+'₴');
  setText('roi-now-roas',  '×'+nowRoas.toFixed(1));
  setText('roi-with-leads',fmt(newLeads));
  setText('roi-with-rev',  fmt(newRev)+'₴');
  setText('roi-with-roas', '×'+newRoas.toFixed(1));
  setText('roi-diff-value','+ '+fmt(diff)+' ₴');
}
 
/* ============ Form Submit ============ */
async function submitForm(){
  const t = T[lang];
  const name    = document.getElementById('form-name').value.trim();
  const contact = document.getElementById('form-contact').value.trim();
  const niche   = document.getElementById('form-niche').value.trim();
  const budget  = document.getElementById('form-budget').value;
  const msg     = document.getElementById('form-msg');
  const btn     = document.getElementById('form-submit');

  if(!name||!contact||!niche){
    msg.textContent = lang==='uk'?"Будь ласка, заповніть усі поля":"Please fill in all fields";
    msg.className='form-msg err';
    msg.style.display='';
    return;
  }
  
  msg.style.display = 'none';
  btn.disabled = true;
  btn.style.opacity = '0.5';

  try {
    const response = await fetch('/.netlify/functions/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact, niche, budget })
    });

    if (response.ok) {
      msg.textContent = t.form.success;
      msg.className='form-msg ok';
      msg.style.display='';
      document.getElementById('form-name').value='';
      document.getElementById('form-contact').value='';
      document.getElementById('form-niche').value='';
    } else {
      throw new Error('Server error');
    }
  } catch (error) {
    msg.textContent = t.form.error;
    msg.className='form-msg err';
    msg.style.display='';
  } finally {
    btn.disabled = false;
    btn.style.opacity = '1';
  }
}
 
/* ============ Init ============ */
render();
calcRoi();
