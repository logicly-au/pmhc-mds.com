---
title: Continuity of Support and other data specification changes in the PMHC MDS - 4/6/2019
---

#### Continuity of Support and PMHC MDS upload format 2.0 ####

On 1 July 2019, a new field “Continuity of Support” will be added to the Episode record of the PMHC MDS.

In order to incorporate these changes, the upload specification for the PMHC MDS will be updated.
As of the 1 July 2019, the PMHC MDS will accept uploads in both the current 1.0 format and a
new 2.0 format as documented at http://docs.pmhc-mds.com/projects/data-specification/en/v2/.

A summary of the changes between version 1.0 and 2.0 are as follows:

* Version 2.0 introduces a new metadata file or worksheet.
  In version 1.0 a version number had to be specified as the first row in every
  row/worksheet. This row has been removed from version 2.0 and the version
  number has been moved into a separate worksheet.
  See https://docs.pmhc-mds.com/projects/data-specification/en/v2/upload-specification.html#metadata-file

* The following new fields will be added to the Organisation record:
  * Start Date
  * End Date

* The following field will be retired from the Organisation record:
  * Provider Organisation Status

* The following new field will be added to the Episode record:
  * Continuity of Support

The user guide will shortly be updated to reflect these changes. The latest version of the user guide is available at [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}.
