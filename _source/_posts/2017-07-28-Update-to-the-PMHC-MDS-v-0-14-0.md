---
title: Update to the PMHC MDS - 28/7/2017
---

<h4>PMHC MDS Update v0.14.0</h4>

<p>We are pleased to announce that PMHC MDS Update v0.14.0 was released on July 28, 2017.</p>

<p>The following features have been implemented:</p>
<ul>
  <li>A ‘Reporting’ tab has been added. Users who have been granted the ‘Reporting’ role will be able to see this tab.</li>
  <li>Category E - Reports for data managers to monitor data supply - have been implemented.</li>
</ul>

<p>The following updates and bugfixes have been implemented:</p>
<ul>
  <li>The ‘Data Extract’ tab has been moved to be a sub tab of the ‘Reporting’ tab.</li>
  <li>Client - Client Key - no longer editable.</li>
  <li>Client - Organisation Path - no longer editable.</li>
  <li>Service Contact - Practitioner - Only practitioners associated with the Provider Organisation responsible for providing the service to the client will be listed.</li>
  <li>Users should no longer be unexpectedly timed out.</li>
</ul>

<p>The following upload errors have been fixed:</p>
<ul>
  <li>Episodes without a referral date that have collection occasions with a measure date will no longer generate an error.</li>
  <li>K10+ and K5 collection occasions can now have both item scores and a total recorded, provided the item scores match the total. An error will be generated where the item scores and total do not match.</li>
</ul>

<p>The user guide has been updated to reflect these updates. It is available at <a href="https://docs.pmhc-mds.com/user-documentation/">https://docs.pmhc-mds.com/user-documentation/</a>.</p>

<h4>ATAPS MDS to PMHC MDS data mapping</h4>

The ATAPS MDS to PMHC MDS data mapping documentation at <a href="https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html">https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html</a> has been updated to show the mapping of ATAPS MDS diagnosis fields to PMHC Principal Diagnosis and Additional Diagnosis where two ATAPS diagnosis fields have been specified.
