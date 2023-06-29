import{_ as n,o as s,c as a,a as t}from"./app-1c9dd427.js";const p={},o=t(`<h1 id="📔-php-ajax-and-php" tabindex="-1"><a class="header-anchor" href="#📔-php-ajax-and-php" aria-hidden="true">#</a> 📔 PHP - AJAX and PHP</h1><h2 id="php-ajax-and-php" tabindex="-1"><a class="header-anchor" href="#php-ajax-and-php" aria-hidden="true">#</a> PHP - AJAX and PHP</h2><p>AJAX ko&#39;proq interaktiv ilovalar yaratish uchun ishlatiladi.</p><p>AJAX PHP misoli Quyidagi misolda foydalanuvchi kiritish maydoniga belgilar kiritayotganda veb-sahifa veb-server bilan qanday bog‘lanishi mumkinligini ko‘rsatad</p><p><a href="https://www.w3schools.com/php/showphp.php?filename=demo_ajax_php">Misolni ko&#39;rish uchun bosing</a></p><p>Misol tushuntirildi</p><p>Yuqoridagi misolda foydalanuvchi kiritish maydoniga belgi yozganda, “showHint()” funksiyasi bajariladi.</p><p>Funktsiya onkeyup hodisasi tomonidan ishga tushiriladi.</p><p>Mana HTML kodi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">function</span> <span class="token function-definition function">showHint</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token operator">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token operator">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;txtHint&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>innerHTML <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> xmlhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xmlhttp<span class="token operator">.</span>onreadystatechange <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>this<span class="token operator">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> this<span class="token operator">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token operator">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;txtHint&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>innerHTML <span class="token operator">=</span> this<span class="token operator">.</span>responseText<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    xmlhttp<span class="token operator">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;gethint.php?q=&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xmlhttp<span class="token operator">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>b<span class="token operator">&gt;</span>Start typing a name in the input field below<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string double-quoted-string">&quot;&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;fname&quot;</span><span class="token operator">&gt;</span>First name<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;text&quot;</span> id<span class="token operator">=</span><span class="token string double-quoted-string">&quot;fname&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;fname&quot;</span> onkeyup<span class="token operator">=</span><span class="token string double-quoted-string">&quot;showHint(this.value)&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Suggestions<span class="token punctuation">:</span> <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string double-quoted-string">&quot;txtHint&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kod tushuntirish:</p><p>Birinchidan, kiritish maydoni bo&#39;sh yoki yo&#39;qligini tekshiring (str.length == 0). Agar shunday bo&#39;lsa, txtHint to&#39;ldiruvchisi tarkibini tozalang va funksiyadan chiqing.</p><p>Biroq, kiritish maydoni bo&#39;sh bo&#39;lmasa, quyidagilarni bajaring:</p><ul><li>XMLHttpRequest obyektini yarating</li><li>Server javobi tayyor bo&#39;lganda bajariladigan funksiyani yarating</li><li>So&#39;rovni serverdagi PHP fayliga (gethint.php) yuboring</li><li>E&#39;tibor bering, q parametri URL manziliga qo&#39;shilgan (gethint.php?q=&quot;+str)</li><li>Va str o&#39;zgaruvchisi kirish maydonining mazmunini ushlab turadi</li></ul><p>PHP fayli - &quot;gethint.php&quot; PHP fayli bir qator nomlarni tekshiradi va brauzerga tegishli nom(lar)ni qaytaradi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// Array with names</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Anna&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Brittany&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Cinderella&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Diana&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Eva&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Fiona&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Gunda&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Hege&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Inga&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Johanna&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Kitty&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Linda&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Nina&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Ophelia&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Petunia&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Amanda&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Raquel&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Cindy&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Doris&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Eve&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Evita&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Sunniva&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Tove&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Unni&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Violet&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Liza&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Elizabeth&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Ellen&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Wenche&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$a</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Vicky&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// get the q parameter from URL</span>
<span class="token variable">$q</span> <span class="token operator">=</span> <span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;q&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$hint</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// lookup all hints from array if $q is different from &quot;&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$q</span> <span class="token operator">!==</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$q</span> <span class="token operator">=</span> <span class="token function">strtolower</span><span class="token punctuation">(</span><span class="token variable">$q</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$len</span><span class="token operator">=</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$q</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token keyword">as</span> <span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">stristr</span><span class="token punctuation">(</span><span class="token variable">$q</span><span class="token punctuation">,</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$len</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$hint</span> <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$hint</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token variable">$hint</span> <span class="token operator">.=</span> <span class="token string double-quoted-string">&quot;, <span class="token interpolation"><span class="token variable">$name</span></span>&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Output &quot;no suggestion&quot; if no hint was found or output correct values</span>
<span class="token keyword">echo</span> <span class="token variable">$hint</span> <span class="token operator">===</span> <span class="token string double-quoted-string">&quot;&quot;</span> <span class="token operator">?</span> <span class="token string double-quoted-string">&quot;no suggestion&quot;</span> <span class="token punctuation">:</span> <span class="token variable">$hint</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[o];function i(l,c){return s(),a("div",null,e)}const r=n(p,[["render",i],["__file","php.html.vue"]]);export{r as default};