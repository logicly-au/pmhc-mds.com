---
title: PMHC MDS - Release of Version 4 for Upload and Data Entry - 14/08/2022 (v2.0.1)
---

#### PMHC MDS - Release of Version 4 for Upload and Data Entry

We are pleased to announce that PMHC MDS Update v2.0.1 was released on
August 14, 2022.

Version 4 of the data specification is now available through Data Entry,
Upload and Data Extracts in the PMHC MDS.

Version 4.0 introduces the recording of intake related activity (including
activity for the Head to Health and AMHC programmes) in the PMHC MDS as part
of the core specification. Please refer to the Department of Health Circular at
and the Introduction section of the Version 4 specification at
[https://docs.pmhc-mds.com/projects/data-specification/en/v4/introduction.html](https://docs.pmhc-mds.com/projects/data-specification/en/v4/introduction.html){:target="_blank"}
for overviews of the new specification.

Existing data entered using the HeadtoHelp Version 3 specification has been
migrated to the Version 4 specification. You may wish to review your data.

##### Data Entry

The following changes have been made in the Data Entry interface:

* In order to support the Intake concept three records have been added:

  * For the Intake context - Intake, IAR-DST
  * For the Treatment context - Intake Episode
  * All three records are required in the combined Intake/Treatment context

* The following new fields have been added to the Episode record:

  * Program Type
  * Organisation type referred to at Episode conclusion

* The following field has been retired from the Episode record:

  * Continuity of Service

* The 8: Psychosocial Support response has been removed from the Principal
  Focus of Treatment Plan. Psychosocial intakes and episodes should now be
  reported using the Psychosocial response on Program Type on the Intake and
  Episode

* The data model has been upgraded to allow multiple practitioners to be
  associated with a Service Contact. To support this, an extra record,
  Service Contact Practitioner has been introduced

* The following new fields have been added to the Service Contact record:

  * Start Time
  * Funding Source

##### Upload

Uploads now support the Version 4.0.0 data specification as documented at
[https://docs.pmhc-mds.com/projects/data-specification/en/v4/upload-specification.html](https://docs.pmhc-mds.com/projects/data-specification/en/v4/upload-specification.html){:target="_blank"}.

Uploads in the HeadtoHelp Version 3 specification will be converted to Version
4 during upload.

Please refer to
[https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html](https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html){:target="_blank"}
for a description of the changes between the core Version 2 specification and
the new core Version 4 specification.

Steps required to upgrade uploads from pre Version 4 based specifications are
documented at
[https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html#steps-required-to-upgrade-to-version-4-uploads](https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html#steps-required-to-upgrade-to-version-4-uploads){:target="_blank"}

##### Reporting

The Data Source selector on the reporting interface has been expanded to include:

  * Flexible Funding Pool
  * Head to Health
  * AMHC
  * Psychosocial
  * Bushfire 20
  * hAPI (headspace)

The following new reports have been implemented:

  * [I1: Recommended vs practitioner level of care](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/reporting.html#i1-recommended-vs-practitioner-level-of-care){:target="_blank"}
  * [I2: IAR-DST by 10+](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/reporting.html#i2-iar-dst-by-k10){:target="_blank"}
  * [I3: IAR-DST by Referral In - Practitioner IAR](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/reporting.html#i3-iar-dst-by-referral-in){:target="_blank"}
  * [I4: IAR-DST by Referral Out - Practitioner IAR](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/reporting.html#i4-iar-dst-by-referral-out){:target="_blank"}

Further reports relevant to the new Version 4 data model are currently being developed.

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
