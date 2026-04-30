---
title: FOR ACTION&#58; New MMHC system tags in the PMHC MDS
---

The below circular was sent to PHN CEOs on Thursday 30 April 2026.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

Dear PHN CEOs,

This circular provides Primary Health Networks (PHNs) and service providers 
with information on forthcoming updates to the Primary Mental Health Care 
Minimum Data Set (PMHC MDS) and associated Base Data Specification.

To support the information in this circular, PHNs are asked to:

* Ensure relevant staff receive and review the information provided in this 
  circular regarding the new PMHC MDS system tags.
* Ensure relevant staff and service providers are aware of the upcoming release 
  and are subscribed to receive communications from Logicly's PMHC MDS support 
  service if they don't already have a login to the PMHC MDS. If you would 
  like to be added to the mailing list, please email 
  [support@pmhc-mds.com](mailto:support@pmhc-mds.com).
* Ensure these tags are applied in accordance with the guidance provided in this circular.

Please refer to the attached document for additional detail.

For any queries please contact [PMHC.MDS@aihw.gov.au](mailto:PMHC.MDS@aihw.gov.au).

Kind regards,

Mental Health Data


**PHN CEO Circular**

#### New MMHC system tags in the PMHC MDS

##### Overview {#overview-2026x04x30}

This circular provides Primary Health Networks (PHNs) and service providers with information 
on forthcoming updates to the Primary Mental Health Care Minimum Data Set (PMHC MDS) and 
associated Base Data Specification. 

Two new system tags will be introduced to enable Medicare Mental Health Centres (MMHC) 
to capture information on referrals to the Medicare Mental Health Centres Centralised 
Tele-psychiatry and Tele-psychology Service (Centralised Service) in the PMHC MDS. 
The Centralised Service is being delivered by Rural Health Connect (RHC). The two tags are:

*	`!rhcpsychology`
*	`!rhcpsychiatry`

These tags will be added at the Episode level and are only to be used by MMHCs. Therefore, 
a validation rule will be enforced that requires a Program Type of `8: MMHC`. 
The Base Data Specification will be updated to Version 5.0.3 to accomodate these validations.

These updates to the PMHC MDS are designed to support monitoring and evaluation of these 
services, and will be accompanied by updated technical documentation and guidance.

To support the information in this circular, PHNs are asked to: 

*	Ensure relevant staff receive and review the information provided in this circular 
  regarding the new PMHC MDS system tags. 
*	Ensure relevant staff and service providers are aware of the upcoming release 
  and are subscribed to receive communications from Logicly’s PMHC MDS support service 
  if they don’t already have a login to the PMHC MDS. If you would like to be added to 
  the mailing list please email [support@pmhc-mds.com](mailto:support@pmhc-mds.com).
*	Ensure these tags are applied in accordance with the guidance provided in this circular. 

For any questions regarding this information please contact [PMHC.MDS@aihw.gov.au](mailto:PMHC.MDS@aihw.gov.au). 

##### Background {#background-2026x04x30}

RHC have established and are operating the Centralised Service for MMHCs. 
The Centralised Service is a pool of clinical psychologists and psychiatrists 
available to support the clinical capacity of Medicare Mental Health Centres 
as part of a multidisciplinary team. The Centralised Service is intended to 
address inequity by increasing access to free psychiatry and psychology services 
for consumers of Medicare Mental Health Centres.

MMHCs that refer clients to the Centralised Service for support will be 
able to capture this information using the new system tags.

Reports on volumes of RHC referrals will be provided to the Minister 
for Health. Standard reports in the PMHC MDS will include options to 
filter by these tags to allow PHNs and the department to
monitor these referrals.


##### Action required {#action-required-2026x04x30}

Logicly will provide information about the release via the PMHC MDS mailing 
list. If you would like to be added to the mailing list, please email 
[support@pmhc-mds.com](mailto:support@pmhc-mds.com).

When the new system tags are made operational, MMHCs should begin recording the 
appropriate system tag on the client’s episode of care. Both new and existing 
clients (i.e. clients with an open episode) are in scope of the reporting changes.

Of particular note, multiple tags can be added to a record by separating them 
with commas. Leading and trailing spaces will be stripped. 

For detailed instructions on how to apply the new system tags, see Appendix A. 
For technical support, please contact Logicly at [support@pmhc-mds.com](mailto:support@pmhc-md.com).

#### Attachment A {#attachmenta-2026x04x30}

##### How to apply the tag in the PMHC MDS data entry interface {#data-entry-2026x04x30}

The Centralised Service tags are available for use on an episode record and are denoted 
`!rhcpsychology` and `!rhcpsychiatry`.

There are two ways to apply the tag through the PMHC MDS data entry interface:

1.	Manual data entry by typing the appropriate tag to the Episode tag field.

    * When entering data directly, episodes will need to be tagged with the string 
      `!rhcpsychology` and/or `!rhcpsychiatry` (as appropriate). The data entry 
      system already allows for the tagging of records and therefore it is possible 
      to implement this as soon as Version 5.0.3 is released by communicating 
      the instructions to users.

    * The PMHC MDS has been updated to only accept the system tags described at 
      [System Tags](https://docs.pmhc-mds.com/data-specifications.html#supplementary-data-documentation). 
      Non system tags (i.e. those without a ! at the front) remain free text.

2.	Tick the box labelled ‘Rural Health Connect referral – psychology 
    (`!rhcpsychology`)’ and/or ‘Rural Health Connect referral – psychiatry (`!rhcpsychiatry`)’.

    * These tick boxes will automatically add/remove the tag when ticked/unticked.

The checkbox is on the Episode add and edit screen:

* Ticking the checkbox will add the `!rhcpsychology` and/or `!rhcpsychiatry` tags to the tag field
* Typing the `!rhcpsychology` and/or `!rhcpsychiatry` tag into the tag box will also tick the checkbox
* Unticking the `!rhcpsychology` and/or `!rhcpsychiatry` checkbox will remove the tag
* Deleting the `!rhcpsychology` and/or `!rhcpsychiatry` tag from the tag field will also untick the checkbox.

##### Considerations for applying the tag in data uploads {#considerations-2026x04x30}

Users of local third-party or in-house developed systems will need to address varying issues depending on 
the capability of the system. When considering options please be aware the PMHC MDS specification does 
not require that data is captured in the same manner as it is supplied during upload. 

For example, an ideal solution could be to add an extensible multiple choice “Tags” field to local episode 
data entry screens. This could initially include ‘Rural Health Connect referral – psychology 
(`!rhcpsychology`)’ and ‘Rural Health Connect referral – psychiatry (`!rhcpsychiatry`)’ options thereby 
providing the organisation control over the possible tags that can be captured. By ensuring that 
additional options were easily added in the future such a field would support future special access 
programs without significant changes, as well as other purposes local or as requested by the Department.

An alternative approach, requiring less development, would be to extend an existing local field at 
the episode level with ‘Rural Health Connect referral – psychology (`!rhcpsychology`)’ and ‘Rural 
Health Connect referral – psychiatry (`!rhcpsychiatry`)’ options. This gives the organisation control 
over the values that may be selected.

In both of the above examples, development work would also be required in the data extraction 
process used to produce PMHC MDS compliant upload files. An endorsement of with ‘Rural Health 
Connect referral – psychology (`!rhcpsychology`)’ and/or ‘Rural Health Connect referral – 
psychiatry (`!rhcpsychiatry`)’ options via either method would be converted to the corresponding 
tag on the extracted episode records where appropriate.

An alternative but not preferred option is that episode records could be uploaded and then 
subsequently manually tagged via the data entry interface. This would require significant manual 
processes and double handling but it is a use case supported by the PMHC MDS.

If you have queries about managing data upload processes please contact the PMHC MDS helpdesk at 
[support@pmhc-mds.com](mailto:support@pmhc-mds.com) or 03 9340 9000.