import React,{useMemo,useState}from'react';import{createRoot}from'react-dom/client';import'./index.css';

const services=['Консультация','Диагностика','Процедура','Повторный визит'];
const slots=['09:30','11:00','13:30','16:00','18:30'];
const steps=[['01','Выбор услуги','Клиент выбирает услугу, специалиста, удобный день и слот.'],['02','AI-подготовка','Ассистент уточняет жалобу/задачу и собирает короткий контекст.'],['03','Заявка','Frontend-demo формирует booking brief без реальных интеграций.'],['04','Подтверждение','Менеджер видит подготовленную заявку и быстрее подтверждает запись.']];
const cases=[['Салон красоты','Запись на услугу, выбор мастера, напоминание клиенту.'],['Клиника','Первичный вопрос, слот консультации, аккуратный brief для администратора.'],['Студия услуг','Каталог направлений, быстрый выбор и понятный путь до заявки.']];

function App(){
 const[service,setService]=useState("Консультация");const[slot,setSlot]=useState("11:00");const[name,setName]=useState("Анна");const[phone,setPhone]=useState("+7 ••• •••-••-••");const[copied,setCopied]=useState(false);const[menuOpen,setMenuOpen]=useState(false);
 const brief=useMemo(()=>`BookingFlow AI demo. Клиент: ${name}. Контакт: ${phone}. Услуга: ${service}. Время: ${slot}. Нужна быстрая обратная связь и подтверждение записи.`,[name,phone,service,slot]);
 const copy=async()=>{try{await navigator.clipboard.writeText(brief);setCopied(true);setTimeout(()=>setCopied(false),1800)}catch{setCopied(false)}};
 return <main className="px-4 py-4 sm:px-6 lg:px-8">
  <header className="sticky top-3 z-50 mx-auto max-w-7xl rounded-[1.6rem] border border-line bg-white/90 p-3 shadow-card backdrop-blur">
   <div className="flex items-center justify-between gap-3">
    <a href="#" className="flex min-w-0 items-center gap-3 no-underline"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-lg font-black text-mint">BF</span><span className="min-w-0"><b className="block truncate tracking-[.28em]">BOOKINGFLOW</b><small className="font-bold text-muted">AI-ready booking demo</small></span></a>
    <nav className="hidden gap-6 text-sm font-black text-muted md:flex"><a href="#services">Услуги</a><a href="#booking">Запись</a><a href="#flow">Процесс</a></nav>
    <a href="#booking" className="hidden rounded-2xl bg-ink px-5 py-3 text-sm font-black text-mint no-underline md:inline-flex">Открыть демо</a>
    <button type="button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Открыть меню" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-soft text-2xl font-black leading-none text-ink md:hidden">{menuOpen ? "×" : "☰"}</button>
   </div>
   {menuOpen&&<div className="mt-3 grid gap-2 rounded-2xl border border-line bg-paper p-3 md:hidden"><a onClick={()=>setMenuOpen(false)} href="#services" className="rounded-xl px-4 py-3 font-black text-muted no-underline">Услуги</a><a onClick={()=>setMenuOpen(false)} href="#booking" className="rounded-xl px-4 py-3 font-black text-muted no-underline">Запись</a><a onClick={()=>setMenuOpen(false)} href="#flow" className="rounded-xl px-4 py-3 font-black text-muted no-underline">Процесс</a><a onClick={()=>setMenuOpen(false)} href="#booking" className="rounded-xl bg-ink px-4 py-3 text-center font-black text-mint no-underline">Открыть демо</a></div>}
  </header>

  <section className="mx-auto grid max-w-7xl gap-6 py-10 lg:grid-cols-[1fr_.82fr] lg:py-16">
   <div className="rounded-[2rem] border border-line bg-white p-5 shadow-soft sm:p-8">
    <p className="text-xs font-black uppercase tracking-[.42em] text-sky">Service booking · AI assistant · lead flow</p>
    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[.96] tracking-tight sm:text-6xl lg:text-7xl">Онлайн-запись для услуг без звонков, хаоса и потерянных клиентов.</h1>
    <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">BookingFlow AI — демонстрационный сайт для салона, клиники или сервиса. Клиент выбирает услугу и слот, а бизнес получает понятную заявку с готовым booking brief.</p>
    <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="#booking" className="rounded-2xl bg-mint px-6 py-4 text-center font-black text-ink no-underline">Попробовать демо-запись</a><a href="#flow" className="rounded-2xl border border-line bg-soft px-6 py-4 text-center font-black text-ink no-underline">Что решает сайт</a></div>
    <div className="mt-8 grid gap-3 sm:grid-cols-3">{[['24/7','путь до записи'],['AI','готовая заявка'],['4','шага до заявки']].map(([a,b])=><div className="rounded-3xl border border-line bg-paper p-5" key={a}><b className="text-3xl font-black">{a}</b><p className="mt-1 text-sm font-bold text-muted">{b}</p></div>)}</div>
   </div>
   <aside className="rounded-[2rem] bg-ink p-5 text-white shadow-soft sm:p-7">
    <div className="flex items-center justify-between"><p className="text-xs font-black uppercase tracking-[.36em] text-mint">AI booking assistant</p><span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-black text-mint">demo</span></div>
    <div className="mt-6 space-y-4 text-sm font-bold leading-7"><div className="rounded-3xl bg-white/10 p-4">Я помогу выбрать услугу, свободное время и подготовить заявку для администратора.</div><div className="ml-auto max-w-[86%] rounded-3xl bg-mint p-4 text-ink">Нужна консультация сегодня после 11:00.</div><div className="rounded-3xl bg-white/10 p-4">Подходит слот {slot}. Собираю короткий booking brief.</div></div>
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-black uppercase tracking-[.28em] text-mint">Prepared booking</p><p className="mt-3 text-sm leading-7 text-white/80">{brief}</p></div>
   </aside>
  </section>

  <section id="services" className="mx-auto max-w-7xl py-8">
   <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.42em] text-sky">Services</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Услуги, которые быстро ведут к записи.</h2></div><p className="max-w-xl text-base leading-8 text-muted">Карточки услуг не просто информируют, а сразу помогают выбрать сценарий и перейти к слоту.</p></div>
   <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((x,i)=><article onClick={()=>setService(x)} className={`card cursor-pointer rounded-[1.7rem] border p-5 shadow-card ${service===x?'border-mint bg-mint/20':'border-line bg-white'}`} key={x}><span className="text-xs font-black text-sky">0{i+1}</span><div className="mt-8 h-28 rounded-[1.4rem] bg-soft"><div className="h-full rounded-[1.4rem] border border-line bg-gradient-to-br from-white to-soft"/></div><h3 className="mt-5 text-xl font-black">{x}</h3><p className="mt-2 text-sm leading-7 text-muted">Описание услуги, ориентиры, кому подходит и что уточнит AI-помощник перед записью.</p></article>)}</div>
  </section>

  <section id="booking" className="mx-auto grid max-w-7xl gap-6 py-12 lg:grid-cols-[.8fr_1fr]">
   <div><p className="text-xs font-black uppercase tracking-[.42em] text-sky">Booking form</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Форма собирает не пустой контакт, а понятную заявку.</h2><p className="mt-5 text-base leading-8 text-muted">Это frontend-демо. Сейчас кнопка копирует заявку. В реальном проекте сюда подключается Telegram, CRM, Google Sheets, WhatsApp или онлайн-запись.</p></div>
   <form className="rounded-[2rem] border border-line bg-white p-5 shadow-soft sm:p-7" onSubmit={(e)=>{e.preventDefault();copy()}}>
    <div className="grid gap-4 sm:grid-cols-2"><label className="font-black text-muted">Имя<input value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-2xl border border-line bg-paper p-4 text-ink outline-none"/></label><label className="font-black text-muted">Контакт<input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-2 w-full rounded-2xl border border-line bg-paper p-4 text-ink outline-none"/></label></div>
    <div className="mt-5"><p className="font-black text-muted">Услуга</p><div className="mt-3 flex flex-wrap gap-2">{services.map(x=><button type="button" onClick={()=>setService(x)} className={`rounded-full border px-4 py-2 text-sm font-black ${service===x?'border-ink bg-ink text-mint':'border-line bg-paper text-muted'}`} key={x}>{x}</button>)}</div></div>
    <div className="mt-5"><p className="font-black text-muted">Свободные слоты</p><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">{slots.map(x=><button type="button" onClick={()=>setSlot(x)} className={`rounded-2xl border p-3 text-sm font-black ${slot===x?'border-mint bg-mint text-ink':'border-line bg-paper text-muted'}`} key={x}>{x}</button>)}</div></div>
    <div className="mt-6 rounded-3xl border border-line bg-soft p-5"><p className="text-xs font-black uppercase tracking-[.28em] text-sky">Booking brief</p><p className="mt-3 text-sm leading-7 text-muted">{brief}</p></div>
    <button className="mt-5 w-full rounded-2xl bg-ink px-6 py-4 font-black text-mint">{copied ? "Заявка скопирована" : "Скопировать заявку"}</button>
   </form>
  </section>

  <section id="flow" className="mx-auto max-w-7xl py-8"><p className="text-xs font-black uppercase tracking-[.42em] text-sky">Process</p><h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">От интереса до подтверждения записи.</h2><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([n,t,d])=><div className="rounded-3xl border border-line bg-white p-5 shadow-card" key={n}><span className="text-xs font-black text-sky">{n}</span><h3 className="mt-5 text-xl font-black">{t}</h3><p className="mt-3 text-sm leading-7 text-muted">{d}</p></div>)}</div></section>

  <section className="mx-auto max-w-7xl py-10"><div className="grid gap-4 lg:grid-cols-3">{cases.map(([t,d])=><article className="rounded-[1.7rem] border border-line bg-white p-5 shadow-card" key={t}><div className="h-36 rounded-[1.4rem] bg-gradient-to-br from-soft to-white"/><h3 className="mt-5 text-xl font-black">{t}</h3><p className="mt-3 text-sm leading-7 text-muted">{d}</p></article>)}</div></section>

  <section className="-mx-4 mt-8 bg-ink px-4 py-14 text-white sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-soft sm:p-10"><p className="text-xs font-black uppercase tracking-[.42em] text-mint">Contact placeholder</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Сайт показывает не просто дизайн, а готовый сценарий заявки.</h2><p className="mx-auto mt-4 max-w-2xl text-white/70">Следующий шаг для реального клиента — заменить демо-данные, подключить Telegram/CRM и сделать настоящую отправку заявки.</p><a href="#booking" className="mt-7 inline-flex rounded-2xl bg-mint px-7 py-4 font-black text-ink no-underline">Вернуться к демо-записи</a></div></section>
 </main>
}
createRoot(document.getElementById('root')!).render(<App/>);
