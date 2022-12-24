import{c as n}from"./app.dc721610.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> Parser</h1><h2 id="parser-query" tabindex="-1"><a class="header-anchor" href="#parser-query" aria-hidden="true">#</a> Parser.query</h2><p>\u7C7B\u578B: <code>Function</code></p><p>\u53C2\u6570:</p><ul><li>queryString - <code>string</code></li><li>dataSource - <code>any</code></li></ul><p>\u8FD4\u56DE:<code>Record&lt;string,unknown&gt;</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">parser</span> <span class="token keyword">extends</span> <span class="token class-name">BaseParser</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
			drink{
				water;
				cola;
			}
			</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				drink<span class="token operator">:</span> <span class="token punctuation">{</span>
					cola<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
					tea<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
					water<span class="token operator">:</span> <span class="token number">0.5</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">)</span><span class="token punctuation">)</span> 
		<span class="token comment">// { drink: { water: 0.5, cola: 1 } }</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,7);function p(e,c){return t}var l=s(a,[["render",p]]);export{l as default};
