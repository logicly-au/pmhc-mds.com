---
title: Update to the PMHC MDS - 15/2/2018
---

#### PMHC MDS Update v0.21.1 ####

We are pleased to announce that PMHC MDS Update v0.21.1 was released on February 15, 2018.

The following updates and bugfixes have been implemented across the MDS:
* Fixed a bug whereby errors on login would be removed before they could be read.
* Fixed a bug where the headers and footers would flash on login, logout and refresh.
* Fixed a bug whereby if you were logged into the PMHC MDS in one tab/window and then you opened another tab/window you would be shown the login screen, instead of automatically being logged in.

The following updates and bugfixes have been implemented in the Data Entry interface:
* Fixed a bug where collection occasion measures dates before 1/1/2016 were not being flagged as invalid before being saved.
* Fixed a bug where a collection occasion measure date was recorded as missing (09099999) against a closed episode, would be incorrectly flagged as invalid.

The following updates and bugfixes have been implemented in the Data Extract interface:
* Fixed a bug whereby the ‘Select Organisation’ drop down was not showing the correct organisations for users who only have roles at a Provider Organisation.

The following updates and bugfixes have been implemented in the Upload interface:
* Fixed a bug where a collection occasion measure date was recorded as missing (09099999) against a closed episode, would be incorrectly reported as an error.

The following updates and bugfixes have been implemented in the Reports interface:
* Fixed a bug whereby the current date was showing as invalid.
