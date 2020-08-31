---
title: Update to the PMHC MDS - and Wayback Data Specifications - 27/8/2020
---

#### PMHC MDS Update v1.0.2 ####

We are pleased to announce that PMHC MDS Update v1.0.2 was released on August 27, 2020.

The following features have been implemented in the data entry interface:
* The Way Back data entry interface is now available in addition to the
  existing upload method. It allows users to manually enter The Way Back data
  through online forms as an alternative to uploading a spreadsheet or file.
  The Way Back User Guide is available at
  [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/user-documentation/](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/user-documentation/){:target="_blank"}.
  Information on adding TWB data to an episode is available at
  [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/user-documentation/data-entry-user-guide.html#adding-a-client-s-twb-episode-data](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/user-documentation/data-entry-user-guide.html#adding-a-client-s-twb-episode-data){:target="_blank"}
* The data entry interface for Collection Occasions has been reworked to
  allow multiple measures to be collected at a collection occasion.

The following bug fixes have been implemented in the data entry interface:
* Fixed a bug where field order in the Service Contact ‘View Details’ tab
  was inconsistent with the ‘Edit Details’ and ‘Add Details’ tabs.
* Fixed unclear wording when hovering over the icon that allows you to make
  a copy of a service contact. The hover wording previously said ‘Duplicate
  Service Contact’. It has been updated to ‘Copy as new service contact’ and
  the icon has been moved to the right of the table.

The following bug fixes have been implemented in the reporting interface:
* Fixed a bug where the data selectors in the B3 report showed inconsistent
  behaviour after clicking the ‘Back’ button from a previously generated B3 report.

The following bug fixes have been implemented in the users interface:
* Fixed a bug where the Expires and Last changed times on the User Details
  tab was being displayed in  UTC +0 timezone. It is now being displayed in
  the logged in user’s local timezone.

The user guides have been updated to reflect these updates. They are available at:

PMHC - [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}

The Way Back - [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/){:target="_blank"}

#### The Way Back Data Specifications Update v3.0.1 ####

We are also pleased to announce that The Way Back Data Specifications Update
v3.0.1 was released on August 17, 2020. The following updates have been implemented:


### Data model and specifications ###
* TWB Episode - Transgender Status - Added value ‘9 - Not stated / Unknown’
* TWB Episode - Intersex Status - Added value ‘9 - Not stated / Unknown’

### Validation Rules ###
* TWB Episode
  * Updated the validation for TWB Episode - Primary Nominated Professional
    Contact Exit Date so that it must not be before Episode - End Date
