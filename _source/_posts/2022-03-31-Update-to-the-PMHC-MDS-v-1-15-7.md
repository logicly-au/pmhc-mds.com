---
title: Update to the PMHC MDS - 31/3/2022
---

#### PMHC MDS Update v1.15.7 ####

We are pleased to announce that PMHC MDS Update v1.15.7 was released on
March 31, 2022.

The following new validation has been implemented:

* All entity key fields (Organisation Key, Practitioner Key, Client Key, etc)
  must start with a POSIX alphanumeric character (A-Za-z0-9)

  Some organisations have a small number of records that break this new
  rule by starting entity keys with one of the characters [#-.\`’+$”%_:] These
  will cause issues if the data is modified. Please contact
  support@pmhc-mds.com for assistance.



The user guides have been updated to reflect these updates. They are available
at [https://docs.pmhc-mds.com/](https://docs.pmhc-mds.com/){:target="_blank"}.
