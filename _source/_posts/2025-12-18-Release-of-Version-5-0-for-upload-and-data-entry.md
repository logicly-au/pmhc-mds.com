---
title: PMHC MDS - Release of Version 5.0 for Upload and Data Entry - 18/12/2025 (v3.0.1)
---

#### PMHC MDS Update v3.0.1 ####

We are pleased to announce that PMHC MDS v3.0.1 was released on 
December 18, 2025.

Version 5.0 of the data specification is now available through Data Entry,
Upload and Data Extracts in the PMHC MDS.

Version 5.0 completes the rebranding of AMHC and Head to Health to MMHC and 
the rebranding of The Way Back to Universal Aftercare. Please refer to the 
Department of Health, Disability and Ageing Circular (DoHDA) at 
https://pmhc-mds.com/communications/#/2025/08/15/FOR-ACTION-Primary-Mental-Health-Care-Minimum-Data-Set-upcoming-changes-for-Medicare-Mental-Health-Centres-and-Universal-Aftercare/
and the Introduction section of the Version 5.0 specification at 
https://docs.pmhc-mds.com/projects/data-specification/en/v5.0/introduction.html 
for overviews of the new specification.

Existing data entered using the The Way Back Version 3 specification has 
been migrated to the Version 5.0 specification. You may wish to review your data.

##### Data Entry ##### {#data-entry-2025x12x18}

The following changes have been made in the Data Entry interface:

* The “2: Head to Health” Program Type has been renamed to 2: Head to Health 
  Clinic. This response is only to be used by remaining temporary Head to 
  Health Clinics in New South Wales and Victoria. For all other organisations,
  existing episodes using this response have been migrated to “8: MMHC”.
* The “3: AMHC” Program Type has been retired. All existing episodes using 
  this response have been migrated to “8: MMHC”.
* References to The Way Back have been changed to Universal Aftercare.
* A Veteran field has been added to Intake and Episode records.
* A Practitioner Reason for Override field as been added to the IAR-DS.
* A new system tag !uaooh has been introduced. Please refer to the DoHDA 
  circular above for information on how this tag can be used.

##### Upload ##### {#upload-2025x12x18}

Uploads now support the Version 5.0.0 data specification as documented at 
https://docs.pmhc-mds.com/projects/data-specification/en/v5.0/upload-specification.html. 

There will be a six month transition period during which Version 5.0.0, 
Version 4.1 and The Way Back Support Service Version 3 will all be accepted. 
Version 4.1 and The Way Back Support Service Version 3 will no longer be 
supported after 30 June 2026.

During the transition period, uploads in either the Version 4.1 or The Way 
Back Support Service Version 3 specification will be converted to Version 5.0 
during upload.

Please refer to https://docs.pmhc-mds.com/projects/data-specification/en/v5.0/upgrading-from-previous-versions.html 
for a description of the changes between the Version 4.1 or The Way Back 
Support Service Version 3 and the new Version 5.0 specification.

##### Reporting ##### {#reporting-2025x12x18}

The Data Source selector on the reporting interface has been updated to:

* Remove Head to Health
* Remove AMHC
* Add MMHC
* Remove The Way Back
* Add Universal Aftercare

The Wayback tab has been removed. The Wayback reports have been rebranded 
and moved to the standard reports tab as follows:

* W1: Wayback Quarterly Report Template rebrand to W1:  Universal Aftercare 
  Quarterly Report Template. The W1 can be accessed by selecting Universal 
  Aftercare as the only Data Source.
* The W2: High level summary of overall volumes by entity report has been
  retired. Counts of Universal Aftercare records can now be accessed via
  the existing A1 report.
* W3: Data Quality Report: Missing TWB Episode data rebranded to 
  A14: Data quality report - Missing UA Episode data
* W4: Data Quality Report: Missing TWB Needs Identification and Recommendation 
  Outs rebranded to A15: Data quality report - Missing UA Needs Identification 
  and Recommendation Outs

The following new reports have been implemented:

* A new A13: Data quality report — Universal Aftercare episodes with no linked 
  UA episode record
* M1: Client wait time
* M2: Activity Reports by Age group
* M3: Activity Reports by Gender
* M4: Activity Reports by Aboriginal and Torres Strait Islander status
* M5: IAR-DST - Recommended Level of Care
* M6: IAR-DST - Recommended Level of Care, where intake referred to MMHC
* M7: Monthly service activity
* M8: Episode of care characteristics
* M9: Activity Report: Service contact type
* M10: Activity Report: Service contact duration

Reports can now be filtered with the new !uaooh tag. Reports can no longer be 
filtered with the !wayback tag.

##### Known Issues #####

In the Version 5.0 format, Program Type 2: Head to Health Clinic is only 
accepted for remaining temporary Head to Health Clinics in New South Wales 
and Victoria. An error will be produced for any other organisation. Similarly 
Program Type 3: will always produce an error. While data suppliers must 
ensure the data stored in their systems can be used to meet the PMHC-MDS 
specification that does not place any specific constraints as to how or what 
data organisations store locally, it only places requirements around what 
format data is supplied to the PMHC MDS. Therefore, the Version 5.0 changes 
do not automatically mean that organisations will need to make adjustments 
to their existing source data.

However, uploads need to be internally consistent. This means that where 
service contact or collection occasion data is modified, the linked episode 
and client must also be included in the upload. Therefore, when uploading in 
Version 5 all existing episodes must use Program Types accepted by the Version 
5.0 specification. Logicly is aware that not being able to continue to submit 
values 2: Head to Health and 3: AMHC for existing episodes may cause issues 
for some organisations and is investigating improvements that would allow 
the submission of the original values.

The current W1: Universal Aftercare Quarterly Report Template is a simplified 
version of the previous Excel report. A CSV report that is similar to the 
Excel report will be released shortly.

The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
