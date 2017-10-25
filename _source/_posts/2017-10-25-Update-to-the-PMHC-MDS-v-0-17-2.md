---
title: Update to the PMHC MDS and Data Specifications - 25/10/2017
---

#### PMHC MDS Update v0.17.2 ####

We are pleased to announce that PMHC MDS Update v0.17.2 was released on
October 25, 2017.

The following feature have been implemented:

* Deletion of records via both the data entry interface and uploads.

The following updates and bugfixes have been implemented in the data entry
interface:

* Restricted the use of the ‘Complex Care Package’ Principal Focus of Treatment
  Plan to the three selected Lead PHNs
* Fixed an issue where the Suicide Referral icon was showing on episode
  summaries where the Suicide Referral Flag was set to ‘Unknown’
* Fixed an issue with the User Invite form where users could be invited to a
  Provider Organisation with the Organisation Management role. This role is
  restricted to PHN level.
* Added the Episode Key onto the Collection Occasion details/edit forms.
* Changed the sorting of Country of Birth and Main Language Spoken at Home so
  that the top ten languages/country of births as reported in the 2011 census
  are moved to the top of the list.
* The service contact postcode field is now prefilled with 9999 for all non
  Face to Face modalities.
* Fixed an bug where the “Unknown” option was not being given for Suicide
  Referral Flag.

The following updates and bugfixes have been implemented in the upload
interface:

* Fixed an error in uploads when there was no practitioners file.
* Restricted the use of the ‘Complex Care Package’ Principal Focus of Treatment
  Plan to the three selected Lead PHNs
* Improved the error message ‘Collection date must not be after Episode end
  date’ so that it includes information about the episode key and collection
  occasion key.
* Improved the error message ‘Client may not have multiple open episodes. This
  client has an existing open episode within this organisation’ so that it
  includes information about the client key and episode keys.
* Split the error message ‘Invalid episode_completion_status on row [x]. Where
  service contact - final is recorded as "No further services planned" the
  episode completion status should be recorded using one of the treatment
  concluded responses.’ so that one message is returned when an episode has
  a completion status but no end date and another error is returned when an
  episode has an end date but no completion status.
* Improved error messages like the following:

  * ...organisation_path / client_key value of "..." is invalid.
  * ...organisation_path / episode_key value of "..." is invalid.
  * ...organisation_path / practitioner_key value of "..." is invalid.

* Return a sensible error instead of “episode: new row for relation "episode"
  violates check constraint "end_after_referral" / Failing row contains (...).
* Return a sensible error instead of “client: new row for relation "client"
  violates check constraint "past_date" / Failing row contains (...).

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/).

#### Deleting records in the PMHC MDS ####

Deletion of:

* Clients
* Episodes
* Service Contacts
* Collection Occasions, and
* Practitioners

is now possible via both the data entry interface and uploads. Organisations
cannot be deleted. The upload specification has been updated to describe the
format for deleting records via uploads. It is available at [https://docs.pmhc-mds.com/data-specification/upload-specification.html#deleting-records](https://docs.pmhc-mds.com/data-specification/upload-specification.html#deleting-records).
File format changes to accommodate deletion are backwards compatible with the
current format.
