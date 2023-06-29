import{_ as n,o as a,c as s,a as i}from"./app-1c9dd427.js";const t={},e=i(`<h1 id="📔-php-sharhlari" tabindex="-1"><a class="header-anchor" href="#📔-php-sharhlari" aria-hidden="true">#</a> 📔 PHP sharhlari</h1><h2 id="php-da-sharhlar" tabindex="-1"><a class="header-anchor" href="#php-da-sharhlar" aria-hidden="true">#</a> PHP da sharhlar</h2><p>PHP kodidagi izoh dasturning bir qismi sifatida bajarilmaydigan qatordir. Uning yagona maqsadi kodni ko&#39;rib chiqayotgan odam tomonidan o&#39;qilishidir.</p><p>Sharhlar quyidagilar uchun ishlatilishi mumkin:</p><ul><li>Boshqalarga kodingizni tushunishiga imkon bering</li><li>O&#39;zingizga nima qilganingizni eslating - Ko&#39;pchilik dasturchilar bir yoki ikki yildan keyin o&#39;z ishlariga qaytishni va nima qilganlarini qayta aniqlashga majbur bo&#39;lishdi. Sharhlar sizga kodni yozganingizda nimani o&#39;ylaganingizni eslatishi mumkin</li></ul><p>PHP sharhlashning bir necha usullarini qo&#39;llab-quvvatlaydi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// This is a single-line comment</span>

<span class="token comment"># This is also a single-line comment</span>
<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ko&#39;p qatorli sharhlar sintaksisi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">/*
This is a multiple-lines comment block
that spans over multiple
lines
*/</span>
<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kod qismlarini qoldirish uchun sharhlardan foydalanish:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// You can also use comments to leave out parts of a code line</span>
<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">/* + 15 */</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$x</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[e];function p(c,o){return a(),s("div",null,l)}const u=n(t,[["render",p],["__file","comment.html.vue"]]);export{u as default};
