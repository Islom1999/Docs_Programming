import{_ as n,o as s,c as a,a as i}from"./app-dcb21b78.js";const e={},t=i(`<h1 id="📔-php-oop-traits" tabindex="-1"><a class="header-anchor" href="#📔-php-oop-traits" aria-hidden="true">#</a> 📔 PHP OOP - Traits</h1><h2 id="php-oop-traits-oop-xususiyatlar" tabindex="-1"><a class="header-anchor" href="#php-oop-traits-oop-xususiyatlar" aria-hidden="true">#</a> PHP OOP - Traits (OOP - Xususiyatlar)</h2><p>PHP - Xususiyatlar nima?</p><p>PHP faqat bitta merosni qo&#39;llab-quvvatlaydi: bolalar sinfi faqat bitta ota-onadan meros bo&#39;lishi mumkin.</p><p>Xo&#39;sh, agar sinf bir nechta xatti-harakatlarni meros qilib olishi kerak bo&#39;lsa-chi? OOP xususiyatlari bu muammoni hal qiladi.</p><p>Xususiyatlar bir nechta sinflarda ishlatilishi mumkin bo&#39;lgan usullarni e&#39;lon qilish uchun ishlatiladi. Xususiyatlar bir nechta sinflarda ishlatilishi mumkin bo&#39;lgan usullar va mavhum usullarga ega bo&#39;lishi mumkin va usullar har qanday kirish modifikatoriga ega bo&#39;lishi mumkin (ommaviy, xususiy yoki himoyalangan).</p><p>Belgilar kalit so&#39;z bilan e&#39;lon qilinadi trait :</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">trait</span> <span class="token class-name-definition class-name">TraitName</span> <span class="token punctuation">{</span>
  <span class="token comment">// some code...</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sinfdagi xususiyatdan foydalanish uchun quyidagi use kalit so&#39;zdan foydalaning:</p><p>Sintaksis</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">use</span> <span class="token package">TraitName</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Keling, bir misolni ko&#39;rib chiqaylik:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">trait</span> <span class="token class-name-definition class-name">message1</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">msg1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;OOP is fun! &quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Welcome</span> <span class="token punctuation">{</span>
  <span class="token keyword">use</span> <span class="token package">message1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Welcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">msg1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Misol tushuntirildi</p><p>Bu erda biz bitta xususiyatni e&#39;lon qilamiz: xabar 1. Keyin biz sinf yaratamiz: Xush kelibsiz. Sinf bu xususiyatdan foydalanadi va bu xususiyatdagi barcha usullar sinfda mavjud bo&#39;ladi.</p><p>Agar boshqa sinflar msg1() funktsiyasidan foydalanishi kerak bo&#39;lsa, o&#39;sha sinflarda message1 xususiyatidan foydalaning. Bu kodning takrorlanishini kamaytiradi, chunki bir xil usulni qayta-qayta e&#39;lon qilishning hojati yo&#39;q.</p><p>PHP - Bir nechta xususiyatlardan foydalanish</p><p>Keling, yana bir misolni ko&#39;rib chiqaylik:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">trait</span> <span class="token class-name-definition class-name">message1</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">msg1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;OOP is fun! &quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">trait</span> <span class="token class-name-definition class-name">message2</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">msg2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;OOP reduces code duplication!&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Welcome</span> <span class="token punctuation">{</span>
  <span class="token keyword">use</span> <span class="token package">message1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Welcome2</span> <span class="token punctuation">{</span>
  <span class="token keyword">use</span> <span class="token package">message1</span><span class="token punctuation">,</span> message2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Welcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">msg1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token variable">$obj2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Welcome2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj2</span><span class="token operator">-&gt;</span><span class="token function">msg1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj2</span><span class="token operator">-&gt;</span><span class="token function">msg2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Misol tushuntirildi</p><p>Bu erda biz ikkita xususiyatni e&#39;lon qilamiz: xabar1 va xabar2. Keyin ikkita sinf yaratamiz: Welcome va Welcome2. Birinchi sinf (Xush kelibsiz) xabar1 xususiyatidan, ikkinchi sinf (Xush kelibsiz2) xabar1 va xabar2 belgilaridan foydalanadi (bir nechta belgilar vergul bilan ajratiladi).</p>`,21),p=[t];function l(o,c){return s(),a("div",null,p)}const d=n(e,[["render",l],["__file","traits.html.vue"]]);export{d as default};
