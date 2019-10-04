---
title: Update to the PMHC MDS - 4/10/2019
---

#### PMHC MDS Update v0.32.3 ####

We are pleased to announce that PMHC MDS Update v0.32.3 was released on October 4, 2019.

The following reports have been updated to reflect changes to the specifications:
* A9 now uses the same (new) criteria for baseline episode inclusion as Out-1,
  Out-2 and Out-3

The following features have been implemented in the upload interface:
* The upload interface will now allow headspace head office to upload data to
  headspace provider organisations across all PHNs. This has been implemented
  using a feature that is being called ‘Provider Organisation Groups’ or POGs.
  In the current implementation, users at PHNs will not be able to view data
  in the headspace POG via the data entry interface or reports. In a future
  enhancement aggregated headspace data will be available to PHNs via reports

The following bugfixes have been implemented in the data entry interface:
* Collection Occasion scores and descriptions are now laid out consistently
  across different collection occasion types
* All forms now contain a description that an asterisk against a field means
  that the field is mandatory
* Fixed a bug where the error message ‘Episode - End Date should be after
  Episode - Referral Date’ was not being detected until after the Episode form
  had been submitted

The following bugfixes have been implemented in the upload interface:
* Fixed an error message ‘Organisations: Invalid organisation_start_date in
  row ...’ when a Organisations file or worksheet has not been uploaded
* Fixed a bug where worksheet names with leading or trailing spaces or where
  names of worksheets started with a lowercase letter were not being identified
* Fixed a bug where metadata files specifying version 1 were not returning a
  sensible error message

The user guide has been updated to reflect these updates. It is available
at [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}.
