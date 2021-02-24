---
title: Planned changes for PMHC MDS uploads - 25/2/2021
---

On the evening of 25 February 2021 changes will be made to improve the security
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
