---
title: Update to the PMHC MDS and Data Specifications - 18/8/2025 (v2.16.0)
---

#### PMHC MDS Update v2.16.0 ####

We are pleased to announce that PMHC MDS Update v2.16.0 was released on 
August 18, 2025.

As per the Department of Health and Aged Care’s August 2025 PHN CEO 
Circular, the PMHC MDS has been updated to support the rebranding of 
Adult Mental Health Centres (AMHC) and HeadtoHealth to Medicare Mental 
Health Centres (MMHC).

The PHN CEO circular has been published at 
[https://pmhc-mds.com/communications/#/2025/08/15/FOR-ACTION-Primary-Mental-Health-Care-Minimum-Data-Set-upcoming-changes-for-Medicare-Mental-Health-Centres-and-Universal-Aftercare/]([https://pmhc-mds.com/communications/#/2025/08/15/FOR-ACTION-Primary-Mental-Health-Care-Minimum-Data-Set-upcoming-changes-for-Medicare-Mental-Health-Centres-and-Universal-Aftercare/).

The following features have been implemented in the data entry interface:
* A ‘MMHC’ response has been added to Program Type on both the Intake 
  and Episode records
* The ‘Head to Health Kids Hubs’ response on Funding Source has been 
  renamed to ‘Kids Hubs’ on the Service Contact record
* A ‘MMHC’ response has been added to Funding Source on the Service 
  Contact record
* A ‘MMHC’ response has been added to Organisation type referred to at 
  Intake conclusion on the Intake record
* A ‘MMHC’ response has been added to Organisation type referred to at 
  Episode conclusion on the Episode record

The following features have been applied in the upload interface:
* The upload interface now accepts uploads in the Version 4.1.1 data 
  specification. The changes in this specification are documented below. 
  This version is backwards compatible with the existing Version 4.1.0 
  specification.

The following updates have been implemented in the upload interface:
* Trailing white space on sites is automatically trimmed
* Improved the error message when a service contact site is not one of 
  the defined sites for the provider organisation
* Improved error messages when columns are missing from the Intake 
  file/worksheet
* Improved the error message when a duplicate primary service contact 
  practitioner is added to a service contact

The following updates have been implemented in the reporting interface:
* In reports that aggregate by site, changed the aggregation ‘No Site’ 
  to ‘Site not defined’
* Improved the layout when many data sources are selected so that the 
  data sources don’t overflow and overlap with the “Select Report Type” 
  heading.

The following updates have been implemented in the data entry interface:
* Users with the Organisation Management or Data Entry roles can define 
  or modify the Provider Organisation Sites field

##### PMHC MDS Data Specification Version 4.1.1 #####

The PMHC MDS Data Specification update v4.1.1 was released on August 18 2025.

The following updates were implemented:
* A ‘8: MMHC’ response has been added to Program Type on both the Intake 
  and Episode records.
* Response ‘24: Head to Health Kids Hubs’ on Funding Source has been renamed 
  to ‘24: Kids Hubs’ on the Service Contact record
* A ‘28: MMHC’ response has been added to Funding Source on the Service 
  Contact record
* A ‘45: MMHC’ response has been added to Organisation type referred to at 
  Intake conclusion on the Intake record
* A ‘25: MMHC’ response has been added to Organisation type referred to at 
  Episode conclusion on the Episode record

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.