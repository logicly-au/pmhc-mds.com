---
title: PMHC MDS notification of planned change to K10+ scoring calculation
---

#### Notification of planned change to the K10+ scoring calculation ####

In the last week of October 2021, the PMHC MDS will be updated with a
changed K10+ scoring algorithm.

The PMHC MDS has been scoring the K10+ using the following algorithm:

The Total score is computed as the sum of the scores for items 1 to 10. If
any item has not been completed (that is, has not been coded 1, 2, 3, 4, 5),
it is excluded from the total with the proviso that a completed K10 with more
than one missing item is regarded as invalid.

Using this algorithm, a K10+ with one item missing and all other items scored
as 1 will be regarded as valid and have a total score of 9, however the K10+
Total Score is defined as being in the range 10-50.

To resolve this issue, the scoring for the K10+ will be changed to a
pro-rated approach so that the minimum total score is 10. The following
formula will be used:

Total score = round( sum of valid scores  / 9 * 10 )

For more information please refer to page 58 of AMHOCN’s Overview of
clinician-rated and consumer self-report measures at [https://www.amhocn.org/sites/default/files/publication_files/nocc_clinician_and_self-report_measures_overview_v2.1_20210913_1.pdf](https://www.amhocn.org/sites/default/files/publication_files/nocc_clinician_and_self-report_measures_overview_v2.1_20210913_1.pdf){:target="_blank"}

Uploads that provide both the item scores and the total score will need to be
updated to use the new algorithm. Alternatively, uploads could be updated to
provide item scores and a total score of 99. Where item scores are provided
with a total of 99 the PMHC MDS will calculate the total score.

Where item scores have been provided, existing data will be recalculated to
use the new scoring.
