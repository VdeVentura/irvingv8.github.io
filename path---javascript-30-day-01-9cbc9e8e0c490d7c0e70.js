webpackJsonp([0xb488c18ebf1d],{"./node_modules/json-loader/index.js!./.cache/json/javascript-30-day-01.json":function(n,a){n.exports={data:{markdownRemark:{html:'<html><head></head><body><div>\n  \n  <a class="gatsby-resp-image-link" href="/static/4c5a6766c92b5cc9127726d650cb416c-536a3.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 26.053042121684868%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAABF0lEQVQY0zWQS26DQBBEuUWsLAIECCb8wSDMP+AITETkBfLG9z/HCzORF6Ounqmpri4ljmOSJCHLMrZt4/F4yL5pGjzPoyxLiZ+caZro+55lWWjbljAMCYKAKIpI0xRFCIpmGAZJKjKfsXXpKg/btgkDjyJROacqvufKIUIkz3Msy5LidV1jmibzPKMYhkF+ihC1yHfh2mGZv+lKG8fWcawXpktJFmm866809Xl3G+M6Bq7r0ncVh8MBy1TRNA1F13V0XUNWTeX3p+Or2qeN0e7mk7YuqPM3tvW0u2m5jAP3+313VTKOI/aHJePouobj8YgibD+P7/v/pH1VsZrIRuQqPggsshTv67pKd+Luer1yu90kdhyHP5PMoSzWnFN8AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Javascript Drum Kit" title="" src="/static/4c5a6766c92b5cc9127726d650cb416c-44d6a.png" srcset="/static/4c5a6766c92b5cc9127726d650cb416c-f4799.png 173w,\n/static/4c5a6766c92b5cc9127726d650cb416c-b3b1d.png 345w,\n/static/4c5a6766c92b5cc9127726d650cb416c-44d6a.png 690w,\n/static/4c5a6766c92b5cc9127726d650cb416c-bc0f7.png 1035w,\n/static/4c5a6766c92b5cc9127726d650cb416c-b50e5.png 1380w,\n/static/4c5a6766c92b5cc9127726d650cb416c-0ed32.png 2070w,\n/static/4c5a6766c92b5cc9127726d650cb416c-536a3.png 2564w" sizes="(max-width: 690px) 100vw, 690px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<p>This is the first part of the Javascript 30 series I\'ll be posting. #JavaScript30 is a challenge by Wes Bos and the idea is to Build 30 things in 30 days with 30 tutorials with Vanilla JS.</p>\n<p>Along this series I\'ll be sharing the approach I took and any interesting stuff I found in order to solve the challenges made by Wes Bos.</p>\n<p>Let\'s see what interesting stuff is behind this Javascript Drum Kit.</p>\n<h2 id="the-idea"><a href="#the-idea" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The idea</h2>\n<p>The idea is to build this simple app that displays some keys and will reproduce a sound once you click any of those keys. It\'ll also animate the key you pressed.</p>\n<p>Wes Bos is giving us an initial file while all the html/css and will just add the functionality to it.</p>\n<h2 id="the-process"><a href="#the-process" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Process</h2>\n<p>To achieve this we will have to do something among the lines of:</p>\n<ol>\n<li>Add an event listener for the keys</li>\n<li>Reproduce the audio related to the pressed key</li>\n<li>Animate the key element related to the pressed key</li>\n</ol>\n<h3 id="adding-an-event-listener-for-the-key-press"><a href="#adding-an-event-listener-for-the-key-press" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding an event listener for the key press</h3>\n<p>The first thing I did was adding the event listener to the document and log its output</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  document<span class="token punctuation">.</span>onkeypress <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If we take a look at it\'s output we can notice there are at least 4 properties that would allow us to identify the keys: charCode, code, key and keyCode.</p>\n<p>Now if we hit a key and then hit the same key with caps lock on you will notice that the charCode, keyand the keyCode are not the same. This is because both charCode and keyCode are the ASCII code for each letter and those happen to be different for uppercase and lowercase (you can take a look at the ASCII table here). However the difference between each uppercase key and its lowercase is 32 (always!), so we can rely on this to normalize the code.</p>\n<p>If you take a look at the code provided by Wes you\'ll notice he\'s using the ASCII code for uppercase to identify each key element as well as the audio we should reproduce. So we could just check if the keyCode is greater than 96 (lowercase a starts at 97) and just take 32 away from it and we will be ok.</p>\n<h3 id="onkeypress-vs-onkeydown"><a href="#onkeypress-vs-onkeydown" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>onkeypress vs onkeydown</h3>\n<p>While looking at Wes solution I noticed he used onkeydown instead of onkeypress and there is some cool stuff behind the difference of this two listeners.</p>\n<p>onkeydown will register an event for each key pressed no matter what. But onkeypress will only register an event for those keys that will print something. Meaning that hitting scape, caps lock or the arrow keys (this one can be useful) will register an event if you are using onkeydown but will be ignored if you are using onkeypress.\nonkeydown will always contain the ASCII code for the uppercase of the key you hit.\nThat last point means that we can just use onkeydown instead of onkeypress and we can forget about substracting those 32 for the lowercase letters and we will always get the same keyCode for both uppercase and lowercase.</p>\n<h3 id="playing-the-audio"><a href="#playing-the-audio" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Playing the audio</h3>\n<p>I have never messed around with audio in JS so I had to google this one (here\'s the answer at stackoverflow), and as you can see it\'s really simple once you have got they keyCode and the implementation would look something like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> key <span class="token operator">=</span> e<span class="token punctuation">.</span>keyCode<span class="token punctuation">;</span>\n<span class="token keyword">const</span> audio <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`audio[data-key=\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\']`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\naudio<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Something interesting is that if you hit a key multiple times it won\'t replay the audio until it finishes the current reproduction. This means that browsers are smart enought to say "oh, I\'m already playing this audio, no need to play it again". You can play different audios at the same time with no trouble. But if you want to replay an audio everytime you hit the same key you\'ll have to rewind it to 0:00 as there is no audio.stop() (Here is an stackoverflow answer that provides a hint).</p>\n<h3 id="timeout-vs-transitionend-event"><a href="#timeout-vs-transitionend-event" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>timeout vs transitionend Event</h3>\n<p>I\'ll be honest: I really liked this one, as I wasn\'t aware of this transitionend event until I saw Wes solution. My attempt to solve the issue of removing the \'playing\' class involved using a timeout and it looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  kbd<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">\'playing\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Where the \'70\' is the same amount of time specified in the transition-duration in the css, this means that the maintainability of this code is compromised, this a fairly simple app but if you think of a bigger app it would be annoying and the source of several bugs to keep the css and the js synced. But Wes came out with this transition event that doesn\'t require you to specify the duration of the transition in your js and it will just wait for the transition to end, it looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> removeTransition <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>propertyName <span class="token operator">!==</span> <span class="token string">\'transform\'</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n  e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">\'playing\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nkey<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'transitionend\'</span><span class="token punctuation">,</span> removeTransition<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So TY Wes for this piece of knowledge!</p>\n<h2 id="code-blooper"><a href="#code-blooper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code Blooper!</h2>\n<p>Remember when I said that there were at least 4 properties that would allow us to identify the keys? Well, before noticing that the difference between a lowercase letter and an uppercase one was always 32 (and way before discovering the difference between onkeypress and onkeydown), I was trying to figure out how to work with both uppercase and lowercase inputs. And I noticed that the attribute code was always the same regardless of it being a lowercase or uppercase letter. So I decided to map each of the codes to the expected number, it was something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> keyNumbers <span class="token operator">=</span> <span class="token punctuation">{</span>\n  KeyA<span class="token punctuation">:</span> <span class="token number">65</span><span class="token punctuation">,</span>\n  KeyS<span class="token punctuation">:</span> <span class="token number">83</span><span class="token punctuation">,</span>\n  KeyD<span class="token punctuation">:</span> <span class="token number">68</span><span class="token punctuation">,</span>\n  KeyF<span class="token punctuation">:</span> <span class="token number">70</span><span class="token punctuation">,</span>\n  KeyG<span class="token punctuation">:</span> <span class="token number">71</span><span class="token punctuation">,</span>\n  KeyH<span class="token punctuation">:</span> <span class="token number">72</span><span class="token punctuation">,</span>\n  KeyJ<span class="token punctuation">:</span> <span class="token number">74</span><span class="token punctuation">,</span>\n  KeyK<span class="token punctuation">:</span> <span class="token number">75</span><span class="token punctuation">,</span>\n  KeyL<span class="token punctuation">:</span> <span class="token number">76</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> key <span class="token operator">=</span> keyNumbers<span class="token punctuation">[</span>e<span class="token punctuation">.</span>code<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>That was it for Day 1! See you tomorrow for the next challenge.</p>\n<p>Keep On Hacking!</p>',timeToRead:4,excerpt:"This is the first part of the Javascript 30 series I'll be posting. #JavaScript30 is a challenge by Wes Bos and the idea is to Build 3...",frontmatter:{title:"Javascript 30 Day 01",date:"07/04/2017",category:["Javascript","Javascript 30 Challenge"],tags:["js","javascript","challenge","wes","bos","day"]}}},pathContext:{slug:"/javascript-30-day-01"}}}});
//# sourceMappingURL=path---javascript-30-day-01-9cbc9e8e0c490d7c0e70.js.map