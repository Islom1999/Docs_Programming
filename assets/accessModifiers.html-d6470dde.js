import{_ as n,o as a,c as s,a as i}from"./app-1c9dd427.js";const e={},t=i(`<h1 id="📔-php-oop-access-modifiers" tabindex="-1"><a class="header-anchor" href="#📔-php-oop-access-modifiers" aria-hidden="true">#</a> 📔 PHP OOP - Access Modifiers</h1><h2 id="php-oop-access-modifiers-oop-kirish-modifikatorlari" tabindex="-1"><a class="header-anchor" href="#php-oop-access-modifiers-oop-kirish-modifikatorlari" aria-hidden="true">#</a> PHP OOP - Access Modifiers (OOP - Kirish modifikatorlari)</h2><p>PHP - Kirish modifikatorlari</p><p>Xususiyatlar va usullarda kirish o&#39;zgartirish moslamalari bo&#39;lishi mumkin, ular qayerdan foydalanish mumkinligini nazorat qiladi.</p><p>Uchta kirish modifikatori mavjud:</p><ul><li>public- mulk yoki usulga hamma joydan kirish mumkin. Bu standart</li><li>protected- xususiyat yoki usulga sinf ichida va shu sinfdan olingan sinflar orqali kirish mumkin</li><li>private- xususiyat yoki usulga FAQAT sinf ichida kirish mumkin</li></ul><p>Quyidagi misolda biz uchta xususiyatga (nom, rang va vazn) uchta turli kirish modifikatorlarini qo&#39;shdik. Bu yerda, agar siz nom xususiyatini o&#39;rnatishga harakat qilsangiz, u yaxshi ishlaydi (chunki name xususiyati ommaviydir va unga hamma joydan kirish mumkin). Biroq, agar siz rang yoki vazn xususiyatini o&#39;rnatishga harakat qilsangiz, bu halokatli xatolikka olib keladi (chunki rang va vazn xususiyati himoyalangan va maxfiydir):</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token variable">$weight</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$mango</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$mango</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Mango&#39;</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token variable">$mango</span><span class="token operator">-&gt;</span><span class="token property">color</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Yellow&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ERROR</span>
<span class="token variable">$mango</span><span class="token operator">-&gt;</span><span class="token property">weight</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;300&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ERROR</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Keyingi misolda biz ikkita funktsiyaga kirish modifikatorlarini qo&#39;shdik. Bu yerda, agar siz set_color() yoki set_weight() funksiyalarini chaqirmoqchi bo&#39;lsangiz, bu xatoga olib keladi (chunki ikkita funksiya himoyalangan va shaxsiy deb hisoblanadi), hatto barcha xususiyatlar ochiq bo&#39;lsa ham:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token variable">$weight</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function-definition function">set_name</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// a public function (default)</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$n</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">set_color</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// a protected function</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">color</span> <span class="token operator">=</span> <span class="token variable">$n</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">set_weight</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// a private function</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">weight</span> <span class="token operator">=</span> <span class="token variable">$n</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$mango</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$mango</span><span class="token operator">-&gt;</span><span class="token function">set_name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Mango&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token variable">$mango</span><span class="token operator">-&gt;</span><span class="token function">set_color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Yellow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ERROR</span>
<span class="token variable">$mango</span><span class="token operator">-&gt;</span><span class="token function">set_weight</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;300&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ERROR</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[t];function o(l,c){return a(),s("div",null,p)}const u=n(e,[["render",o],["__file","accessModifiers.html.vue"]]);export{u as default};