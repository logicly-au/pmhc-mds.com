---
title: Update to the PMHC MDS - 1/9/2022
---

#### PMHC MDS Update v2.0.6 ####

We are pleased to announce that PMHC MDS Update v2.0.6 was released on September 1, 2022.

The following changes have been applied in the data entry interface:

* The “Psychosocial” response for the Principal Focus of Treatment plan has
  been re-enabled when creating “!wayback” tagged episodes.

  The Wayback extension is currently being upgraded to be based on the PMHC
  Version 4.0 specification. Further advice will be provided when the upgraded
  specification is released regarding recording of Psychosocial episodes.

The following improvements have been made for uploads:

* Uploads in the HeadToHelp 3.0 specification will generate an error if any
  IAR-DST measures exist for episodes that are not in the intake context.
* Uploads in the PMHC 2.0 or WayBack 3.0 specification will allow existing
  episodes to change their Principal Focus of Treatment plan to the
  “Psychosocial” response.

The following improvements have been implemented in reporting:

* The headers in the CSV format for the I series reports were not formatting correctly
* The PMHC option has been temporarily reinstated in the Data Source option.
  Note: In a future release, selection of multiple data sources will be enabled
  and the PMHC option will be removed again.

The following bug fixes have been implemented in the data entry interface:

* Date picker no longer auto displays when hovering over a date field
* Duplicate a service contact was not prefilling the two practitioner fields
* Inactive practitioners selection was missing from the service contact add/edit forms
* Service contact Start Time was not displaying for “!wayback” tagged episodes
* Fixed an internal error for some data entry

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
