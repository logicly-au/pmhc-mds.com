---
title: Update to the PMHC MDS - 3/11/2023
---

#### PMHC MDS Update v2.8.5 ####

We are pleased to announce that PMHC MDS Update v2.8.5 was released on
November 3, 2023.

The following updates have been applied in the reporting interface:
* The App-3 — Suicide Risk Followup Reports has had a fix on the Unknown age
  group counting. Now, it includes episodes without service contacts
* Improvement speed on the A6 reports
* Fixed an error where totals for hAPI providers were showing counts of 0 at
  the Regional level

The following updates have been applied in the upload interface:
* Return a validation error when the Service Contact Start Time field includes
  AM/PM

The following updates have been applied in the upload API:
* Fixed an error where records with today’s date were incorrectly being
  identified as future dated
* Fixed a bug that was causing uploads via the API to fail

The following updates have been applied in the data extract interface:
* Added a new feature where users can now select the data specification type
  to be extracted
* Fixed an error where headspace records were not included in extracts

The following updates have been applied in the user management interface:
* Fixed an error where user roles were not being applied after users accepted
  their invitation

The following updates have been applied in the reporting specifications:
* PMHC Outcome Measure Standard Deviations 2023 as XLSX

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
