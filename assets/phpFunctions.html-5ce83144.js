import{_ as n,o as a,c as s,a as i}from"./app-b44ed27c.js";const t={},e=i(`<h1 id="📔-php-functions" tabindex="-1"><a class="header-anchor" href="#📔-php-functions" aria-hidden="true">#</a> 📔 PHP Functions</h1><p>PHP ning haqiqiy kuchi uning funksiyalaridan kelib chiqadi.</p><p>PHP-da 1000 dan ortiq o&#39;rnatilgan funksiyalar mavjud va qo&#39;shimcha ravishda siz o&#39;zingizning shaxsiy funksiyalaringizni yaratishingiz mumkin.</p><h2 id="php-o-rnatilgan-funktsiyalari" tabindex="-1"><a class="header-anchor" href="#php-o-rnatilgan-funktsiyalari" aria-hidden="true">#</a> PHP o&#39;rnatilgan funktsiyalari</h2><p>PHP-da 1000 dan ortiq o&#39;rnatilgan funksiyalar mavjud bo&#39;lib, ularni to&#39;g&#39;ridan-to&#39;g&#39;ri skript ichidan ma&#39;lum bir vazifani bajarish uchun chaqirish mumkin.</p><h2 id="php-foydalanuvchi-tomonidan-belgilangan-funksiyalar" tabindex="-1"><a class="header-anchor" href="#php-foydalanuvchi-tomonidan-belgilangan-funksiyalar" aria-hidden="true">#</a> PHP foydalanuvchi tomonidan belgilangan funksiyalar</h2><p>O&#39;rnatilgan PHP funktsiyalaridan tashqari, o&#39;zingizning funksiyalaringizni yaratishingiz mumkin.</p><ul><li>Funktsiya - bu dasturda qayta-qayta ishlatilishi mumkin bo&#39;lgan bayonotlar blokidir.</li><li>Sahifa yuklanganda funksiya avtomatik ravishda bajarilmaydi.</li><li>Funktsiya funksiyaga chaqiruv orqali bajariladi.</li></ul><h2 id="php-da-foydalanuvchi-tomonidan-belgilangan-funksiya-yarating" tabindex="-1"><a class="header-anchor" href="#php-da-foydalanuvchi-tomonidan-belgilangan-funksiya-yarating" aria-hidden="true">#</a> PHP da foydalanuvchi tomonidan belgilangan funksiya yarating</h2><p>Foydalanuvchi tomonidan belgilangan funktsiya deklaratsiyasi quyidagi so&#39;z bilan boshlanadi function:</p><p>Sintaksis</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">functionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  code to be executed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maslahat: Funksiya nima qilayotganini aks ettiruvchi nom bering!</p><p>Quyidagi misolda biz &quot;writeMsg()&quot; nomli funksiya yaratamiz. Ochilgan jingalak qavs ( { ) funksiya kodining boshlanishini, yopilish jingalak qavs ( } ) esa funksiyaning tugashini bildiradi. Funktsiya &quot;Salom dunyo!&quot;ni chiqaradi. Funksiyani chaqirish uchun uning nomini keyin qavs () qo&#39;yib yozing.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">writeMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello world!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">writeMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// call the function</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-funksiya-argumentlari" tabindex="-1"><a class="header-anchor" href="#php-funksiya-argumentlari" aria-hidden="true">#</a> PHP funksiya argumentlari</h2><p>Ma&#39;lumot argumentlar orqali funktsiyalarga uzatilishi mumkin. Argument xuddi o&#39;zgaruvchiga o&#39;xshaydi.</p><p>Argumentlar funksiya nomidan keyin qavslar ichida ko&#39;rsatiladi. Siz xohlagancha argumentlar qo&#39;shishingiz mumkin, ularni vergul bilan ajratib qo&#39;ying.</p><p>Quyidagi misolda bitta argumentli funksiya mavjud ($fname). familyName() funksiyasi chaqirilganda, biz ham nomni (masalan, Jani) o&#39;tkazamiz va bu nom funksiya ichida ishlatiladi, bu bir nechta turli ismlarni chiqaradi, lekin teng familiya:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">familyName</span><span class="token punctuation">(</span><span class="token variable">$fname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token variable">$fname</span></span> Refsnes.&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Jani&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Hege&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Stale&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Kai Jim&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Borge&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Quyidagi misolda ikkita argumentli funksiya mavjud ($fname va $year):</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">familyName</span><span class="token punctuation">(</span><span class="token variable">$fname</span><span class="token punctuation">,</span> <span class="token variable">$year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token variable">$fname</span></span> Refsnes. Born in <span class="token interpolation"><span class="token variable">$year</span></span> &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Hege&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;1975&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Stale&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;1978&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">familyName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Kai Jim&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;1983&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-bu-erkin-yozilgan-til" tabindex="-1"><a class="header-anchor" href="#php-bu-erkin-yozilgan-til" aria-hidden="true">#</a> PHP - bu erkin yozilgan til</h2><p>Yuqoridagi misolda e&#39;tibor bering, biz PHP ga o&#39;zgaruvchining qaysi ma&#39;lumotlar turi ekanligini aytishimiz shart emas edi.</p><p>PHP avtomatik ravishda ma&#39;lumotlar turini o&#39;zgaruvchiga uning qiymatiga qarab bog&#39;laydi. Ma&#39;lumotlar turlari qat&#39;iy ma&#39;noda o&#39;rnatilmaganligi sababli, siz xatoga yo&#39;l qo&#39;ymasdan butun songa satr qo&#39;shish kabi narsalarni qilishingiz mumkin.</p><p>PHP 7 da turdagi deklaratsiyalar qo&#39;shildi. Bu bizga funktsiyani e&#39;lon qilishda kutilayotgan ma&#39;lumotlar turini ko&#39;rsatish imkoniyatini beradi va deklaratsiyani qo&#39;shish orqali strict ma&#39;lumotlar turi mos kelmasa, &quot;O&#39;limga olib keladigan xato&quot; chiqaradi.</p><p>Quyidagi misolda biz funksiyaga raqam va satrni ishlatmasdan yuborishga harakat qilamiz strict:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">addNumbers</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token variable">$b</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token function">addNumbers</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;5 days&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// since strict is NOT enabled &quot;5 days&quot; is changed to int(5), and it will return 10</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Belgilash uchun strictbiz sozlashimiz kerak declare(strict_types=1);. Bu PHP faylining birinchi qatorida bo&#39;lishi kerak.</p><p>Quyidagi misolda biz funktsiyaga raqam va satr yuborishga harakat qilamiz, ammo bu erda biz deklaratsiyani qo&#39;shdik strict :</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// strict requirement</span>

<span class="token keyword">function</span> <span class="token function-definition function">addNumbers</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token variable">$b</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token function">addNumbers</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;5 days&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// since strict is enabled and &quot;5 days&quot; is not an integer, an error will be thrown</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-standart-argument-qiymati" tabindex="-1"><a class="header-anchor" href="#php-standart-argument-qiymati" aria-hidden="true">#</a> PHP standart argument qiymati</h2><p>Quyidagi misol standart parametrdan qanday foydalanishni ko&#39;rsatadi. Agar biz setHeight() funksiyasini argumentlarsiz chaqirsak, u standart qiymatni argument sifatida oladi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// strict requirement</span>
<span class="token keyword">function</span> <span class="token function-definition function">setHeight</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$minheight</span> <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;The height is : <span class="token interpolation"><span class="token variable">$minheight</span></span> &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">350</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// will use the default value of 50</span>
<span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">135</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-funktsiyalari-qiymatlarni-qaytarish" tabindex="-1"><a class="header-anchor" href="#php-funktsiyalari-qiymatlarni-qaytarish" aria-hidden="true">#</a> PHP funktsiyalari - qiymatlarni qaytarish</h2><p>Funktsiyaga qiymat qaytarishiga ruxsat berish uchun quyidagi returnbayonotdan foydalaning:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// strict requirement</span>
<span class="token keyword">function</span> <span class="token function-definition function">sum</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$z</span> <span class="token operator">=</span> <span class="token variable">$x</span> <span class="token operator">+</span> <span class="token variable">$y</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token variable">$z</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;5 + 10 = &quot;</span> <span class="token operator">.</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;7 + 13 = &quot;</span> <span class="token operator">.</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;2 + 4 = &quot;</span> <span class="token operator">.</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php-qaytish-turi-deklaratsiyasi" tabindex="-1"><a class="header-anchor" href="#php-qaytish-turi-deklaratsiyasi" aria-hidden="true">#</a> PHP Qaytish turi deklaratsiyasi</h2><p>PHP 7 shuningdek, bayonot uchun turdagi deklaratsiyalarni qo&#39;llab-quvvatlaydi return . Funktsiya argumentlari uchun turdagi deklaratsiyada bo&#39;lgani kabi, qat&#39;iy talabni yoqish orqali u turdagi nomuvofiqlikda &quot;O&#39;limga olib keladigan xato&quot; chiqaradi.</p><p>Qaytish funksiyasi turini e&#39;lon qilish uchun funktsiyani e&#39;lon :qilishda ochiladigan jingalak ( {) qavs oldiga ikki nuqta ( ) va turni qo&#39;shing.</p><p>Quyidagi misolda biz funksiya uchun qaytish turini belgilaymiz:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// strict requirement</span>
<span class="token keyword">function</span> <span class="token function-definition function">addNumbers</span><span class="token punctuation">(</span><span class="token keyword type-hint">float</span> <span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token keyword type-hint">float</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">float</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">+</span> <span class="token variable">$b</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token function">addNumbers</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">5.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Argument turlaridan farqli qaytish turini belgilashingiz mumkin, lekin qaytarish toʻgʻri turi ekanligiga ishonch hosil qiling:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// strict requirement</span>
<span class="token keyword">function</span> <span class="token function-definition function">addNumbers</span><span class="token punctuation">(</span><span class="token keyword type-hint">float</span> <span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token keyword type-hint">float</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token operator">+</span> <span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token function">addNumbers</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">5.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="argumentlarni-havola-bo-yicha-uzatish" tabindex="-1"><a class="header-anchor" href="#argumentlarni-havola-bo-yicha-uzatish" aria-hidden="true">#</a> Argumentlarni havola bo&#39;yicha uzatish</h2><p>PHP da argumentlar odatda qiymat boʻyicha uzatiladi, yaʼni funksiyada qiymatning nusxasi ishlatiladi va funksiyaga oʻtkazilgan oʻzgaruvchini oʻzgartirib boʻlmaydi.</p><p>Funksiya argumenti havola orqali uzatilsa, argumentga kiritilgan oʻzgartirishlar kiritilgan oʻzgaruvchini ham oʻzgartiradi. Funksiya argumentini havolaga aylantirish uchun operator &amp; ishlatiladi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">add_five</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$value</span> <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">add_five</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$num</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),p=[e];function o(l,u){return a(),s("div",null,p)}const r=n(t,[["render",o],["__file","phpFunctions.html.vue"]]);export{r as default};