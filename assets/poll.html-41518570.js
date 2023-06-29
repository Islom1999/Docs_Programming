import{_ as n,o as a,c as s,a as t}from"./app-1c9dd427.js";const p={},o=t(`<h1 id="📔-php-ajax-poll" tabindex="-1"><a class="header-anchor" href="#📔-php-ajax-poll" aria-hidden="true">#</a> 📔 PHP - AJAX Poll</h1><h2 id="php-ajax-poll-ajax-so-rovi" tabindex="-1"><a class="header-anchor" href="#php-ajax-poll-ajax-so-rovi" aria-hidden="true">#</a> PHP - AJAX Poll (AJAX so&#39;rovi)</h2><p>AJAX so&#39;rovi Quyidagi misolda natija qayta yuklanmasdan ko&#39;rsatiladigan so&#39;rovnoma ko&#39;rsatiladi.</p><form><h4>Sizga hozirgacha PHP va AJAX yoqadimi?</h4><input type="radio" name="poll"> Xa<br><input type="radio" name="poll"> Yo&#39;q </form><p>So&#39;rovnomani tanlasangiz umumiy javoblar statistikasini ko&#39;rsatadi</p><hr><p>Misol tushuntirilgan - HTML sahifasi</p><p>Agar foydalanuvchi yuqoridagi variantni tanlasa, “getVote()” funksiyasi bajariladi. Funktsiya &quot;onclick&quot; hodisasi tomonidan ishga tushiriladi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">function</span> <span class="token function-definition function">getVote</span><span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> xmlhttp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  xmlhttp<span class="token operator">.</span>onreadystatechange<span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>this<span class="token operator">.</span>readyState<span class="token operator">==</span><span class="token number">4</span> <span class="token operator">&amp;&amp;</span> this<span class="token operator">.</span>status<span class="token operator">==</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token operator">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;poll&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>innerHTML<span class="token operator">=</span>this<span class="token operator">.</span>responseText<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  xmlhttp<span class="token operator">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;poll_vote.php?vote=&quot;</span><span class="token operator">+</span><span class="token keyword type-declaration">int</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  xmlhttp<span class="token operator">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string double-quoted-string">&quot;poll&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token keyword">Do</span> you like <span class="token constant">PHP</span> <span class="token keyword">and</span> <span class="token constant">AJAX</span> so far<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>form<span class="token operator">&gt;</span>
Yes<span class="token punctuation">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;radio&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;vote&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;0&quot;</span> onclick<span class="token operator">=</span><span class="token string double-quoted-string">&quot;getVote(this.value)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
No<span class="token punctuation">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;radio&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;vote&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;1&quot;</span> onclick<span class="token operator">=</span><span class="token string double-quoted-string">&quot;getVote(this.value)&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getVote() funksiyasi quyidagilarni bajaradi:</p><ul><li>XMLHttpRequest obyektini yarating</li><li>Server javobi tayyor bo&#39;lganda bajariladigan funksiyani yarating</li><li>So&#39;rovni serverdagi faylga yuboring</li><li>Eʼtibor bering, URL manziliga parametr (ovoz) qoʻshilgan (ha yoki yoʻq varianti qiymati bilan)</li></ul><p>PHP fayli Yuqoridagi JavaScript tomonidan chaqirilgan serverdagi sahifa &quot;poll_vote.php&quot; deb nomlangan PHP faylidir:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$vote</span> <span class="token operator">=</span> <span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;vote&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//get content of textfile</span>
<span class="token variable">$filename</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;poll_result.txt&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$content</span> <span class="token operator">=</span> <span class="token function">file</span><span class="token punctuation">(</span><span class="token variable">$filename</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//put content in array</span>
<span class="token variable">$array</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;||&quot;</span><span class="token punctuation">,</span> <span class="token variable">$content</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$yes</span> <span class="token operator">=</span> <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$no</span> <span class="token operator">=</span> <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$vote</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$yes</span> <span class="token operator">=</span> <span class="token variable">$yes</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$vote</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$no</span> <span class="token operator">=</span> <span class="token variable">$no</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//insert votes to txt file</span>
<span class="token variable">$insertvote</span> <span class="token operator">=</span> <span class="token variable">$yes</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;||&quot;</span><span class="token operator">.</span><span class="token variable">$no</span><span class="token punctuation">;</span>
<span class="token variable">$fp</span> <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token variable">$filename</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fputs</span><span class="token punctuation">(</span><span class="token variable">$fp</span><span class="token punctuation">,</span><span class="token variable">$insertvote</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fclose</span><span class="token punctuation">(</span><span class="token variable">$fp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Result:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Yes:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>poll.gif<span class="token punctuation">&quot;</span></span>
<span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token variable">$yes</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token variable">$no</span><span class="token operator">+</span><span class="token variable">$yes</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&#39;</span></span>
<span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>20<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token variable">$yes</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token variable">$no</span><span class="token operator">+</span><span class="token variable">$yes</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>%
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>No:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>poll.gif<span class="token punctuation">&quot;</span></span>
<span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token variable">$no</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token variable">$no</span><span class="token operator">+</span><span class="token variable">$yes</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&#39;</span></span>
<span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>20<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token variable">$no</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token variable">$no</span><span class="token operator">+</span><span class="token variable">$yes</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>%
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Qiymat JavaScript-dan yuboriladi va quyidagilar sodir bo&#39;ladi:</p><ol><li>&quot;poll_result.txt&quot; faylining mazmunini oling</li><li>Fayl tarkibini o&#39;zgaruvchilarga qo&#39;ying va tanlangan o&#39;zgaruvchiga bittasini qo&#39;shing</li><li>Natijani &quot;poll_result.txt&quot; fayliga yozing</li><li>So&#39;rov natijalarining grafik tasvirini chiqaring</li></ol><p>Matn fayli Matn fayli (poll_result.txt) biz so&#39;rovdan olingan ma&#39;lumotlarni saqlaydigan joy.</p><p>U shunday saqlanadi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">0</span><span class="token operator">||</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Birinchi raqam &quot;Ha&quot; ovozini, ikkinchi raqam &quot;Yo&#39;q&quot; ovozini bildiradi.</p><p>Eslatma: Veb-serveringizga matnli faylni tahrirlashga ruxsat berishni unutmang. Hammaga ruxsat bermang , faqat veb-server (PHP).</p>`,20),e=[o];function l(i,c){return a(),s("div",null,e)}const r=n(p,[["render",l],["__file","poll.html.vue"]]);export{r as default};
