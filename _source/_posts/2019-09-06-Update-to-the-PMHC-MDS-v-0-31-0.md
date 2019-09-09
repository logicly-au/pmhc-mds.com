---
title: Update to the PMHC MDS - 6/9/2019
---

#### PMHC MDS Update v0.31.0 ####

We are pleased to announce that PMHC MDS Update v0.31.0 was released on September 6, 2019.

The following reports have been updated to reflect changes to the specifications:
* Out-1, Out-2 and Out-3 now all use the same (new) criteria for baseline episode inclusion

The following bugfixes have been implemented in the upload interface:
* Fix for a small number of zip files that could not be iteratively extracted
* Fix for deleting data where fields permit multiple responses
* Consistent handling of zip files when all the archived csv files were contained in a subdirectory.
* Fix for data extraction in csv format having metadata.csv.csv
* Fix for permission checks for user roles of a Provider Organisation in grace period
* Fixed date handling uploads where the organisation end date was being set to today’s date
* Fixed error reporting of the Practitioner - Year of Birth field when it is too far in the past
* Fixed test mode so that it reports the same errors as a non test upload

The following bugfixes have been implemented in the reporting interface:
* Fix for calculation of end of financial year dates.
* Fix for App-2 report to also include the organisation type "Aboriginal health/medical service" in calculations

The user guide has been updated to reflect these updates. It is available
at [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}.
