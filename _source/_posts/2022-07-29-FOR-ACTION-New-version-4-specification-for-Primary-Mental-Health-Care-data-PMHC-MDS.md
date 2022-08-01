---
title: FOR ACTION&#58; New version 4 specification for Primary Mental Health Care data (PMHC MDS)
---

The below circular was sent to PHN CEOs on Friday 29 July 2022.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

Dear PHN CEOs

The Department is advising of the upcoming release of the version 4 specification for the Primary Mental Health Care Minimum Data Set (PMHC-MDS) during the week of 1 August 2022. PHNs are required to upgrade to this version within six months of the release.

The Department has prepared a document that provides overall guidance, a summary of changes, and steps to upgrade to the version 4 specification (see attached).

Please direct any queries to Logicly at [support@pmhc-mds.com](mailto:support@pmhc-mds.com).

**PHN CEO Circular 2022/03– July 2022**

#### Upcoming release of new PMHC MDS specification

##### <a id="oversview-2022x07x29" />Overview

This circular provides guidance about an upcoming release of the Version 4 (v4) Primary Mental Health Care Minimum Data Set (PMHC-MDS) specification. The information outlined in this circular applies to all Primary Health Networks (PHNs).  

To support this change, PHNs are asked to:

* Ensure relevant staff and provider organisations are aware of the upcoming v4 release and are subscribed to receive communications from Logicly’s PMHC MDS support service if they don’t already have a login to the PMHC MDS.
* Prepare to transition data collection and upload arrangements in line with the new v4 specification within six months of the release during week of 1 August 2022.

PHNs will be notified of the system release through a system release communication via Logicly. The Department and Logicly have conducted extensive preparation to facilitate the v4 release in consultation with PMHC MDS Data Reference Group. We have automated as much of the process as possible and this circular outlines actions we require of PHNs.

Information materials are available from Logicly’s PMHC MDS support service at: [https://pmhc-mds.com/communications](https://pmhc-mds.com/communications){:target="_blank"}. For technical support, please contact Logicly at [support@pmhc-mds.com](mailto:support@pmhc-mds.com)


##### Key changes

In November 2021, the Department commenced consultation with PHNs through the PMHC MDS Data Reference Group to develop and refine a new PMHC MDS specification (v4) that improves the data collection for PHN commissioned mental health services. Key changes are outlined in [Attachment A](#attachmenta-2022x07x29){:target="_blank"}.

A summary of the changes and the steps necessary for PHNs to upgrade to v4 are available at [https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html](https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html){:target="_blank"}.

##### Steps to transition and upgrade

The v4 release will be in the week of 1 August 2022. To enable PHNs and provider organisations to successfully transition from current versions and extensions to v4, the transition of data collection and uploads must commence within six months of the release date in line with the new v4 specification. This may include upgrading Client Information Management Systems to collect new data such as program type and funding source. To effectively manage transition, data uploaded in existing versions and extensions will be instantly mapped to v4 when uploaded.

Additional information on steps required to upgrade from existing versions to v4 is outlined in [Attachment B](#attachmentb-2022x07x29){:target="_blank"}.

The Department is committed to ensuring the PMHC MDS supports all PHNs to collect and report their data consistently.  

<a name="attachmenta-2022x07x29"></a>

##### Attachment A – Key changes in the PMHC MDS v4 specification

This section describes key changes in the v4 specification. Please note it is not an exhaustive list of all changes. A list of definitions for the v4 data model and specification is available at [https://docs.pmhc-mds.com/projects/data-specification/en/v4/data-model-and-specifications.html#definitions](https://docs.pmhc-mds.com/projects/data-specification/en/v4/data-model-and-specifications.html#definitions){:target="_blank"}.

###### Intake record

The v4 specification introduces the concept of an intake that is modelled on the HeadtoHelp v3 specification. The intake record allows consistent collection and reporting on Intake and Initial Assessment and Referral (IAR) activity for all PHNs.

The Referred to Organisation Path field has been introduced to capture which PHN provider organisation an intake team referred a client to.  Some intake services may refer a client to a PHN service across multiple PHN regions. To support collection of data for this field, PHNs should consider that their intake service providers may require access to a list of relevant Provider organisations’ Organisation Keys for PHN providers they may refer to.

The intake record also includes Referral Date and Suicide Risk Flag fields in addition to existing fields in Episode record.  The Department recognises this may have implications for the calculation of the Suicide Risk follow up indicator in future. Currently, the calculation and data assessed for that indicator will not change for 2021-22 and 2022-23 performance reporting.

###### Funding source

The v4 specification introduces a Funding Source field to be collected for each service contact. The Department is moving towards enabling reporting by funding stream. The introduction of this field is also a first step toward development of an efficiency indicator to support the development of key performance indicators for governments under the National Mental Health and Suicide Prevention Agreement.

For the first 12 months the Department will analyse the new funding source data only for the purpose of understanding the application to, and relationship with, other data elements in the model, and possible reporting outcomes.

The Department encourages PHNs to communicate appropriate and accurate use of the Funding Source field to service providers through their commissioning arrangements.

###### Program type

The introduction of the Program Type field allows PHNs and provider organisations to record the type of PHN mental health program that an episode is wholly or primarily delivered through. Combining this information with Funding Source supports improved visibility of integrated commissioning approaches to PHN mental health services.

This is the hierarchy of variables that Logicly will use to map existing records to a Program Type category:

* Any episodes with `!covid19` tag will be mapped to “Head to Health”
* Any unmapped episodes with `!amhc` tag will be mapped to “AMHC”
* Any unmapped episodes with `!br20` tag will be mapped to “Bushfire Recovery”
* Any unmapped episodes with Principal Focus of Treatment “Psychosocial” will be mapped to “Psychosocial”
* Any remaining unmapped episodes will be mapped to “Flexible Funding Pool”

###### Practitioner data

The v4 specification will allow PHNs and provider organisations to record multiple practitioners for a service contact. To support this, we have introduced an additional Service Contact Practitioner record.

###### Program-specific considerations

**Head to Health**

From 1 July 2022, all PHNs are required to collect and report intake data, including Intake Assessment and Referral (IAR) score, for the national Head to Health Phone Service. To support data collection requirements under this program, PHNs are encouraged to transition to the v4 specification as soon as possible after the release date.  Any PHNs using interim intake data collection and reporting arrangements should maintain these until they upgrade to v4.

**National Psychosocial Support Services**

The Continuity of Support (CoS) field will no longer be collected in the v4 specification. This follows the conclusion of the CoS funding and services on 30 June 2022.

To date, psychosocial program data has been identified using the Principal Focus of Treatment Plan (PFOT) “Psychosocial” category. This PFOT category will no longer be collected in the v4 specification. Instead, PHNs and provider organisations can indicate an episode is delivered through the National Psychosocial Support Service scheme through the Program Type field.  

Psychosocial will still be a valid PFOT under existing versions of the PMHC MDS.

Through planned migration, any historical or new records that utilise the Psychosocial PFOT will be mapped to this Program Type field under the v4 specification.  

**The Way Back**

Impacts to data upload requirements for The Way Back program to be compatible with v4 are being resolved between the Department and Logicly. For the time being, the existing upload arrangements can continue. The Department will provide further advice to PHNs regarding the use of v4 with The Way Back extension.


<a name="attachmentb-2022x07x29"></a>

##### Attachment B – Steps to upgrade from existing versions to v4

PMHC-MDS data entry interface will be updated to reflect the v4 specification and the HeadtoHelp components of the data entry interface will no longer be available.

For a six-month period from the v4 release date, the PMHC-MDS will still be able to accept the following upload formats:

* v2
* headspace v2 (only to be used by headspace National Office)
* HeadtoHelp v3 extension
* The Way Back Support Service v3 extension

For technical support, please contact Logicly at [support@pmhc-mds.com](mailto:support@pmhc-mds.com)

###### Version 2

To upgrade from v2 uploads to v4 uploads, PHNs must ensure that measure keys supplied in v4 uploads match measure keys already stored in uploads submitted PMHC MDS. For an explanation of the different options available please refer to steps required to upgrade from v2 to v4 uploads, available at [https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html#steps-required-to-upgrade](https://docs.pmhc-mds.com/projects/data-specification/en/v4/changes-from-v2.html#steps-required-to-upgrade){:target="_blank"}.

###### Migration of data from legacy specifications

To effectively manage transition, data uploaded in existing versions and extensions will be instantly mapped to v4 when uploaded. For historical data, Logicly will conduct a point-in-time migration of stored v2 or v3 data to the new v4 format while rolling out the v4 release.
