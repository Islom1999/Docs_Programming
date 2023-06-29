import{_ as n,o as s,c as a,a as t}from"./app-1c9dd427.js";const p={},e=t(`<h1 id="📔-php-order-by" tabindex="-1"><a class="header-anchor" href="#📔-php-order-by" aria-hidden="true">#</a> 📔 PHP ORDER BY</h1><h2 id="php-mysql-use-the-order-by-clause-mysql-da-order-by-bandidan-foydalaning" tabindex="-1"><a class="header-anchor" href="#php-mysql-use-the-order-by-clause-mysql-da-order-by-bandidan-foydalaning" aria-hidden="true">#</a> PHP MySQL Use The ORDER BY Clause (MySQL da ORDER BY bandidan foydalaning)</h2><p>MySQL ma&#39;lumotlar bazasidan ma&#39;lumotlarni tanlang va buyurtma qiling ORDER BY bandi natijalar to&#39;plamini o&#39;sish yoki kamayish tartibida tartiblash uchun ishlatiladi.</p><p>ORDER BY bandi sukut bo&#39;yicha yozuvlarni o&#39;sish tartibida tartiblaydi. Yozuvlarni kamayish tartibida saralash uchun DESC kalit so&#39;zidan foydalaning.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">SELECT</span> <span class="token function">column_name</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token constant">FROM</span> table_name <span class="token constant">ORDER</span> <span class="token constant">BY</span> <span class="token function">column_name</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token class-name">ASC</span><span class="token operator">|</span><span class="token class-name">DESC</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQLi yordamida ma&#39;lumotlarni tanlang va buyurtma qiling</p><p>Quyidagi misol MyGuests jadvalidan id, ism va familiya ustunlarini tanlaydi. Yozuvlar familiya ustuni bo&#39;yicha tartiblanadi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
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

<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT id, firstname, lastname FROM MyGuests ORDER BY lastname&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$result</span><span class="token operator">-&gt;</span><span class="token property">num_rows</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// output data of each row</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$row</span> <span class="token operator">=</span> <span class="token variable">$result</span><span class="token operator">-&gt;</span><span class="token function">fetch_assoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;id: &quot;</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot; - Name: &quot;</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;firstname&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot; &quot;</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;lastname&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;0 results&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yuqoridagi misoldan tushuntirish uchun kod satrlari:</p><p>Birinchidan, MyGuests jadvalidan id, ism va familiya ustunlarini tanlaydigan SQL so&#39;rovini o&#39;rnatamiz. Yozuvlar familiya ustuni bo&#39;yicha tartiblanadi. Keyingi kod satri so&#39;rovni bajaradi va olingan ma&#39;lumotlarni $result deb nomlangan o&#39;zgaruvchiga qo&#39;yadi.</p><p>Keyin, function num_rows()noldan ortiq satrlar mavjudligini tekshiradi.</p><p>Agar noldan ortiq satr qaytarilsa, funktsiya fetch_assoc()barcha natijalarni biz aylanib o&#39;tishimiz mumkin bo&#39;lgan assotsiativ massivga joylashtiradi. Loop while()natijalar to&#39;plamidan o&#39;tadi va id, familiya va familiya ustunlaridan ma&#39;lumotlarni chiqaradi.</p><p>Quyidagi misol MySQLi protsessual usulida yuqoridagi misol bilan bir xilni ko&#39;rsatadi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
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

<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT id, firstname, lastname FROM MyGuests ORDER BY lastname&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">mysqli_query</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">,</span> <span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">mysqli_num_rows</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// output data of each row</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$row</span> <span class="token operator">=</span> <span class="token function">mysqli_fetch_assoc</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;id: &quot;</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot; - Name: &quot;</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;firstname&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot; &quot;</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;lastname&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;0 results&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">mysqli_close</span><span class="token punctuation">(</span><span class="token variable">$conn</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Natijani HTML jadvaliga ham qo&#39;yishingiz mumkin:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
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

<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT id, firstname, lastname FROM MyGuests ORDER BY lastname&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$result</span><span class="token operator">-&gt;</span><span class="token property">num_rows</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;table&gt;&lt;tr&gt;&lt;th&gt;ID&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;/tr&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// output data of each row</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$row</span> <span class="token operator">=</span> <span class="token variable">$result</span><span class="token operator">-&gt;</span><span class="token function">fetch_assoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;tr&gt;&lt;td&gt;&quot;</span><span class="token operator">.</span><span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;&lt;/td&gt;&lt;td&gt;&quot;</span><span class="token operator">.</span><span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;firstname&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot; &quot;</span><span class="token operator">.</span><span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;lastname&quot;</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;&lt;/td&gt;&lt;/tr&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;/table&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;0 results&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PDO bilan ma&#39;lumotlarni tanlang (+ Tayyor bayonotlar)</p><p>Quyidagi misolda tayyorlangan iboralar qo&#39;llaniladi.</p><p>Bu yerda MyGuests jadvalidan id, familiya va familiya ustunlarini tanlaymiz. Yozuvlar familiya ustuni bo&#39;yicha tartiblanadi va u HTML jadvalida ko&#39;rsatiladi:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;table style=&#39;border: solid 1px black;&#39;&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;tr&gt;&lt;th&gt;Id&lt;/th&gt;&lt;th&gt;Firstname&lt;/th&gt;&lt;th&gt;Lastname&lt;/th&gt;&lt;/tr&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TableRows</span> <span class="token keyword">extends</span> <span class="token class-name">RecursiveIteratorIterator</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$it</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token variable">$it</span><span class="token punctuation">,</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">LEAVES_ONLY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function-definition function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;&lt;td style=&#39;width:150px;border:1px solid black;&#39;&gt;&quot;</span> <span class="token operator">.</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;/td&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function-definition function">beginChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;tr&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function-definition function">endChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;/tr&gt;&quot;</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$servername</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;localhost&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$username</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;username&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$password</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;password&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$dbname</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;myDBPDO&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PDO</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;mysql:host=<span class="token interpolation"><span class="token variable">$servername</span></span>;dbname=<span class="token interpolation"><span class="token variable">$dbname</span></span>&quot;</span><span class="token punctuation">,</span> <span class="token variable">$username</span><span class="token punctuation">,</span> <span class="token variable">$password</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">ATTR_ERRMODE</span><span class="token punctuation">,</span> <span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">ERRMODE_EXCEPTION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span> <span class="token operator">=</span> <span class="token variable">$conn</span><span class="token operator">-&gt;</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;SELECT id, firstname, lastname FROM MyGuests ORDER BY lastname&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span><span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// set the resulting array to associative</span>
  <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$stmt</span><span class="token operator">-&gt;</span><span class="token function">setFetchMode</span><span class="token punctuation">(</span><span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">FETCH_ASSOC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TableRows</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RecursiveArrayIterator</span><span class="token punctuation">(</span><span class="token variable">$stmt</span><span class="token operator">-&gt;</span><span class="token function">fetchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$k</span><span class="token operator">=&gt;</span><span class="token variable">$v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$v</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">PDOException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Error: &quot;</span> <span class="token operator">.</span> <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token variable">$conn</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;/table&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function l(i,c){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","orderBy.html.vue"]]);export{r as default};
