import{_ as a,o as s,c as n,a as t}from"./app-f550e77b.js";const e="/images/border.jpg",l={},i=t(`<h1 id="css-darsliklari" tabindex="-1"><a class="header-anchor" href="#css-darsliklari" aria-hidden="true">#</a> CSS darsliklari</h1><div class="custom-container tip"><p class="custom-container-title">CSS nima?</p><p>CSS HTML elementlari qanday ko&#39;rsatish kerakligini tasvirlaydi.<br></p><ol><li>CSS qisqartmasi Cascading Style Sheets degan ma&#39;noni anglatadi.</li><li>CSS HTML elementlari ekranda, qog&#39;ozda yoki boshqa ommaviy axborot vositalarida qanday ko&#39;rsatilishini tavsiflaydi</li><li>CSS filelarni tashqi file sifatida ulashimiz yaxshi</li></ol></div><h2 id="css-ishlatish-usullari" tabindex="-1"><a class="header-anchor" href="#css-ishlatish-usullari" aria-hidden="true">#</a> CSS ishlatish usullari:</h2><ol><li>Inline CSS</li><li>Ichki CSS</li><li>Tashqi CSS</li></ol><p>Inline CSS:<br> Inline uslubi bitta element uchun noyob uslubni qo&#39;llash uchun ishlatilishi mumkin. Inline uslublardan foydalanish uchun tegishli elementga uslub atributini qo&#39;shing. Style atributi har qanday CSS xususiyatini o&#39;z ichiga olishi mumkin.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Salom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ichki CSS:<br> Agar bitta HTML sahifasi o&#39;ziga xos uslubga ega bo&#39;lsa, ichki uslublar jadvalidan foydalanish mumkin. Ichki uslub <code>&lt;style&gt;</code> elementi ichida, bosh qismi ichida aniqlanadi.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">h1</span><span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Salom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tashqi CSS:<br> Tashqi uslublar jadvali yordamida siz faqat bitta faylni o&#39;zgartirish orqali butun veb-sayt ko&#39;rinishini o&#39;zgartirishingiz mumkin! Har bir HTML sahifasi bosh qismidagi <code>&lt;link&gt;</code> elementi ichidagi tashqi uslublar jadvali fayliga havolani o&#39;z ichiga olishi kerak.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css file yo&#39;li<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Salom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-selektorlar" tabindex="-1"><a class="header-anchor" href="#css-selektorlar" aria-hidden="true">#</a> CSS Selektorlar</h2><p>Biz HTML elementlariga CSS orqali turli xil stillar berishimiz uchun biz HTML elementlariga turli xil nomlar bilan murojaat qilishimiz mumkin.<br></p><ol><li><code>class</code></li><li><code>id</code></li><li><code>element nomi</code></li></ol><p><code>class</code> - berishimizdan asosiy sabab biz bir xil teglar ishlatilgan vaqtda bir tegga bergan stillarimiz boshqasiga o&#39;tishini olidini olish<br></p><div class="custom-container tip"><p class="custom-container-title">class berishni qoidasi:</p><ol><li>Katta harfda class yozmang</li><li>Raqamlarda yozmang class</li><li>2ta so&#39;zdan foydalansanggiz orasiga _ - bunday chiziqchalar qo&#39;ying</li><li>Contentdan kelib chiqib class berish harakat qiling</li></ol></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Salom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hello</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>id</code> - Bitta noyob selectorni tanlash uchun ishlatiladi<br></p><div class="custom-container tip"><p class="custom-container-title">id berishni qoidasi:</p><ol><li>Katta harfda class yozmang</li><li>Raqamlarda yozmang class</li><li>2ta so&#39;zdan foydalansanggiz orasiga _ - bunday chiziqchalar qo&#39;ying</li><li>Contentdan kelib chiqib class berish harakat qiling</li><li>Id nomi raqam bilan boshlanmaydi</li></ol></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Salom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#hello</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-chegaralar" tabindex="-1"><a class="header-anchor" href="#css-chegaralar" aria-hidden="true">#</a> CSS Chegaralar</h2><div class="custom-container tip"><p class="custom-container-title">CSSda chegara ko&#39;rinishlari:</p><p><code>border-style: qiymat kiritiladi;</code> shu ko&#39;rinishda yoziladi Quyidagi qiymatlarga ruxsat beriladi:</p><ol><li><code>dotted</code>- Nuqtali chegarani belgilaydi</li><li><code>dashed</code>- Chiziqli chegarani belgilaydi</li><li><code>solid</code>- Qattiq chegarani belgilaydi</li><li><code>double</code>- Ikki tomonlama chegarani belgilaydi</li><li><code>groove</code>- 3D yivli chegarani belgilaydi. Effekt chegara rangi qiymatiga bog&#39;liq</li><li><code>ridge</code>- 3D chiziqli chegarani belgilaydi. Effekt chegara rangi qiymatiga bog&#39;liq</li><li><code>inset</code>- 3D ichki chegarani belgilaydi. Effekt chegara rangi qiymatiga bog&#39;liq</li><li><code>outset</code>- 3D boshlang&#39;ich chegarasini belgilaydi. Effekt chegara rangi qiymatiga bog&#39;liq</li><li><code>none</code>- Chegarani belgilamaydi</li><li><code>hidden</code>- Yashirin chegarani belgilaydi<br><code>border-style</code> birdan toʻrtgacha qiymatga ega boʻlishi mumkin (yuqori chegara, oʻng chegara, pastki chegara va chap chegara uchun).</li></ol></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p.dotted</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.dashed</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.solid</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.double</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.groove</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> groove<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.ridge</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> ridge<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.inset</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> inset<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.outset</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> outset<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.none</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.hidden</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p.mix</span> <span class="token punctuation">{</span><span class="token property">border-style</span><span class="token punctuation">:</span> dotted dashed solid double<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+e+`"><p>Chegara kengligi<br><code>border-width</code> bilan ma&#39;lum bir o&#39;lcham asosida yoziladi</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p.one</span> <span class="token punctuation">{</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Chegara rangi<br></p><ol><li>nom - &quot;qizil&quot; kabi rang nomini belgilang</li><li>HEX - &quot;#ff0000&quot; kabi HEX qiymatini belgilang</li><li>RGB - RGB qiymatini belgilang, masalan, &quot;rgb (255,0,0)&quot;</li><li>Rang yozilmagan bo&#39;lsa u rangni meros qilib oladi</li></ol><p>Chegara tomonlari<br></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">border-top-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span>
  <span class="token property">border-right-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-bottom-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span>
  <span class="token property">border-left-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Chegarani qisqartma usulda yozsa ham bo&#39;ladi:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Elementlarga yumaloq chegaralar qo&#39;shish uchun biz <code>border-radius</code>dan foydalanamiz</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cssda-ranglar" tabindex="-1"><a class="header-anchor" href="#cssda-ranglar" aria-hidden="true">#</a> CSSda ranglar</h2><p>Ranglar oldindan belgilangan rang nomlari yoki RGB, HEX, HSL, RGBA, HSLA qiymatlari yordamida aniqlanadi. HTML/CSS 140 ta standart rang nomlarini qo&#39;llab-quvvatlaydi.</p>`,37),p=[i];function o(c,u){return s(),n("div",null,p)}const r=a(l,[["render",o],["__file","index.html.vue"]]);export{r as default};