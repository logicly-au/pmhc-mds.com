---
title: Release of the ATAPS MDS to PMHC MDS data mapping and update to the PMHC Data Specifications
---

<h4>Release of the ATAPS MDS to PMHC MDS data mapping</h4>
 
<p>We are pleased to announce that the ATAPS MDS to PMHC MDS data mapping was released on June 26, 2017 and is now available at <a href="https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html">https://docs.pmhc-mds.com/data-specification/ataps/ataps-pmhc-mapping.html</a>.</p>
 
<p>PHNs who are implementing new client systems and mapping the ATAPS data to PMHC data need to ensure that their data mapping conforms with this mapping specification.</p>
 
<p><i>Please note: we are still in the process of investigating the mapping of ATAPS diagnoses fields to PMHC Principal Diagnosis and Additional Diagnosis fields where multiple ATAPS diagnosis fields have been selected. In order to allow PHNs to access this mapping in a timely manner we are releasing it without having finished this investigation. Further announcements will be made when this investigation is complete.</i></p>
 
<h4>PMHC MDS Data Specifications Update v1.0.8</h4>
 
<p>We are also pleased to announce that PMHC MDS Data Specifications Update v1.0.8 was released on June 26, 2017.</p>
 
<p>The following data items have been updated:</p>
 
<ul>
<li>Data model and specifications
  <ul>
  <li>Record formats
    <ul>
    <li>Episode
      <ul>
      <li>Updated <a href="https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-principal-diagnosis">Episode - Principal Diagnosis</a> to add the following response codes:
        <ul>
          <li>100: Anxiety disorders (ATAPS)</li>
          <li>200: Affective (Mood) disorders (ATAPS)</li>
          <li>300: Substance use disorders (ATAPS)</li>
          <li>400: Psychotic disorders (ATAPS)</li>
        </ul>
      </li>
      <li>Updated <a href="https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-additional-diagnosis">Episode - Additional Diagnosis</a> to add the following response code:
        <ul>
          <li>000: No additional diagnosis</li>
          <li>100: Anxiety disorders (ATAPS)</li>
          <li>200: Affective (Mood) disorders (ATAPS)</li>
          <li>300: Substance use disorders (ATAPS)</li>
          <li>400: Psychotic disorders (ATAPS)</li>
        </ul>
      </li>
      </ul>
    </li>
    <li>Service Contact
      <ul>
      <li>Updated <a href="https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-type">Service Contact - Type</a> to add the following response code:
        <ul> 
          <li>98: ATAPS</li>
        </ul>
      </li>
      </ul>
    </li>
    </ul>
  </li>
  </ul>
</li>
</ul>
