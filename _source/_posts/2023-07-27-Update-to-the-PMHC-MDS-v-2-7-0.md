---
title: Update to the PMHC MDS - 27/7/2023
---

#### PMHC MDS Update v2.7.0 ####

We are pleased to announce that PMHC MDS Update v2.7.0 was released on 
July 27, 2023.

The following updates have been applied in the reporting interface:
* Reinstate the `!wayback` tag for filtering reports
* The following new reports have been implemented:
  - I8: Links Without an Existing Intake
  - I9: Dispatches to unidentified MDS treatment organisations

The following access issues have been fixed in OMSSS:
* Fixed an issue with questions on SIDAS and WHO5

The following access issues have been fixed:
* Fixed a login issue with Safari

The following issues have been fixed in Data Entry:
* Fixed a bug where the tags field wasn’t always saving unless toggled
* Fixed a bug where the time field was displaying the current time when it 
  should be blank
* Fixed a bug in Safari where the date and time fields were not displaying 
  a value
* Fixed a bug where opening a record showed an error if the key was 50 
  characters
* Fixed a bug where duplicating a service contact record failed where the 
  service contact had been created prior to version 4 and did not have a 
  start time

The following issues have been fixed in Upload:
* Fixed a bug where the YES Invitation upload screen was displaying a 403 error 
  after a successful upload

The following issues have been fixed in Reports:
* Fixed an issue with PHN filtering in A1 
* Fixed an issue with client consent filtering on the I2 and I6 
* Improvement speed on some reports around the regional/org levels filtering 
* Improved speed on the C1 report, which was not loading

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.