---
title: Update to the PMHC MDS and Data Specifications - 26/9/2017
---

#### PMHC MDS Update v0.16.1 ####

We are pleased to announce that PMHC MDS Update v0.16.1 was released on
September 26, 2017.

The following features have been implemented:

* Redesigned the User Roles tab.
* Reports can now be downloaded as CSV.

The following updates and bugfixes have been implemented in the data entry
interface:

* Fixed an issue where after saving a K10+ outcome measure items 11, 12 and 13
  were not saved.
* Fixed an issue where the Service Contact - Copayment field was not being
  properly validated.
* Fixed an issue where users were able to view users at organisations for which
  they did not have the User Management role.
* Fixed an issue where Service Contacts could be added after the Episode End Date.
* Fixed an issue where filtering on the Completion Status of an episode would
  could the drop down filter to disappear.
* Uploads already fail with an error if Service Contact - Participants is
  ‘1: Individual client’ and Client Participation Indicator is not ‘1: Yes’.
  This validation is now also enforced via the data entry interface.
* Fixed an issue where users with the Reporting role that are only associated
  with a single organisation couldn’t run reports.
* Fixed an issue where the View Episodes table was not being updated after an
  Episode had been edited.
* Fixed an issue when editing the Episode - Completion Status. Episode Open
  was being represented as a blank option. If you selected a value for
  Completion Status, the blank option would disappear. The blank option has
  been removed and Episode Open is explicitly given as an option.
* Fixed an issue where a PHN would not be listed in the Upload drop down
  unless at least one Provider Organisation had already been created for that PHN.
* Fixed an issue where inherited roles were not being indicated in the
  ‘Assigned Users’ tab.
* Fixed an issue where no warning was displayed if a postcode was longer than
  4 digits.

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/).

#### PMHC MDS Data Specifications Update v1.0.11 ####

We are also pleased to announce that PMHC MDS Data Specifications Update
v1.0.11 was released on September 25, 2017. The following updates have been
implemented:

* [Upload specification](https://docs.pmhc-mds.com/data-specification/upload-specification.html)

  * Added [Deleting records](https://docs.pmhc-mds.com/data-specification/upload-specification.html#deleting-records)

* [Data model and specifications](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html)

  * [Record formats](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#record-formats)

    * [Episode](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-data-elements)

      * Updated [Episode - Completion Status](
        https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-completion-status) to allow either 0 or blank to
        represent ‘Episode open’

    * [Service Contact](
      https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-data-elements)

      * Clarified that the upper bound for [Service Contact - Copayment](
        https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-copayment) is 999999.99        
      * Updated [Service Contact - Participants](
        https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-participants) and [Service Contact - Client Participation Indicator](
          https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-client-participation-indicator)
        to clarify how [Service Contact - Participants](
          https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-participants)
        and [Service Contact - Client Participation Indicator](
          https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-client-participation-indicator) interact

* [Validation Rules](https://docs.pmhc-mds.com/data-specification/validation-rules.html)

  * Updated [Validation Rules](https://docs.pmhc-mds.com/data-specification/validation-rules.html) to
    clarify how [Service Contact - Participants](
      https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-participants)
    and [Service Contact - Client Participation Indicator](
      https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-client-participation-indicator) interact

#### Deletion of records in the PMHC MDS ####

Please note that deletion of records is being planned for a future release.
Deletion will be possible via both the data entry interface and uploads.
In order to allow organisations and third party developers to plan for
allowing deletion in uploads we have released the planned specification.
It is available at [Deleting records](
https://docs.pmhc-mds.com/data-specification/upload-specification.html#deleting-records). File format changes to accommodate deletion are backwards compatible with the current format.
