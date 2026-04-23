---
title: FOR ACTION&#58; Data collection changes for the Adult Mental Health Centres
---

The below circular was sent to PHN CEOs on 25 November 2021. It was not sent to the PMHC MDS mailing list.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

**Primary Mental Health Care Minimum Data Set Circular 2021/02 – 25 November 2021**

#### Data collection changes for the Adult Mental Health Centres

This circular outlines Primary Mental Health Care Minimum Data Set (PMHC MDS) reporting requirements
for Primary Health Networks (PHNs) who have received funding to deliver services through the Adult
Mental Health Centres (AMHC). The Department of Health has been working with PHNs and Strategic Data
to develop and implement a new data model to support the functions of the AMHCs. This data model
(PMHC MDS version 4) will be available in March 2022. We aim to minimize data collection burden for
PHNs and service providers however, until version 4 is available, PHNs operating AMHCs should use the
following interim data collection method.

##### Scope of new interim data collection requirements {#scope-25x11x2021}

The Australian Government is providing funding to a number of PHNs who are responsible for the
operation of the AMHC trial sites. All existing PMHC MDS reporting requirements remain for AMHC
activity (refer to PHN Primary Mental Health Care Schedule).

The department is implementing a new tag in the PMHC MDS to capture activity associated with AMHCs
from December 2021, until the next PMHC MDS system update (version 4 data model) is available in
March 2022.

This change only applies to the following PHNs implementing AMHCs from December 2021:

* Western Victoria PHN
* Northern Territory PHN
* ACT PHN
* North Perth PHN
* Nepean Blue Mountains PHN
* Northern Queensland PHN
* Tasmania PHN

AMHCs will be using the Intake Assessment and Referral (IAR) and PHNs must capture the IAR data to
report to the Department. Data specifications and system requirements will be circulated to the AMHC
data working group and further advice will be provided to in the next circular.

##### New ‘Australian Government Adult Mental Health Centre’ tag (!amhc)

The department has introduced an ‘Australian Government Adult Mental Health Centre’ tag to the PMHC
MDS.

The PHN _must_ apply ‘Australian Government Adult Mental Health Centre’ tag (``!amhc``) to episodes of care
initiated for clients who have been referred to the AMHC hub through the IAR process and are receiving
services funded through the AMHC hubs contracts.

A tick box will be added to the PMHC MDS interface to simplify data entry (examples at [Attachment A](#attachmenta-25x11x2021)).

##### Further information {#further-information-25x11x2021}

If you have any questions, please contact:

* General PMHC MDS – Strategic Data: [support@pmhc-mds.com](support@pmhc-mds.com), 03 9340 9000
* Other queries? Department of Health, Mental Health Data Sharing and Governance Section at
[mentalhealthdata@health.gov.au](mentalhealthdata@health.gov.au)

#### Attachment A - How to apply the tag in the PMHC MDS data entry interface {#attachmenta-25x11x2021}

The AMHC tag is denoted `!amhc`.

There are two ways to apply the tag through the PMHC MDS data entry interface:

1. Manual data entry by typing the tag `!amhc` to the tag field

    * When entering data directly, episodes will need to be tagged with the string !amhc. The data
      entry system already allows for the tagging of records and therefore it is possible to
      implement this immediately by communicating the instructions to users.
    * Please note the free text nature of the tag system increases the opportunity for errors
      because it is easy to mistype a tag. This should be emphasised in communications with users.

2. Tick the box labelled ‘Australian Government Adult Mental Health Centre (!amhc)’.

    * This tick box automatically adds/removes the tag when ticked/unticked (see below).

The checkbox is on the Episode edit screen:

* Ticking it will add the `!amhc` tag to the tag field
* Typing the `!amhc` tag into the tag box will also tick the checkbox
* Unticking the `!amhc` checkbox will remove the `!amhc` tag
* Deleting the `!amhc` tag from the tag field will also untick the checkbox


<figure>
  <img src="/img/2021x11x25-figure-1.jpg" alt="A screenshot of the PMHC MDS Data Entry interface showing the Edit Details tab with the 'Australian Government Mental Health Centre (!amhc)' checkbox unticked" style="width: 700px; height: auto;">
  <figcaption>Figure 1: Checkbox unticked</figcaption>
</figure>


<figure>
  <img src="/img/2021x11x25-figure-2.jpg" alt="A screenshot of the PMHC MDS Data Entry interface showing the Edit Details tab with the 'Australian Government Mental Health Centre (!amhc)' checkbox ticked" style="width: 700px; height: auto;">
  <figcaption>Figure 2: Checkbox ticked</figcaption>
</figure>

##### Considerations for applying the tag in data uploads {#considerations-25x11x2021}

Users of local third-party or in-house developed systems will need to address varying issues depending on
the capability of the system. When considering options please be aware the PMHC MDS specification does
not require that data is captured in the same manner as it is supplied during upload.

For example, an ideal solution could be to add an extensible multiple choice ‘Tags’ field to local episode
data entry screens. This could initially include an ‘Australian Government Adult Mental Health Centre’
option thereby providing the organisation control over the possible tags that can be captured. By ensuring
that additional options were easily added in the future such a field would support future special access
programs without significant changes, as well as other purposes local or as requested by the Department.

An alternative approach, requiring less development, would be to extend an existing local field at the
episode level with an ‘Australian Government Adult Mental Health Centre’ option. This gives the
organisation control over the values that may be selected.

In both of the above examples, development work would also be required in the data extraction process
used to produce PMHC MDS compliant upload files. An endorsement of ‘Australian Government Adult
Mental Health Centre’ via either method would be converted to the tag !amhc on the extracted episode
records where appropriate.

An alternative but not preferred option is that episode records could be uploaded and then subsequently
manually tagged via the data entry interface. This would require significant manual processes and double
handling but it is a use case supported by the PMHC MDS.

If you have queries about managing data upload processes please contact the PMHC MDS
helpdesk at [support@pmhc-mds.com](support@pmhc-mds.com) or 03 9340 9020.
