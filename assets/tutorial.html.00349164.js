import{r as e,o as p,a as t,b as n,d as r,F as l,e as s,c as i}from"./app.dc721610.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const o={},u=n("h1",{id:"gachi\u6559\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gachi\u6559\u7A0B","aria-hidden":"true"},"#"),s(" Gachi\u6559\u7A0B")],-1),b=s("\u672C\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5047\u5B9A\u60A8\u5DF2\u7ECF\u5B89\u88C5\u597D\u4E86gachi\uFF0C\u5982\u679C\u60A8\u8FD8\u6CA1\u6709\u5B89\u88C5\u5B8C\u6210\u8BF7\u6D4F\u89C8"),d={href:"/install",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B89\u88C5"),k=i(`<p>\u672C\u7BC7\u6559\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5B8C\u6210\u5BF9Bilibili\u7F51\u7AD9\u7684\u722C\u53D6\u83B7\u53D6\u4E00\u4E2AUP\u4E3B\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u5E76\u5B66\u4E60\u5982\u4F55\u6269\u5C55Api</p><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h2><p>\u5728\u5F00\u59CB\u722C\u53D6\u4E4B\u524D\uFF0C\u6211\u4EEC\u5FC5\u987B\u8981\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u6765\u6574\u5408\u7410\u788E\u7684\u6587\u4EF6\u3002\u521B\u5EFA\u9879\u76EE\u6709\u4E24\u79CD\u65B9\u5F0F\u5206\u522B\u662F\uFF1A\u624B\u52A8\u521B\u5EFA\uFF0C\u4F7F\u7528cli\u8FDB\u884C\u521B\u5EFA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gachi-cli init project
? projectName: project
? use Simple Mode? Yes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5F53\u63A7\u5236\u53F0\u4E0D\u518D\u6EDA\u52A8\u4E14\u4E0D\u62A5\u9519\u65F6\uFF0C\u9879\u76EE\u5C31\u5EFA\u7ACB\u5B8C\u6BD5</p><p>project\u9879\u76EE\u5185\u5305\u542B\u4E00\u4E0B\u6587\u4EF6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token constant">PROJECT</span>
	node_module
    config<span class="token punctuation">.</span>ts	<span class="token comment">// \u9879\u76EE\u914D\u7F6E\u6587\u4EF6</span>
    index<span class="token punctuation">.</span>ts	<span class="token comment">// \u6587\u4EF6\u5165\u53E3</span>
	<span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5F00\u59CB\u7F16\u5199\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u7F16\u5199\u722C\u866B" aria-hidden="true">#</a> \u5F00\u59CB\u7F16\u5199\u722C\u866B</h2><h3 id="\u7F16\u5199\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199\u914D\u7F6E\u6587\u4EF6</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Iconfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gachi/interface/config&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span>Iconfig <span class="token operator">=</span> <span class="token punctuation">{</span>
	simple<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&#39;getUserInfo&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			baseQuery<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;477792&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;946974&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			baseQueryName<span class="token operator">:</span> <span class="token string">&#39;mid&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u6211\u4EEC\u914D\u7F6E\u4E86baseQuery\u548CbaseQueryName\u3002baseQuery\u662F\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u6DFB\u52A0\u4E0A\u7684\u53C2\u6570\uFF0C\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u5219\u4F1A\u5FAA\u73AF\u5B8CbaseQuery\u624D\u4F1A\u8FDB\u5165\u5230\u4E0B\u4E00\u4E2A\u914D\u7F6E\u9879</p><p>\u5047\u5982\u6211\u4EEC\u7684config\u662F\u8FD9\u6837\u7684</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> config<span class="token operator">:</span>Iconfig <span class="token operator">=</span> <span class="token punctuation">{</span>
	simple<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&#39;Api1&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			baseQuery<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;mid1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mid2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			baseQueryName<span class="token operator">:</span> <span class="token string">&#39;mid&#39;</span><span class="token punctuation">,</span>
			otherParam<span class="token operator">:</span> <span class="token string">&#39;...&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token string-property property">&#39;Api2&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
			baseQuery<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;mid1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			baseQueryName<span class="token operator">:</span> <span class="token string">&#39;mid&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u90A3\u4E48\u8BF7\u6C42\u7684\u987A\u5E8F\u5C31\u4F1A\u662F</p><p>Api1?mid=&#39;mid1&#39;&amp;otherParam=&#39;...&#39;</p><p>Api1?mid=&#39;mid2&#39;&amp;otherParam=&#39;...&#39;</p><p>api2?mid=&#39;mid3&#39;</p><h3 id="\u7F16\u5199\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u903B\u8F91" aria-hidden="true">#</a> \u7F16\u5199\u903B\u8F91</h3><p>\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>gachi-cli run index.ts </code>\u6765\u8FD0\u884C\u6211\u4EEC\u7684\u6587\u4EF6\u3002\u4E0D\u8FC7\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u76EE\u524D\u6211\u4EEC\u4EC5\u4EC5\u662F\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u3002\u5982\u679C\u6211\u4EEC\u60F3\u8981\u4FDD\u5B58\u4E3A\u4E00\u4E2A\u6587\u4EF6\u3002\u90A3\u4E48\u6211\u4EEC\u9700\u8981\u5BF9<code>index.ts</code>\u8FDB\u884C\u4E00\u5B9A\u7A0B\u5EA6\u7684\u4FEE\u6539\u3002</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>import {Simple} from &#39;gachi&#39;;
import config from &#39;./config&#39;;
import {getUserInfo} from &#39;gachi/api/user&#39;;
import {Api} from &#39;gachi/interface/api&#39;;
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import {writeFileSync} from &#39;fs&#39;;
</span></span>
....

async function app(){

...

<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> 	console.log(simple.getResponse())
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> 	const raw = simple.getResponse();
</span><span class="token prefix inserted">+</span><span class="token line"> 	(raw[&#39;getUserInfo&#39;] as string[]).forEach((val,idx)=&gt;{
</span><span class="token prefix inserted">+</span><span class="token line"> 		(raw[&#39;getUserInfo&#39;] as string[])[idx] = JSON.parse(val);
</span><span class="token prefix inserted">+</span><span class="token line"> 	});
</span><span class="token prefix inserted">+</span><span class="token line"> 	[&#39;getUserInfo&#39;] as string[])[0]);
</span><span class="token prefix inserted">+</span><span class="token line"> 	writeFileSync(&#39;./data.json&#39;, JSON.stringify(raw));
</span></span>}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><hr><p>\u5982\u679C\u60A8\u53EF\u4EE5\u786E\u4FDD\u8BF7\u6C42\u6240\u8FD4\u56DE\u7684\u6570\u636E\u7EDD\u5BF9\u4E3Ajson\u4FE1\u606F\u3002\u90A3\u4E48\u4F60\u53EF\u4EE5\u4FEE\u6539\u4E3A\u4EE5\u4E0B\u5F62\u5F0F</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>import {Simple} from &#39;gachi&#39;;
import config from &#39;./config&#39;;
import {getUserInfo} from &#39;gachi/api/user&#39;;
import {Api} from &#39;gachi/interface/api&#39;;
import {, writeFileSync} from &#39;fs&#39;;

async function app(){
	const simple = new Simple(config);
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> 	const simple = new Simple(config);
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">	await simple.request(
</span><span class="token prefix deleted">-</span><span class="token line">		([
</span><span class="token prefix deleted">-</span><span class="token line">			getUserInfo
</span><span class="token prefix deleted">-</span><span class="token line">		] as Api[]),undefined
</span><span class="token prefix deleted">-</span><span class="token line">	);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">	await simple.reqeust(
</span><span class="token prefix inserted">+</span><span class="token line">	(
</span><span class="token prefix inserted">+</span><span class="token line">		[
</span><span class="token prefix inserted">+</span><span class="token line">			getUserInfo
</span><span class="token prefix inserted">+</span><span class="token line">		] as API[]), undefined, true
</span><span class="token prefix inserted">+</span><span class="token line">	)
</span></span>	const raw = simple.getResponse();
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">	(raw[&#39;getUserInfo&#39;] as string[]).forEach((val,idx)=&gt;{
</span><span class="token prefix deleted">-</span><span class="token line">		(raw[&#39;getUserInfo&#39;] as string[])[idx] = JSON.parse(val);
</span><span class="token prefix deleted">-</span><span class="token line">	});
</span></span>	writeFileSync(&#39;./data.json&#39;, JSON.stringify(raw));

}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="api\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#api\u7B80\u4ECB" aria-hidden="true">#</a> Api\u7B80\u4ECB</h2><p>Api\u5168\u79F0\u662FApplication Programming Interface.\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u3002\u5728<code>gachi</code>\u4E2D\uFF0C\u4EC5\u4EC5\u662F\u7528\u6765\u7BA1\u7406\u8BF7\u6C42\u5730\u5740\uFF0C\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u8BF7\u6C42\u53C2\u6570\u7684\u4E00\u4E2A\u5730\u65B9\u3002</p><h3 id="\u52A8\u624B\u6269\u5C55\u4E00\u4E2Aapi" tabindex="-1"><a class="header-anchor" href="#\u52A8\u624B\u6269\u5C55\u4E00\u4E2Aapi" aria-hidden="true">#</a> \u52A8\u624B\u6269\u5C55\u4E00\u4E2Aapi</h3><p>\u6709\u4E9B\u65F6\u5019\u6846\u67B6\u81EA\u8EAB\u63D0\u4F9B\u7684api\u4E0D\u8DB3\u4EE5\u652F\u6491\u9879\u76EE\u7684\u8FD0\u8F6C\uFF0C\u8FD9\u5C31\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u52A8\u624B\u6269\u5C55api\u3002</p><p>\u7B80\u4ECB\u4E2D\u6211\u4EEC\u63D0\u5230\uFF0C\u5728<code>gachi</code>\u4E2D\uFF0Capi\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u7C7B\u3002\u5355\u7EAF\u7528\u4E8E\u7BA1\u7406URL,method\u7B49\u3002\u5728\u4F7F\u7528\u7684\u65F6\u5019import\u5373\u53EF\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// api/getPostList</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>apiMethod<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gachi/interface/api&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">getPostListParam</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">getPostList</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> url<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">=</span><span class="token string">&#39;http://example.com/getPostList&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> method<span class="token operator">:</span>apiMethod <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> param<span class="token operator">:</span>getPostListParam <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,29);function g(f,h){const a=e("ExternalLinkIcon");return p(),t(l,null,[u,n("p",null,[b,n("a",d,[m,r(a)])]),k],64)}var v=c(o,[["render",g]]);export{v as default};
