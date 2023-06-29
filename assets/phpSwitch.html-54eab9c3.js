import{_ as n,o as a,c as s,a as e}from"./app-dcb21b78.js";const t={},o=e(`<h1 id="📔-php-switch" tabindex="-1"><a class="header-anchor" href="#📔-php-switch" aria-hidden="true">#</a> 📔 PHP switch</h1><p>Bayonot switchturli shartlarga asoslangan turli harakatlarni bajarish uchun ishlatiladi.</p><h2 id="php-switch-bayonoti" tabindex="-1"><a class="header-anchor" href="#php-switch-bayonoti" aria-hidden="true">#</a> PHP switch bayonoti</h2><p>Bajarish uchun ko&#39;plab kod bloklaridan birini tanlashswitch uchun bayonotdan foydalaning .</p><p>Sintaksis</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> label1<span class="token punctuation">:</span>
    code to be executed <span class="token keyword">if</span> n<span class="token operator">=</span>label1<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> label2<span class="token punctuation">:</span>
    code to be executed <span class="token keyword">if</span> n<span class="token operator">=</span>label2<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> label3<span class="token punctuation">:</span>
    code to be executed <span class="token keyword">if</span> n<span class="token operator">=</span>label3<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
  <span class="token keyword">default</span><span class="token punctuation">:</span>
    code to be executed <span class="token keyword">if</span> n is different from all labels<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bu shunday ishlaydi: Avval bizda bitta n ifodasi (ko&#39;pincha o&#39;zgaruvchi) bor, u bir marta baholanadi. Keyin ifodaning qiymati strukturadagi har bir holat uchun qiymatlar bilan taqqoslanadi. Agar mos keladigan bo&#39;lsa, u holda bog&#39;langan kod bloki bajariladi. breakKodning keyingi holatga avtomatik ravishda kirishiga yo&#39;l qo&#39;ymaslik uchun foydalaning . defaultAgar moslik topilmasa, bayonot ishlatiladi .</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$favcolor</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;red&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$favcolor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string double-quoted-string">&quot;red&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Your favorite color is red!&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string double-quoted-string">&quot;blue&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Your favorite color is blue!&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string double-quoted-string">&quot;green&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Your favorite color is green!&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Your favorite color is neither red, blue, nor green!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[o];function l(p,c){return a(),s("div",null,i)}const r=n(t,[["render",l],["__file","phpSwitch.html.vue"]]);export{r as default};
