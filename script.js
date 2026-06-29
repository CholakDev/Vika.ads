/* ============ Translations ============ */
const T = {
  uk:{
    nav:{problems:"Проблеми",services:"Послуги",cases:"Кейси",about:"Про мене",cta:"Залишити заявку"},
    hero:{
      eyebrow:"Performance Marketer · FB & IG Ads",
      h1:"Реклама, що реально приносить клієнтів, а не лише крутиться у стрічці.",
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
        {tag:"Audit",title:"Аудит реклами",text:"Чесний розбір ваших кабінетів. Де зливається бюджет та що дасть приріст за 14 днів.",time:"3 дні"}
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
        {niche:"Онлайн‑школа",before:"0 заявок",after:"184 / міс",roas:"ROAS ×4.7",note:"Запуск з нуля. Окупність воронки — на 11‑й день."}
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
        {q:"Я не в Україні. Працюємо?",a:"Так. Працюю дистанційно з проєктами з різних країн."},
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
  ru:{
    nav:{problems:"Проблемы",services:"Услуги",cases:"Кейсы",about:"Обо мне",cta:"Оставить заявку"},
    hero:{
      eyebrow:"Performance Marketer · FB & IG Ads",
      h1:"Реклама, которая реально приносит клиентов, а не просто крутится в ленте.",
      sub:"Запускаю и масштабирую таргет для бизнесов, экспертов и брендов. Прозрачно, с фокусом на окупаемость каждой гривны.",
      ctaPrimary:"Обсудить проект",ctaSecondary:"Смотреть кейсы",
      tag1:"1.5+ года",tag2:"30+ проектов"
    },
    live:{
      kicker:"LIVE",title:"Рекламные кампании крутятся прямо сейчас",
      sub:"Пока вы читаете — мои кампании приносят заявки клиентам в 8 нишах одновременно.",
      stats:[
        {n:248,label:"лидов в этом месяце"},
        {n:3,label:"активных проекта"},
        {n:34,label:"креатива в тестах"},
        {n:3.4,label:"средний ROAS",decimals:1}
      ],pulse:"ONLINE"
    },
    problems:{
      kicker:"01 — Знакомо?",title:"Типичные боли, которые я слышу каждый день",
      items:[
        {t:"«Сливаю бюджет — а заявок нет»",d:"Реклама работает, но клиентов от нее ноль. Деньги просто сгорают."},
        {t:"«Таргетолог пропал — и кампании упали»",d:"Одну неделю тишина, потом — «нужно больше времени». Цена лида удвоилась."},
        {t:"«Не понимаю, куда уходят деньги»",d:"Отчетов нет. Что тестируется — неизвестно. Что работает — тоже загадка."},
        {t:"«Реклама была — продаж не стало»",d:"Первый месяц — норм. Второй — провал. Без оптимизации все ломается."}
      ]
    },
    services:{
      kicker:"02 — Что я делаю",title:"Услуги",
      items:[
        {tag:"Запуск",title:"Запуск с нуля",text:"Анализ ниши, стратегия, креативы, настройка Pixel + CAPI, первые кампании под ключ.",time:"7 дней"},
        {tag:"Audit",title:"Аудит рекламы",text:"Честный разбор ваших кабинетов. Где сливается бюджет и что даст прирост за 14 дней.",time:"3 дня"}
      ]
    },
    roi:{
      kicker:"03 — Калькулятор",title:"Сколько вы недозарабатываете на рекламе?",
      sub:"Простая модель: введите свои цифры — увидите разницу между «как сейчас» и «как будет со мной».",
      budget:"Месячный бюджет на рекламу, ₴",cpl:"Текущая цена лида (CPL), ₴",
      conv:"Конверсия в продажу, %",check:"Средний чек, ₴",
      now:"СЕЙЧАС",with:"СО МНОЙ",
      leadsLabel:"Лидов/мес",revLabel:"Выручка/мес",roasLabel:"ROAS",
      diffLabel:"Дополнительный доход / мес",cta:"Хочу так же",
      note:"Расчет базируется на среднем снижении CPL ‑38% и росте ROAS на 60% по моим проектам. Не гарантия — ориентир."
    },
    cases:{
      kicker:"04 — Работа",title:"Кейсы",sub:"Цифры из последних проектов. Имена скрыты по NDA.",
      items:[
        {niche:"Beauty‑бренд",before:"CPL 240₴",after:"CPL 78₴",roas:"ROAS ×5.4",note:"За 30 дней — в 3.1 раза больше заявок при том же бюджете."},
        {niche:"Онлайн‑школа",before:"0 заявок",after:"184 / мес",roas:"ROAS ×4.7",note:"Запуск с нуля. Окупаемость воронки — на 11‑й день."}
      ]
    },
    process:{
      kicker:"05 — Как мы работаем",title:"Четыре шага к результату",
      steps:[
        {n:"01",t:"Бриф",d:"30‑мин созвон: продукт, аудитория, цели, цифры. Без воды."},
        {n:"02",t:"Стратегия",d:"Медиаплан, воронка, креативные концепты, KPI на месяц."},
        {n:"03",t:"Тесты",d:"5–8 креативов × 3–4 аудитории. Первые лиды — за 48 час."},
        {n:"04",t:"Масштаб",d:"То, что дает результат — масштабирую. То, что не дает — выключаю."}
      ]
    },
    about:{
      kicker:"06 — Обо мне",name:"Чолак Виктория",role:"Performance Marketer",
      title:"Я не «запускаю рекламу».\nЯ строю систему продаж.",
      body:"Работаю с предпринимателями, которые устали сливать бюджет на рекламу без результата. Прозрачная отчетность, честные цифры и максимум 5 проектов одновременно — чтобы у каждого был мой полный фокус.",
      stats:[
        {n:1.5,suffix:"+",label:"года в performance"},
        {n:30,suffix:"+",label:"запущенных проектов"},
        {n:12,suffix:"M₴",label:"бюджета под управлением"},
        {n:3.4,suffix:"×",label:"средний ROAS",decimals:1}
      ]
    },
    faq:{
      kicker:"07 — Вопросы",title:"Частые вопросы",
      items:[
        {q:"Сколько стоят услуги?",a:"Базовый запуск — от 18 000₴/мес + рекламный бюджет. Точную стоимость назову после брифа."},
        {q:"Какой минимальный бюджет на рекламу?",a:"Тестовый месяц — от 12 000₴. Меньшие бюджеты дают слишком мало данных для оптимизации."},
        {q:"Через сколько будет результат?",a:"Первые заявки — в первые 48–72 час после запуска. Стабильный поток — со 2‑й недели."},
        {q:"Я не в Украине. Работаем?",a:"Да. Работаю удаленно с проектами из разных стран."},
        {q:"Что если не зайдет?",a:"Если за первый месяц не выходим на согласованный KPI — возвращаю 50% оплаты за работу."}
      ]
    },
    form:{
      kicker:"08 — Заявка",title:"Оставьте заявку — обсудим ваш проект",
      sub:"Отвечу в течение 2 часов в рабочее время. Это бесплатно и ни к чему не обязывает.",
      name:"Имя",contact:"Instagram или Telegram",contactPh:"@username",
      budget:"Бюджет на месяц",
      budgets:["До 15 000₴","15 000–50 000₴","50 000–150 000₴","150 000₴+"],
      niche:"Ваша ниша",nichePh:"напр. салон красоты, онлайн‑школа",
      submit:"Отправить заявку",
      success:"Готово. Я вам напишу в течение 2 часов ✓",
      error:"Что-то пошло не так. Проверьте соединение или напишите в Telegram.",
      privacy:"Нажимая кнопку, вы соглашаетесь на обработку данных. Я не передаю их третьим лицам."
    },
    footer:{tagline:"Performance marketer · Odesa / remote",copy:"© 2026. Все права защищены.",tg:"Telegram",ig:"Instagram",mail:"Email"}
  }
};
 
/* ============ State ============ */
let lang = 'uk';
 
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.getElementById('btn-uk').classList.toggle('on', l==='uk');
  document.getElementById('btn-ru').classList.toggle('on', l==='ru');
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
    msg.textContent = lang==='uk'?"Будь ласка, заповніть усі поля":"Пожалуйста, заполните все поля";
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
