---
title: Update to the PMHC MDS - 15/3/2019
---

#### PMHC MDS Update v0.27.4 ####

We are pleased to announce that PMHC MDS Update v0.27.4 was released on March 15, 2019.

The following features have been implemented across the PMHC MDS:
* Added start date and end date to organisations.
* Users can now only work with organisations that are within their start and end dates.
* Reports will use data for any organisation that was active between the specified dates of the report.

The following features have been implemented in the data entry interface:
* Only active practitioners will by default be shown in the practitioners drop
  down when adding or editing practitioners. A new checkbox has been implemented
  to show inactive practitioners to still allow adding/editing of historical data.
* A Tags column has been added to the Organisations table.

The following features have been implemented in the upload interface:
* Only users with the Organisation Management role at a PHN will now be able to
  include the optional ‘Organisations’ worksheet/file in an upload.

The following updates and bug fixes have been implemented across the PMHC MDS:
* Fixed a bug where you could edit an Episode end date to make it earlier
  than the date of an existing service contact or collection occasion date.
* Fixed a bug where the SDQ totals were not displayed correctly when item scores had been provided.
* Fixed a bug where the user roles were not displayed correctly at times.
* Fixed a bug where an error was incorrectly displayed when saving an Organisation record.
* Fixed a bug where if a partial set of organisation data is supplied in an
  upload, and the practitioner data is not supplied, the practitioner data is
  now generated in a consistent manner.
* Fixed a bug for IE11 users getting blank pages with high security browser settings.

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/){:target="_blank"}.
