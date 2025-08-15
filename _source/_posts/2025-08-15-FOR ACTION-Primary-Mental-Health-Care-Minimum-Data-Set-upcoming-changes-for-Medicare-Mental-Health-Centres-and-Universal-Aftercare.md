---
title: FOR ACTION&#58; Primary Mental Health Care Minimum Data Set upcoming changes for Medicare Mental Health Centres and Universal Aftercare
---

The below circular was sent to PHN CEOs on Friday 15 August 2025.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

Dear PHN CEOs,

This circular is to inform PHNs and their service providers of forthcoming updates to the Primary Mental Health Care Minimum Data Set (PMHC MDS), as part of the Version 4.1.1 release. These updates are aligned with ongoing efforts to strengthen data quality, enhance reporting capabilities, and ensure consistency with evolving national mental health program structures.

As part of this release, enhancements will be made to the way data for Medicare Mental Health Centres (MMHCs) is reported.

Additionally, we wish to provide early notice of the upcoming rebranding of The Way Back Support Service (TWBSS) to Universal Aftercare.

To support the information in this circular, PHNs are asked to:

* Ensure relevant staff receive and review the information provided in this circular.
* Ensure all data for MMHCs is uploaded in accordance with the guidance provided in this circular by 1 October 2025.
* Ensure all Universal Aftercare data is uploaded to the PMHC MDS in line with relevant guidance provided.
* Further guidance regarding Universal Aftercare rebrand will be provided in due course.

Please refer to the attached document for additional detail.

For any queries please contact [MentalHealthData@health.gov.au](mailto:MentalHealthData@health.gov.au).

Kind regards,

Mental Health Data

**PHN CEO Circular – August 2025**

#### Updates in the PMHC MDS

##### Overview {#overview-2025x08x15}

This circular is to inform Primary Health Networks (PHNs) and their service providers of
forthcoming updates to the Primary Mental Health Care Minimum Data Set (PMHC MDS), as
part of the Version 4.1.1 release. These updates are aligned with ongoing efforts to strengthen
data quality, enhance reporting capabilities, and ensure consistency with evolving national
mental health program structures. As part of this release, enhancements will be made to the
way data for Medicare Mental Health Centres (MMHCs) is reported.

Additionally, we wish to provide early notice of the upcoming rebranding of The Way Back
Support Service (TWBSS) to Universal Aftercare. This change reflects that transition away from
Beyond Blue’s oversight of TWBSS is complete in relevant jurisdictions, and arrangements are
now in place to support implementation of universal aftercare services in all states and
territories. Under the National Mental Health and Suicide Prevention Agreement bilateral
schedules, states and territories have flexibility to implement and adapt aftercare service
models to meet the needs of local communities, while contributing to national availability of
aftercare supports. These updates to the PMHC MDS are designed to support improved
monitoring, evaluation, and comparability of services across jurisdictions, and will be
accompanied by updated technical documentation and guidance.

To support the information in this circular, PHNs are asked to:

* Ensure relevant staff receive and review the information provided in this circular.
* Ensure all data for MMHCs is uploaded in accordance with the guidance provided in this
  circular by 1 October 2025.
* Ensure all Universal Aftercare data is uploaded to the PMHC MDS in line with relevant
  guidance provided.

  - Further guidance regarding Universal Aftercare rebrand will be provided in due
course.
For any questions regarding this information please contact [MentalHealthData@health.gov.au](mailto:MentalHealthData@health.gov.au).

##### Background {#background-2025x08x15}

###### MMHCs

As of July 2025, there are 41 Centres open nationally. Medicare Mental Health Centres provide a
welcoming place where everyone can access free mental health information, services and
supports. Centres are staffed by a team of qualified mental health professionals and people
with lived experience of mental health. Support through the Centres is free for everyone who
walks in the door. Consumers do not need an appointment or a referral.

As all Medicare Mental Health Centres have been rebranded, there are new additions to the
available domains in the PMHC MDS which are incorporated under Program Type, Funding
Source and Organisation Type.

For policy and funding queries about the Medicare Mental Health Centres program, please
contact [Mental.Health.Liaison@health.gov.au](mailto:Mental.Health.Liaison@health.gov.au).

###### Universal Aftercare

The Way Back Support Service was originally developed and delivered by Beyond Blue as a trial
suicide aftercare model, with the Australian Government subsequently funding roll-out of this
model in several jurisdictions. Under the National Mental Health and Suicide Prevention
Agreement, the Commonwealth and states and territories agreed to be jointly responsible for
providing aftercare programs, which reflect and respond to local needs and circumstance. This
shift marked the evolution of aftercare services from a specific model, available in some
jurisdictions, to a nationally supported and scalable program now referred to as Universal
Aftercare.

To reflect this transition, and ensure consistency in data collection and reporting, references to
The Way Back in the PMHC MDS will be rebranded to Universal Aftercare. This includes
introducing a dedicated Universal Aftercare Program Type. This will also include the
introduction of a new tag for the Universal Aftercare Outside of Hospital/Expanded Referral
Pathway Trial. These changes will support improved monitoring, evaluation, and comparability
of aftercare services across jurisdictions.

For policy or funding queries, please contact [SuicidePrevention@health.gov.au](mailto:SuicidePrevention@health.gov.au).

##### Key Changes {#key-changes-2025x08x15}

Two data specification updates are planned to implement both the MMHC and Universal
Aftercare changes.

###### Version 4.1.1 (next planned release)

Version 4.1.1 begins the rebranding of AMHC and Head to Health to MMHC. It will include the
following changes:

* A '8: MMHC' response will be added to Program Type on both the Intake and Episode
  records.
* Response '24: Head to Health Kids Hubs' on Funding Source will be renamed to '24:
  Kids Hubs' on the Service Contact record
* A '28: MMHC' response will be added to Funding Source on the Service Contact record
* A '45: MMHC' response will be added to Organisation type referred to at Intake
  conclusion on the Intake record
* A '25: MMHC' response will be added to Organisation type referred to at Episode
  conclusion on the Episode record

Version 4.1.1 is backwards compatible with Version 4.1.0. Only organisations using the above
responses will need to change their uploads.

###### Version 5.0 (to be released end of November)

Version 5.0 will complete the rebranding to MMHC and Universal Aftercare. It will include the
following changes:

* A ‘9: Universal Aftercare’ response will be added to the Program Type field on both the
  Intake and Episode tables
* Seven entirely new tables will be added corresponding to the existing tables in the
  Wayback extension. These tables will only need to be submitted where Episodes using
  the new ‘9: Universal Aftercare’ Program Type are included

  - UA Episode
  - UA Recommendation Out
  - UA Critical Incident
  - UA Plan
  - UA Needs Identification (NI)
  - SIDAS
  - WHO-5

* The following changes will be applied to the Program Type field on both the Intake and
  Episode tables:

  - ‘2: Head to Health’ renamed to ‘2: Head to Health Clinic’. This response is only
    to be used by remaining temporary Head to Health Clinics in NSW and Victoria.
    Please refer to Program Type for more information
  - ‘3: AMHC’ will be retired. An error will be returned if this response is used

Additionally, the following changes will also be included in Version 5.0:

* A new Veteran field will be added to the Intake and Episode tables. This field was
  included in The Way Back specification. There is a new IAR-DST variant in development
  for Veterans. Veterans will be included on the Intake and Episode tables instead of the
  new UA Episode table so that it can be used for monitoring both the IAR-DST and
  Universal Aftercare
* A new IAR-DST - Practitioner Reason for Override will be added to the IAR-DST table

When Version 5 is released, existing episodes tagged with !wayback will be migrated to the new
Universal Aftercare Program Type. The !wayback tag will be retained for historical reference
only.

Uploading of both the new Version 5 specification as well as continued upload of the existing
Version 4.1 specification/Version 3 Wayback extension will be allowed for a 6-month period.
During this period, any data uploaded under the Version 4.1 or Version 3.0 Wayback
specifications will be migrated during the upload process. After the 6-month period, only
Version 5 uploads will be accepted.

###### Universal Aftercare Outside of Hospital/Expanded Referral Pathway Trial

A new system tag (!uaooh) will be introduced at the same time as Version 5 to distinguish
episodes under the Universal Aftercare Outside of Hospital/Expanded Referral Pathway
Trial. The !uaooh tag will only be allowed on Episode records where the Program Type is ‘9:
Universal Aftercare’.

###### Reporting

The existing Way Back-specific reports (W1–W4) will be retired and replaced with updated
reports in the standard reports tab (the W1 report will be converted from a downloadable Excel
template to a CSV format). These will be accessible to PHNs, the Department, and State and
Territory Health Departments/Agencies.

New reports are also in development to support MMHC.

##### Action required {#action-required-2025x08x15}

###### MMHCs

When Version 4.1.1 is released, Medicare Mental Health Centres should use the new domains
for Program Type, Funding Source and Organisation Type as outlined above. The Head to Health
or AMHC Program Types should no longer be used.

Medicare Mental Health Centres may wish to amend data retrospectively using these new
domains, but this is not mandatory.

Remaining temporary Head to Health Clinics in NSW and Victoria should not use the new
MMHC domains and continue use of the Head to Health Program Type.

###### Universal Aftercare

A draft Version 5.0 specification will shortly be published. PHNs or service providers should
implement changes to their system so that they can start providing data in the Version 5.0
format when it is released. Further guidance will be provided in due course to support a smooth
transition. Once the rebrand is in place, all Universal Aftercare data – including data collected
through the Outside of Hospital/Expanded Referral Pathway Trial – must be reported using the
Universal Aftercare Program Type in the PMHC MDS. Additionally, data collected as part of the
trial must be tagged with the new identifier to ensure it is easily distinguishable within the
dataset. This will support accurate tracking and analysis of trial-specific outcomes.

For technical support regarding the PMHC MDS, please contact Logicly at [support@pmhc-mds.com](mailto:support@pmhc-mds.com).