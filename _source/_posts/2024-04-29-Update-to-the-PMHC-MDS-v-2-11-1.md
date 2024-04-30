---
title: Update to the PMHC MDS - 29/4/2024
---

#### PMHC MDS Update v2.11.1 ####

We are pleased to announce that PMHC MDS Update v2.11.1 was released
on April 29, 2024.

The following updates have been applied in the upload, data entry and 
reporting interfaces:
* Organisations providing the Supporting Recovery pilot can now record 
  the Supporting Recovery Program Type against PMHC MDS Intakes and 
  Episodes. More information, including the organisations providing 
  services under this pilot can be found at 
  [https://docs.pmhc-mds.com/projects/data-specification/en/v4/data-model-and-specifications.html#program-type](https://docs.pmhc-mds.com/projects/data-specification/en/v4/data-model-and-specifications.html#program-type){:target="_blank"}. 
  There are restrictions on the Funding Source of Service Contacts 
  that can be used with the Supporting Recovery Program Type as documented at 
  [https://docs.pmhc-mds.com/projects/data-specification/en/v4/validation-rules.html#service-contact](https://docs.pmhc-mds.com/projects/data-specification/en/v4/validation-rules.html#service-contact){:target="_blank"}. 
  If organisations would like to change the Program Type of an existing 
  Intake or Episode to Supporting Recovery, please contact the PMHC 
  Helpdesk on support@pmhc-mds.com. 

The following updates have been applied in the upload interface:
* The PMHC MDS has stored and reported YES-PHN data collected via the Online 
  Measures Self Service System (OMSSS) since November 2021. YES-PHN data 
  collected outside of OMSSS can now be uploaded using the  PMHC MDS Survey 
  Specification defined at 
  [https://docs.pmhc-mds.com/projects/data-specification-survey/en/v1/](https://docs.pmhc-mds.com/projects/data-specification-survey/en/v1/){:target="_blank"}

The following updates have been applied in the data extract interface:
* YES-PHN unit record data can now be extracted from the PMHC MDS using the 
  PMHC MDS Survey Specification defined at 
  [https://docs.pmhc-mds.com/projects/data-specification-survey/en/v1/](https://docs.pmhc-mds.com/projects/data-specification-survey/en/v1/){:target="_blank"}

Additionally, a service that scans records in the PMHC MDS looking for 
name-like keys and sends an email to alert users with the Organisation Manager 
role will soon be implemented. This is being implemented because the PMHC MDS 
should only contain deidentified data, however it has been found that client 
names have been used in keys.

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.