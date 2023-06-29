import{_ as n,o as s,c as a,a as t}from"./app-1c9dd427.js";const p={},e=t(`<h1 id="📔-php-oop-destructor" tabindex="-1"><a class="header-anchor" href="#📔-php-oop-destructor" aria-hidden="true">#</a> 📔 PHP OOP - Destructor</h1><h2 id="php-oop-destructor" tabindex="-1"><a class="header-anchor" href="#php-oop-destructor" aria-hidden="true">#</a> PHP OOP - Destructor</h2><p>PHP - __destruct funktsiyasi</p><p>Ob&#39;ekt yo&#39;q qilinganda yoki skript to&#39;xtatilganda yoki undan chiqqanda destruktor chaqiriladi.</p><p>Agar siz __destruct()funktsiya yaratsangiz, PHP avtomatik ravishda skript oxirida ushbu funktsiyani chaqiradi.</p><p>E&#39;tibor bering, yo&#39;q qilish funktsiyasi ikkita pastki chiziq (__) bilan boshlanadi!</p><p>Quyidagi misolda sinfdan ob&#39;ekt yaratganingizda avtomatik ravishda chaqiriladigan __construct() funksiyasi va skript oxirida avtomatik ravishda chaqiriladigan __destruct() funksiyasi mavjud:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token variable">$color</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;The fruit is <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">}</span></span>.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$apple</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Apple&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yana bir misol:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token variable">$color</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">color</span> <span class="token operator">=</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;The fruit is <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">}</span></span> and the color is <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">color</span><span class="token punctuation">}</span></span>.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$apple</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Eslama</p><p>Maslahat: Konstruktorlar va destruktorlar kod miqdorini kamaytirishga yordam bergani uchun ular juda foydali!</p></div>`,11),i=[e];function o(c,l){return s(),a("div",null,i)}const u=n(p,[["render",o],["__file","destructor.html.vue"]]);export{u as default};
