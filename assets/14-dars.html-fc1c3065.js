import{_ as a,o as n,c as s,a as e}from"./app-d17e5b05.js";const i={},t=e(`<h1 id="📔-14-dars" tabindex="-1"><a class="header-anchor" href="#📔-14-dars" aria-hidden="true">#</a> 📔 14-dars</h1><h2 id="xato-bilan-ishlash" tabindex="-1"><a class="header-anchor" href="#xato-bilan-ishlash" aria-hidden="true">#</a> Xato bilan ishlash</h2><p>JavaScript erkin yozilgan tildir. Ba&#39;zida siz aniqlanmagan o&#39;zgaruvchiga kirishga harakat qilganingizda yoki aniqlanmagan funktsiyaga qo&#39;ng&#39;iroq qilganingizda ish vaqti xatosi paydo bo&#39;ladi.</p><p>Python yoki Java-ga o&#39;xshash JavaScript try-catch-finally bloki yordamida ish vaqtidagi xatolarni aniqlash uchun xatolarni qayta ishlash mexanizmini taqdim etadi.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// xato berishi mumkin bo&#39;lgan kod </span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// xatolik yuz berganda bajariladigan kod </span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
  <span class="token comment">// xatolik yuz bergan yoki bo&#39;lmasligidan qat&#39;iy nazar bajariladigan kod </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>try</strong>: try blokida xatolikka olib kelishi mumkin bo&#39;lgan shubhali kodni o&#39;rab oling. try iborasi bizga bajarilayotgan vaqtda xatolar uchun tekshiriladigan kod blokini aniqlash imkonini beradi.</p><p><strong>catch</strong>: xatolik yuz berganda catch blokida biror narsa qilish uchun kod yozing. Catch blokida xatolik haqida ma&#39;lumot beradigan parametrlar bo&#39;lishi mumkin. Catch bloki xatoni qayd qilish yoki foydalanuvchiga ma&#39;lum xabarlarni ko&#39;rsatish uchun ishlatiladi.</p><p><strong>finally</strong>: finally blok har doim xatolik yuzaga kelishidan qat&#39;iy nazar bajariladi. Finally bloki qolgan vazifani bajarish yoki sinab ko&#39;rish blokida xatolik yuz berishidan oldin o&#39;zgargan o&#39;zgaruvchilarni tiklash uchun ishlatilishi mumkin.</p><p><strong>Misol:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Yetayeh&#39;</span>
  <span class="token keyword">let</span> fullName <span class="token operator">=</span> fistName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ReferenceError: fistName is not defined
    at <span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span>:4:20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Yetayeh&#39;</span>
  <span class="token keyword">let</span> fullName <span class="token operator">=</span> fistName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// biz console.log() yoki console.error() </span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;In any case I will be executed&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ReferenceError: fistName is not defined
    at <span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span>:4:20
In any <span class="token keyword">case</span> it  will be executed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Catch bloki parametrni oladi. Catch blokiga parametr sifatida e, err yoki xatoni o&#39;tkazish odatiy holdir. Bu parametr ob&#39;ekt bo&#39;lib, unda nom va xabar kalitlari mavjud. Ism va xabardan foydalanaylik.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Yetayeh&#39;</span>
  <span class="token keyword">let</span> fullName <span class="token operator">=</span> fistName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Name of the error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error message&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;In any case I will be executed&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Name of the error ReferenceError
Error message fistName is not defined
In any <span class="token keyword">case</span> I will be executed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>throw: throw bayonoti bizga maxsus xato yaratish imkonini beradi. Biz satr, raqam, mantiqiy yoki ob&#39;ekt orqali mumkin. Istisnoni tashlash uchun throw iborasidan foydalaning. Istisno qo&#39;yganingizda, ifoda istisnoning qiymatini belgilaydi. Quyidagilarning har biri istisno qiladi:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">throw</span> <span class="token string">&#39;Error2&#39;</span> <span class="token comment">// string qiymati bilan istisno hosil qiladi </span>
<span class="token keyword">throw</span> <span class="token number">42</span> <span class="token comment">// qiymati bilan istisno hosil qiladi </span>
<span class="token keyword">throw</span> <span class="token boolean">true</span> <span class="token comment">// qiymati bilan istisno hosil qiladi true </span>
<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Required&#39;</span><span class="token punctuation">)</span> <span class="token comment">// xato ob&#39;ektini yaratadi. Majburiy xabar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">throwErroMisolFun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> message
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;Enter a number: &#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&#39;empty&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&#39;not a number&#39;</span>
    x <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&#39;too low&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&#39;too high&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">throwErroMisolFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="error-types" tabindex="-1"><a class="header-anchor" href="#error-types" aria-hidden="true">#</a> Error Types</h3><ul><li>ReferenceError: Noqonuniy havola yuz berdi. Agar biz e&#39;lon qilinmagan o&#39;zgaruvchidan foydalansak, ReferenceError tashlanadi.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Asabeneh&#39;</span>
<span class="token keyword">let</span> fullName <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Uncaught ReferenceError: lastName is not defined
    at <span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span>:2:35
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SyntaxError: Sintaksis xatosi yuz berdi</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token number">2</span> x <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>&#39;Hello<span class="token punctuation">,</span> world&quot;<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Uncaught SyntaxError: Unexpected identifier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>TypeError: Tur xatosi yuz berdi</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Uncaught TypeError: num.toLowerCase is not a <span class="token keyword">function</span>
    at <span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span>:2:17
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Bular kod yozishda duch kelishi mumkin bo&#39;lgan keng tarqalgan xatolardir. Xatolarni tushunish sizga qanday xatolarga yo&#39;l qo&#39;yganingizni bilishingizga yordam beradi va kodingizni tezda disk raskadrovka qilishga yordam beradi.</p><p>🌕 Siz beg&#39;uborsiz. Endi siz xatolarni qanday hal qilishni bilar edingiz va kutilmagan foydalanuvchi kiritishlarini boshqaradigan mustahkam dastur yozishingiz mumkin. Siz hozirgina 14-kun sinovlarini yakunladingiz va siz buyuklik sari 14 qadam oldindasiz. Endi miyangiz va mushaklaringiz uchun bir nechta mashqlarni bajaring.</p><h2 id="mashqlar" tabindex="-1"><a class="header-anchor" href="#mashqlar" aria-hidden="true">#</a> Mashqlar</h2><h3 id="mashqlar-level-1" tabindex="-1"><a class="header-anchor" href="#mashqlar-level-1" aria-hidden="true">#</a> Mashqlar:Level 1</h3><p>Amaliyot</p><h3 id="mashqlar-level-2" tabindex="-1"><a class="header-anchor" href="#mashqlar-level-2" aria-hidden="true">#</a> Mashqlar: Level 2</h3><p>Amaliyot</p><h3 id="mashqlar-level" tabindex="-1"><a class="header-anchor" href="#mashqlar-level" aria-hidden="true">#</a> Mashqlar:Level</h3><p>Amaliyot</p>`,38),o=[t];function l(p,c){return n(),s("div",null,o)}const d=a(i,[["render",l],["__file","14-dars.html.vue"]]);export{d as default};
