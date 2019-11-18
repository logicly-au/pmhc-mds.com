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
  {% for post in site.posts %}
    <div>
      <div id = "{{ post.url }}"><h2>{{ post.title }}</h2></div>
      <h3>{{ post.date | date: '%B %d, %Y' }}</h3>
	    {{ post.content }}
	    <hr />
    </div>
  {% endfor %}
</div>
