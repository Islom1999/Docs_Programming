import{_ as n,o as s,c as a,a as e}from"./app-1c9dd427.js";const t="/php/php23.png",p="/php/php24.png",o={},l=e(`<h1 id="📔-php-mysql-delete-data" tabindex="-1"><a class="header-anchor" href="#📔-php-mysql-delete-data" aria-hidden="true">#</a> 📔 PHP MySQL Delete Data</h1><h2 id="php-mysql-delete-data-mysql-ma-lumotlarni-o-chirish" tabindex="-1"><a class="header-anchor" href="#php-mysql-delete-data-mysql-ma-lumotlarni-o-chirish" aria-hidden="true">#</a> PHP MySQL Delete Data (MySQL Ma&#39;lumotlarni o&#39;chirish)</h2><p>MySQLi va PDO yordamida MySQL jadvalidan ma&#39;lumotlarni o&#39;chirish</p><p>DELETE bayonoti jadvaldagi yozuvlarni o&#39;chirish uchun ishlatiladi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">DELETE</span> <span class="token constant">FROM</span> table_name
<span class="token constant">WHERE</span> some_column <span class="token operator">=</span> some_value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Eslatma</p><p>DELETE sintaksisidagi WHERE bandiga e&#39;tibor bering: WHERE bandi qaysi yozuv yoki yozuvlarni o&#39;chirish kerakligini belgilaydi. Agar siz WHERE bandini o&#39;tkazib yuborsangiz, barcha yozuvlar o&#39;chiriladi!</p></div><p>Keling, &quot;Mening mehmonlarim&quot; jadvalini ko&#39;rib chiqaylik:</p><img src="`+t+`"><p>Quyidagi misollar &quot;MyGuests&quot; jadvalidagi id=3 bo&#39;lgan yozuvni o&#39;chiradi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$servername</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;localhost&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$username</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;username&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$password</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;password&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$dbname</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;myDB&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Create connection</span>
<span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mysqli</span><span class="token punctuation">(</span><span class="token variable">$servername</span><span class="token punctuation">,</span> <span class="token variable">$username</span><span class="token punctuation">,</span> <span class="token variable">$password</span><span class="token punctuation">,</span> <span class="token variable">$dbname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Check connection</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token property">connect_error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Connection failed: &quot;</span> <span class="token operator">.</span> <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token property">connect_error</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// sql to delete a record</span>
<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;DELETE FROM MyGuests WHERE id=3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant boolean">TRUE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Record deleted successfully&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Error deleting record: &quot;</span> <span class="token operator">.</span> <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token property">error</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$servername</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;localhost&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$username</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;username&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$password</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;password&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$dbname</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;myDB&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Create connection</span>
<span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token function">mysqli_connect</span><span class="token punctuation">(</span><span class="token variable">$servername</span><span class="token punctuation">,</span> <span class="token variable">$username</span><span class="token punctuation">,</span> <span class="token variable">$password</span><span class="token punctuation">,</span> <span class="token variable">$dbname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Check connection</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$conn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Connection failed: &quot;</span> <span class="token operator">.</span> <span class="token function">mysqli_connect_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// sql to delete a record</span>
<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;DELETE FROM MyGuests WHERE id=3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">mysqli_query</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> <span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Record deleted successfully&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Error deleting record: &quot;</span> <span class="token operator">.</span> <span class="token function">mysqli_error</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">mysqli_close</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$servername</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;localhost&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$username</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;username&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$password</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;password&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$dbname</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;myDBPDO&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PDO</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;mysql:host=<span class="token interpolation"><span class="token variable">$servername</span></span>;dbname=<span class="token interpolation"><span class="token variable">$dbname</span></span>&quot;</span><span class="token punctuation">,</span> <span class="token variable">$username</span><span class="token punctuation">,</span> <span class="token variable">$password</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// set the PDO error mode to exception</span>
  <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">ATTR_ERRMODE</span><span class="token punctuation">,</span> <span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">ERRMODE_EXCEPTION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// sql to delete a record</span>
  <span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;DELETE FROM MyGuests WHERE id=3&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// use exec() because no results are returned</span>
  <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Record deleted successfully&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">PDOException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token variable">$sql</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span> <span class="token operator">.</span> <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yozuv o&#39;chirilgandan so&#39;ng, jadval quyidagicha ko&#39;rinadi:</p><img src="`+p+'">',14),c=[l];function i(u,r){return s(),a("div",null,c)}const k=n(o,[["render",i],["__file","deleteData.html.vue"]]);export{k as default};