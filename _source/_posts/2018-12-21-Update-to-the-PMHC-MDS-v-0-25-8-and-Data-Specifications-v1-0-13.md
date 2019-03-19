---
title: Update to the PMHC MDS and Data Specifications - 21/12/2018
---

#### PMHC MDS Update v0.25.8 ####

We are pleased to announce that PMHC MDS Update v0.25.8 was released on
December 21, 2018.

The following features have been implemented in the data entry interface:
* Added new response for Episode - Principal Focus of Treatment Plan: 8 - Psychosocial Support
* Added new response for Service Contact - Type: 9 - Psychosocial support
* Redefined Service Contact - Venue response 8 from ‘Aged care centre’ to ‘Residential aged care facility’
* Added new response to Service Contact - Venue: 12 - Aged care centre - non-residential
* Added two new responses for Practitioner - Category: 12 - Psychosocial Support Worker and 13 - Peer Support Worker

The following updates and bug fixes have been implemented in the data entry interface:
* Fixed a bug where an episode start date was not correctly reported

The following updates and bug fixes have been implemented in the upload interface:
* Fixed a bug where an error was not being correctly generated for ABNs that were 11 characters long but included whitespace
* Fixed a bug where an upload format of PMHC 1.0 was incorrectly being reported for non PMHC 1.0 uploads early in the upload process

The user guide has been updated to reflect these updates. It is available at [https://docs.pmhc-mds.com/user-documentation/](https://docs.pmhc-mds.com/user-documentation/){:target="_blank"}.

#### PMHC MDS Data Specifications Update v1.0.13 ####

We are also pleased to announce that PMHC MDS Data Specifications Update
v1.0.13 was released on December 21, 2018. The following updates have been
implemented:


* [Data model and specifications](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html){:target="_blank"}

  * [Record formats](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#record-formats){:target="_blank"}

    * [Episode](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-data-elements){:target="_blank"}

      * Updated  [Episode - Principal Focus of Treatment Plan](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#episode-principal-focus-of-treatment-plan){:target="_blank"} to add a new response:

        *  8 - Psychosocial Support

    * [Service Contact](
      https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-data-elements){:target="_blank"}

      * Updated [Updated Service Contact - Type](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-type){:target="_blank"} to add a new response:

        * 9 - Psychosocial support

      * Updated [Service Contact - Venue](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-venue){:target="_blank"} to redefine response 8 from ‘Aged care centre’ to ‘Residential aged care facility’

      * Updated [Service Contact - Venue](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#service-contact-venue){:target="_blank"} to add a new response:

        * 12 - Aged care centre - non-residential

    * [Practitioner](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#practitioner-data-elements){:target="_blank"}

      * Updated [Practitioner - Category](https://docs.pmhc-mds.com/data-specification/data-model-and-specifications.html#practitioner-category){:target="_blank"} to add two new responses:

        * 12 - Psychosocial Support Worker

        * 13 - Peer Support Worker
