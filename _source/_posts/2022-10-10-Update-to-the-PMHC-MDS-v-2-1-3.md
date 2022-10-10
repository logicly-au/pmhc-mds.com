---
title: Update to the PMHC MDS - 6/10/2022
---

#### PMHC MDS Update v2.1.3 ####

We are pleased to announce that PMHC MDS Update v2.1.3 was released on October 6, 2022.

The following updates have been applied in the reporting interface:

* The W1 - Wayback Reporting Template has been updated inline with current
  contractual reporting requirements

The following bug fixes have been applied:

* Fixed Data Extracts that include service contacts where no primary
  practitioner is identified.
* Editing existing Wayback episodes with a Principal Focus of Treatment Plan of
  Psychosocial.
* September 22nd was added as a public holiday for the National Day of Mourning
  for Queen Elizabeth II in all states when calculating business days for W1 reports.
* HeadToHelp uploads with empty Client or Episode worksheets now report
  foreign key errors rather than an internal error.
* Data Entry of entities with trailing spaces in their keys have been restored.
* Uploads in PMHCv4 spec that include deleting service contacts with
  HeadToHelp V3 service contact extension data will now succeed.
* Uploads in META format generate an error early in processing. Uploads of data
  in the META extract format is not supported.

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
