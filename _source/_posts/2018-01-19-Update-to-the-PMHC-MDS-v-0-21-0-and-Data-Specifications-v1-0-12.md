---
title: Update to the PMHC MDS and Data Specifications - 19/1/2018
---

#### PMHC MDS Update v0.21 ####

We are pleased to announce the first PMHC MDS update for 2018. PMHC MDS Update
v0.21 was released on January 19, 2018.

The following features have been implemented across all interfaces:
* After a user has logged in, smaller headers and footers will be shown.
* Minimum dates have been applied to the following fields: Client - Date of
  Birth, Episode - End Date and Referral Date, Service Contact - Service
  Contact Date, Collection Occasion - Measure Date.

The following features have been implemented in the Data Entry interface:
* The Referral Date has been added to the Episode Summary information.

The following features have been implemented in the Upload interface:
* The username of the user that uploaded a file is now shown in the
  ‘View Uploads’ table.

The following features have been implemented in the Reports interface:
* The title of a report now indicates if the ‘Include only records with
  Client Consent’ flag was checked when generating the report.

The following features have been implemented in the Data Extract interface:
* An ‘Associated Date Rules Explained’ link has been added to explain the
  ‘Include data without associated dates’ checkbox.

The following updates and bugfixes have been implemented in the Data Entry
interface:
* Fixed a bug whereby if you edited a record in such a way that an error was
  returned and then navigated back to the ‘View’ tab, you would see the
  edited, unsaved data, not the data that is actually stored in the PMHC MDS.
* Fixed a bug in the ‘Add New Client’ form whereby if the ‘The Client Key
  already exists.’ error has been shown, it would remain when the ‘Client Key’
  field had been cleared.
* Fixed a bug in the ‘Add New Service Contact’ form whereby an error relating
  to the ‘Postcode’ field would remain when the field had been cleared.
* Fixed a bug in the Client ‘Edit Details’ form where the ‘Save’ button would
  be active even when the SLK needed to the regenerated.
* Fixed a bug in the Episode ‘Details’ tab where the orange ‘Suicide Referral’
  bar was not being shown when the ‘Suicide Referral Flag’ was set to ‘Yes’.

The following updates and bugfixes have been implemented in the Users interface:
* Fixed a bug whereby an error relating to the ‘Mobile’ field would remain
  when the field had been cleared.

The following updates and bugfixes have been implemented in the Upload interface:
* Fixed a bug whereby the ‘Organisation’ field in the ‘Upload A File’ form
  was being sorted by organisation key, not organisation name.

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/).

#### PMHC MDS Data Specifications Update v1.0.12 ####

We are also pleased to announce that PMHC MDS Data Specifications Update
v1.0.12 was released on January 19, 2018. The following updates have been
implemented:

* [Data model and specifications](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html)

  * [Record formats](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#record-formats)

    * [Client](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#client-data-elements)

      * Updated [Client - Date of Birth](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#client-date-of-birth) to specify that the date of birth must
        not be before 1 January 1900.

    * [Episode](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-data-elements)

      * Updated [Episode - End Date](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-end-date) to specify that the episode end date must
        not be before 1 January 2016.
      * Updated [Episode - Referral Date](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-referral-date) to specify that the episode referral
        date must not be before 1 January 2014.

    * [Service Contact](
      https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-data-elements)

      * Updated [Service Contact - Date](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-date) to specify that the service contact
        date must not be before 1 January 2014.

    * [Outcome Collection Occasion](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#outcome-collection-occasion-data-elements)

      * Updated [Collection Occasion - Measure Date](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#collection-occasion-measure-date) to specify that the measure
        date must not be before 1 January 2016.
