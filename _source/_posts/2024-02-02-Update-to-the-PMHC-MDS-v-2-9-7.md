---
title: Update to the PMHC MDS - 2/2/2024
---

#### PMHC MDS Update v2.9.7 ####

We are pleased to announce that PMHC MDS Update v2.9.7 was released
on February 2, 2024.

The following update has been applied to the sign-in interface:
* A link to allow password reset was added next to the Sign in button

The following updates have been applied in the reporting interface:
* The ‘B1 - Activity Report: Client Characteristics’, ‘B2 - Activity 
  Report: Episode Characteristics’ and ‘B3 - Activity Report: Service 
  Contact Characteristics’ reports have been enhanced such that:
  - A 'State/Territory' Reporting Level has been added
  - A 'Group By' selector has been added with the following options
    for each Reporting Level:
    * National - 'None', 'State/Territory', 'PHN'
    * State/Territory - 'None', 'PHN'
    * Regional - 'None', 'PO'
    * Provider Organisation - 'None'

  - A 'Filter By' selector has been added that allows multiple selections
    of the entity that was selected for the Group By
* Improved the speed of the ‘App2 - Culturally appropriate services for 
  Indigenous population’ report when reporting at a Regional level
* Improved the speed of the ‘B5 - Activity reports by provider workforce 
  characteristics’ report when reporting at a National level
* Fixed a bug that was occasionally causing decimal numbers to be rounded 
  the wrong way
* Fixed a bug where a CSV report could not be downloaded

The following updates have been applied in the upload interface:
* Improved a validation error for the Service Contact Start Time to show 
  an example from the upload where the time format has not been supplied 
  correctly
* Allow referral dates that are dated UTC tomorrow in order to accommodate 
  different time zones
* Fixed a bug where the “Uploader” field was missing from the filters section 
  of the View Uploads tab

The following updates have been applied in the user management interface:
* Fixed a bug where the Actions button was inactive in the Edit user roles tab
* Fixed a bug where the Organisation Name was being displayed in the 
  Organisation Path column in the user roles tab
* Fixed a bug where the ‘Invitation issued by’ filter on the View Invitations 
  tab was not working properly

The following updates have been applied in the organisation management 
interface:
* Improved the speed of viewing lists of organisations

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.