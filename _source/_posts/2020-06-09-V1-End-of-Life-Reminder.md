---
title: Reminder of end of life for PMHC MDS Version 1 upload format - 9/6/2019
---

The PMHC MDS currently supports uploads in both the Version 1 format as documented at [http://docs.pmhc-mds.com/projects/data-specification/en/v1/](http://docs.pmhc-mds.com/projects/data-specification/en/v1/){:target="_blank"} and the Version 2 format as documented at [http://docs.pmhc-mds.com/projects/data-specification/en/v2/](http://docs.pmhc-mds.com/projects/data-specification/en/v2/){:target="_blank"}.

**After the 30th of June 2020 the PMHC MDS will no longer accept uploads using the Version 1 format.** Please ensure that you have migrated to using the Version 2 format before this date.

A summary of the changes between version 1.0 and 2.0 are as follows:

* Version 2.0 introduces a new metadata file or worksheet.
  In version 1.0 a version number had to be specified as the first row in every
  row/worksheet. This row has been removed from version 2.0 and the version
  number has been moved into a separate worksheet.
  See [https://docs.pmhc-mds.com/projects/data-specification/en/v2/upload-specification.html#metadata-file](https://docs.pmhc-mds.com/projects/data-specification/en/v2/upload-specification.html#metadata-file){:target="_blank"}

* The following new fields will be added to the Organisation record:
  * Start Date
  * End Date

* The following field will be retired from the Organisation record:
  * Provider Organisation Status

* The following new field will be added to the Episode record:
  * Continuity of Support
