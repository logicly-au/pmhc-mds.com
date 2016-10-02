---
title: Communications - PMHC-MDS
page-name: communications
sub-heading: Communications
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="#{{ post.title }}">{{ post.title }}</a><span> | {{ post.date | date: '%B %d, %Y' }}</span>
    </li>
  {% endfor %}
</ul>

<hr />
<div class="l-announcements">
<ul>
  {% for post in site.posts %}
    <li>
    <h3><a name = "{{ post.title}}">{{ post.title }}</a></h3>
    <h4>{{ post.date | date: '%B %d, %Y' }}</h4	>
	<p>{{ post.content }}</p>
	<hr />
</li>
  {% endfor %}
</ul>
</div>