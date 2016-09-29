---
title: Communications - PMHC-MDS
page-name: communications
sub-heading: Communications
---

<hr />
<div class="l-announcements">
<ul>
  {% for post in site.posts %}
    <li>
    <h2>{{ post.title }}</h2>
    <h3>{{ post.date | date: '%B %d, %Y' }}</h3>
	<p>{{ post.content }}</p>
	<hr />
</li>
  {% endfor %}
</ul>
</div>