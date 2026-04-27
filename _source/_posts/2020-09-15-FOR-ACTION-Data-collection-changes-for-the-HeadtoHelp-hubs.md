---
title: FOR ACTION&#58; Data collection changes for the HeadtoHelp hubs
---

The below circular was sent to PHN CEOs in September 2020. It was not sent to the PMHC MDS mailing list.

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

**Primary Mental Health Care Minimum Data Set Circular 2020/15 – September 2020**

#### Data collection changes for the HeadtoHelp hubs

This circular outlines Primary Mental Health Care Minimum Data Set (PMHC MDS) reporting requirements
for Primary Health Networks (PHNs) who received funding to deliver services for the HeadtoHelp hubs in
Victoria. The Department recognises the important and challenging work of PHNs and service providers
during the COVID-19 pandemic. We aim to minimise data collection burden for PHNs and service
providers. 

##### Scope of new data collection requirements {#scope-09x2020}

The Australian Government is providing funding to Victorian PHNs to deliver services through HeadtoHelp
hubs as part of its response to the mental health impact of COVID-19.

The department is implementing a new tag in the PMHC MDS to capture activity associated with the
HeadtoHelp hubs.

This change only applies to PHNs in Victoria.

The department will introduce further data collection requirements for HeadtoHelp activity in the coming
weeks and is consulting with PHNs. The Department will advise Victorian PHNs of new data collection
requirements in future circular/s.

##### New ‘Australian Government HeadtoHelp hubs’ tag (!covid19)

The Department has introduced an ‘Australian Government HeadtoHelp hubs’ tag to the PMHC MDS.

All clients who either call the 1800 HeadtoHelp number or present in person at a HeadtoHelp hub and are
identified as HeadtoHelp hub clients will be assessed through the ‘HeadtoHelp Victorian Mental Health
Hubs Intake Assessment and Referral Model of Care’ as outlined in the contract. Clients will be referred to
the most suitable service, which may be at a HeadtoHelp hub.

The PHN *must* apply ‘Australian Government HeadtoHelp hubs’ tag (!covid19) to episodes of care initiated
for clients who have been referred to the hub through the IAR process and are receiving services funded
through the HeadtoHelp hubs contracts.

A tick box will be added to the PMHC MDS interface to simplify data entry (examples at [Attachment A](#attachmenta-09x2020)).

##### Further information {#further-information-09x2020}

If you have any questions about the reporting requirements, please contact Sarah Hinde,
Director, Mental Health Data on 02 6289 6817 or at [mentalhealthdata@health.gov.au](mailto:mentalhealthdata@health.gov.au)

More information about the HeadtoHelp hubs is available at [https://headtohelp.org.au/](https://headtohelp.org.au/) and
[https://www.health.gov.au/ministers/the-hon-greg-hunt-mp/media/government-launches-new-covid-19-mental-health-clinics-in-victoria](https://www.health.gov.au/ministers/the-hon-greg-hunt-mp/media/government-launches-new-covid-19-mental-health-clinics-in-victoria)

#### Attachment A - How to apply the tag in the PMHC MDS data entry interface {#attachmenta-09x2020}

The HeadtoHelp hubs tag is denoted `!covid19`.

There are two ways to apply the tag through the PMHC MDS data entry interface:

1. Manual data entry by typing the tag `!covid19` to the tag field

    * When entering data directly, episodes will need to be tagged with the string `!covid19`. The
      data entry system already allows for the tagging of records and therefore it is possible to
      implement this immediately by communicating the instructions to users.
    * Please note the free text nature of the tag system increases the opportunity for errors
      because it is easy to mistype a tag. This should be emphasised in communications with users.

2. Tick the box labelled ‘Australian Government HeadtoHelp hubs (!covid19)’.

    * This tick box automatically adds/removes the tag when ticked/unticked (see below).

The checkbox is on the Episode edit screen:

* Ticking it will add the `!covid19` tag to the tag field
* Typing the `!covid19` tag into the tag box will also tick the checkbox
* Unticking the `!covid19` checkbox will remove the `!covid19` tag
* Deleting the `!covid19` tag from the tag field will also untick the checkbox

<figure>
  <img src="/img/2020x09-figure-1.jpg" alt="A screenshot of the PMHC MDS Data Entry interface showing the Edit Details tab with the 'Australian Government HeadtoHelp hubs (!covid19)' checkbox unticked" style="width: 700px; height: auto;">
  <figcaption>Figure 1: Checkbox unticked</figcaption>
</figure>


<figure>
  <img src="/img/2020x01-figure-2.jpg" alt="A screenshot of the PMHC MDS Data Entry interface showing the Edit Details tab with the 'Australian Government HeadtoHelp hubs (!covid19)' checkbox ticked" style="width: 700px; height: auto;">
  <figcaption>Figure 2: Checkbox ticked</figcaption>
</figure>

##### Considerations for applying the tag in data uploads {#considerations-09x2020}

Users of local third-party or in-house developed systems will need to address varying issues depending on
the capability of the system. When considering options please be aware the PMHC MDS specification does
not require that data is captured in the same manner as it is supplied during upload.

For example, an ideal solution could be to add an extensible multiple choice ‘Tags’ field to local episode
data entry screens. This could initially include an ‘Australian Government HeadtoHelp hubs’ option
thereby providing the organisation control over the possible tags that can be captured. By ensuring that
additional options were easily added in the future such a field would support future special access
programs without significant changes, as well as other purposes local or as requested by the Department.

An alternative approach, requiring less development, would be to extend an existing local field at the
episode level with an ‘Australian Government HeadtoHelp hubs’ option. This gives the organisation
control over the values that may be selected.

In both of the above examples, development work would also be required in the data extraction process
used to produce PMHC MDS compliant upload files. An endorsement of ‘Australian Government
HeadtoHelp hubs’ via either method would be converted to the tag !covid19 on the extracted episode
records where appropriate.

An alternative but not preferred option is that episode records could be uploaded and then subsequently
manually tagged via the data entry interface. This would require significant manual processes and double
handling but it is a use case supported by the PMHC MDS.

If you have queries about managing data upload processes please contact the PMHC MDS
helpdesk at [support@pmhc-mds.com](mailto:support@pmhc-mds.com) or 03 9340 9020.
