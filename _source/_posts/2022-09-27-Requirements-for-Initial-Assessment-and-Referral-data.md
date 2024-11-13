---
title: Requirements for Initial Assessment and Referral data
---

The below circular was sent to PHN CEOs on Tuesday 27 September 2022.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

**PHN CEO Circular 2022/06 – Sep 2022**

#### Requirements for Initial Assessment and Referral data

##### Overview {#overview-2022x09x27}

This circular provides a clarification on Primary Mental Health Care Minimum Data Set (PMHC-MDS) Version 4 (v4) documentation released to PHNs on 15 August 2022. The information outlined in this circular applies to all Primary Health Networks (PHNs).  

To support this update, PHNs are asked to:

* Ensure relevant staff review the updated information on collection of intake and IAR data outlined in Attachment A

##### Reporting of Intake Assessment and Referral data

The v4 specification requires PHNs to record a new Intake record and Initial Assessment and Referral (IAR) record where an episode has undertaken an intake process.

The collection of Intake and IAR data is a requirement for Head to Health programs. This includes phone service, centres, satellites, and pop-up clinics. Intake and IAR data should be collected for all Head to Health episodes that undertake an intake process. The v4 specification streamlines the collection process and makes it possible to collect and report this information in a nationally consistent manner.
PHNs may choose to collect Intake and IAR data for other non-Head to Health programs using the v4 specification, however reporting of this data remains optional subject to further guidance from the department.

PHNs will be notified of the updates to the PMHC-MDS v4 documentation through a system release communication via Logicly. The PMHC-MDS v4 documentation site will be updated at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}. The changes are provided at Attachment A of this circular.

If you have any queries about the updated information, please contact the department via [MentalHealthData@health.gov.au](mailto:MentalHealthData@health.gov.au)

For technical support, please contact Logicly at [support@pmhc-mds.com](mailto:support@pmhc-mds.com)

 
##### Attachment A – Updated descriptions in PMHC-MDS v4 specification

This document outlines the updates to the PMHC-MDS v4 documentation that will be available at [https://docs.pmhc-mds.com/projects/data-specification/en/v4/](https://docs.pmhc-mds.com/projects/data-specification/en/v4/){:target="_blank"}. Changes are identified in red text.

PHNs will be notified of the updates to the PMHC-MDS v4 documentation through a system release communication via Logicly.

**1. Introduction**

**1.1.1. Intake Context**

Where an organisation is only providing intake services and not providing any treatment services, they can use the following data model to submit data to the PMHC-MDS:

[image]

In the Intake context the following records will need to be provided:

* Client
* Intake
* IAR-DST

Episode and Service contact activity is not submitted in this context.

<span style="color:#ed0000">The collection of Intake and IAR data may not be required for all programs. Please see 5.3.5 Intake.</span>

**1.2. New Records and Fields in Version 4**

**1.2.1. Intake**

<span style="color:#ed0000">The model now records a new Intake record where an episode has undertaken an Intake process. The collection of Intake and IAR data may not be required for all programs. Please see 5.3.5 Intake.</span>

The Intake table records information about the intake.

Organisation Path and Intake Key are the two fields required to link the Intake record at the intake provider organisation to the Episode record at the treatment organisation.

The values of these fields should be passed along by the intake organisation to the treatment organisation where the treatment organisation will use them to fill in Intake Organisation Path and Intake Key. This will then link the Intake record at the intake organisation with the Episode record at the treatment organisation.

**1.2.2. IAR-DST Measure**

<span style="color:#ed0000">The model now captures</span> the domains and the recommended level of care pertinent to the IAR-DST that clients have completed for them as part of the intake process. A new IAR-DST record will be created for each intake process.

Consistent with the existing measures in the MDS, the domain scores will be captured as well as the recommended level of care. The purpose of collecting both domain scores and recommended level of care is to:

* allow verification of IAR-DST scoring processes, thereby catching scoring implementation errors early should they arise, and
* provide a resource that can be used to better understand how the IAR-DST scoring algorithm performs in real world environments supporting ongoing improvement of the tool.

<span style="color:#ed0000">The collection of Intake and IAR data may not be required for all programs. Please see 5.3.5 Intake.</span>

**1.2.3. Episode and Intake Episode**

When the client is referred to a PMHC MDS reporting treatment service a new Episode record is created.
Where the client has been referred via an intake process, an additional Intake Episode record is also created.  

The Intake Episode table comprises a composite foreign key to link it back to an episode record on which all the episode information is recorded. This linkage is done via two fields:

1.	The identifier of the intake team (Intake Organisation Path)
2.	The episode identifier of the intake team (Intake Key)

The Episode record has been expanded with one new field - the organisation(s) to which the organisation refers the client (Organisation type referred to at Episode conclusion)

<span style="color:#ed0000">The collection of Intake and IAR data may not be required for all programs. Please see 5.3.5 Intake.</span>

**5.2 Key concepts**

**5.2.5. Intake**

For the purpose of the PMHC MDS, an Intake is defined as a point of contact between a client and a PHN-commissioned organisation where the client is assessed to determine the appropriate level of care and referred to a service provider to provide clinical care. An Intake may include the collection of an IAR-DST measure.

<span style="color:#ed0000">The collection of Intake and IAR data may not be required for all programs. Please see 5.3.5 Intake.</span>

**5.3 Record formats**

**5.3.5 Intake**

See Intake for definition of an intake.

<span style="color:#ed0000">The collection of Intake and IAR data is a requirement for Head to Health programs. This includes the Head to Health Phone Service, centres, satellites and Pop-Up clinics. PHNs may choose to collect Intake and IAR data for other non-Head to Health programs using the PMHC-MDS v4 specification, however reporting of this data remains optional subject to further guidance from the department.</span>

Intakes are managed by the provider organisations via upload.

**5.3.11. Measures**

**5.3.11.1. Measures at Intake**

Where an Intake is recorded, the PMHC MDS requires the use of the IAR-DST IAR-DST.

<span style="color:#ed0000">The collection of Intake and IAR data may not be required for all programs. Please see 5.3.5 Intake.</span>
