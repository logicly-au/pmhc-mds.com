---
title: Update to the PMHC MDS - 23/10/2026 (v3.3.12)
---

#### PMHC MDS Update v3.3.12 ####

We are pleased to announce that PMHC MDS Update v3.3.12 was released on
October 23, 2026.

The following updates have been applied in the organisation management interface:
* Fixed an issue where the Sites tab was not displaying.

The following updates have been applied in the data extract interface:
* Fixed an issue where a link to the Organisation Management interface was 
  being provided when a user did not have access to the Organisation Management 
  interface and therefore being given an Unauthorised Access error.

The following updates have been applied in the upload and data entry interfaces:
* When the IAR-DST Practitioner Level of Care response ‘9: Not Supplied’ is 
  used, the PMHC MDS currently requires that a Practitioner Reason for 
  Override has been supplied. It does not make sense to require an override 
  reason when no override has been supplied. The PMHC MDS has been updated to 
  permit this case. When any other Practitioner Level of Care is supplied the 
  PMHC MDS still requires that a Practitioner Reason for Override is also 
  supplied.

The following updates have been applied in the additional services:
* Now that organisations have had sufficient opportunity to review their 
  identifier management practices to ensure their keys don’t contain names, 
  we recently updated the monthly name-like scanning service to scan only 
  data from the last 12 months.

In addition the PMHC MDS website at [https://pmhc-mds.com/](https://pmhc-mds.com){:target="_blank"} was recently updated, including the PMHC MDS Purpose Statement at 
[https://pmhc-mds.com/purpose/](https://pmhc-mds.com/purpose/){:target="_blank"}. 
