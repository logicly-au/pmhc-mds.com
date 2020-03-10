---
title: Update to the PMHC MDS - 10/03/2020
---

#### PMHC MDS Update v0.35.0 ####

We are pleased to announce that PMHC MDS Update v0.35.0 was released on March 10, 2020.

The following features have been implemented in the data entry interface:
* Multiple updates have been made to improve the PMHC MDS compliance with
  WCAG AA 2.0 accessibility standards
* Added links from data entry fields to the data specification

The following features have been implemented in the reporting interface:
* All the A series, B1, B2, B3 and B4 and all the C series reports have been
  updated so that they can filter episodes using the `!br20` episode tag that
  has been introduced in order to support the Australian Government Mental
  Health Response to Bushfire Trauma. Please refer to
  [https://docs.pmhc-mds.com/projects/data-specification/en/v2/reserved-tags.html](https://docs.pmhc-mds.com/projects/data-specification/en/v2/reserved-tags.html){:target="_blank"}
  for full details of when and how to use this tag. Note that while PHN’s
  funded under the Response must report in-scope activity using this flag,
  all PHN’s may use the flag to do so.
* A11 - Data Quality Report: Episodes with no service contact.

The following features have been implemented in the upload interface:
* Upload errors have been improved so that they show both the row the error
  is occurring in and the key of the record pertaining to the error.

The following bugfixes have been implemented in the upload interface:
* Fixed a bug when the checking of episode end dates against collection
  occasion dates where collection occasion dates were being modified in the
  same upload.

The user guide has been updated to reflect these updates. It is available
at [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}.
