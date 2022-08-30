---
title: Update to the PMHC MDS - 21/8/2022
---

#### PMHC MDS Update v2.0.4 ####

We are pleased to announce that PMHC MDS Update v2.0.4 was released on
August 22, 2022.

The following bugfixes have been applied:

* The program type applied to head to help episodes during the migration to
  version 4 was incorrect. These have now been corrected to have a program
  type of `2: Head To Health`.

The following changes have been implemented in the reports interface:

* `Organisation type referred to at Episode conclusion` has been added to the
  A4 and B2 reports
* `Start Time` has been added to the A5 and B3 reports

The following bugfixes have been implemented in the data entry interface:

* The Suicide Referral icon was showing on summary details for episodes
  where the Suicide Referral flag was not recorded as `1: Yes`
* Intake-Episode data was not displayed when an episode had the tag !covid19
* The ‘Roles of Assigned Users’ tab was not showing the correct roles
* The ‘Duplicate’ button was missing from the Service Contact ‘View Details’ tab


The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
