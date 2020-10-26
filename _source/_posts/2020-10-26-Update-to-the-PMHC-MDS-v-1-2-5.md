---
title: Update to the PMHC MDS and Wayback Quarterly Report Template - 21/10/2020
---

#### PMHC MDS Update v1.2.5 ####

We are pleased to announce that PMHC MDS Update v1.2.5 was released on October
21, 2020.

The following features have been implemented in the reporting interface:
* The Way Back Quarterly reporting function is now available. It allows users to
  automatically populate The Way Back Quarterly Report using data contained in
  the PMHC MDS.

  To access the report follow the instructions at
  [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/user-documentation/reports-user-guide.html](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/user-documentation/reports-user-guide.html){:target="_blank"}

  Running the report will result in an Excel spreadsheet being downloaded. The
  spreadsheet will then require some manual completion before providing to
  Beyond Blue or your PHN.

* Fixed a bug where some users with the Aggregate Reporting role received a
  403 Error

The following features have been implemented in the data entry interface:
* Improved the speed of the client search
* Fixed a bug where episodes that were uploaded with the `!wayback` tag but no
  corresponding TWB Episode record where not display correctly in the Data
  Entry interface

The following bug fixes have been implemented in the upload interface:
* Fixed a bug where upload summary stated that a collection occasion was
  ‘added’ when it should have stated ‘updated’
* Improved the preprocessing of CSV files with Byte Order Marks

The following bug fixes have been implemented in data extracts:
* The missing date 09099999 has been included in the data extract for TWB
  Episode records

The user guides have been updated to reflect these updates. They are available at:

PMHC - [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}

The Way Back - [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/){:target="_blank"}
