---
title: Communications - PMHC-MDS
page-name: communications
sub-heading: Communications
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="#{{ post.url }}">{{ post.title }}</a><span> | {{ post.date | date: '%B %d, %Y' }}</span>
    </li>
  {% endfor %}
</ul>

<hr />
<div>
<ul class="l-communications-ul">
  {% for post in site.posts %}
    <li class="l-communications">
    <div id = "{{ post.url }}"><h3>{{ post.title }}</h3></div>
    <h4>{{ post.date | date: '%B %d, %Y' }}</h4>
	{{ post.content }}
	<hr />
</li>
  {% endfor %}
</ul>
</div>