---
title: Update to the PMHC MDS - 08/12/2017
---

#### PMHC MDS Update v0.19.0 ####

We are pleased to announce that PMHC MDS Update v0.19.0 was released on
December 8, 2017.

The following features have been implemented:

* An uneditable, prepopulating Organisation Path field has been added to the
  Add Provider Organisation form so that users can see what the Organisation
  Path will be before saving the new Provider Organisation.
* In order to make data entry more efficient, errors for duplicate keys will
  now be shown when entering data into the key input field instead of after
  clicking save.
* Tables now show ‘Loading…’ when a page is waiting for data to load.

The following updates and bugfixes have been implemented in the data entry interface:

* Improved the order of organisations in the Data Extraction ‘Select Organisations’ drop down.
* Improved the order of organisations in the Upload ‘Organisation’ drop down.
* Fixed a bug where an error would be returned when viewing records with ‘/’ or `?` in the key.
* Fixed an error where if 0 was provided as an SDQ subscale the value was changed to 99.
* Fixed an error where ‘Showing results for “”’ would appear under the Client Search form.
* Fixed an error in the “Invite New User” form when inviting a user that already exists with the PMHC MDS.
* Fixed an error where clicking ‘Practitioners’ in the breadcrumbs would take you to the ‘Client’ tab.
* Fixed an error where new clients weren’t being added to the existing search results table.
* Fixed an error where updated client details were not being displayed after clicking save.
* Fixed an error where users with the User Management role were not seeing organisations under the Organisations tab.

The following updates and bugfixes have been implemented in the upload interface:

* SDQ subscales will now be validated against the supplied Total Difficulties Score.
* Fixed an error in uploads when trying to upload to an inactive organisation.
* Fixed an error in uploads when the organisation key was not consistent with the organisation path.
