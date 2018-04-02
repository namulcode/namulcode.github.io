---
layout: posts
title: CSS 구조  
post: post-20180402-css-structure
tags: 
- css
---

<div class="{{ page.post }}">

    <h1 class="page-header">{{ page.title }}</h1>

    <p>
        <img src="/resources/posts/20180402-1.png" alt="CSS 구조도">
    </p>

    <p>CSS 분리는 공통, 페이지, 컴포넌트, 위젯으로 나눈다.</p>

    <p>Layout은 &lt;div&gt; Element 위주로 마크업한다.</p>

    <p>그외 정보는 HTML5의 Content Model에 맞춰 적절한 Element을 사용하여 마크업한다.</p>

    <p>PC, Tablet, Phone, wideScreen, mobileDevice는 userAgent 값을 참고하나 브라우저에서 Javascript로 처리하지 않고 서버의 도움을 받아 적절한 리소스가 ' 서버에서부터 분리 -&gt; 클라이언트에 제공' 할 수 있도록 한다.</p>

    <p>미디어쿼리 사이즈는 상황에 맞춰 적절한 사이즈를 지정한다. </p>

    <p>혹시나 예전 IE 브라우저나 최신 API를 사용할 수 없는 브라우저일 경우 적절한 대응 코드를 추가한다. 단순 렌더링, CSS의 표현이 아니라 기능 동작에 문제가 있다면 ponyfill 코드를 작성함으로서 다양한 플랫폼에 대응할 수 있도록 테스트와 서비스할 수 있는 경험을 쌓는다. ( CSS뿐만 아니라 HTML, Javascript 모두에 해당한다. ) </p>

    <p>예제 코드는 다음과 같다. </p>

    <p>
        <img src="/resources/posts/20180402-2.png" alt="CSS 구조를 분리한 실제코드를 캡쳐">
    </p>

    <ul>
        <li><a href="https://gist.github.com/donghyuc-kim/1c885b06cbaa692d46c8a98ba1b5ff92#file-css-structure-html">실제 CSS 구조 분리 코드</a></li>
        <li>page.css 를 예로 들었다.</li>
        <li>common.css 도 예제와 같은 CSS 파일들이 필요할 수 있다.</li>
        <li>CSS 파일 내부에 미디어쿼리를 작성하지 않고 link 속성으로 작성한다. 그래야 IE 하위버전에서도 별도의 파일 생성없이 그대로 사용할 수 있다. </li>
        <li>IE9부터는 media="" 속성을 사용할 수 있으므로 IE8이하에서는 조건부 주석을 사용하여 미디어쿼리를 사용하는 @980.css만 별도로 추가한다.</li>
        <li>그외 하위 버전만을 위한 CSS도 마찬가지로 조건부주석을 활용하여 별도 지정한다. </li>
        <li>CSS 파일이 다소 많지만 상황에 따라 적절히 병합하고 분리하여 최적화할 수 있다. </li>
    </ul>

    <p>관련된 node.js 환경이나 SASS 분리는 나중에.. </p>

</div>