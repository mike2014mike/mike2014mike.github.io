---
layout:     post
title:      Markdown使用方法
date:       2018-07-03 10:31:19
summary:    See what the different elements looks like.
categories: Jekyll
thumbnail: cogs
tags:
 - demo
 - Markdown
---

Markdown 的目標是實現「易讀易寫」。

不過最需要強調的便是它的可讀性。一份使用 Markdown 格式撰寫的文件應該可以直接以純文字發佈，並且看起來不會像是由許多標籤或是格式指令所構成。

因此 Markdown 的語法全由標點符號所組成，並經過嚴謹慎選，是為了讓它們看起來就像所要表達的意思。像是在文字兩旁加上星號，看起來就像\*強調\*。Markdown 的清單看起來，嗯，就是清單。假如你有使用過電子郵件，區塊引言看起來就真的像是引用一段文字。


### 程式碼高亮顯示

Code blocks use the [peppermint][2] theme.

{% highlight ruby %}
class Awesome < ActiveRecord::Base
  include EvenMoreAwesome

  validates_presence_of :something
  validates :email, email_format: true

  def initialize(email, name = nil)
    self.email = email
    self.name = name
  end
end
{% endhighlight %}

```html
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
```

## 程式語言支援清單
<p>In this way of using Liquid tag <code class="language-html highlighter-rouge">highlight</code>, you can add language identifier
    (here is <code class="language-html highlighter-rouge">ruby</code>) or its supported aliases (<code class="language-html highlighter-rouge">rb</code>    for ruby). Here is the list for supported languages:</p>
<ul>
    <li>actionscript: ActionScript [aliases: as,as3]</li>
    <li>apache: configuration files for Apache web server</li>
    <li>apiblueprint: Markdown based API description language. [aliases: apiblueprint,apib]</li>
    <li>applescript: The AppleScript scripting language by Apple Inc. (http://developer.apple.com/applescript/)</li>
    <li>biml: BIML, Business Intelligence Markup Language</li>
    <li>c: The C programming language</li>
    <li>ceylon: Say more, more clearly.</li>
    <li>cfscript: CFScript, the CFML scripting language [aliases: cfc]</li>
    <li>clojure: The Clojure programming language (clojure.org) [aliases: clj,cljs]</li>
    <li>cmake: The cross-platform, open-source build system</li>
    <li>coffeescript: The Coffeescript programming language (coffeescript.org) [aliases: coffee,coffee-script]</li>
    <li>common_lisp: The Common Lisp variant of Lisp (common-lisp.net) [aliases: cl,common-lisp,elisp,emacs-lisp]</li>
    <li>conf: A generic lexer for configuration files [aliases: config,configuration]</li>
    <li>coq: Coq (coq.inria.fr)</li>
    <li>cpp: The C++ programming language [aliases: c++]</li>
    <li>csharp: a multi-paradigm language targeting .NET [aliases: c#,cs]</li>
    <li>css: Cascading Style Sheets, used to style web pages</li>
    <li>d: The D programming language(dlang.org) [aliases: dlang]</li>
    <li>dart: The Dart programming language (dartlang.com)</li>
    <li>diff: Lexes unified diffs or patches [aliases: patch,udiff]</li>
    <li>eiffel: Eiffel programming language</li>
    <li>elixir: Elixir language (elixir-lang.org) [aliases: elixir,exs]</li>
    <li>erb: Embedded ruby template files [aliases: eruby,rhtml]</li>
    <li>erlang: The Erlang programming language (erlang.org) [aliases: erl]</li>
    <li>factor: Factor, the practical stack language (factorcode.org)</li>
    <li>fortran: Fortran 95 Programming Language</li>
    <li>gherkin: A business-readable spec DSL ( github.com/cucumber/cucumber/wiki/Gherkin ) [aliases: cucumber,behat]</li>
    <li>glsl: The GLSL shader language</li>
    <li>go: The Go programming language (http://golang.org) [aliases: go,golang]</li>
    <li>gradle: A powerful build system for the JVM</li>
    <li>groovy: The Groovy programming language (http://www.groovy-lang.org/)</li>
    <li>haml: The Haml templating system for Ruby (haml.info) [aliases: HAML]</li>
    <li>handlebars: the Handlebars and Mustache templating languages [aliases: hbs,mustache]</li>
    <li>haskell: The Haskell programming language (haskell.org) [aliases: hs]</li>
    <li>html: HTML, the markup language of the web</li>
    <li>http: http requests and responses</li>
    <li>ini: the INI configuration format</li>
    <li>io: The IO programming language (http://iolanguage.com)</li>
    <li>java: The Java programming language (java.com)</li>
    <li>javascript: JavaScript, the browser scripting language [aliases: js]</li>
    <li>jinja: Django/Jinja template engine (jinja.pocoo.org) [aliases: django]</li>
    <li>json: JavaScript Object Notation (json.org)</li>
    <li>json-doc: JavaScript Object Notation with extenstions for documentation</li>
    <li>jsonnet: An elegant, formally-specified config language for JSON</li>
    <li>julia: The Julia programming language [aliases: jl]</li>
    <li>kotlin: Kotlin <a href="http://kotlinlang.org">http://kotlinlang.org</a></li>
    <li>liquid: Liquid is a templating engine for Ruby (liquidmarkup.org)</li>
    <li>literate_coffeescript: Literate coffeescript [aliases: litcoffee]</li>
    <li>literate_haskell: Literate haskell [aliases: lithaskell,lhaskell,lhs]</li>
    <li>llvm: The LLVM Compiler Infrastructure (http://llvm.org/)</li>
    <li>lua: Lua (http://www.lua.org)</li>
    <li>make: Makefile syntax [aliases: makefile,mf,gnumake,bsdmake]</li>
    <li>markdown: Markdown, a light-weight markup language for authors [aliases: md,mkd]</li>
    <li>matlab: Matlab [aliases: m]</li>
    <li>moonscript: Moonscript (http://www.moonscript.org) [aliases: moon]</li>
    <li>nasm: Netwide Assembler</li>
    <li>nginx: configuration files for the nginx web server (nginx.org)</li>
    <li>nim: The Nim programming language (http://nim-lang.org/) [aliases: nimrod]</li>
    <li>objective_c: an extension of C commonly used to write Apple software [aliases: objc]</li>
    <li>ocaml: Objective CAML (ocaml.org)</li>
    <li>pascal: a procedural programming language commonly used as a teaching language.</li>
    <li>perl: The Perl scripting language (perl.org) [aliases: pl]</li>
    <li>php: The PHP scripting language (php.net) [aliases: php,php3,php4,php5]</li>
    <li>plaintext: A boring lexer that doesn’t highlight anything [aliases: text]</li>
    <li>powershell: powershell [aliases: posh]</li>
    <li>praat: The Praat scripting language (praat.org)</li>
    <li>prolog: The Prolog programming language (http://en.wikipedia.org/wiki/Prolog) [aliases: prolog]</li>
    <li>properties: .properties config files for Java</li>
    <li>protouf: Google’s language-neutral, platform-neutral, extensible mechanism for serializing structured data [aliases:
        proto]</li>
    <li>puppet: The Puppet configuration management language (puppetlabs.org) [aliases: pp]</li>
    <li>python: The Python programming language (python.org) [aliases: py]</li>
    <li>qml: QML, a UI markup language [aliases: qml]</li>
    <li>r: The R statistics language (r-project.org) [aliases: r,R,s,S]</li>
    <li>racket: Racket is a Lisp descended from Scheme (racket-lang.org)</li>
    <li>ruby: The Ruby programming language (ruby-lang.org) [aliases: rb]</li>
    <li>rust: The Rust programming language (rust-lang.org) [aliases: rs]</li>
    <li>sass: The Sass stylesheet language language (sass-lang.com)</li>
    <li>scala: The Scala programming language (scala-lang.org) [aliases: scala]</li>
    <li>scheme: The Scheme variant of Lisp</li>
    <li>scss: SCSS stylesheets (sass-lang.com)</li>
    <li>sed: sed, the ultimate stream editor</li>
    <li>shell: Various shell languages, including sh and bash [aliases: bash,zsh,ksh,sh]</li>
    <li>shell_session: A generic lexer for shell session and command line [aliases: terminal,console]</li>
    <li>slim: The Slim template language</li>
    <li>smalltalk: The Smalltalk programming language [aliases: st,squeak]</li>
    <li>smarty: Smarty Template Engine [aliases: smarty]</li>
    <li>sml: Standard ML [aliases: ml]</li>
    <li>sql: Structured Query Language, for relational databases</li>
    <li>swift: Multi paradigm, compiled programming language developed by Apple for iOS and OS X development.(developer.apple.com/swift)</li>
    <li>tap: Test Anything Protocol [aliases: tap]</li>
    <li>tcl: The Tool Command Language (tcl.tk)</li>
    <li>tex: The TeX typesetting system [aliases: TeX,LaTeX,latex]</li>
    <li>toml: the TOML configuration format (https://github.com/mojombo/toml)</li>
    <li>tulip: The tulip programming language http://github.com/jneen/tulip [aliases: tlp]</li>
    <li>twig: Twig template engine (twig.sensiolabs.org)</li>
    <li>typescript: TypeScript, a superset of JavaScript [aliases: ts]</li>
    <li>vb: Visual Basic [aliases: visualbasic]</li>
    <li>verilog: The System Verilog hardware description language</li>
    <li>viml: VimL, the scripting language for the Vim editor (vim.org) [aliases: vim,vimscript,ex]</li>
    <li>xml: XML</li>
    <li>yaml: Yaml Ain’t Markup Language (yaml.org) [aliases: yml]</li>
</ul>

# Headings!

They're responsive, and well-proportioned (in `padding`, `line-height`, `margin`, and `font-size`).

##### They draw the perfect amount of attention

This allows your content to have the proper informational and contextual hierarchy. Yay.

### 清單

  * Apples
  * Oranges
  * Potatoes
  * Milk

  1. Mow the lawn
  2. Feed the dog
  3. Dance

### 圖片

![Thumper](https://i.imgur.com/DMCHDqF.jpg)


### 引用文字

You can use the markdown quote syntax, `>` for simple quotes.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta mauris.

### LaTeX 支援

The default math delimiters are \$\$. Hence `$$ E = m \cdot c^2 $$` yields $$ E = m \cdot c^2 $$

And here's something more fancy:

$$ \zeta(s) = \frac{1}{\Gamma(s)} \int \limits_0^\infty x^{s-1} \sum_{n=1}^\infty e^{-nx} \mathrm{d}x = \frac{1}{\Gamma(s)} \int \limits_0^\infty \frac{x^{s-1}}{e^x - 1} \mathrm{d}x $$


### There's more being added all the time

Checkout the [Github repository][3] to request,
or add, features.

Happy writing.

[1]: http://pixyll.com/jekyll/pixyll/2014/06/10/see-pixyll-in-action/
[2]: https://noahfrederick.com/log/lion-terminal-theme-peppermint/
[3]: https://github.com/jacobtomlinson/carte-noire
[4]: http://pixyll.com/
