import{_ as n,o as s,c as a,a as t}from"./app-d17e5b05.js";const e={},i=t(`<h1 id="📔-16-dars" tabindex="-1"><a class="header-anchor" href="#📔-16-dars" aria-hidden="true">#</a> 📔 16-dars</h1><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><p>JSON JavaScript Object Notation degan ma&#39;noni anglatadi. JSON sintaksisi JavaScript ob&#39;ekt belgilari sintaksisidan olingan, ammo JSON formati faqat matn yoki satrdir. JSON saqlash va tashish uchun engil vaznli ma&#39;lumotlar formatidir. JSON asosan serverdan mijozga maʼlumotlar yuborilganda ishlatiladi. JSON - bu XML ga ishlatish uchun qulay muqobil.</p><p><strong>Misol:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token string-property property">&quot;users&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span><span class="token string">&quot;Asabeneh&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span><span class="token string">&quot;Yetayeh&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">250</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span><span class="token string">&quot;asab@asb.com&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span><span class="token string">&quot;Alex&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span><span class="token string">&quot;James&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span><span class="token string">&quot;alex@alex.com&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;firstName&quot;</span><span class="token operator">:</span><span class="token string">&quot;Lidiya&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;lastName&quot;</span><span class="token operator">:</span><span class="token string">&quot;Tekle&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">28</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span><span class="token string">&quot;lidiya@lidiya.com&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yuqoridagi JSON misoli oddiy ob&#39;ekt uchun unchalik farq qilmaydi. Xo&#39;sh, qanday farq bor? Farqi shundaki, JSON ob&#39;ektining kaliti qo&#39;sh tirnoqli bo&#39;lishi kerak yoki u satr bo&#39;lishi kerak. JavaScript Ob&#39;ekti va JSON juda o&#39;xshash, biz JSONni Ob&#39;ektga va Ob&#39;ektni JSONga o&#39;zgartirishimiz mumkin.</p><p>Keling, yuqoridagi misolni batafsil ko&#39;rib chiqaylik, u jingalak qavs bilan boshlanadi. Jingalak qavs ichida qiymatlar qatoriga ega bo&#39;lgan &quot;foydalanuvchilar&quot; tugmasi mavjud. Massiv ichida bizda turli xil ob&#39;ektlar bor va har bir ob&#39;ektda kalitlar mavjud, har bir kalitda qo&#39;sh tirnoq bo&#39;lishi kerak. Misol uchun, biz faqat firstName o&#39;rniga &quot;firstNaMe&quot; dan foydalanamiz, lekin ob&#39;ektda biz qo&#39;sh tirnoqsiz kalitlardan foydalanamiz. Bu ob&#39;ekt va JSON o&#39;rtasidagi asosiy farq. Keling, JSON haqida ko&#39;proq misollarni ko&#39;rib chiqaylik.</p><p><strong>Misol:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Alex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alex@alex.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;JavaScript&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;isLoggedIn&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token number">30</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;Asab&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asab@asab.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Redux&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;MongoDB&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Express&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;React&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Node&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;isLoggedIn&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;Brook&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;daniel@daniel.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;React&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Redux&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;isLoggedIn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;Daniel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;daniel@alex.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Python&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;isLoggedIn&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;John&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;john@john.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;React&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Redux&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Node.js&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;isLoggedIn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;Thomas&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thomas@thomas.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;React&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;isLoggedIn&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;Paul&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;paul@paul.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;MongoDB&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Express&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;React&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Node&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;isLoggedIn&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-ni-javascript-obyektiga-aylantirish" tabindex="-1"><a class="header-anchor" href="#json-ni-javascript-obyektiga-aylantirish" aria-hidden="true">#</a> JSON-ni JavaScript obyektiga aylantirish</h3><p>Ko&#39;pincha biz JSON ma&#39;lumotlarini HTTP javobidan yoki fayldan olamiz, lekin biz JSONni satr sifatida saqlashimiz va namoyish qilish uchun Ob&#39;ektga o&#39;zgartirishimiz mumkin. JavaScript-da JSON kalit so&#39;zida parse () va stringify() usullari mavjud. JSONni ob&#39;ektga o&#39;zgartirmoqchi bo&#39;lganimizda, biz JSONni JSON.parse() yordamida tahlil qilamiz . Ob&#39;ektni JSONga o&#39;zgartirmoqchi bo&#39;lganimizda biz JSON.stringify() dan foydalanamiz .</p><h4 id="json-parse" tabindex="-1"><a class="header-anchor" href="#json-parse" aria-hidden="true">#</a> JSON.parse()</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">[</span><span class="token punctuation">,</span> reviver<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// json or text , the data</span>
<span class="token comment">// reviver is an optional callback function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> usersText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{
&quot;users&quot;:[
  {
    &quot;firstName&quot;:&quot;Asabeneh&quot;,
    &quot;lastName&quot;:&quot;Yetayeh&quot;,
    &quot;age&quot;:250,
    &quot;email&quot;:&quot;asab@asb.com&quot;
  },
  {
    &quot;firstName&quot;:&quot;Alex&quot;,
    &quot;lastName&quot;:&quot;James&quot;,
    &quot;age&quot;:25,
    &quot;email&quot;:&quot;alex@alex.com&quot;
  },
  {
  &quot;firstName&quot;:&quot;Lidiya&quot;,
  &quot;lastName&quot;:&quot;Tekle&quot;,
  &quot;age&quot;:28,
  &quot;email&quot;:&quot;lidiya@lidiya.com&quot;
  }
]
}</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> usersObj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>usersText<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>usersObj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-parse-bilan-reviver-funksiyasidan-foydalanish" tabindex="-1"><a class="header-anchor" href="#json-parse-bilan-reviver-funksiyasidan-foydalanish" aria-hidden="true">#</a> JSON.parse() bilan reviver funksiyasidan foydalanish</h3><p>Reviver funktsiyasidan formatlovchi sifatida foydalanish uchun biz ism va familiya qiymatini formatlashni xohlagan kalitlarni qo&#39;yamiz. Aytaylik, biz JSON ma&#39;lumotlarining ismi va familiyasini formatlashdan manfaatdormiz.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> usersText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{
&quot;users&quot;:[
  {
    &quot;firstName&quot;:&quot;Asabeneh&quot;,
    &quot;lastName&quot;:&quot;Yetayeh&quot;,
    &quot;age&quot;:250,
    &quot;email&quot;:&quot;asab@asb.com&quot;
  },
  {
    &quot;firstName&quot;:&quot;Alex&quot;,
    &quot;lastName&quot;:&quot;James&quot;,
    &quot;age&quot;:25,
    &quot;email&quot;:&quot;alex@alex.com&quot;
  },
  {
  &quot;firstName&quot;:&quot;Lidiya&quot;,
  &quot;lastName&quot;:&quot;Tekle&quot;,
  &quot;age&quot;:28,
  &quot;email&quot;:&quot;lidiya@lidiya.com&quot;
  }
]
}</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> usersObj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>usersText<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newValue <span class="token operator">=</span>
    <span class="token keyword">typeof</span> value <span class="token operator">==</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> key <span class="token operator">!=</span> <span class="token string">&#39;email&#39;</span> <span class="token operator">?</span> value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> value
  <span class="token keyword">return</span> newValue
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>usersObj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>JSON.parse ()</em> dan foydalanish juda qulay. Siz ixtiyoriy parametrdan o&#39;tishingiz shart emas, uni faqat kerakli parametr bilan ishlatishingiz mumkin va siz juda ko&#39;p narsaga erishasiz.</p><h3 id="ob-ektni-jsonga-aylantirish" tabindex="-1"><a class="header-anchor" href="#ob-ektni-jsonga-aylantirish" aria-hidden="true">#</a> Ob&#39;ektni JSONga aylantirish</h3><p>Ob&#39;ektni JSONga o&#39;zgartirmoqchi bo&#39;lganimizda biz <em>JSON.stringify()</em> dan foydalanamiz . Stringify usuli bitta talab qilinadigan parametr va ikkita ixtiyoriy parametrni oladi. O&#39;zgartirish moslamasi filtr sifatida ishlatiladi va bo&#39;sh joy - chuqurchalar. Agar biz ob&#39;ektdan biron bir kalitni filtrlashni istamasak, biz aniqlanmagan holda o&#39;tishimiz mumkin.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> replacer<span class="token punctuation">,</span> space<span class="token punctuation">)</span>
<span class="token comment">// json or text , the data</span>
<span class="token comment">// reviver is an optional callback function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Keling, quyidagi ob&#39;ektni satrga aylantiramiz. Avval foydalanishga ruxsat bering, barcha kalitlarni saqlab qo&#39;ying va bizda 4 ta bo&#39;sh joy bo&#39;lsin.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">Alex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;alex@alex.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Asab</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;asab@asab.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;Redux&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;MongoDB&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;Express&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;Node&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">50</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Brook</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;daniel@daniel.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Redux&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">50</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Daniel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;daniel@alex.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Python&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">40</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">John</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;john@john.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Redux&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">50</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Thomas</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;thomas@thomas.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">40</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Paul</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;paul@paul.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;MongoDB&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;Express&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;Node&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">40</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> txt <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span> <span class="token comment">// matn JSON- degan ma&#39;noni anglatadi, chunki json ob&#39;ektning satr shaklidir.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;Alex&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;alex@alex.com&quot;</span>,
        <span class="token string">&quot;skills&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span>,
            <span class="token string">&quot;CSS&quot;</span>,
            <span class="token string">&quot;JavaScript&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20</span>,
        <span class="token string">&quot;isLoggedIn&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;points&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;Asab&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asab@asab.com&quot;</span>,
        <span class="token string">&quot;skills&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span>,
            <span class="token string">&quot;CSS&quot;</span>,
            <span class="token string">&quot;JavaScript&quot;</span>,
            <span class="token string">&quot;Redux&quot;</span>,
            <span class="token string">&quot;MongoDB&quot;</span>,
            <span class="token string">&quot;Express&quot;</span>,
            <span class="token string">&quot;React&quot;</span>,
            <span class="token string">&quot;Node&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">25</span>,
        <span class="token string">&quot;isLoggedIn&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;points&quot;</span><span class="token builtin class-name">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;Brook&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;daniel@daniel.com&quot;</span>,
        <span class="token string">&quot;skills&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span>,
            <span class="token string">&quot;CSS&quot;</span>,
            <span class="token string">&quot;JavaScript&quot;</span>,
            <span class="token string">&quot;React&quot;</span>,
            <span class="token string">&quot;Redux&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30</span>,
        <span class="token string">&quot;isLoggedIn&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;points&quot;</span><span class="token builtin class-name">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;Daniel&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;daniel@alex.com&quot;</span>,
        <span class="token string">&quot;skills&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span>,
            <span class="token string">&quot;CSS&quot;</span>,
            <span class="token string">&quot;JavaScript&quot;</span>,
            <span class="token string">&quot;Python&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20</span>,
        <span class="token string">&quot;isLoggedIn&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;points&quot;</span><span class="token builtin class-name">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;John&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;john@john.com&quot;</span>,
        <span class="token string">&quot;skills&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span>,
            <span class="token string">&quot;CSS&quot;</span>,
            <span class="token string">&quot;JavaScript&quot;</span>,
            <span class="token string">&quot;React&quot;</span>,
            <span class="token string">&quot;Redux&quot;</span>,
            <span class="token string">&quot;Node.js&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20</span>,
        <span class="token string">&quot;isLoggedIn&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;points&quot;</span><span class="token builtin class-name">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;Thomas&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;thomas@thomas.com&quot;</span>,
        <span class="token string">&quot;skills&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span>,
            <span class="token string">&quot;CSS&quot;</span>,
            <span class="token string">&quot;JavaScript&quot;</span>,
            <span class="token string">&quot;React&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20</span>,
        <span class="token string">&quot;isLoggedIn&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;points&quot;</span><span class="token builtin class-name">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;Paul&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;paul@paul.com&quot;</span>,
        <span class="token string">&quot;skills&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;HTML&quot;</span>,
            <span class="token string">&quot;CSS&quot;</span>,
            <span class="token string">&quot;JavaScript&quot;</span>,
            <span class="token string">&quot;MongoDB&quot;</span>,
            <span class="token string">&quot;Express&quot;</span>,
            <span class="token string">&quot;React&quot;</span>,
            <span class="token string">&quot;Node&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20</span>,
        <span class="token string">&quot;isLoggedIn&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;points&quot;</span><span class="token builtin class-name">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify-bilan-filtr-massividan-foydalanish" tabindex="-1"><a class="header-anchor" href="#json-stringify-bilan-filtr-massividan-foydalanish" aria-hidden="true">#</a> JSON.stringify bilan filtr massividan foydalanish</h3><p>Keling, almashtirgichni filtr sifatida ishlatamiz. Foydalanuvchi ob&#39;ektida kalitlarning uzoq ro&#39;yxati mavjud, ammo biz ulardan faqat bir nechtasi bilan qiziqamiz. Biz saqlamoqchi bo&#39;lgan kalitlarni misolda ko&#39;rsatilganidek, massivga joylashtiramiz va uni almashtiruvchi o&#39;rniga ishlatamiz.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Asabeneh&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Yetayeh&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">country</span><span class="token operator">:</span> <span class="token string">&#39;Finland&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;Helsinki&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;alex@alex.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Pyhton&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> txt <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;firstName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lastName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;country&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;city&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;firstName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Asabeneh&quot;</span>,
    <span class="token string">&quot;lastName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Yetayeh&quot;</span>,
    <span class="token string">&quot;country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Finland&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Helsinki&quot;</span>,
    <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">250</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌕 Siz g&#39;ayrioddiysiz. Endi siz ma&#39;lumotlarni saqlash yoki HTTP serverini yuborish uchun foydalanishingiz mumkin bo&#39;lgan engil ma&#39;lumotlar formatini bildingiz. Siz buyuklik sari 16 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.</p><h2 id="mashqlar" tabindex="-1"><a class="header-anchor" href="#mashqlar" aria-hidden="true">#</a> Mashqlar</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> skills <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Node&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Python&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">250</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isMarried <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&#39;Asabeneh&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span><span class="token string">&#39;Yetayehe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">250</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isMarried</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skills</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Node&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Python&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> txt <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{
    &quot;Alex&quot;: {
        &quot;email&quot;: &quot;alex@alex.com&quot;,
        &quot;skills&quot;: [
            &quot;HTML&quot;,
            &quot;CSS&quot;,
            &quot;JavaScript&quot;
        ],
        &quot;age&quot;: 20,
        &quot;isLoggedIn&quot;: false,
        &quot;points&quot;: 30
    },
    &quot;Asab&quot;: {
        &quot;email&quot;: &quot;asab@asab.com&quot;,
        &quot;skills&quot;: [
            &quot;HTML&quot;,
            &quot;CSS&quot;,
            &quot;JavaScript&quot;,
            &quot;Redux&quot;,
            &quot;MongoDB&quot;,
            &quot;Express&quot;,
            &quot;React&quot;,
            &quot;Node&quot;
        ],
        &quot;age&quot;: 25,
        &quot;isLoggedIn&quot;: false,
        &quot;points&quot;: 50
    },
    &quot;Brook&quot;: {
        &quot;email&quot;: &quot;daniel@daniel.com&quot;,
        &quot;skills&quot;: [
            &quot;HTML&quot;,
            &quot;CSS&quot;,
            &quot;JavaScript&quot;,
            &quot;React&quot;,
            &quot;Redux&quot;
        ],
        &quot;age&quot;: 30,
        &quot;isLoggedIn&quot;: true,
        &quot;points&quot;: 50
    },
    &quot;Daniel&quot;: {
        &quot;email&quot;: &quot;daniel@alex.com&quot;,
        &quot;skills&quot;: [
            &quot;HTML&quot;,
            &quot;CSS&quot;,
            &quot;JavaScript&quot;,
            &quot;Python&quot;
        ],
        &quot;age&quot;: 20,
        &quot;isLoggedIn&quot;: false,
        &quot;points&quot;: 40
    },
    &quot;John&quot;: {
        &quot;email&quot;: &quot;john@john.com&quot;,
        &quot;skills&quot;: [
            &quot;HTML&quot;,
            &quot;CSS&quot;,
            &quot;JavaScript&quot;,
            &quot;React&quot;,
            &quot;Redux&quot;,
            &quot;Node.js&quot;
        ],
        &quot;age&quot;: 20,
        &quot;isLoggedIn&quot;: true,
        &quot;points&quot;: 50
    },
    &quot;Thomas&quot;: {
        &quot;email&quot;: &quot;thomas@thomas.com&quot;,
        &quot;skills&quot;: [
            &quot;HTML&quot;,
            &quot;CSS&quot;,
            &quot;JavaScript&quot;,
            &quot;React&quot;
        ],
        &quot;age&quot;: 20,
        &quot;isLoggedIn&quot;: false,
        &quot;points&quot;: 40
    },
    &quot;Paul&quot;: {
        &quot;email&quot;: &quot;paul@paul.com&quot;,
        &quot;skills&quot;: [
            &quot;HTML&quot;,
            &quot;CSS&quot;,
            &quot;JavaScript&quot;,
            &quot;MongoDB&quot;,
            &quot;Express&quot;,
            &quot;React&quot;,
            &quot;Node&quot;
        ],
        &quot;age&quot;: 20,
        &quot;isLoggedIn&quot;: false,
        &quot;points&quot;: 40
    }
}
</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mashqlar-level-1" tabindex="-1"><a class="header-anchor" href="#mashqlar-level-1" aria-hidden="true">#</a> Mashqlar Level 1</h3><ol><li><p>JSON.stringify() yordamida ko&#39;nikmalar massivini JSONga o&#39;zgartiring</p></li><li><p>Yosh o&#39;zgaruvchisini belgilang</p></li><li><p>isMarried o&#39;zgaruvchisini chiziqqa aylantiring</p></li><li><p>Talaba ob&#39;ektini chiziqlash</p></li></ol><h3 id="mashqlar-level-2" tabindex="-1"><a class="header-anchor" href="#mashqlar-level-2" aria-hidden="true">#</a> Mashqlar Level 2</h3><ol><li>Talabalar ob&#39;ektini faqat birinchi ism, familiya va ko&#39;nikmalar xususiyatlari bilan ajratib oling</li></ol><h3 id="mashqlar-level-3" tabindex="-1"><a class="header-anchor" href="#mashqlar-level-3" aria-hidden="true">#</a> Mashqlar Level 3</h3><ol><li>Ob&#39;ekt uchun <em>txt</em> JSON faylini tahlil qiling.</li><li><em>txt</em> da saqlangan o&#39;zgaruvchidan ko&#39;plab ko&#39;nikmalarga ega foydalanuvchini toping .</li></ol>`,37),p=[i];function o(l,u){return s(),a("div",null,p)}const r=n(e,[["render",o],["__file","16-dars.html.vue"]]);export{r as default};
