---
title: Update to the PMHC MDS and HeadtoHelp Data Specification- 25/2/2021
---

#### PMHC MDS Update v1.8.2 ####

We are pleased to announce that PMHC MDS Update v1.8.2 was released on
February 25, 2021.

The following functionality has been added to the data entry interface:
* Added Practitioner Level of Care to the IAR-DST Measure which can be
  associated with a HeadtoHelp (!covid19) tagged episode.

The following functionality has been added to the upload interface:
* Added Practitioner Level of Care to the IAR-DST Measure which is required
  when uploading using the HeadtoHelp Hubs v3 Specification.

The following improvement has been made in the reporting interface:
* The A12 report has been updated to include information about shared
  episodes “as lead organisations” and “as delivery organisations”. More
  information is available at
  [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/reporting.html#a12-episodes-shared-across-multiple-organisations](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/reporting.html#a12-episodes-shared-across-multiple-organisations){:target="_blank"}

The following bug fix has been implemented in uploads:
* Fixed a bug in v3 specification uploads (The Way Back and HeadtoHelp)
  where an appropriate error was not returned when checking the collection
  occasion date against the episode end date.

The following bug fix has been implemented in data extracts:
* Fixed a bug where some keys were incorrectly being interpreted as a
  scientific number causing an error in Excel.

#### HeadtoHelp Hubs Data Specification Update v3.0.2 ####

We are also pleased to announce that the HeadtoHelp Data Specifications
update v3.0.2 was released on February 25, 2021. The following updates have
been implemented:

##### Data model and specifications {#data-model-and-specifications-headtohelp-v3-0-2}

* Added [IAR-DST - Practitioner Level of Care](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/data-specification/data-model-and-specifications.html#iar-dst-practitioner-level-of-care){:target="_blank"}

#### PMHC MDS Upload changes ####

We are also pleased to announce that changes have been made to improve the security
of PMHC MDS uploads.

Uploads will be rejected by our incoming data scanning system if they do not
meet the following requirements.

* Must be either an Excel Workbook (.xlsx),
* OR a zip (.zip) file containing CSV files,
* AND must be less than 512MB

The first and second of these requirements were enforced already however
files will be rejected at an earlier stage in the process after this update
and as a consequence the behaviour of the system when files are rejected for
this reason will be slightly different.

The file size restriction prevents our systems from becoming unstable if
extremely large files are uploaded. We will monitor if this limit causes
issues for anyone and adjust it if necessary.

The user guides have been updated to reflect these updates. They are available at:

PMHC - [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}

HeadtoHelp - [https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/){:target="_blank"}

The Way Back - [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/){:target="_blank"}
