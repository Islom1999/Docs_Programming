import{_ as a,o as n,c as s,a as i}from"./app-b44ed27c.js";const t={},e=i(`<h1 id="📔-php-file-create-write" tabindex="-1"><a class="header-anchor" href="#📔-php-file-create-write" aria-hidden="true">#</a> 📔 PHP File Create/Write</h1><h2 id="php-file-create-write-php-faylini-yaratish-yozish" tabindex="-1"><a class="header-anchor" href="#php-file-create-write-php-faylini-yaratish-yozish" aria-hidden="true">#</a> PHP File Create/Write (PHP faylini yaratish/yozish)</h2><p>PHP fayl yaratish - fopen()</p><p>Funktsiya fopen()fayl yaratish uchun ham ishlatiladi. Balki biroz chalkashdir, lekin PHP da fayl fayllarni ochish uchun ishlatiladigan funksiya yordamida yaratiladi.</p><p>Agar siz fopen()mavjud bo&#39;lmagan fayldan foydalansangiz, u fayl yozish (w) yoki (a) qo&#39;shish uchun ochilganligini hisobga olib, uni yaratadi.</p><p>Quyidagi misol &quot;testfile.txt&quot; nomli yangi faylni yaratadi. Fayl PHP kodi joylashgan katalogda yaratiladi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$myfile</span> <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;testfile.txt&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;w&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PHP fayl ruxsatnomalari</p><p>Agar siz ushbu kodni ishga tushirishda xatolikka yo&#39;l qo&#39;ysangiz, qattiq diskka ma&#39;lumot yozish uchun PHP faylingizga ruxsat berganingizni tekshiring.</p><p>PHP faylga yozish - fwrite() Funktsiya fwrite()faylga yozish uchun ishlatiladi.</p><p>ning birinchi parametri fwrite()yoziladigan fayl nomini, ikkinchi parametr esa yoziladigan satrni o&#39;z ichiga oladi.</p><p>Quyidagi misolda &quot;newfile.txt&quot; nomli yangi faylga bir nechta nomlar yoziladi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$myfile</span> <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;newfile.txt&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;w&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Unable to open file!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$txt</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;John Doe\\n&quot;</span><span class="token punctuation">;</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">,</span> <span class="token variable">$txt</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$txt</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Jane Doe\\n&quot;</span><span class="token punctuation">;</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">,</span> <span class="token variable">$txt</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fclose</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>E&#39;tibor bering, biz &quot;newfile.txt&quot; fayliga ikki marta yozganmiz. Har safar faylga yozganimizda biz $txt satrini jo&#39;natdik, unda birinchi bo&#39;lib &quot;John Doe&quot;, ikkinchisida &quot;Jeyn Doe&quot; mavjud. Yozishni tugatganimizdan so&#39;ng biz funktsiyadan foydalanib faylni yopdik fclose().</p><p>Agar biz &quot;newfile.txt&quot; faylini ochsak, u quyidagicha ko&#39;rinadi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>John Doe
Jane Doe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>PHP ustidan yozish</p><p>Endi &quot;newfile.txt&quot; ba&#39;zi ma&#39;lumotlarni o&#39;z ichiga oladi, biz yozish uchun mavjud faylni ochganimizda nima sodir bo&#39;lishini ko&#39;rsatishimiz mumkin. Barcha mavjud ma&#39;lumotlar o&#39;chiriladi va biz bo&#39;sh fayldan boshlaymiz.</p><p>Quyidagi misolda biz mavjud &quot;newfile.txt&quot; faylimizni ochamiz va unga yangi ma&#39;lumotlarni yozamiz:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$myfile</span> <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;newfile.txt&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;w&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Unable to open file!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$txt</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Mickey Mouse\\n&quot;</span><span class="token punctuation">;</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">,</span> <span class="token variable">$txt</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$txt</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Minnie Mouse\\n&quot;</span><span class="token punctuation">;</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">,</span> <span class="token variable">$txt</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fclose</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Agar biz &quot;newfile.txt&quot; faylini ochsak, Jon ham, Jeyn ham yo&#39;q bo&#39;lib ketgan va faqat biz yozgan ma&#39;lumotlar mavjud:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Mickey Mouse
<span class="token package">Minnie</span> Mouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>PHP matnni qo&#39;shish</p><p>Siz &quot;a&quot; rejimidan foydalanib faylga ma&#39;lumotlarni qo&#39;shishingiz mumkin. &quot;A&quot; rejimi fayl oxiriga matn qo&#39;shadi, &quot;w&quot; rejimi esa faylning eski mazmunini bekor qiladi (va o&#39;chiradi).</p><p>Quyidagi misolda biz mavjud &quot;newfile.txt&quot; faylimizni ochamiz va unga matn qo&#39;shamiz:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$myfile</span> <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;newfile.txt&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Unable to open file!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$txt</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Donald Duck\\n&quot;</span><span class="token punctuation">;</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">,</span> <span class="token variable">$txt</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$txt</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Goofy Goof\\n&quot;</span><span class="token punctuation">;</span>
<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">,</span> <span class="token variable">$txt</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fclose</span><span class="token punctuation">(</span><span class="token variable">$myfile</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Agar biz &quot;newfile.txt&quot; faylini ochsak, faylning oxiriga Donald Duck va Goofy Goof qo&#39;shilganligini ko&#39;ramiz:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Mickey Mouse
<span class="token package">Minnie</span> Mouse
<span class="token package">Donald</span> Duck
Goofy Goof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),o=[e];function p(l,u){return n(),s("div",null,o)}const r=a(t,[["render",p],["__file","fileCreateWrite.html.vue"]]);export{r as default};