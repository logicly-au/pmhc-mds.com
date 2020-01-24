---
title: Update to the PMHC MDS - 24/01/2020
---

#### PMHC MDS Update v0.33.2 ####

We are pleased to announce that PMHC MDS Update v0.33.2 was released on January 23, 2020.

The following features have been implemented in the data entry interface:
* The Department has informed PHN’s of the reporting arrangements associated
  with the Australian Government Mental Health Response to Bushfire Trauma.
  In order to support this the PMHC MDS has been updated to capture in-scope
  service activity by using the reserved Episode tag `!br20`. Please refer to
  [https://docs.pmhc-mds.com/projects/data-specification/en/v2/reserved-tags.html](https://docs.pmhc-mds.com/projects/data-specification/en/v2/reserved-tags.html){:target="_blank"}
  for full details of when and how to use this tag. Note that while PHN’s
  funded under the Response must report in-scope activity using this flag,
  all PHN’s *may* use the flag to do so.

The following features have been implemented in the reporting interface:
* A10 - Data Quality Report: Missing and invalid Referral Dates
* B6 - Client Outcomes

The following features have been implemented in the upload interface:
* A warning has been added to version 1 uploads to remind users that version
  1 will no longer  be supported after June 30, 2020.

The following bugfixes have been implemented in the data entry interface:
* The layout for viewing and editing SDQ subscales/totals has been redesigned
  to make it clearer that the Total Difficulties Score should be the sum of
  the Emotional Symptoms, Conduct Problem, Hyperactivity and Peer Problem scales.
* The SDQ Details page now shows the calculated subscale scores when item scores
  have been entered.

The following bugfixes have been implemented in the upload interface:
* Updated error messages when episode end dates clash with organisation start
  and end dates to make them clearer.

The following bugfixes have been implemented in the data extract interface:
* Data extracts will now include data for for all organisations that were
  active within the specified time range, even if an organisation is not active now.

The user guide has been updated to reflect these updates. It is available
at [https://docs.pmhc-mds.com/projects/user-documentation/en/latest/](https://docs.pmhc-mds.com/projects/user-documentation/en/latest/){:target="_blank"}.
