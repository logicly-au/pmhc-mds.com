---
title: Update to the PMHC MDS - 22/11/2017
---

#### PMHC MDS Update v0.18.0 ####

The following features have been implemented:

* Editing of record keys via the data entry interface.
* Insert/update/delete of SDQ subscales via the data entry interface.

The following updates and bugfixes have been implemented in the data entry interface:

* Fixed an issue where a user could generate reports at a Provider Organisation for which had other roles, but not the Reporting role.
* Fixed a spelling error on the Assigned Users tab where an apostrophe was missing.
* Fixed an issue on the View Episode Details tab where the title ‘Uncommenced Episode’ was being shown even though an episode had commenced.
* Fixed an issue with Collection Occasions where Tag values were not being shown and could not be edited.
* Added a link from the home page to the announcements archive.
* Dates are now being validated in a consistent manner. Dates are valid in the period 1/1/1900 - today.

The following updates and bugfixes have been implemented in the upload interface:

* Fixed an error in uploads where leading and trailing whitespace in the column headers was causing errors.
* Fixed an error in uploads when trying to upload to an inactive organisation.
* Fixed an error in uploads when the organisation key was not consistent with the organisation path.

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/).
