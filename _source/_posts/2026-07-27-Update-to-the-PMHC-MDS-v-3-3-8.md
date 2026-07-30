---
title: Update to the PMHC MDS - 27/7/2026 (v3.3.8)
---

#### PMHC MDS Update v3.3.8 ####

We are pleased to announce that PMHC MDS Update v3.3.8 was released on
July 27, 2026.

The following updates have been applied in the data extract interface:
* Users with the ‘Reporting’ role at a PHN can now extract only the data 
   from an inactive Provider Organisation (previously they could only 
   extract data for an inactive Provider Organisation as part of a full 
   PHN extract). If a user has the ‘Reporting’ role on an inactive Provider 
   Organisation, they will be allowed to extract data until 3 months after 
   the ‘Organisation End Date’

The following updates have been applied in the reporting interface:
* The following report has been updated to allow grouping down to site level:
  - M8 — Episode of care characteristics.
* Fixed a timeout issue when running the G1— Residential Aged Care Facility 
  Client Outcomes report at the National level.

The following updates have been applied to the upload interface:
* ‘Organisation type referred to at Episode conclusion’ accepts multiple 
  values. Improved the error message returned when episodes have duplicate 
  ‘Organisation type referred to at Episode conclusion’ but no end date.
* Fixed the validation message when ‘Organisation type referred to at 
  Intake conclusion’ is blank when the other intake conclusion fields 
  are completed.
* Fixed a bug where if an episode is open, ‘Organisation type referred 
  to at Episode conclusion’ should not be populated.
* Fixed a bug where a date was missing from errors returned for Universal 
  Aftercare ‘Primary Nominated Professional Consent Date’ and 
  ‘Primary Nominated Professional Contact Entry Date’ 

The following validation rules have been changed:
* Updated the validation rule for ‘Organisation type referred to at 
  Intake conclusion’ so that the response '42: AMHC' is obsolete where 
  ‘Date client contacted Intake’ is 18 December 2025 or later. Previously 
  this rule allowed the '42: AMHC' response on data that had already been 
  uploaded to the PMHC, but not on new data.
* Updated the validation rule for ‘Organisation type referred to at Intake 
  conclusion’ so that the response '44: HeadtoHelp / HeadtoHealth' can be 
  used by all organisations where ‘Date client contacted Intake’ is earlier 
  than 18 December 2025. After that date it is obsolete except for remaining 
  Head to Health Clinics located in Victoria and Thornleigh, NSW. Previously 
  this rule allowed the '44: HeadtoHelp / HeadtoHealth' response on data 
  that had already been uploaded to the PMHC, but not on new data.

The following updates have been applied to the data entry interface:
* Added links to the documentation when adding a new Intake or IAR-DST record.

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
