---
title: Changes to HeadtoHelp Data Specification - Practitioner Level of Care - 23/2/2021
---

#### HeadtoHelp Hubs Data Specification v3.0.2 ####

On 26 February 2021, a new field “Practitioner Level of Care” will be added
to the IAR-DST record of the HeadtoHelp Hubs PMHC MDS Extension.

In order to incorporate these changes, the upload specification for the
HeadtoHelp Hubs Data Specification will be updated.

A new field - Practitioner Level of Care - will be added to the IAR-DST record:

Description: The individualised level of care assessed by the practitioner for the referral

Field name: iar_dst_practitioner_level_of_care

Data type: string

Required: yes

Domain:

* 1: Level 1 - Self Management
* 2: Level 2 - Low Intensity Services
* 3: Level 3 - Moderate Intensity Services
* 4: Level 4 - High Intensity Services
* 5: Level 5 - Acute and Specialist Community Mental Health Services
* 9: Missing

Existing IAR-DST data will have the Practitioner Level of Care set to 9: Missing.
All new data must use responses 1-5.

The user guides have been updated to reflect these updates. They are available at:

PMHC - [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}

HeadtoHelp - [https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-headtohelp/en/v3/){:target="_blank"}

The Way Back - [https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-wayback/en/v3/){:target="_blank"}
