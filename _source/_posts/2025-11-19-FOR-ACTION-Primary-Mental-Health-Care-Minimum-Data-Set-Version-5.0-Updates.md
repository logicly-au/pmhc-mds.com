---
title: FOR ACTION&#58; Primary Mental Health Care Minimum Data Set Version 5.0 Updates
---

The below circular was sent to PHN CEOs on Wednesday 19 November 2025.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

Dear PHN CEOs,

This circular is to inform PHNs and their service providers of forthcoming updates to the Primary Mental Health Care Minimum Data Set (PMHC MDS), as part of the Version 5.0 release. These changes are designed to further strengthen data quality, align reporting with evolving national mental health program structures, and support improved monitoring and evaluation across jurisdictions.

To support the information in this circular, PHNs are asked to:

* Ensure relevant staff and service providers are aware of the upcoming Version 5.0 release and are subscribed to receive communications
  from Logicly's PMHC MDS support service if they don't already have a login to the PMHC MDS. If you would like to be added to the 
  mailing list please email [support@pmhc-mds.com](mailto:support@pmhc-mds.com).
* Prepare to transition data collection and upload arrangements in line with the new Version 5.0 specification.

Please refer to the attached document for additional detail.

For any queries please contact [MentalHealthData@health.gov.au](mailto:MentalHealthData@health.gov.au).

Kind regards,

Mental Health Data


**PHN CEO Circular**

#### PMHC MDS Version 5

##### Overview {#overview-2025x11x19}

This circular provides Primary Health Networks (PHNs) and service providers with information
on updates to the Primary Mental Health Care Minimum Data Set (PMHC MDS). These changes
are designed to further strengthen data quality, align reporting with evolving national mental
health program structures, and support improved monitoring and evaluation across
jurisdictions.
To support the information in this circular, PHNs are asked to:

* Ensure relevant staff and service providers are aware of the upcoming Version 5.0
  release and are subscribed to receive communications from Logicly’s PMHC MDS
  support service if they don’t already have a login to the PMHC MDS. If you would like to
  be added to the mailing list please email [support@pmhc-mds.com](mailto:support@pmhc-mds.com).
* Prepare to transition data collection and upload arrangements in line with the new
  Version 5.0 specification.

For any questions regarding this information please contact [MentalHealthData@health.gov.au](mailto:MentalHealthData@health.gov.au).

##### Background {#background-2025x11x19}

As outlined in the August 2025 circular to PHNs, the PMHC MDS is undergoing a series of
enhancements to ensure data collection and reporting remain consistent with the evolving
landscape of national mental health programs. The August circular introduced the planned
rebranding of The Way Back Support Service (TWBSS) to Universal Aftercare, as well as the
changes from AMHC and Head to Health to Medicare Mental Health Centres (MMHCs). The
PMHC MDS Version 5.0 data specification release provides further refinements to Program
Types, Funding Sources, and reporting processes to support improved monitoring and
evaluation of these services.

##### PMHC MDS Version 5.0 Data Specification

The PMHC MDS Version 5.0 Data Specification is now available at [https://docs.pmhc-mds.com/projects/data-specification/en/v5.0/](https://docs.pmhc-mds.com/projects/data-specification/en/v5.0/){:target="_blank"}.

##### Key Changes in Version 5.0

Version 5.0 completes the rebranding to MMHC and Universal Aftercare. It includes the
following changes:

###### Universal Aftercare

* A ‘9: Universal Aftercare’ response will be added to the Program Type field on both the
  Intake and Episode tables. This means that Universal Aftercare data will now be
  triggered by the Program Type, not by a tag.
* Seven entirely new tables will be added corresponding to the existing tables in the
  Wayback extension. These tables will only need to be submitted where Episodes using
  the new ‘9: Universal Aftercare’ Program Type are included

  * UA Episode
  * UA Recommendation Out
  * UA Critical Incident
  * UA Plan
  * UA Needs Identification (NI)
  * SIDAS
  * WHO-5
* Existing episodes tagged with !wayback will be migrated to the new Universal Aftercare
  Program Type. The !wayback tag will be retained for historical reference only.
* A new system tag (!uaooh) will be introduced to distinguish episodes under the
  Universal Aftercare Outside of Hospital/Expanded Referral Pathway Trial. The !uaooh
  tag will only be allowed on Episode records where the Program Type is ‘9: Universal
  Aftercare’. This tag should be applied to all episodes delivered under the Universal
  Aftercare Outside of Hospital/Expanded Referral Pathway Trial.
* The existing Way Back-specific reports (W1-W4) will be retired and replaced with
  updated reports in the standard reports tab:

  * The W1 report will be converted from a downloadable Excel template to a CSV format.
  * The W2 report will be retired and a new A series report implemented that shows
    the number of episodes that have the Universal Aftercare Program Type but no
    linked UA Episode record.
  * The W3 report that reports on missing TWB Extension data will be converted to a
    standard report.
  * The W4 report that reports on Needs Identification and Recommendation Out
    data will be converted to a standard report.
  * The Data Source selector will be updated to remove ‘The Way Back’ and add
    ‘Universal Aftercare’, based on the new Program Type.
* SIDAS and WHO-5 outcome measures will continue to require individual item score
  reporting, consistent with previous TWB standards and to support data quality validation.

###### Medicare Mental Health Centres

* The following changes will be applied to the Program Type field on both the Intake and
Episode tables:

  * ‘2: Head to Health’ renamed to ‘2: Head to Health Clinic’. This response is only
    to be used by remaining Head to Health Clinics in New South Wales and Victoria.
  * ‘3: AMHC’ will be retired. An error will be returned if this response is used.
* Existing episodes with Program Type ‘3: AMHC’ will be migrated to Program Type ‘8:MMHC’.
* Existing episodes with Program Type ‘2: Head to Health’ will be migrated to Program
  Type ‘8: MMHC’, excluding:

  * Former Pop-Up clinics and Head to Health clinics in New South Wales and Australian Capital Territory
  * Continuing Head to Health clinics in New South Wales
  * Existing/former Pop-Up clinics and Head to Health clinics in Victoria except for the Geelong MMHC

###### Other

* A new Veteran field will be added to the Intake and Episode tables. This field was
  included in The Way Back specification. There is a new IAR-DST variant in development
  for Veterans. Veterans will be included on the Intake and Episode tables instead of the
  new UA Episode table so that it can be used for monitoring both the IAR-DST and
  Universal Aftercare.
* A new IAR-DST - Practitioner Reason for Override will be added to the IAR-DST table.
* A New report will allow SDQ, K10/K5, WHO-5, and SIDAS to be reported consistently
  across all program types.

##### Transition Period

A six-month transition period will be allowed during which the PMHC MDS Version 4.1, The Way
Back Version 3.0 and PMHC MDS Version 5.0 data specifications will all be accepted. After this
transition period, the PMHC MDS Version 4.1 and The Way Back Version 3.0 data specifications
will no longer be able to be uploaded to the PMHC MDS. During the transition period any data
uploaded under either the PMHC MDS Version 4.1 or The Way Back Version 3.0 data
specifications will be migrated to PMHC MDS Version 5.0 data specification.

##### PMHC MDS Version 5.0 data specification release

Implementation of the PMHC MDS Version 5.0 data specification is currently being finalised
and undergoing quality assurance testing. Logicly will provide information about a release date
via the PMHC MDS mailing list. If you would like to be added to the mailing list, please email
[support@pmhc-mds.com](mailto:support@pmhc-mds.com).

##### Action required {#action-required-2025x11x19}

PHNs and their service providers must ensure all relevant staff review this circular and prepare
for the transition to Version 5.0. This includes updating systems and processes to
accommodate the changes. Both Version 5.0 and existing Version 4.1 specifications will be
accepted for a 6-month transition period, after which only Version 5.0 uploads will be
permitted.

For technical support regarding the PMHC MDS, please contact Logicly at [support@pmhc-mds.com](mailto:support@pmhc-mds.com).