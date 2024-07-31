---
title: Update to the PMHC MDS - 29/7/2024 (v2.12.7)
---

#### PMHC MDS Update v2.12.7 ####

As per the bilateral agreements between the Commonwealth and State/Territory 
Governments, users from State and Territory Governments can now be given 
access to aggregate reports. For more information please refer to the updated 
guidance on client consent at 
https://pmhc-mds.com/doc/pmhc-consent-guidance-20240430.pdf.

The following updates have been applied in the reporting interface:
* The reports that allow state/territory breakdowns (A1, B1, B2, B3) now use 
  the state/territory of the commissioning PHN rather than the state/territory 
  of the provider organisation that delivered the service
* The efficiency of some reports has been improved
* Provider organisations that are not active in the selected reporting period 
  are now being filtered out of Provider Organisation drop down
* Fixed a bug in the B1 report where if you generated a B1 report down to the 
  PO level and then filtered by a specific provider organisation, that filtering 
  did not get applied to the total row of the report

The following updates have been applied to the user management interface:
* Fixed an issue that was causing inactive users to be inconsistently  listed 
  in the User Auditing tab and the Edit Roles tab

The following updates have been applied in the upload interface:
* Added a check to ensure that upload files have the appropriate extension for 
  their file type, that is, zip files must have a .zip extension and excel 
  files must have a .xlsx extension
* Improved the error message for duplicate values for the Organisation Type 
  Referred to at Episode Conclusion field
* Improved the error message when duplicate Service Contact Practitioners are 
  recorded for a Service Contact

The following updates have been applied in the Upload API:
* One API key can now be used to upload to multiple provider organisations

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.