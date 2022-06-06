---
title: FOR ACTION&#58; Updates to Head to Health and Adult Mental Health Centre PMHC MDS requirements
---

The below circular was sent to PHN CEOs on Wednesday 1 June 2022.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

**PHN CEO Circular 2022/02 – June 2022**

#### Head to Health data in PMHC MDS

##### Overview

The actions outlined in this circular only apply to Primary Health Networks (PHNs) funded to deliver COVID-19 Head to Health services (mental health ‘pop-up clinics’) and/or Adult Mental Health Centre (AMHC) services.

This circular provides guidance about Primary Mental Health Care Minimum Data Set (PMHC-MDS) data reporting for COVID-19 Head to Health services and Adult Mental Health Centre (AMHC) services.  

The department requires PHNs to:

* Correct data quality issues recently identified in data collected through the PMHC-MDS Head to Health (HtH) extension. These issues will need to be addressed by 1st July 2022 to enable the transition to PMHC-MDS version 4 from 1 Aug 2022. The department has introduced a new data item to support affected PHNs to address the data quality issues.
* Adjust the requirement for coding Principal Focus of Treatment (PFOT) for COVID-19 Head to Health and AMHC services.

For technical support please contact Logicly via [support@pmhc-mds.com](mailto:support@pmhc-mds.com)

##### 1. Head to Health extension

The PMHC MDS-Head to Health (HtH) extension was developed to support PHN data collection of COVID-19 Head to Health ‘pop-up’ clinic activity in Victoria, New South Wales and the Australian Capital Territory as part of the Australian Government’s response to the mental health impact of COVID-19. Currently, 14 PHNs are using the HtH extension.

PHNs are currently expected to link data for clients that proceed from intake to receiving PHN mental health services.

Action by the 14 participating PHNs is requested to be completed by 1st July 2022.  The department recognises this is an unplanned and time sensitive exercise that requires unexpected resourcing from the 14 PHNs and their service providers collecting HtH data.

Technical instructions for participating PHNs are outlined in [Attachment A](#attachmenta){:target="_blank"}. The department will work closely with Logicly and PHNs to support and guide this process.

##### 2. Principal focus of treatment plan

Previous guidance required PFOT to be coded as ‘other’ for COVID Head to Health services. The department has changed this rule and now requires PFOT to be coded according to the same definitions used for all other PHN commissioned mental health services.

Action by PHNs is requested to be completed by 31 August 2022.  Technical instructions for participating PHNs are outlined in [Attachment B](#attachmentb){:target="_blank"}.

<a name="attachmenta"></a>

##### Attachment A – Technical guidance: Head to Health PMHC MDS extension

###### Current issues

In preparing for the migration, data quality issues with the HtH extension have been identified that make the planned data migration unable to be completed. Interim changes are proposed to reduce the risk of misrepresenting Intake activity and Episode activity in PMHC-MDS data once it is migrated to v4. This also reduces the risk of activity counts being inaccurate and unreliable for reporting purposes. Going forward, the v4 specification resolves this as it adds an explicit Intake record.

To effectively manage transition from current PMHC MDS specifications to v4, data uploaded in the HtH extension will be instantly mapped to v4. The department anticipates the release of v4 at the end of July 2022.  PHNs will receive additional information about v4 in June.

The HtH extension uses episodes in two contexts:

* Intake context – includes intake information, Initial Assessment and Referral Decision Support Tool (IAR-DST) measure, but no other outcome measures or service contacts.
* Hub context – includes full episode details, recorded service contacts, outcome measures, but no IAR-DST.

###### Overview of proposed solution

A solution to resolve current data quality issues with the HtH extension includes:

* introducing a ‘context’ field in the HtH extension specification that will be released 1 June 2022. The HtH hubs data specification at [https://docs.pmhc-mds.com/projects/data-specification-HtH/en/v3/](https://docs.pmhc-mds.com/projects/data-specification-HtH/en/v3/){:target="_blank"} has been updated to reflect the new context field. The specification for the context field is defined at [https://docs.pmhc-mds.com/projects/data-specification-HtH/en/v3/data-specification/data-model-and-specifications.html#dfn-context](https://docs.pmhc-mds.com/projects/data-specification-HtH/en/v3/data-specification/data-model-and-specifications.html#dfn-context){:target="_blank"}.
* retrospective data cleaning and population of the new ‘context’ field by the 14 participating PHNs and their providers currently collecting HtH extension data by 1st July 2022.

###### Completion of new context field for all episodes

The department requires that the below steps are actioned by each of the 14 participating PHNs by no later than by 1st July 2022.

1. Logicly will release the context field to production on 3 June 2022 and set the value of the context field for existing episodes as per the rules outlined below.
2. Between 3 June 2022 and 1 July 2022, all organisations owning data utilising the Head to Health (HtH) extension are required to review all of their data and ensure that the context field is correctly set unless the data is otherwise able to be rectified and clearly identified as Intake context or Episode context without use of the new Context field.
3. The context field will be used to migrate existing episodes that represent intakes into actual v4 Intake records. It is therefore important that this information is correct.
4. When performing the v4 migration any episodes where the context is still set to ‘Unknown’ will remain as episodes and their context will still be set to ‘Unknown’. If any of these records are later determined to be Intake records they will need to be deleted and re-added as an Intake.
5. For any organisations wishing to review their data prior to 1 June 2022, please contact [support@pmhc-mds.com](mailto:support@pmhc-mds.com) to request a breakdown of episode keys and the context to which they will be mapped.
6. Please contact [support@pmhc-mds.com](mailto:support@pmhc-mds.com) with any other questions or requests for assistance.

###### Rules for classifying Intake and Hub Episodes

The context field on existing records will be set according to the following rules. The order of these rules is important. Note that all elements in a set of dot points must apply except where they are explicitly separated by an “or”.

A HtH episode will be mapped to an Intake context when:

* It has a linked HtH Episode
* HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key are both null
* There are no Service Contacts linked to the episode
* There is an IAR-DST linked to the episode
* There are no other measures linked to the episode

A HtH episode will be mapped to Hub context with linkage to an existing HtH episode with Intake context when:

* There are Service Contacts linked to the episode
* There is no IAR-DST linked to the episode
* HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key both contain valid values to records that exist in the PMHC MDS and does not link to itself

A HtH episode will be mapped to a Hub context without linkage to an existing HtH episode with Intake context when:

* There are Service Contacts linked to the episode
* There is no IAR-DST linked to the episode
* One or both of HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key contain valid values

Or

* There are no Service Contacts linked to the episode
* There is no IAR-DST linked to the episode
* One or both of HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key contain valid values
* There are non IAR-DST measures linked to the episode

Or

* There are Service Contacts linked to the episode
* HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key are both null
* There is no IAR-DST linked to the episode


A HtH episode will be split and mapped to both a HtH Intake context episode and a linked HtH Hub context episode when:

* There are Service Contacts linked to the episode
* There is an IAR-DST linked to the episode
* HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key both contain valid values
* HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key attempts to link to records that do not exist in the PMHC MDS or links to itself

A HtH episode will be mapped to Hub context with linkage to an existing HtH episode with Intake context when:

* There are no Service Contacts linked to the episode
* There is no IAR-DST linked to the episode
* HtH Episode - Intake Organisation Path and HtH Episode - Intake Episode Key both contain valid values to records that exist in the PMHC MDS and does not link to itself

Otherwise, the context of the HtH episode will be set to ‘Unknown’.

Following this:

Organisations that are clearly operating as “Hub only” (all HtH episodes map to Hub or Unknown using the above rules) will have the context of all their HtH episodes set to Hub.

Organisations that are clearly operating as “Intake only” (all HtH episodes map to Intake or Unknown using the above rules) will have the context of all their HtH episodes set to Intake.

<a name="attachmentb"></a>

##### Attachment B – Technical guidance: Principal focus of treatment

###### Current issues

Previous definitions on the PMHC-MDS website advised that HtH pop up episodes should use the principal focus of treatment plan (PFOT) ‘Other’.

###### Overview of proposed solution

To manage data entry at intake (where PFOT may not yet be determined), the department has updated the definition so that:

* Other’ should only be selected for intake episodes and
PFOT to be coded according to the same definitions used for all other PHN commissioned mental health services.

##### Actions required by PHNs

Where PHNs have used the ‘Other’ PFOT for HtH pop up or Adult Mental Health Centre (AMHC) episodes, the department requests PHNs amend all historical HtH or AMHC program data to reflect the most appropriate PFOT (e.g. Psychological therapies or low intensity etc) by 31 August 2022.
